import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/LeftNavbar";
import RightNavbar from "../components/RightNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

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
            <main className="w-11/12 mx-auto pt-5 sm:grid sm:grid-cols-12 justify-end gap-3">
                <aside className="sm:col-span-3 col-span-6"><LeftNavbar /></aside>
                <section className="col-span-6 top-0"><Outlet /></section>
                <aside className="sm:col-span-3"><RightNavbar /></aside>
            </main>
            <Footer/>
        </div>
    );
};

export default HomeLayout;