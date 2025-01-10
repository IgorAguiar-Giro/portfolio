"use client";
import { House, UserRound, FolderCheck, Wrench } from "lucide-react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center text-white">
      <div>
        <ul className="mb-10 mt-5 flex w-fit items-center gap-3 space-x-8 rounded-xl bg-white/[0.04] px-8 py-4">
          <NavbarItem Icon={House} label="Home" href="/" />
          <NavbarItem Icon={UserRound} label="About" href="/about" />
          <NavbarItem Icon={FolderCheck} label="Projects" href="/projects" />
          <NavbarItem Icon={Wrench} label="Stacks" href="/stacks" />
        </ul>
      </div>
    </nav>
  );
}
