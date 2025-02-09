import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

  // const token = localStorage.getItem("token");
  const token = true;


  return token ? <Outlet /> : <Navigate to="/auth/login" />;


}

export default PrivateRoute
