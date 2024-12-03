import { Link } from "react-router-dom";
import HelmetShared from "../shared/HelmetShared/HelmetShared";

const ErrorPage = () => {
    return (
        <div>
            <HelmetShared helmetTitle="Error"></HelmetShared>
            <div className="text-center mt-60">
                <p className="text-2xl font-bold">Oops!!</p>
                <p className="mt-2 text-xl text-gray-600">404</p>
                <p className="text-xl p-2">Not Found</p>
                <Link to='/'><button className="btn btn-outline btn-neutral font-bold mt-2">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;