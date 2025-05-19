import { ToastProperties } from "../../../components/toast/ToastProperties";
import ApiNotice from "../notice/ApiNotice";
import ApiError from "./ApiError";

class ClientApiError extends ApiNotice {

    public errorMessage: string;
    public errorTitle: string;

    public constructor(errorMessage: string, errorTitle: string) {
        super();
        this.errorMessage = errorMessage;
        this.errorTitle = errorTitle;
    };

    public getErrorMessage(): string {
        return this.errorMessage;
    }

    public getErrorTitle(): string {
        return this.errorTitle;
    }

    public getError(): ApiError {
        return {
            errorMessage: this.errorMessage,
            errorTitle: this.errorTitle
        };
    }

    public useDispatchErrorToast(): void {
        const toast = this.generateToast({ primaryContent: this.errorMessage, title: this.errorTitle });
        super.useDispatchErrorToast("error", toast);
    }

    private generateToast(args: ToastProperties): ToastProperties {
        return { ...args };
    }
}

export default ClientApiError;