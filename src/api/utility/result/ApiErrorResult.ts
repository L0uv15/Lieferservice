type ApiErrorResult = {
    errorTitle: string,
    errorMessage: string,
    module: "client" | "cloud"
};

export default ApiErrorResult;