import { Outlet } from "react-router-dom";
import { getToken } from "../Auth/HandleJWT";
import NotFound from "../component/NotFound";

const useAuth = () => {
    const loggedIn = getToken();
    const user = loggedIn?.role
    return user;
}

export default function ProtectedRoutes() {
    const isAuth = useAuth();
    return (
        isAuth === "Admin" ? <Outlet /> : <NotFound />
    )
}
