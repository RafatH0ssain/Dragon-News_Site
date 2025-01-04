import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* About Section */}
                <section className="text-center bg-white mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Dragon News</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Welcome to <span className="font-semibold text-blue-600">Dragon News</span>, your trusted source for real-time updates, in-depth analysis, and breaking news from around the world. Our team of passionate journalists and reporters are committed to delivering accurate, unbiased, and timely news across a wide range of topics including politics, technology, entertainment, sports, and much more.
                    </p>
                </section>

                {/* Mission Section */}
                <section className=" bg-white 0 py-10">
                    <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Mission</h3>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
                        At Dragon News, we believe in the power of informed citizens. Our mission is to empower you with knowledge, giving you access to stories that matter most and encouraging meaningful conversations. Whether you're at home, at work, or on the go, we’re here to keep you informed with news that shapes the world.
                    </p>
                </section>

                {/* Vision Section */}
                <section className="py-12">
                    <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Vision</h3>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
                        Our vision is to build a world where news is accessible, reliable, and free of misinformation. We aim to be a beacon of truth in a time where fake news and misinformation are rampant. Through transparency, integrity, and commitment, we strive to earn the trust of our readers every day.
                    </p>
                </section>

                {/* Stats Section */}
                <section className="my-12">
                    <div className="sm:stats shadow-2xl sm:flex justify-center sm:space-x-8">
                        {/* Daily Visitors */}
                        <div className="stat place-items-center">
                            <div className="stat-title">Daily Visitors</div>
                            <div className="stat-value">25,000</div>
                            <div className="stat-desc">Average visits per day</div>
                        </div>

                        {/* Articles Published */}
                        <div className="stat place-items-center">
                            <div className="stat-title">Articles Published</div>
                            <div className="stat-value">12,500</div>
                            <div className="stat-desc">Total articles published</div>
                        </div>

                        {/* Total Subscribers */}
                        <div className="stat place-items-center">
                            <div className="stat-title">Total Subscribers</div>
                            <div className="stat-value text-primary">12,000</div>
                            <div className="stat-desc text-primary">↗︎ 210 (2%)</div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default About;