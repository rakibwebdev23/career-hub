import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider/UserProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {

    const {user, loading} = useContext(UserContext);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRouter;