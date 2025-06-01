import React from "react";
import { ToastProperties } from "../../../components/toast/ToastProperties";
import ApiErrorResult from "../result/ApiErrorResult";

class ApiError {

    private errorMessage: string;
    private errorTitle: string;
    private module: ApiErrorResult["module"];

    public constructor(module: ApiErrorResult["module"], errorTitle: string, errorMessage: string) {
        this.errorMessage = errorMessage;
        this.errorTitle = errorTitle;
        this.module = module;
    };

    public getErrorMessage(): string {
        return this.errorMessage;
    }

    public getErrorTitle(): string {
        return this.errorTitle;
    }

    public getError(): ApiErrorResult {
        return {
            errorMessage: this.errorMessage,
            errorTitle: this.errorTitle,
            module: this.module
        };
    }

    public useErrorToastProperties = (): ToastProperties => {
        return React.useMemo(() => {
            return {
                primaryContent: `${this.module} | ${this.errorMessage}`,
                title: this.errorTitle
            }
        }, [this.errorMessage, this.errorTitle, this.module])
    }
}

export default ApiError;