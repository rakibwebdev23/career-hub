import "../CategoryBanner/CategoryBanner.css"

const CategoryBanner = () => {
    return (
        <div className="category hero lg:h-[500px] h-[400px] mt-20 bg-black">
            <div className="hero-content text-center">
                <div className="bg-opacity-70 flex items-center lg:h-[250px] lg:w-3/4 bg-black px-4 lg:px-0">
                    <div className='lg:px-24 py-6 lg:py-0'>
                        <h1 className="mb-5 lg:text-5xl text-3xl font-bold uppercase text-blue-600">Job Category</h1>
                        <p className="mb-5 text-white text-justify leading-relaxed break-word hyphens-auto">
                        To build a successful career, concentrate on developing relevant skills, setting clear goals, and engaging in continuous learning. Begin by identifying a job that aligns with your interests and values. Then, work diligently to gain experience and expertise in that role. Stay adaptable and look for opportunities for growth, ensuring that each step you take brings you closer to your long-term goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryBanner;