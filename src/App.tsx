import React from "react";
import AuthenticationContextProvider from "./context/authentication/AuthenticationContextProvider";
import QueryClientProvider from "./context/query/QueryContextProvider";
import AppRouter from "./router/AppRouter";
import ThemeContextProvider from "./context/theme/ThemeContextProvider";
import ToastContextProvider from "./context/toast/ToastContextProvider";

export default function App(): React.JSX.Element {

  return (
    <ThemeContextProvider>
      <ToastContextProvider>
        <QueryClientProvider>
          <AuthenticationContextProvider>
            <AppRouter />
          </AuthenticationContextProvider>
        </QueryClientProvider>
      </ToastContextProvider>
    </ThemeContextProvider>
  );
}