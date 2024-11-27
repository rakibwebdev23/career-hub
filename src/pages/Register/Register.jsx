import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider/UserProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Register = () => {

    const { createUser, googleLogin, githubLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
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
            <Helmet><title>Career Hub - SignUp</title></Helmet>
            <h2 className="text-4xl font-bold text-center mt-10">Please Sign Up</h2>
            <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo url" name="photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" name="password" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary font-bold text-lg">Sign Up</button>
                </div>
                <div className="text-center mt-4">
                    <Link to="/login"><button onClick={handleGoogleLogin} className="btn border border-gray-400 w-full">
                        <FaGoogle className="text-primary font-bold text-2xl"></FaGoogle>
                        Google Sign Up
                    </button></Link>
                </div>
                <div className="text-center mt-2">
                    <Link to="/login"><button onClick={handleGithubLogin} className="btn border border-gray-400 w-full">
                        <FaGithub className="text-2xl font-bold"></FaGithub>
                        GitHub Sign Up
                    </button></Link>
                </div>
            </form>
            <div className="text-center mb-2">
                <p>Do you have an account ? Please <Link className="text-blue-600 text-lg hover:underline hover:underline-offset-2 font-bold" to="/login">Login</Link></p>
            </div>

        </div>
    );
};

export default Register;