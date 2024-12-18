import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showAllData, setShowAllData] = useState(4);

    useEffect(() => {
        fetch("jobs.json")
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    return (
        <div className="container mx-auto px-4 lg:px-8 py-12">
            <div className="text-center w-full md:w-3/4 mx-auto mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
                <p className="text-gray-600 lg:text-lg">
                    Explore thousands of job opportunities with all the information you need. It's your future, start today!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {
                    jobs.slice(0, showAllData).map((job) => (
                        <Job key={job.id} job={job}></Job>
                    ))
                }
            </div>
            {showAllData < jobs.length && (
                <div className="text-center mt-10">
                    <button
                        onClick={() => setShowAllData(jobs.length)}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-300"
                    >
                        Show All Jobs
                    </button>
                </div>
            )}
        </div>
    );
};

export default FeaturedJobs;
