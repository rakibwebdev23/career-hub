import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [showAllData, setShowAllData] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="mt-20">
                <div className="text-center text-wrap w-3/4 mx-auto">
                    <h4 className="text-4xl text-black font-bold mb-2">Featured Jobs</h4>
                    <p className="lg:text-xl text-black text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-10 items-center px-4 lg:px-8">
                    {
                        jobs.slice(0, showAllData).map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                    }
                </div>
                <div className={`text-center mt-10 mb-4 ${showAllData === jobs.length ? 'hidden' : ''}`}>
                    <button onClick={() => setShowAllData(jobs.length)} className="btn btn-primary hover:bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 border-none text-white font-bold text-xl">Show All</button>
                </div>
            </div>
        </div>

    );
};

export default FeaturedJobs;