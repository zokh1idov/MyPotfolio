import { useState } from "react";
import { NAV, CV_URL } from "../data";

export default function Navbar({ active, onAccent }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#040a18]/70 border-b border-blue-500/10"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="font-semibold text-lg whitespace-nowrap">
          Zohidovdev <span className="text-blue-500">.</span>
        </a>

        {/* Menyu (keng ekran) */}
        <nav className="hidden lg:flex gap-7">
          {NAV.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nl ${active === id ? "on" : ""}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* O'ng tomon */}
        <div className="flex items-center gap-3">
          <button
            onClick={onAccent}
            aria-label="Rangni almashtirish"
            className="w-10 h-10 rounded-full border border-blue-500/30 grid place-items-center text-blue-300 hover:text-white transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </button>

          {/* CV faqat keng ekranda */}
          <div className="hidden lg:block">
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bo whitespace-nowrap"
            >
              CV yuklab olish
            </a>
          </div>

          {/* Hamburger (kichik ekran) */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menyu"
            aria-expanded={open}
            className="lg:hidden w-10 h-10 grid place-items-center text-2xl text-slate-200 hover:text-white transition"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobil menyu: nav havolalari */}
      {open && (
        <nav className="lg:hidden px-5 pb-4 flex flex-col">
          {NAV.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`py-3 border-t border-blue-500/10 transition-colors hover:text-white ${
                active === id ? "text-white" : "text-slate-300"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
