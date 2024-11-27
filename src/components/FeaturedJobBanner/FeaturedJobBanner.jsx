import "../FeaturedJobBanner/FeaturedJobBanner.css"

const FeaturedJobBanner = () => {
    return (
        <div className="feature hero mt-20 bg-fixed min-h-screen">
            <div className="hero-content text-center">
                <div className="lg:h-[250px] w-3/4 bg-black bg-opacity-70 flex items-center">
                    <div className='lg:px-24 px-10 py-10 lg:py-0'>
                        <h1 className="mb-5 lg:text-5xl text-4xl font-bold uppercase text-orange-600">Featured Job's</h1>
                        <p className="mb-5 text-white text-justify lg:text-left leading-tight">
                        A successful career is built on a foundation of understanding your interests, skills, and values, while aligning them with opportunities in the job market. It involves continuous learning, skill development, and adaptability to changes in industry trends. Whether you’re just starting out or looking to make a career shift. Your career path should be one that not only offers professional growth but also aligns with your personal aspirations and work-life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobBanner;