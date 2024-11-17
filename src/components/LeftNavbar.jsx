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
        <div>
            <h2 className="font-extrabold text-xl">All Categories</h2>
            <div className="flex flex-col gap-2 py-3">
                {
                    categories.map(category => 
                        <NavLink key={category.category_id} className="btn bg-base-200" to={`/category/${category.category_id}`}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;