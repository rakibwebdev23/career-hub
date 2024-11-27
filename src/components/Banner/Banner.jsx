import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/friendly-ceo-desk.jpg"

const Banner = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-6 items-center lg:mt-20 lg:mb-6 mb-8">
            <div className="text-wrap lg:w-1/2 px-4 lg:px-8 mt-6 lg:mt-0">
                <p className="lg:text-6xl text-4xl font-bold mb-4">One Step Closer <br /> <span className="text-orange-500">To</span> <br /> Your <span className=" text-blue-500">Dream Job</span> </p>
                <p className="lg:text-xl text-justify leading-relaxed text-black">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <div>
                    <Link to="/register"><button className="mt-6 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 px-4 py-4 pt-2 pb-2 rounded-md text-xl text-white font-semibold sm:mb-8 sm:pt-2">Get Started</button></Link>
                </div>
            </div>
            <div className="lg:w-1/2 px-4 lg:px-8">
                <img className="max-w-full rounded-md" src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;