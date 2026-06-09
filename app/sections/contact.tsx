import Image from "next/image";
import Link from "next/link";
export default function Contact() {
    const contactInfo = [
        {
            label: 'email',
            value: 'lauraantunez024@gmail.com',
            url: 'mailto:lauraantunez024@gmail.com'
        },
        {
            label: 'linkedin',
            value: 'lauraantunez024@gmail.com',
            url: 'https://www.linkedin.com/in/laura-antunez'
        },
        {
            label: 'github',
            value: 'lauraantunez024',
            url: 'https://github.com/lauraantunez024'
        },
        {
            label: 'resume',
            value: 'resume.pdf',
            url: 'https://www.linkedin.com/in/laura-antunez'
        },
    ]
    return (
        <main className="border border-(--border) ">

            <section className="p-4 mx-6" id="about">

                <div className="flex flex-row gap-4 ibm-mono-font">
                    <span className="text-lg text-(--text-dimmer)"> 05 </span>
                    <span className="font-light text-(--accent-main) text-lg"> Contact </span>
                    <div className="border-b border-(--border) w-full mb-1"> </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 md:gap-4 m-4 md:m-6">
                    <div className="w-full md:w-[50%]">
                        <div className="text-xl md:text-2xl ibm-sans-font font-light text-(--dim)">
                            Open to <span className="font-bold">full-stack </span> and <span className="font-bold">production engineering </span> roles. Relocation considered.
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {contactInfo.map((contact, i) => (
                            <Link key={i} href={contact.url} target="_blank">

                                <div className="border border-(--border  bg-(--card-bg) w-full md:w-[45vw] p-4 flex flex-col contact-link">
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-col">

                                            <span className="font-bold ibm-mono-font leading- cl-label">{contact.label}</span>
                                            <span className="text-(--text-darker)! text-sm">{contact.value}</span>

                                        </div>
                                    <div className="flex flex-col cl-arrow justify-center">
                                        <span className="cl-arrow">→</span>
                                    </div>
                                    </div>

                                </div>
                            </Link>
                        ))}


                    </div>


                </div>
            </section>
        </main>
    );
}
