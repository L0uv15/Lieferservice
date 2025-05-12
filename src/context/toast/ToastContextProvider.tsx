import { Toaster, useId, useToastController } from "@fluentui/react-components";
import React from "react";
import Toast from "../../components/toast/Toast";
import { ToastContext, toastContext } from "./ToastContext";


//TODO: Alles, was derzeit mit Toasts zusammenhängt, könnte vertieft und ausgebaut werden. Ist etwas unreif, trotzdem nicht zu priorisieren.
export default function ToastContextProvider(properties: React.PropsWithChildren): React.JSX.Element {

    const toasterId = useId("app-toaster");

    const { dispatchToast } = useToastController(toasterId);

    const dispatchError: ToastContext["dispatchError"] = ({ primaryContent, title }) => dispatchToast(<Toast title={title ?? "Hoppla..."} primaryContent={primaryContent} />, { intent: "error" });
    const dispatchInfo: ToastContext["dispatchInfo"] = ({ primaryContent, title }) => dispatchToast(<Toast title={title ?? "Info"} primaryContent={primaryContent} />, { intent: "info" });
    const dispatchSuccess: ToastContext["dispatchSuccess"] = ({ primaryContent, title }) => dispatchToast(<Toast title={title ?? "Das hat geklappt!"} primaryContent={primaryContent} />, { intent: "success" });
    const dispatchWarning: ToastContext["dispatchWarning"] = ({ primaryContent, title }) => dispatchToast(<Toast title={title ?? "Achtung!"} primaryContent={primaryContent} />, { intent: "warning" });

    const value = {
        dispatchError,
        dispatchInfo,
        dispatchWarning,
        dispatchSuccess,
    };

    return (
        <toastContext.Provider value={value}>
            <Toaster
                toasterId={toasterId}
                position="top-start"
                pauseOnHover
                pauseOnWindowBlur
                timeout={2000}
                limit={3}
            />
            {properties.children}
        </toastContext.Provider>
    )
}