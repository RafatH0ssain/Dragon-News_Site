import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import React, { useState } from 'react';

const NewsCard = ({ news }) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const shareUrl = "https://www.linkedin.com/in/muhammad-rafat-hossain/";

    const handleShareClick = () => {
        navigator.clipboard.writeText(shareUrl) // Copy the URL to clipboard
            .then(() => {
                setCopySuccess(true); // Show the confirmation message
                setTimeout(() => setCopySuccess(false), 2000);
            })
            .catch((error) => {
                console.error('Failed to copy: ', error);
            });
    };

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex flex-row justify-between">
                    <div className="flex gap-4">
                        <img src={news.author.img} alt={news.author.name} className="w-20 rounded-full" />
                        <div className="flex flex-col">
                            <h2 className="text-black font-bold text-xl">{news.author.name}</h2>
                            <h3>{news.author.published_date}</h3>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            {/* The clickable button/icon */}
                            <Link onClick={handleShareClick} style={{ cursor: 'pointer' }}>
                                <CiShare2 size={30} />
                            </Link>
                            {copySuccess && (
                                <div
                                    style={{
                                        position: 'fixed',
                                        bottom: '20px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'rgba(0, 0, 0, 0.7)',
                                        color: 'white',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        zIndex: '1000',
                                    }}
                                >
                                    Link copied!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <h2 className="card-title">{news.title}</h2>
            </div>
            <figure>
                <img src={news.image_url} alt={news.title} className="w-11/12 mx-auto" />
            </figure>
            <div className="card-body">
                <p className="text-gray-700 text-sm mb-4">{news.details.slice(0, 150)}...{" "}
                    <Link className="text-gray-400" to={`/news/${news._id}`}>Read More</Link>
                </p>
                <div className="justify-between flex-row flex">
                    <div className="flex flex-row items-center">
                        {[...Array(5)].map((_, i) => (
                            <AiFillStar
                                key={i}
                                className={`text-yellow-500 ${i < Math.round(news.rating.number) ? "" :
                                    "opacity-50"
                                    }`}
                            />
                        ))}
                        <p>{news.rating.number}</p>
                    </div>
                    <div className="flex items-center justify-between w-16">
                        <div><FaEye /></div>
                        <p>{news.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;