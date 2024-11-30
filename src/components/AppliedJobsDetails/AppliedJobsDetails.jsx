import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const AppliedJobsDetails = ({ job }) => {
    const { company_name, job_title, salary, location, logo, remote_or_onsite, job_type, _id } = job;
    return (
        <div>
            <div className="items-center justify-between p-4 border rounded-md gap-6 mt-6 bg-gray-100 lg:flex space-y-6 lg:space-y-0 drop-shadow-lg">
                <div className="flex flex-col lg:flex-row gap-6 mr-0">
                    <div>
                        <img className="lg:w-44 w-full lg:h-32 min-h-full bg-slate-200 p-2 rounded-md" src={logo} alt="" />
                    </div>
                    <div className="text-left space-y-2">
                        <p className="text-xl lg:text-2xl font-bold ">{job_title}</p>
                        <p className="text-slate-700 font-semibold text-xl mb-1">{company_name}</p>
                        <div className="flex gap-4">
                            <button className="font-bold border border-indigo-600 py-1 px-4 text-indigo-600 rounded-md hover:text-white hover: hover:bg-indigo-500">{remote_or_onsite}</button>
                            <button className="font-bold border border-indigo-600 py-1 px-4 text-indigo-600 rounded-md hover:text-white hover: hover:bg-indigo-500">{job_type}</button>
                        </div>
                        <div className="lg:flex gap-6 mt-1 text-slate-700">
                            <p className="flex items-center gap-1 mx-auto"><CiLocationOn className="text-xl font-bold text-black"></CiLocationOn> {location}</p>
                            <p className="flex items-center gap-1 ml-0 pl-0"><CiDollar className="text-xl font-bold text-black"></CiDollar> {salary}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/jobs/${_id}`}><button className=" text-white font-bold py-2 px-4 rounded-md  bg-gradient-to-r from-blue-400 to-indigo-600 hover:from-pink-500 hover:to-indigo-500">View Details</button></Link>
                </div>
            </div>

        </div>
    );
};

AppliedJobsDetails.propTypes = {
    job: PropTypes.shape({
        company_name: PropTypes.string.isRequired,
        job_title: PropTypes.string.isRequired,
        salary: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        remote_or_onsite: PropTypes.string.isRequired,
        job_type: PropTypes.string.isRequired,
    }).isRequired,
};

export default AppliedJobsDetails;