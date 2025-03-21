import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    const userStoredString = localStorage.getItem('userData');
    let user = { etalentid: false }; // Default value

    if (userStoredString) {
        try {
            user = JSON.parse(userStoredString);
        } catch (error) {
            console.error('Error parsing user data:', error);
        }
    }

    const location = useLocation();

    if (!token) {
        return <Navigate to="/auth/login" />;
    }

    if (!user?.etalentid && location.pathname !== "/portal/profile/add") {
        return <Navigate to="/portal/profile/add" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
