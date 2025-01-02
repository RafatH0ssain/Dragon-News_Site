import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <div className="flex flex-col gap-2 py-3">
                {
                    data.map((singleNews) =>  <NewsCard key={singleNews._id} news={singleNews}/>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;