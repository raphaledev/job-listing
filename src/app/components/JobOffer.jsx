import Image from "next/image";

function JobOffer({ job }) {
    const {company, isNew, featured, role, level, location, logo, postedAt,position, contract, languages, tools } = job;
    return (
        <div className={`flex flex-col lg:flex-row lg:justify-between gap-4 p-8 pt-0 lg:pt-8 w-5/6 rounded-md mx-auto font-bold bg-white ${isNew ? 'border-l-8 border-desaturated-cyan' : ''}`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
                <div className="">
                    <Image src={logo} alt={company} width={50} height={50} className="transform -translate-y-1/2 lg:translate-y-0 lg:w-full lg:h-full">
                    </Image>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                        <span className="text-desaturated-cyan text-sm">{company}</span>
                        <span className={`bg-desaturated-cyan text-white rounded-2xl ${isNew ? 'p-2' :''}`}>{isNew ? 'NEW!' : ''}</span>
                        <span className={`bg-very-dark-cyan text-white rounded-2xl ${featured ? 'p-2' :''}`}>{featured ? 'FEATURED' : ''}</span>
                    </div>
                    <div className="flex">
                        <span>{position}</span>
                    </div>
                    <hr className="lg:hidden"></hr>
                    <div className="flex gap-2 text-dark-cyan font-normal">
                        <span className="after:content-['•'] after:mx-2">{postedAt}</span>
                        <span className="after:content-['•'] after:mx-2">{contract}</span>
                        <span>{location}</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 text-desaturated-cyan flex-wrap lg:items-center lg:flex-nowrap">
                <span className="bg-light-cyan-background p-2 rounded-lg">{level}</span>
                <span className="bg-light-cyan-background p-2 rounded-lg">{role}</span>
                {languages.map(language => (<span key={language} className="bg-light-cyan-background p-2 rounded-lg">{language}</span>))}
            </div>
        </div>
    );
}

export default JobOffer;