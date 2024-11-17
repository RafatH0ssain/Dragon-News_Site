import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-300 p-2">
            <p className="bg-red-800 text-base-100 px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true}>
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias at dolores error voluptatibus, dolorum inventore nihil nobis itaque eos sequi!
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;