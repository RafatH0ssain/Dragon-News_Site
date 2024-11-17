import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/LeftNavbar";
import RightNavbar from "../components/RightNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header />
                <section className="w-11/12 mx-auto pt-5">
                    <LatestNews />
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-3">
                <Navbar />
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                <aside className="left col-span-3"><LeftNavbar/></aside>
                <section className="col-span-6"><Outlet/></section>
                <aside className="col-span-3"><RightNavbar/></aside>
            </main>
        </div>
    );
};

export default HomeLayout;