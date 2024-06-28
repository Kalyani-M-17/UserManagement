import { Navigate,Outlet } from "react-router-dom";

function OnlyVerifiedRoutes() {
    const token = localStorage.getItem("email_verified");
    return <div> {token ? <Outlet /> : <Navigate to={"/verify"} />} </div>;
}

export default OnlyVerifiedRoutes;