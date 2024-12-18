import logo from "../../../public/careerLogo.png";

const Footer = () => {
    return (
        <div>
            <footer className="bg-blue-900 text-white py-12">
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <aside className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                        <img className="w-24 md:w-32 mb-4" src={logo} alt="Career Hub Logo" />
                        <p className="text-xl font-semibold text-center sm:text-left">
                            CAREER HUB
                            <br />
                            <span className="text-sm font-normal">Providing reliable tech since 1992</span>
                        </p>
                    </aside>
                    <nav>
                        <h6 className="text-lg font-semibold mb-4 text-gray-300">Services</h6>
                        <ul>
                            <li><a className="block hover:text-gray-400">Branding</a></li>
                            <li><a className="block hover:text-gray-400">Design</a></li>
                            <li><a className="block hover:text-gray-400">Marketing</a></li>
                            <li><a className="block hover:text-gray-400">Advertisement</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <h6 className="text-lg font-semibold mb-4 text-gray-300">Company</h6>
                        <ul>
                            <li><a className="block hover:text-gray-400">About Us</a></li>
                            <li><a className="block hover:text-gray-400">Contact</a></li>
                            <li><a className="block hover:text-gray-400">Jobs</a></li>
                            <li><a className="block hover:text-gray-400">Press Kit</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <h6 className="text-lg font-semibold mb-4 text-gray-300">Legal</h6>
                        <ul>
                            <li><a className="block hover:text-gray-400">Terms of Use</a></li>
                            <li><a className="block hover:text-gray-400">Privacy Policy</a></li>
                            <li><a className="block hover:text-gray-400">Cookie Policy</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
            <aside className="bg-blue-800 text-center py-6 text-gray-900 font-bold">
                <p>&copy; {new Date().getFullYear()} - All rights reserved by Career Hub</p>
            </aside>
        </div>
    );
};

export default Footer;