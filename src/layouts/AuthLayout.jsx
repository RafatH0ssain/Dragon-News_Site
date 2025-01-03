import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="p-5 font-poppins bg-gray-300">
            <div className="bg-gray-300 my-10">
                <Link to="/" className="font-extrabold px-6 py-3 text-3xl rounded-xl">Home</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default AuthLayout;