import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider/UserProvider";
import logo from "../../../public/careerLogo.png"

const Header = () => {

    const { user, logOut } = useContext(UserContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("User Logout successfully");
            })
            .catch(error => {
                console.log(error);
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/applied">Applied Jobs</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <>

            {
                user ?
                    <li><Link><button onClick={handleLogOut}>LogOut</button></Link></li> :
                    <li><NavLink to="/login">Login</NavLink></li>
            }
        </>
    </>
    return (
        <div className="navbar bg-base-100 my-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center">
                    <NavLink to="/"><img className="w-20" src={logo} alt="" /></NavLink>
                    <p className="text-2xl font-bold text-blue-600">Career Hub</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold max-w-full">
                    {links}

                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/applied" className="bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-700 hover:to-blue-400 px-4 py-4 pt-2 pb-2 rounded-md text-xl text-white font-semibold">Apply Now</Link>
            </div>
        </div>
    );
};

export default Header;