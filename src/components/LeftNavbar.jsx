import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category));
    }, []);

    return (
        <div className="w-full">
            <h2 className="font-extrabold text-black text-2xl">All Categories</h2>
            <div className="sm:flex flex-col sm:gap-2 py-3 grid grid-cols-2 gap-4 w-full">
                {
                    categories.map(category =>
                        <NavLink
                            key={category.category_id}
                            className="btn text-base text-black bg-gray-300 border-none"
                            to={`/category/${category.category_id}`}
                        >
                            {category.category_name}
                        </NavLink>
                    )
                }
            </div>

        </div>
    );
};

export default LeftNavbar;