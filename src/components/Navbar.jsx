import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaFontAwesome } from "react-icons/fa";
import listIcon from "../assets/list.png";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="lg:flex w-full justify-between">
                <div className="dropdown sm:hidden">
                    <img src={listIcon} tabIndex={0} className="btn btn-ghost font-extrabold text-xl"/>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow">
                        <li><Link to="/" className="text-base py-1 font-semibold border-none bg-gray-200">Home</Link></li>
                        <li><Link to="/career" className="text-base py-1 font-semibold border-none bg-gray-200">Career</Link></li>
                        <li><Link to="/about" className="text-base py-1 font-semibold border-none bg-gray-200">About</Link></li>
                    </ul>
                </div>
                <div className="flex w-full sm:justify-between justify-end">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        <li><Link to="/" className="btn lg:w-24 text-xl m-2 border-none bg-gray-200 text-black">Home</Link></li>
                        <hr />
                        <li><Link to="/career" className="btn lg:w-24 text-xl m-2 border-none bg-gray-200 text-black">Career</Link></li>
                        <hr />
                        <li><Link to="/about" className="btn lg:w-24 text-xl m-2 border-none bg-gray-200 text-black">About</Link></li>
                    </ul>
                    <div className="flex sm:pr-7 justify-between items-center">
                        {
                            user && user?.email ?
                                <div className="px-5 items-center flex">
                                    <img src={user.photoURL} alt={user.name} className="w-10 h-10 rounded-full" />
                                    <p className="ml-2">{user.displayName}</p>
                                </div> :
                                <img src={userIcon} alt="Dummy User Picture" className="px-4" />
                        }


                        {user && user?.email ? (
                            <button onClick={logOut} className="btn bg-red-700 rounded-2xl sm:w-24 w-18 border-none sm:text-base text-xs text-black">Log Out</button>
                        ) : (
                            <Link to="/auth/login" className="btn btn-neutral bg-white border-4 rounded-xl text-black">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;