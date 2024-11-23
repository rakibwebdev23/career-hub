import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider/UserProvider";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Helmet } from "react-helmet";

const Login = () => {

    const { userLogin, googleLogin, githubLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        userLogin(email, password)
            .then(result => {
                e.target.reset();
                if (result.user) {
                    navigate("/");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    // google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                if (result.user) {
                    navigate("/");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                if (result.user) {
                    navigate("/");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Helmet><title>Career Hub - Login</title></Helmet>
            <div className="items-center mt-10">
                <h3 className="text-4xl font-bold text-center">Please Login</h3>
                <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                    </div>
                    <div className="form-control mt-6">

                        <button className="btn btn-primary text-lg font-bold">Login</button>

                    </div>
                </form>
                <div className="text-center">
                    <p>Do not have an account ? Please <Link to="/register" className="text-blue-600 text-lg hover:underline hover:underline-offset-2 font-bold">Sign Up</Link></p>
                </div>

                <div className="text-center mt-2">
                    <Link to="/"> <button onClick={handleGoogleLogin} className="btn border border-gray-400 lg:w-1/2 md:w-3/4">
                        <FaGoogle className="text-2xl font-bold text-blue-600"></FaGoogle>
                        Google Login
                    </button></Link>
                </div>
                <div className="text-center mt-2">
                    <Link to="/"><button onClick={handleGithubLogin} className="btn border border-gray-400 lg:w-1/2 md:w-3/4">
                        <FaGithub className="font-bold text-2xl"></FaGithub>
                        GitHub Login
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;