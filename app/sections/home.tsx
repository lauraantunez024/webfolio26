import Image from "next/image";

import { tags } from "@/data.js";


export default function Landing() {
    return (
        <section className="flex flex-col justify-evenly px-6 mx-12">
            <div className="flex flex-col">

                <span className="text-(--accent-main) py-3 text-sm ibm-mono-font">  {'>'} SOFTWARE ENGINEER</span>
                <span className="text-(--text-header) text-[4rem] font-bold hero-name ibm-sans-font">Laura Antunez<span className="cursor"></span></span>
                <p className="text-(--text-dim) max-w-[50%] text-xl">

                    <span>Full-stack engineer specializing in <span className="text-(--text-body)">Ruby on Rails, Vue.js</span>, and <span className="text-(--text-body)">AWS</span>. I build systems that scale and ship code that holds up in production.</span>
                </p>
            </div>
            <div className="flex flex-row gap-2">
                {
                    tags.map((tag, i) => (
                        <div key={i} className="border border-(--g-border) bg-(--tag-bg) text-(--accent-main) p-1 px-2 ibm-mono-font text-sm"> {tag} </div>
                    ))

                }
            </div>
            <div className="flex flex-row gap-4 border-b border-(--card-border) pb-10 ibm-mono-font">
                <button className="bg-(--accent-main) text-(--background) text-sm font-bold p-2 rounded px-5">
                    get in touch
                </button>
                <button className="border border-(--card-border) p-2 py-2 rounded">
                    View my resume
                </button>
            </div>
            <div className="flex flex-row gap-4 justify-around">
                <div className="flex flex-col">
                    <span className="text-xl text-(--accent-main) font-bold"> 4 Years</span>
                    <span className=" text-sm text-(--muted)"> Industry Experience</span>

                </div>
                <div className="flex flex-col">
                    <span className="text-xl text-(--accent-main) font-bold"> Over 100 </span>
                    <span className=""> support tickets processed</span>

                </div>
                <div className="flex flex-col">
                    <span className="text-xl text-(--accent-main) font-bold"> Bilingual </span>
                    <span className=""> English & Spanish</span>

                </div>
            </div>
        </section>
    );
}
