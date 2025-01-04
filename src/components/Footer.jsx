import logoImg from "../assets/logo.png"
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import SocialsLogin from "./SocialsLogin";

const Footer = () => {
    return (
        <footer className="footer bg-white text-black p-10">
            <hr />
            <aside>
                <img src={logoImg} alt="Main Brand Logo" className="lg:w-[400px] w-[200px]" />
                <p>
                    Dragon News Ltd.
                    <br />
                    &copy; 2004 - {new Date().getFullYear()} Few Rights Reserved.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Socials</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="sm:w-12 sm:h-12 w-8 h-8" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="sm:w-12 sm:h-12 w-8 h-8" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="sm:w-12 sm:h-12 w-8 h-8" />
                    </a>
                    <SocialsLogin/>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;