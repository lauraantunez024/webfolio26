import { link } from "fs";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
    const portfolio = [
        {
            title: "Tech Sapote",
            description: "Slash-command bot for scheduling movie nights across a Discord channel. Handles time coordination, reminders, and persistent scheduling via cron.",
            technologies: ['Next.js', 'Payload CMS', 'Postgresql'],
            siteUrl: "https://www.google.com",
        },
        {
            title: "Discord movie bot",
            description: "Slash-command bot for scheduling movie nights across a Discord channel. Handles time coordination, reminders, and persistent scheduling via cron.",
            technologies: ['Node.js', 'Postgresql', 'Sequelize'],
            siteUrl: "https://www.google.com",
        },
        {
            title: "Manifest Station Calendar",
            description: "Slash-command bot for scheduling movie nights across a Discord channel. Handles time coordination, reminders, and persistent scheduling via cron.",
            technologies: ['Node.js', 'Postgresql', 'Sequelize'],
            siteUrl: "https://www.google.com",
        },
        {
            title: "Interactive Sex-Ed Map",
            description: "Slash-command bot for scheduling movie nights across a Discord channel. Handles time coordination, reminders, and persistent scheduling via cron.",
            technologies: ['Node.js', 'Postgresql', 'Sequelize'],
            siteUrl: "https://www.google.com",
        },

    ];
    return (
        <main className="border border-(--border) ">
            <section className="p-4 mx-6 justify-between p-4" id="about">

                <div className="flex flex-row gap-4 ibm-mono-font">
                    <span className="text-lg text-(--text-dimmer)"> 04 </span>
                    <span className="font-light text-(--accent-main) text-lg"> Projects </span>
                    <div className="border-b border-(--border) w-full mb-1"> </div>
                </div>
                <div className="grid grid-flow-row p-4 grid-cols-2 py-8">
                    {portfolio.map((project, i) => (
                        <Link href={project.siteUrl} target="_blank">

                    <div className=" flex-col flex justify-between bg-(--card-bg) border border-(--border) min-w-[50%] min-h-[55%] p-4 project-link">
                        <div className="flex flex-row justify-between project-link">
                            <span className="ibm-mono-font text-md font-extrabold">{project.title}</span>
                            <span className="text-sm text-(--label) cl-arrow">↗</span>

                        </div>
                        <span className="my-4">{project.description}</span>
                        <div className="flex flex-row gap-4 my-4">
                            {
                                project.technologies.map((t, i) => (
                                    <div key={i} className="border border-(--g-border) bg-(--tag-bg) text-(--accent-main) p-1 px-2 ibm-mono-font text-sm"> {t} </div>

                                ))
                            }

                        </div>
                    </div>
                </Link>

                    ))}

            </div>
        </section>
        </main >
    );
}
