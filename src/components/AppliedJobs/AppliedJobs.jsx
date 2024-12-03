import { Helmet, HelmetProvider } from "react-helmet-async";
import { getJobInStorage } from "../../utilities/storage";

const AppliedJobs = () => {
    const totalJobs = useLoaderData();
    const [apply, setJobsApplied] = useState([]);
    const [displayApply, setDisplayApply] = useState([]);

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

    const handleJobsDropdown = filter => {
        if (filter === 'all') {
            setDisplayApply(apply);
        } else if (filter === 'Remote') {
            const remoteJobs = apply.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayApply(remoteJobs);
        } else if (filter === 'Onsite') {
            const onsiteJobs = apply.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayApply(onsiteJobs);
        }
    };

    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Career Hub - Applied Jobs</title>
                </Helmet>
                <div className="applied bg-fixed lg:rounded-t-md lg:h-[500px] flex items-center py-20 lg:py-0">
                    <p className="mx-auto text-5xl font-bold bg-black bg-opacity-50 lg:px-48 px-20 py-20 text-blue-500">
                        Applied Jobs
                    </p>
                </div>
                <div className="flex">
                    <details className="dropdown my-6 mx-auto">
                        <summary className="m-1 px-32 py-3 bg-blue-600 text-white font-bold">Open or Close</summary>
                        <ul className="p-2shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-64">
                            <div className="flex gap-2 bg-blue-400 p-1 rounded-md">
                                <li onClick={() => handleJobsDropdown('all')}><a>All</a></li>
                                <li onClick={() => handleJobsDropdown('Remote')}><a>Remote</a></li>
                                <li onClick={() => handleJobsDropdown('Onsite')}><a>Onsite</a></li>
                            </div>
                        </ul>
                    </details>
                </div>
                <div className="mt-10 px-4 lg:px-8">
                    {displayApply.map(job => (
                        <AppliedJobsDetails
                            key={job.id}
                            job={job}
                        ></AppliedJobsDetails>
                    ))}
                </div>
            </div>
        </HelmetProvider>
    );
};

export default AppliedJobs;
