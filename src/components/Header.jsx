import moment from "moment";
import logoIMg from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 pt-10">
            <div className="logo text-center">
                <img src={logoIMg} alt="Main Brand Logo" className="lg:w-[700px] w-[400px]"/>
                <h1 className="text-gray-500 sm:text-3xl text-2xl font-semibold pt-2">Journalism Done Right</h1>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
        );
};

export default Header;