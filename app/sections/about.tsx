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
                <div className="flex flex-row p-6 gap-4 justify-between align-middle">
                    <div className="w-[45%] text-lg/9 ibm-sans-font self-center m-auto">

                            <p>I started in QA — which means I've broken more software than most engineers have written. That background gives me a different angle: I think about edge cases first, write code that's testable by design, and don't ship things I wouldn't want to debug at 2am.</p>
                            <p>Over four years at SpringBig, I grew from QA into a full-stack engineering role — building features in Rails and Vue, handling production incidents, and learning what it actually takes to keep a system healthy at scale.</p>
                            <p>Outside of code: journalism degree from FIU, fluent in Spanish, currently based in Augusta, GA.</p>

                    </div>
                    <div className="flex flex-col min-h-[80%] justify-around align-middle">
                        {details.map((detail, i) => (
                            <div className="flex flex-col">
                                <div key={i} className="gap-6 flex flex-row justify-start">
                                    <span className="w-[20%] text-(--label) ibm-mono-font uppercase text-xs">{detail.label}</span>
                                    <span className="ibm-sans-font">{detail.value}</span>
                                </div>
                                <div className="border-b border-(--border) w-[44vw]"></div>

                            </div>
                        )
                        )}
                        <div className="flex flex-col ">
                            <div className="gap-6 flex flex-row justify-start">
                                <span className="w-[20%] text-(--label) uppercase text-xs ibm-mono-font">Status</span>
                                <span className="text-(--accent-main) ibm-sans-font">Open to new roles</span>
                            </div>
                            <div className="border-b border-(--border) w-[44vw]"></div>

                        </div>


                    </div>

                </div>
            </section>
        </main>
    );
}
