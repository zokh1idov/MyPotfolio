import { useState } from "react";
import Reveal from "./Reveal";

/* ---------- Logotiplar (inline SVG) ---------- */
const S = (p) => <svg width="38" height="38" viewBox="0 0 48 48" aria-hidden="true" {...p} />;

const LOGOS = {
  React: (
    <S>
      <g fill="none" stroke="#61dafb" strokeWidth="2.4">
        <ellipse cx="24" cy="24" rx="20" ry="7.8" />
        <ellipse cx="24" cy="24" rx="20" ry="7.8" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="20" ry="7.8" transform="rotate(120 24 24)" />
      </g>
      <circle cx="24" cy="24" r="3.6" fill="#61dafb" />
    </S>
  ),
  JavaScript: (
    <S>
      <rect x="5" y="5" width="38" height="38" rx="4" fill="#f7df1e" />
      <text x="40" y="39" textAnchor="end" fontSize="17" fontWeight="800" fill="#111" fontFamily="Poppins,system-ui,sans-serif">JS</text>
    </S>
  ),
  TypeScript: (
    <S>
      <rect x="5" y="5" width="38" height="38" rx="4" fill="#3178c6" />
      <text x="40" y="39" textAnchor="end" fontSize="17" fontWeight="800" fill="#fff" fontFamily="Poppins,system-ui,sans-serif">TS</text>
    </S>
  ),
  "Tailwind CSS": (
    <S viewBox="0 0 24 24">
      <path fill="#38bdf8" d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6C13.700 10.600 15 12 18 12c3.200 0 5.200-1.600 6-4.800-1.200 1.600-2.600 2.200-4.200 1.800-.9-.2-1.600-.9-2.300-1.600C16.300 6.200 15 4.800 12 4.800zM6 12c-3.200 0-5.200 1.600-6 4.800 1.200-1.600 2.600-2.200 4.200-1.800.9.200 1.600.9 2.300 1.600 1.200 1.200 2.500 2.600 5.500 2.600 3.200 0 5.200-1.600 6-4.800-1.200 1.600-2.600 2.200-4.200 1.800-.9-.2-1.600-.9-2.300-1.600C10.300 13.400 9 12 6 12z" />
    </S>
  ),
  HTML5: (
    <S>
      <path d="M7 5h34l-3 33-14 5-14-5z" fill="#e34f26" />
      <path d="M24 7.500V40.500l11.500-4 2.600-28.500z" fill="#ef652a" />
      <text x="24" y="31" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" fontFamily="Poppins,system-ui,sans-serif">5</text>
    </S>
  ),
  CSS3: (
    <S>
      <path d="M7 5h34l-3 33-14 5-14-5z" fill="#1572b6" />
      <path d="M24 7.500V40.500l11.500-4 2.600-28.500z" fill="#33a9dc" />
      <text x="24" y="31" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" fontFamily="Poppins,system-ui,sans-serif">3</text>
    </S>
  ),
  Git: (
    <S>
      <rect x="9" y="9" width="30" height="30" rx="4" transform="rotate(45 24 24)" fill="#f05033" />
      <g stroke="#fff" strokeWidth="2.6" fill="#fff" strokeLinecap="round">
        <path d="M24 15v13M24 20l7 7" fill="none" />
        <circle cx="24" cy="14.500" r="3" />
        <circle cx="24" cy="30" r="3" />
        <circle cx="31.500" cy="27.500" r="3" />
      </g>
    </S>
  ),
  Figma: (
    <S viewBox="0 0 38 57" width="26" height="38">
      <path d="M19 28.500a9.500 9.500 0 1 1 19 0 9.500 9.500 0 0 1-19 0z" fill="#1abcfe" />
      <path d="M0 47.500A9.500 9.500 0 0 1 9.500 38H19v9.500a9.500 9.500 0 1 1-19 0z" fill="#0acf83" />
      <path d="M19 0v19h9.500a9.500 9.500 0 1 0 0-19H19z" fill="#ff7262" />
      <path d="M0 9.500A9.500 9.500 0 0 0 9.500 19H19V0H9.500A9.500 9.500 0 0 0 0 9.500z" fill="#f24e1e" />
      <path d="M0 28.500A9.500 9.500 0 0 0 9.500 38H19V19H9.500A9.500 9.500 0 0 0 0 28.500z" fill="#a259ff" />
    </S>
  ),
  SCSS: (
    <S>
      <circle cx="24" cy="24" r="19" fill="#cd6799" />
      <text x="24" y="31" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" fontFamily="Poppins,system-ui,sans-serif">S</text>
    </S>
  ),
  Bootstrap: (
    <S>
      <rect x="5" y="5" width="38" height="38" rx="9" fill="#7952b3" />
      <text x="24" y="33" textAnchor="middle" fontSize="23" fontWeight="800" fill="#fff" fontFamily="Poppins,system-ui,sans-serif">B</text>
    </S>
  ),
};

const MAIN = ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Git", "Figma"];
const MORE = ["SCSS", "Bootstrap"];

function Card({ name, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="group h-[74px] flex items-center gap-4 px-5 rounded-2xl border border-[var(--ac)]/15 bg-[#07122a]/70 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-[var(--ac)] hover:shadow-[0_0_28px_-6px_var(--ac)]">
        <span className="w-10 grid place-items-center shrink-0 transition duration-300 group-hover:scale-110">{LOGOS[name]}</span>
        <span className="text-sm font-medium text-slate-100">{name}</span>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  const [all, setAll] = useState(false);
  const list = all ? [...MAIN, ...MORE] : MAIN;

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-blue-500/10">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-[.8fr_1.5fr] gap-12 items-center">
        <Reveal>
          <div className="flex items-center gap-3 text-sm text-[var(--ac)] mb-3">
            <span>02</span>
            <span>Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">Texnologiyalar</h2>
          <p className="text-slate-300 text-[15px] leading-relaxed max-w-sm">
            Zamonaviy texnologiyalar bilan ishlashni yaxshi bilaman va doim yangi
            narsalarni o‘rganishga harakat qilaman.
          </p>
          <button onClick={() => setAll(!all)} className="bo mt-7 !py-2.5 !px-5 !text-sm">
            {all ? "Kamroq ko‘rsatish" : "Barchasini ko‘rish"} <span aria-hidden="true">{all ? "↑" : "→"}</span>
          </button>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {list.map((name, i) => (
            <Card key={name} name={name} delay={(i % 8) * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}