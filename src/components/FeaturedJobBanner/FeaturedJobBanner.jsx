import "../FeaturedJobBanner/FeaturedJobBanner.css"

const FeaturedJobBanner = () => {
    return (
        <div className="feature hero h-[700px] mt-20 bg-fixed">
            <div className="hero-content text-center">
                <div className="md:h-[250px] w-[75%] bg-black bg-opacity-50 flex items-center">
                    <div className='px-24'>
                        <h1 className="mb-5 text-5xl font-bold uppercase text-orange-500">Featured Job's</h1>
                        <p className="mb-5 text-wrap text-white text-justify">

                            A successful career is built on a foundation of understanding your interests, skills, and values, while aligning them with opportunities in the job market. It involves continuous learning, skill development, and adaptability to changes in industry trends. Whether you’re just starting out or looking to make a career shift. Your career path should be one that not only offers professional growth but also aligns with your personal aspirations and work-life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobBanner;