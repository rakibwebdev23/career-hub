import logo from "../../../public/careerLogo.png"
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content mt-10">
                <div className="footer max-w-6xl mx-auto">
                    <aside>
                        <img className="w-20" src={logo} alt="" />
                        <p className="font-semibold text-xl">Career Hub<br />Providing reliable tech since 1992</p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
            <aside className="text-center bg-gray-200 font-bold py-4">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Career Hub</p>
            </aside>
        </div>
    );
};

export default Footer;