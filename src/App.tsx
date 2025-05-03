import React from "react";
import AuthenticationContextProvider from "./context/authentication/AuthenticationContextProvider";
import QueryClientProvider from "./context/query/QueryContextProvider";
import AppRouter from "./router/AppRouter";

export default function App(): React.JSX.Element {

  return (
    <QueryClientProvider>
      <AuthenticationContextProvider>
        <AppRouter />
      </AuthenticationContextProvider>
    </QueryClientProvider>
  );
}