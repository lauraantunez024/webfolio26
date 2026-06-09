import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
      <main className="border border-(--border) p-6 flex flex-row justify-between">
        
        <div>
        <span className="text-(--accent-main)"> laura@antunez:~$</span>
        </div>

        <div className="flex flex-row gap-4 text-(--text-dim) text-sm">
            <Link href='#about'>ABOUT</Link>
            <Link href='#experience'>EXPERIENCE</Link>
            <Link href='#projects'>PROJECTS</Link>
            <Link href='#contact'>CONTACT</Link>
            <Link href=''>RESUME.PDF</Link>

        </div>
      </main>
  );
}
