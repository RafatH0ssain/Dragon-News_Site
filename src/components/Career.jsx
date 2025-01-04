import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Career = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Career Section */}
                <section className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Journey</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Welcome to the <span className="font-semibold text-blue-600">Dragon News</span> career timeline. Our company has grown rapidly since its inception, with milestones that highlight our success and commitment to delivering exceptional news coverage. Below, we walk through some of the pivotal moments in our journey.
                    </p>
                </section>

                {/* Timeline Section */}
                <section className="mb-12">
                    <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-start timeline-box bg-white">
                                <span className="font-bold text-xl">Launch of Dragon News</span>
                                <p className="text-gray-600">We started with a mission to provide trustworthy and timely news to readers across the globe. Our platform quickly gained traction due to our commitment to truth and transparency.</p>
                            </div>
                            <hr className="bg-black"/>
                        </li>
                        <li>
                            <hr className="bg-black"/>
                            <div className="timeline-end timeline-box bg-white">
                                <span className="font-bold text-xl">First Major Award</span>
                                <p className="text-gray-600">In our second year, Dragon News won its first award for journalistic excellence, setting us on a path of continual recognition in the media industry.</p>
                            </div>
                            <hr className="bg-black"/>
                        </li>
                        <li>
                            <hr className="bg-black"/>
                            <div className="timeline-start timeline-box bg-white">
                                <span className="font-bold text-xl">Expansion to Global Markets</span>
                                <p className="text-gray-600">We expanded our reach to international audiences, launching multilingual content and partnering with global news outlets to bring broader perspectives to our readers.</p>
                            </div>
                            <hr className="bg-black"/>
                        </li>
                        <li>
                            <hr className="bg-black"/>
                            <div className="timeline-end timeline-box bg-white">
                                <span className="font-bold text-xl">Launch of Mobile App</span>
                                <p className="text-gray-600">To keep up with the fast-paced news cycle, we introduced the Dragon News mobile app, providing instant news updates to our users worldwide.</p>
                            </div>
                            <hr className="bg-black"/>
                        </li>
                        <li>
                            <hr className="bg-black"/>
                            <div className="timeline-start timeline-box bg-white">
                                <span className="font-bold text-xl">First Million Users</span>
                                <p className="text-gray-600">Dragon News achieved the remarkable milestone of one million active users, showing the growing demand for credible news and our strong community of engaged readers.</p>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Conclusion Section */}
                <section className="text-center mt-12">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Join Our Journey</h3>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        As we continue to grow and evolve, Dragon News is always on the lookout for passionate individuals who share our vision for the future of journalism. If you're ready to make an impact and help shape the future of news, we invite you to explore our career opportunities and join our dedicated team.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Career;