import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FindUsOn = () => {
    return (
        <div>
            <h2 className="font-extrabold text-xl pb-3">Find Us On</h2>
            <div className="*:w-full space-y-2 *:justify-start *:bg-base-200">
                <button className="btn"><FaFacebook/>Facebook</button>
                <button className="btn"><FaTwitter/>Twitter</button>
                <button className="btn"><FaInstagram/>Instagram</button>
            </div>
        </div>
    );
};

export default FindUsOn;