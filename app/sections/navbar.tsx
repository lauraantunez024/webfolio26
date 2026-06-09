import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
      <main className="border border-(--border) p-4 md:p-6 flex flex-col gap-4 md:flex-row md:justify-between">
        
        <div>
        <span className="text-(--accent-main)"> laura@antunez:~$</span>
        </div>

        <div className="flex flex-row flex-wrap justify-start md:justify-center gap-x-4 gap-y-2 text-(--text-dim) text-xs font-bold ibm-mono-font">
            <Link className="hover:text-(--accent-main)" href='#about'>ABOUT</Link>
            <Link className="hover:text-(--accent-main)" href='#experience'>EXPERIENCE</Link>
            <Link className="hover:text-(--accent-main)" href='#projects'>PROJECTS</Link>
            <Link className="hover:text-(--accent-main)" href='#contact'>CONTACT</Link>
            <Link className="hover:text-(--accent-main)" href='/resume.pdf' target="_blank">RESUME.PDF</Link>

        </div>
      </main>
  );
}
