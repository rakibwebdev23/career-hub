import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider/UserProvider";
import logo from "../../../public/careerLogo.png";

const Header = () => {
    const { user, logOut } = useContext(UserContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log("User Logout successfully"))
            .catch(error => console.log(error));
    };

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-700 font-semibold underline"
                            : "hover:text-orange-500 transition duration-300"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/applied"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-700 font-semibold underline"
                            : "hover:text-orange-500 transition duration-300"
                    }
                >
                    Applied Jobs
                </NavLink>
            </li>
            {user ? (
                <li>
                    <button
                        onClick={handleLogOut}
                        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
                    >
                        Log Out
                    </button>
                </li>
            ) : (
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-700 font-semibold underline"
                                : "hover:text-orange-500 transition duration-300"
                        }
                    >
                        Login
                    </NavLink>
                </li>
            )}
            <li>
                <Link
                    to="/applied"
                    className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 px-4 py-2 rounded-md text-white hover:from-blue-700 hover:to-blue-500 hover:text-black font-semibold transition duration-300"
                >
                    Apply Now
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 my-2 max-w-screen-xl py-3 shadow-md rounded-md mx-auto">
            <div className="navbar-start">
                <NavLink to="/">
                    <img className="w-16" src={logo} alt="Career Hub Logo" />
                </NavLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-4 font-bold space-x-4">{links}</ul>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-10 p-3 shadow-lg bg-white rounded-md w-48 border border-gray-300"
                    >
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;