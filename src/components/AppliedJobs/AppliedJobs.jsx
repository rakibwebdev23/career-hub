import { useLoaderData } from "react-router-dom";
import { getJobInStorage } from "../../utilities/storage";
import { useEffect, useState } from "react";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";
import { Helmet } from "react-helmet";
import "../AppliedJobs/appliedJobs.css";

const AppliedJobs = () => {
    const totalJobs = useLoaderData();
    console.log("this is are total jobs",totalJobs);
    
    const [apply, setJobsApplied] = useState([]);
    const [displayApply, setDisplayApply] = useState([]);
    console.log(totalJobs);

    useEffect(() => {
        const storedJobs = getJobInStorage();
        if (totalJobs.length > 0) {

            const jobsApplied = [];
            for (const id of storedJobs) {
                const job = totalJobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setDisplayApply(jobsApplied);
            setJobsApplied(jobsApplied);
        }
    }, [totalJobs]);

    const handleJobsDropdown = filter =>{
        if(filter === 'all'){
            setDisplayApply(apply);
        }
        else if(filter === 'Remote'){
            const remoteJobs = apply.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayApply(remoteJobs);
        }
        else if(filter === 'Onsite'){
            const onsiteJobs = apply.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayApply(onsiteJobs);
        }
    }

    return (
        <div>
            <Helmet>Career Hub - Applied Jobs</Helmet>
            <div className="applied rounded-t-md h-[500px]  flex items-center">
                <p className="mx-auto text-5xl font-bold bg-black bg-opacity-50 px-48 py-20 text-blue-500">Applied Jobs</p>
            </div>
            <div className="flex">
                <details className="dropdown my-6 mx-auto">
                    <summary className="m-1 px-32 py-3 bg-blue-600 text-white font-bold">Open or Close</summary>
                    <ul className="p-2shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-64">
                        <div className="flex gap-2  bg-blue-400 p-1 rounded-md">
                            <li onClick={() => handleJobsDropdown('all')}><a>All</a></li>
                            <li onClick={() => handleJobsDropdown('Remote')}><a>Remote</a></li>
                            <li onClick={() => handleJobsDropdown('Onsite')}><a>Full Time</a></li>
                        </div>
                    </ul>
                </details>
            </div>
            <div className="mt-10">
                {
                    displayApply.map(job => <AppliedJobsDetails

                        key={job.id}
                        job={job}
                    ></AppliedJobsDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;