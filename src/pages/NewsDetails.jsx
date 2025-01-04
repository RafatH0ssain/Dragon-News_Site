import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";
import { Link } from "react-router-dom";

const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0];
    return (
        <div className="sm:w-5/6 w-full mx-auto">
            <header>
                <Header className="pb-5" />
            </header>
            <Navbar />
            <main className="mx-auto gap-3">
                <section className="w-full">
                    <h2 className="font-bold text-2xl m-3 underline">Article:</h2>
                    <div className="card bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt={news?.title}
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body gap-5">
                            <h2 className="card-title text-3xl font-bold">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link className="btn bg-blue-500" to={`/category/${news?.category_id}`}>Back to Categories</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;