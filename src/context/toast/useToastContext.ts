import React from "react";
import { ToastContext, toastContext } from "./ToastContext";

export default function useToastContext(): ToastContext {
    const context = React.useContext(toastContext);
    if (context === null) throw new Error("86925133-b037-4a22-8b38-225a93c4167b");
    return context;
}