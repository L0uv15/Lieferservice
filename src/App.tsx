import React from "react";
import AuthenticationContextProvider from "./context/authentication/AuthenticationContextProvider";
import QueryContextProvider from "./context/query/QueryContextProvider";
import AppRouter from "./router/AppRouter";

export default function App(): React.JSX.Element {

  return (
    <QueryContextProvider>
      <AuthenticationContextProvider>
        <AppRouter />
      </AuthenticationContextProvider>
    </QueryContextProvider>
  );
}