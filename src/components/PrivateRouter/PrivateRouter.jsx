import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider/UserProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {

    const {user, loading} = useContext(UserContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRouter;