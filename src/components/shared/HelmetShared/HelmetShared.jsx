import { Helmet } from "react-helmet";

const HelmetShared = ({helmetTitle}) => {
    return (
        
            <Helmet>Career Hub - { helmetTitle}</Helmet>
        
    );
};

export default HelmetShared;