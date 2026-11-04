"use client";

import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const links = [
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#0A0A0A]/80 backdrop-blur-md text-xs tracking-widest border-b border-zinc-900">
      {/* Linha principal (suas classes foram para cá) */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center gap-8">
          <span className="font-mono text-white">
            [ ricardomorandev ] <span className="text-[#d9ff00] ml-2">•</span>
          </span>

          {/* Nav: só desktop */}
          <nav className="hidden md:flex gap-6 text-zinc-500">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="hover:text-white cursor-pointer uppercase"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* GitHub: só desktop */}
          <a
            href="https://github.com/RMoranDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden md:flex w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition"
          >
            <FaGithub size={14} />
          </a>

          {/* Status: só desktop */}
          <span className="hidden md:flex items-center gap-2 text-zinc-500 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d9ff00]"></span>
            BACKEND • JAVA
          </span>

          {/* Botão hambúrguer: só mobile */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="md:hidden w-7 h-7 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition"
          >
            <span className="font-mono text-sm">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {/* Menu mobile: aparece quando open = true */}
      {open && (
        <nav className="md:hidden flex flex-col gap-4 px-6 py-4 border-t border-zinc-900 text-zinc-500">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="hover:text-white uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
