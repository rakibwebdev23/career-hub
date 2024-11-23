import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner.jsx";
import FeaturedJobBanner from "../FeaturedJobBanner/FeaturedJobBanner.jsx";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs.jsx";
import JobCategoryList from "../JobCategoryList/JobCategoryList.jsx";
import Loader from "../Loader/Loader.jsx";

const Home = () => {
    return (
        <div>
            <Helmet><title>Career Hub - Home</title></Helmet>
            <Loader></Loader>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobBanner></FeaturedJobBanner>
            <FeaturedJobs></FeaturedJobs>            
        </div>
    );
};

export default Home;