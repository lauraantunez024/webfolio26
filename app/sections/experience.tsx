import Image from "next/image";

export default function Experience() {
    const experience = [
        {
            title: 'CEO',
            years: 'Present-2026',
            company: 'Tech Sapote - Local Business Solutions',
            location: 'remote',
            description: 'Progressed from QA Engineer to Junior Software Engineer over four years. Built and maintained features across a Rails API and Vue.js frontend serving thousands of dispensary locations. Owned production support rotations, wrote automated test coverage, and contributed to AWS infrastructure and monitoring via CloudWatch.',
            technologies: ['Next.js', 'PayloadCMS', 'Stripe'],
        },
        {
            title: 'Junior Software Engineer',
            years: '2026-2022',
            company: 'SpringBig — Cannabis retail SaaS platform',
            location: 'remote',
            description: 'Progressed from QA Engineer to Junior Software Engineer over four years. Built and maintained features across a Rails API and Vue.js frontend serving thousands of dispensary locations. Owned production support rotations, wrote automated test coverage, and contributed to AWS infrastructure and monitoring via CloudWatch.',
            technologies: ['Ruby on Rails', 'Vue.js', 'AWS', 'Postgresql', 'RSpec'],
        },
        {
            title: 'Data, Product and Design Intern',
            years: '2021',
            company: 'Hechinger Report - Education focused Journalism',
            location: 'remote',
            description: 'Progressed from QA Engineer to Junior Software Engineer over four years. Built and maintained features across a Rails API and Vue.js frontend serving thousands of dispensary locations. Owned production support rotations, wrote automated test coverage, and contributed to AWS infrastructure and monitoring via CloudWatch.',
            technologies: ['Ruby on Rails', 'Vue.js', 'AWS', 'Postgresql', 'RSpec'],
        },
        
    ]
    return (
        <main className="border border-(--border) ">

            <section className="p-4 m-6" id="about">

                <div className="flex flex-row gap-4">
                    <span className="text-lg text-(--text-dimmer)"> 03 </span>
                    <span className="font-light text-(--accent-main) text-lg ibm-mono-font"> Experience </span>
                    <div className="border-b border-(--border) w-full mb-1"> </div>
                </div>
                {experience.map((job, i) => (

                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 p-4 my-4 justify-between">
                        <div className="flex flex-col w-full md:w-[20%] ibm-mono-font justify-start shrink-0">
                            <span className="text-(--accent-main) font-bold">{job.years}</span>
                            <span className="text-xs">{job.location}</span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="font-bold text-lg">{job.title}</span>
                            <span className="text-(--darker)">{job.company}</span>
                            <span className="text-(--dark)"> {job.description}</span>
                            <div className="flex flex-row flex-wrap gap-2 md:gap-4 py-4">
                                {job.technologies?.map((tech, i) => (

                                    <div key={i} className="border border-(--g-border) bg-(--tag-bg) text-(--accent-main) p-1 px-2 ibm-mono-font text-xs"> {tech} </div>

                                ))}

                            </div>

                        </div>


                    </div>
                ))}
            </section>
        </main>
    );
}
