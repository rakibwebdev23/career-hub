import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/friendly-ceo-desk.jpg"

const Banner = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center lg:mt-20 lg:mb-6 mb-8 px-2">
            <div className="text-justify lg:w-1/2">
                <p className="lg:text-6xl text-4xl font-bold mb-4">One Step Closer <br /> <span className="text-orange-500">To</span> <br /> Your <span className=" text-blue-500">Dream Job</span> </p>
                <p className="lg:text-xl text-justify leading-relaxed text-black">Tech Hub is your go-to destination for innovative IT solutions. We specialize in software development, cloud computing, web and app development, and IT consulting. Our mission is to empower businesses with cutting-edge tools, streamlined processes, and tailored strategies to drive growth and success. At Tech Hub, we turn technology into opportunities.</p>
                <div>
                    <Link to="/register"><button className="mt-6 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 px-4 py-4 pt-2 pb-2 rounded-md text-xl text-white font-semibold sm:mb-8 sm:pt-2">Get Started</button></Link>
                </div>
            </div>
            <div className="lg:w-1/2">
                <img className="max-w-full rounded-md" src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;