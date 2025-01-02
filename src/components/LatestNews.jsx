import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-300 p-2">
            <p className="bg-red-800 text-base-100 px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} className="bg-base-300">
                <Link to="/news" className="bg-base-300">
                Breaking News: Mysterious Lights Illuminate Night Sky Over Downtown
                Residents of downtown were left baffled last night as strange, pulsating lights appeared in the sky. Eyewitnesses report colors shifting from green to blue, with a low hum echoing across the city. Authorities are investigating, though no official explanation has been given. Stay tuned for updates.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;