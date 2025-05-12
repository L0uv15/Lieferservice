import { Outlet, Route } from "react-router-dom";
import { HOME_BASE, HOME_ROOT } from "./homeRoutes";
import HomePage from "../../../pages/home/HomePage";

export default function getHomeRouter(): React.JSX.Element {

    return (
        <Route path={HOME_ROOT} element={<Outlet />}>
            <Route path={HOME_BASE} element={<HomePage />} />
        </Route>
    )
}