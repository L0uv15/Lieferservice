import React from "react";
import AuthenticationContextProvider from "./context/authentication/AuthenticationContextProvider";
import QueryClientProvider from "./context/query/QueryContextProvider";
import AppRouter from "./router/AppRouter";
import ThemeContextProvider from "./context/theme/ThemeContextProvider";

export default function App(): React.JSX.Element {

  return (
    <ThemeContextProvider>
      <QueryClientProvider>
        <AuthenticationContextProvider>
          <AppRouter />
        </AuthenticationContextProvider>
      </QueryClientProvider>
    </ThemeContextProvider>
  );
}