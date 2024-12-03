import { Helmet } from "react-helmet";
import HelmetShared from "../shared/HelmetShared/HelmetShared";

const Blogs = () => {
    return (
        <div>
            <HelmetShared helmetTitle="Blogs"></HelmetShared>
            <p>This is the blog pages</p>
        </div>
    );
};

export default Blogs;