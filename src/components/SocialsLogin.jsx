import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialsLogin = () => {
    return (
        <div>
            <h2 className="font-extrabold text-xl pb-3">Login With</h2>
            <div className="*:w-full space-y-2">
                <button className="btn btn-outline btn-info"><FaGoogle/> Login With Google</button>
                <button className="btn btn-outline"><FaGithub/>Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialsLogin;