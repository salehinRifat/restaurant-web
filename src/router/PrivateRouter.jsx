import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";


const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h1>Loading</h1>
    }
    if (user) {
        return children;
    } else {
        <Navigate to={'/login'} state={{ from: location }} replace ></ Navigate>
    }

};

export default PrivateRouter;