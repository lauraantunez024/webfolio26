import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
      <main className="border border-(--border) p-6 flex flex-row justify-between">
        
        <div>
        <span className="text-(--accent-main)"> laura@antunez:~$</span>
        </div>

        <div className="flex flex-row justify-center gap-4 text-(--text-dim) text-xs font-bold ibm-mono-font">
            <Link className="hover:text-(--accent-main)" href='#about'>ABOUT</Link>
            <Link className="hover:text-(--accent-main)" href='#experience'>EXPERIENCE</Link>
            <Link className="hover:text-(--accent-main)" href='#projects'>PROJECTS</Link>
            <Link className="hover:text-(--accent-main)" href='#contact'>CONTACT</Link>
            <Link className="hover:text-(--accent-main)" href='/resume.pdf' target="_blank">RESUME.PDF</Link>

        </div>
      </main>
  );
}
