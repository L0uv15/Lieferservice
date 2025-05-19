import { ToastIntent, ToastProps, ToastTriggerChildProps } from "@fluentui/react-components";
import { ToastProperties } from "../components/toast/ToastProperties";

interface IToastable {
    useDispatchErrorToast(intent: ToastIntent, toast: ToastProperties): void
}

export default IToastable;