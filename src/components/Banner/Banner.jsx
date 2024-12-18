import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/friendly-ceo-desk.jpg"

const Banner = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center lg:mt-20 lg:mb-6 mb-8 lg:justify-between">
            <div className="text-left lg:w-1/2">
                <p className="lg:text-6xl text-4xl font-bold mb-4">One Step Closer <br /> <span className="text-orange-500">To</span> <br /> Your <span className=" text-blue-500">Dream Job</span> </p>
                <p className="text-justify hyphens-auto leading-relaxed text-black lg:text-lg">Career Hub is your go-to destination for innovative IT solutions. We specialize in software development, cloud computing, web and app development, and IT consulting. Our mission is to empower businesses with cutting-edge tools, streamlined processes, and tailored strategies to drive growth and success. At Career Hub, we turn technology into opportunities.</p>
                <div>
                    <Link to="/register"><button className="mt-6 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 hover:from-blue-700 hover:to-blue-500 hover:text-black px-8 py-4 pt-2 pb-2 rounded-md  text-white font-semibold sm:mb-8 sm:pt-2">Get Started</button></Link>
                </div>
            </div>
            <div className="lg:w-1/2">
                <img className="max-w-full rounded-md" src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;