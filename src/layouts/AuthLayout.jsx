import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="p-5 font-poppins bg-gray-300">
            <header className="*:bg-inherit">
                <Navbar/>
            </header>
            <Outlet />
        </div>
    );
};

export default AuthLayout;