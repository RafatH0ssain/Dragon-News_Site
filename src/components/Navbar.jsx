import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100">
            <div className="lg:flex w-full justify-between">
                {/* Dropdown for small screens (sm and below) */}
                <div className="dropdown sm:hidden">
                    <label tabIndex={0} className="btn btn-ghost font-extrabold text-xl">V</label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/career">Career</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="flex sm:w-full justify-between">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        <li><Link to="/" className="btn lg:w-24 text-xl m-2">Home</Link></li>
                        <hr />
                        <li><Link to="/career" className="btn lg:w-24 text-xl m-2">Career</Link></li>
                        <hr />
                        <li><Link to="/about" className="btn lg:w-24 text-xl m-2">About</Link></li>
                    </ul>
                    <div className="flex sm:pr-7 justify-between items-center">
                        {
                            user && user?.email ?
                                <div className="px-5 flex items-center">
                                    <img src={user.photoURL} alt={user.name} className="w-10 h-10 rounded-full" />
                                    <p className="ml-2">{user.displayName}</p>
                                </div> :
                                <img src={userIcon} alt="Dummy User Picture" className="px-4" />
                        }


                        {user && user?.email ? (
                            <button onClick={logOut} className="btn btn-neutral rounded-none">Log Out</button>
                        ) : (
                            <Link to="/auth/login" className="btn btn-neutral rounded-xl">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;