import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id,logo, job_title, company_name, location, salary, remote_or_onsite, job_type } = job;

    return (
        <div className="card bg-base-200 shadow-xl text-left mt-8">
            <figure><img className="lg:max-w-5xl mx-auto max-h-36 mt-4" src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-xl">{job_title}</h2>
                <p className="text-lg text-gray-700">{company_name}</p>
                <div className="flex lg:flex-row flex-col gap-2 lg:gap-4">
                    <button className="font-extrabold py-2 px-5 border-2 border-indigo-500/75 rounded text-indigo-500">{remote_or_onsite}</button>
                    <button className="font-extrabold py-2 px-5 border-2 border-indigo-500/75 rounded text-indigo-500">{job_type}</button>
                </div>
                <div className="flex  text-gray-700">
                    <p className="flex items-center gap-1 mx-auto"><CiLocationOn /> {location}</p>
                    <p className="flex items-center gap-1 ml-0 pl-0"><CiDollar /> {salary}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}><button className=" text-white font-semibold py-2 px-4 rounded-md text-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;