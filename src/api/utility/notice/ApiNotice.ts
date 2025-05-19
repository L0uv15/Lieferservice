import { ToastIntent } from "@fluentui/react-components";
import { ToastProperties } from "../../../components/toast/ToastProperties";
import useToastContext from "../../../context/toast/useToastContext";
import IToastable from "../../../interfaces/IToastable";

abstract class ApiNotice implements IToastable {

    public constructor() { };

    public useDispatchErrorToast(intent: ToastIntent, toast: ToastProperties): void {
        const { dispatchError, dispatchInfo, dispatchSuccess, dispatchWarning } = useToastContext();
        switch (intent) {
            case "error": return dispatchError({ ...toast });
            case "info": return dispatchInfo({ ...toast });
            case "success": return dispatchSuccess({ ...toast });
            case "warning": return dispatchWarning({ ...toast });
        }
    }
}

export default ApiNotice;