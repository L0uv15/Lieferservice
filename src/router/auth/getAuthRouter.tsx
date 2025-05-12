import { Outlet, Route } from "react-router-dom";
import AuthPage from "../../pages/auth/AuthPage";
import { AUTH_FORM, AUTH_ROOT } from "./authRoutes";

export default function getAuthRouter(): React.JSX.Element {

    return (
        <Route path={AUTH_ROOT} element={<Outlet />}>
            <Route path={AUTH_FORM} element={<AuthPage />} />
        </Route>
    )
}