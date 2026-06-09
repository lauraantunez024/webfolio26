import Image from "next/image";

export default function About() {

    const details = [
        { label: 'Location', value: 'Augusta, GA' },
        { label: 'Focus', value: 'Full Stack / Production Eng.' },
        { label: 'Education', value: 'BA Journalism - FIU ' },
        { label: 'Certifications', value: 'Full Stack Dev Bootcamp - Georgia Tech' },
    ]
    return (

        <main className="border border-(--border) ">

            <section className="p-4 mx-6" id="about">

                <div className="flex flex-row gap-4 ibm-mono-font">
                    <span className="text-lg text-(--text-dimmer)"> 01 </span>
                    <span className="font-light text-(--accent-main) text-lg ibm-mono-font"> About </span>
                    <div className="border-b border-(--border) w-full mb-1"> </div>
                </div>
                <div className="flex flex-col md:flex-row p-4 md:p-6 gap-6 md:gap-4 justify-between align-middle">
                    <div className="w-full md:w-[45%] text-base md:text-lg/9 ibm-sans-font self-center m-auto">

                            <p>Starting with learning data analysis for journalism less than 6 months after graduaging, I've progressed to junior software developer with industry experience. </p>
                            <p>Over four years at SpringBig, I grew from QA into a full-stack engineering role. I built features using Rails and Vue, and handled production incidents on the ingressions {'(production support)'} team. With over 100 production reports solved, my passion for problem solving is fueled by my love of people and making them feel valued.</p>
                            <p><strong>What makes me different:</strong> my journalism degree makes me an expert communicator and investigator. I speak Spanish and have proven experience working remote</p>

                    </div>
                    <div className="flex flex-col min-h-[80%] justify-around align-middle">
                        {details.map((detail, i) => (
                            <div className="flex flex-col">
                                <div key={i} className="gap-6 flex flex-row justify-start">
                                    <span className="w-[20%] text-(--label) ibm-mono-font uppercase text-xs">{detail.label}</span>
                                    <span className="ibm-sans-font">{detail.value}</span>
                                </div>
                                <div className="border-b border-(--border) w-full md:w-[44vw]"></div>

                            </div>
                        )
                        )}
                        <div className="flex flex-col ">
                            <div className="gap-6 flex flex-row justify-start">
                                <span className="w-[20%] text-(--label) uppercase text-xs ibm-mono-font">Status</span>
                                <span className="text-(--accent-main) ibm-sans-font">Open to new roles</span>
                            </div>
                            <div className="border-b border-(--border) w-full md:w-[44vw]"></div>

                        </div>


                    </div>

                </div>
            </section>
        </main>
    );
}
