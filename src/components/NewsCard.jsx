import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex flex-row justify-between">
                    <div className="flex gap-4">
                        <img src={news.author.img} alt={news.author.name} className="w-20 rounded-full"/>
                        <div className="flex flex-col">
                            <h2 className="text-black font-bold text-xl">{news.author.name}</h2>
                            <h3>{news.author.published_date}</h3>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Link><CiBookmark/></Link>
                        <Link><CiShare2/></Link>
                    </div>
                </div>
                <h2 className="card-title">{news.title}</h2>
            </div>
            <figure>
                <img src={news.image_url} alt={news.title} />
            </figure>
            <div className="card-body">
                <p>{news.details}</p>
                <div className="justify-between flex-row flex">
                    <div className="flex flex-row">
                        {[...Array(5)].map((_, i) => (
                            <AiFillStar
                                key = {i}
                                className={`text-yellow-500 ${
                                    i < Math.round(news.rating.number) ? "" :
                                    "opacity-50"
                                }`}
                            />
                        ))}
                        <p>{news.rating.number}</p>
                    </div>
                    <div className="flex">
                        <FaEye/>
                        <p>{news.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;