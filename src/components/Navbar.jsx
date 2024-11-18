import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/career">Career</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/career">Career</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div className="navbar-end login">
                {
                    user && user?.email ?
                        <div className="px-5">
                            <img src={user.photoURL} alt={user.name} className="w-10 h-10 rounded-full"/>
                            <p>{user.displayName}</p>
                        </div> :
                        <img src={userIcon} alt="Dummy User Picture" className="px-4" />
                }
                {user && user?.email ? (
                    <button onClick={logOut} className="btn btn-neutral rounded-none">Log Out</button>
                ) : (
                    <Link to="/auth/login" className="btn btn-neutral rounded-xl">Login</Link>
                )}
            </div>
        </div >
    );
};

export default Navbar;