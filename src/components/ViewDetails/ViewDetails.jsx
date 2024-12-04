import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HelmetShared from "../shared/HelmetShared/HelmetShared";
import { savedJobInStorage } from "../../utilities/storage";

const ViewDetails = () => {
    const jobs = useLoaderData() || [];
    const { id } = useParams();
    const idIt = parseInt(id);
    const jobItem = jobs.find(job => job.id === idIt);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, logo, contact_information } = jobItem;

    const handleJobApplication = () => {
        savedJobInStorage(idIt);
        toast('Your application successfully applied');
    }

    return (
        <div className="px-4 lg:px-8">
            <HelmetShared helmetTitle="Details"></HelmetShared>
            <div className="mb-6 mt-10">
                <div className=" h-60 flex place-content-center bg-gray-100 rounded-t-lg">
                    <img className="py-10" src={logo} alt="" />
                </div>
                <div className="grid lg:grid-cols-4 gap-4 ">
                    <div className=" lg:col-span-3 gap-4 mt-4 text-justify">
                        <h3 className="mb-4"><span className="font-bold text-black">Job Description: </span> <span className="text-gray-700">{job_description}</span></h3>
                        <p className="mb-4"><span className="font-bold text-black">Job Responsibility: </span><span className="text-gray-700">{job_responsibility}</span></p>
                        <p className="mb-4"><span className="font-bold text-black">Educational Requirements: </span><span className="text-gray-700">{educational_requirements}</span></p>
                        <p className="text-wrap"><span className="font-bold text-black">Experience: </span><span className="text-gray-700">{experiences}</span></p>
                    </div>
                    <div className="text-justify">
                        <div className=" bg-gray-200 p-4 text-justify rounded-lg lg:rounded-none mt-6 lg:mt-0">
                            <div>
                                <h3 className="border border-b-gray-400 text-xl font-bold text-black mb-2">Job Details</h3>
                                <p className="mb-2"><span className="font-bold text-black">Salary: </span> <span className="text-gray-500">$ {salary}</span></p>
                                <p className="mb-2"><span className="font-bold text-black">Job Title: </span> <span className="text-gray-500">{job_title}</span></p>
                            </div>
                            <div>
                                <h3 className="border border-b-gray-400 text-xl font-bold text-black mb-2">Contact Information</h3>
                                <p className="mb-2"><span className="font-bold text-black">Phone: </span> <span className="text-gray-500">{contact_information.phone}</span></p>
                                <p className="mb-2"><span className="font-bold text-black">Email: </span> <span className="text-gray-500">{contact_information.email}</span></p>
                                <p className="mb-2"><span className="font-bold text-black">Address: </span> <span className="text-gray-500">{contact_information.address}</span></p>
                            </div>

                        </div>
                        <div className="">
                            <button onClick={handleJobApplication} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 mb-0 w-full rounded-b-lg text-white font-semibold text-xl">Apply Now</button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ViewDetails;