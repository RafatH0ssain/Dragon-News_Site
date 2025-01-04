import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";
import { Link } from "react-router-dom";

const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0];
    return (
        <div className="sm:w-5/6 mx-auto">
            <header>
                <Header className="pb-5" />
            </header>
            <Navbar />
            <main className="mx-auto grid grid-cols-12 gap-">
                <section className="col-span-9">
                    <h2 className="font-bold text-3xl mb-3">Dragon News</h2>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt={news?.title}
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body gap-5">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link className="btn btn-info" to={`/category/${news?.category_id}`}>Back to Categories</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;