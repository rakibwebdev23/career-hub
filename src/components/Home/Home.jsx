import Banner from "../Banner/Banner";
import FeaturedJobBanner from "../FeaturedJobBanner/FeaturedJobBanner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import Loader from "../Loader/Loader";
import HelmetShared from "../shared/HelmetShared/HelmetShared";

const Home = () => {
    return (
        <div>
            <HelmetShared helmetTitle="Home"></HelmetShared>
            <Loader></Loader>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobBanner></FeaturedJobBanner>
            <FeaturedJobs></FeaturedJobs>            
        </div>
    );
};

export default Home;