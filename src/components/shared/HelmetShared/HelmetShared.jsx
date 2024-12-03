import { Helmet } from "react-helmet";

const HelmetShared = ({helmetTitle}) => {
    return (
        <div>
            <Helmet><title>Tech Hub - { helmetTitle}</title></Helmet>
        </div>
    );
};

export default HelmetShared;