import { useState } from "react";
import Reveal from "./Reveal";

const PROJECTS_DATA = [
  { name: "Mixel.uz", tag: "E-commerce", desc: "Zamonaviy e-commerce platformasi.", tech: ["React", "Tailwind", "Api"], bg: "from-slate-950 via-slate-800 to-blue-900", dark: true, cta: "Xarid qilish", img: "/imgs/p1.jpg", url: "" },
  { name: "iTeach", tag: "Education", desc: "Ta’lim platformasi (admin panel bilan).", tech: ["React", "Tailwind", "Api"], bg: "from-white via-sky-50 to-sky-200", dark: false, cta: "Boshlash", img: "/imgs/p2.jpg", url: "" },
  { name: "House Sale", tag: "Real Estate", desc: "Ko‘chmas mulk sayti.", tech: ["React", "Tailwind", "Api"], bg: "from-[#0a1733] via-[#10285c] to-[#1e3a8a]", dark: true, cta: "Qidirish", img: "/imgs/p34.jpg", url: "" },
  { name: "Exclusive", tag: "E-commerce", desc: "Texnika va kiyim onlayn do‘koni.", tech: ["React", "Tailwind", "Api"], bg: "from-fuchsia-900 via-purple-900 to-slate-950", dark: true, cta: "Ko‘rish", img: "/imgs/p33.jpg", url: "" },
  { name: "Natura", tag: "E-commerce", desc: "Sabzavot va mevalar onlayn do‘koni.", tech: ["React", "Tailwind", "Api"], bg: "from-emerald-950 via-emerald-800 to-green-600", dark: true, cta: "Buyurtma", img: "/imgs/p4.jpg", url: "" },
  { name: "Real Estate", tag: "Real Estate", desc: "Uy sotuvi platformasi.", tech: ["React", "Tailwind", "Api"], bg: "from-amber-700 via-orange-900 to-slate-950", dark: true, cta: "Uylarni ko‘rish", img: "/imgs/p5.jpg", url: "" },
];

const TECH = {
  React: (
    <svg width="16" height="16" viewBox="0 0 48 48" fill="none" stroke="#61dafb" strokeWidth="3">
      <ellipse cx="24" cy="24" rx="20" ry="8" />
      <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" />
      <circle cx="24" cy="24" r="3.5" fill="#61dafb" stroke="none" />
    </svg>
  ),
  Tailwind: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#38bdf8">
      <path d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6C13.7 10.6 15 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.3 6.2 15 4.8 12 4.8zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 13.4 9 12 6 12z" />
    </svg>
  ),
  Api: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
};

function Thumb({ p }) {
  if (p.img) {
    return <img src={p.img} alt={p.name} className="w-full h-44 object-cover rounded-xl transition duration-150 group-hover:scale-105" />;
  }
  return (
    <div className={`relative h-44 rounded-xl overflow-hidden bg-gradient-to-br ${p.bg}`}>
      <div className="absolute inset-0 transition duration-150 group-hover:scale-105 origin-center flex items-center justify-center p-3">
        <img src="/imgs/your-image.png" alt="O'zimning rasmim" className="w-full h-full object-cover rounded-lg shadow-md" />
      </div>
    </div>
  );
}

function Card({ p, delay }) {
  const Arrow = (
    <span className="w-8 h-8 grid place-items-center rounded-full text-[var(--ac)] transition group-hover:translate-x-1 group-hover:bg-[var(--ac)]/15">→</span>
  );
  return (
    <Reveal delay={delay}>
      <article className="group glass !rounded-2xl p-3 transition duration-150 hover:-translate-y-1">
        <Thumb p={p} />
        <div className="px-2 pt-4 pb-2">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <span className="text-xs px-3 py-0.5 rounded-full bg-[var(--ac)] text-white">{p.tag}</span>
          </div>
          <p className="text-sm text-slate-300 mt-2">{p.desc}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-4 flex-wrap">
              {p.tech.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 text-xs text-slate-300">{TECH[t]}{t}</span>
              ))}
            </div>
            {p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={p.name}>{Arrow}</a> : Arrow}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [all, setAll] = useState(false);
  const list = all ? PROJECTS_DATA : PROJECTS_DATA.slice(0, 3);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-blue-500/10">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 text-sm text-[var(--ac)] mb-3">
                <span>03</span>
                <span>My Projects</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold">Loyihalarim</h2>
            </div>
            <button onClick={() => setAll(!all)} className="text-sm text-[var(--ac)] hover:opacity-80 transition whitespace-nowrap">
              {all ? "Kamroq ko‘rsatish ↑" : "Barchasini ko‘rish →"}
            </button>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <Card key={p.name} p={p} delay={(i % 3) * 30} />
          ))}
        </div>
      </div>
    </section>
  );
}