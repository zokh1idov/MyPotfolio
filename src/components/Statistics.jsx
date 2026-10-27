import { FolderKanban, CalendarClock, Code, Smile, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  { icon: FolderKanban, value: "15+", label: "Real loyiha" },
  { icon: CalendarClock, value: "2+", label: "Yillik tajriba" },
  { icon: Code, value: "6+", label: "Tilar" },
  { icon: Smile, value: "10+", label: "Mijozlar" },
  { icon: BadgeCheck, value: "100%", label: "Ish sifati" },
];

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="border-t border-[rgba(70,120,255,.15)] py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 lg:grid-cols-[0.9fr_2.4fr_1fr]">
        {/* Sarlavha */}
        <Reveal>
          <p className="mb-3 flex gap-3 text-xs font-medium text-[var(--ac)]">
            <span>04</span>
            <span>Statistics</span>
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Raqamlar bilan
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-300">
            Mening faoliyatim va loyihalarim haqida ba'zi raqamlar.
          </p>
        </Reveal>

        {/* Statistika kartalari */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {stats.map(({ icon: Icon, value, label, filled }, i) => (
            <Reveal key={label} delay={150 + i * 100}>
              <button
                type="button"
                className="glass group flex w-full flex-col items-center gap-2 px-3 py-5 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac)] active:translate-y-0"
              >
                <Icon
                  size={18}
                  className={`text-[var(--ac)] transition-transform duration-300 group-hover:scale-110 ${
                    filled ? "fill-[var(--ac)]" : ""
                  }`}
                />
                <span className="text-3xl font-bold transition-colors duration-300 group-hover:text-[var(--ac)] md:text-4xl">
                  {value}
                </span>
                <span className="text-xs text-slate-300">{label}</span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Iqtibos */}
        <Reveal delay={500}>
          <blockquote className="border-l border-white/10 pl-8">
            <span className="text-3xl font-bold leading-none text-[var(--ac)]">
              “
            </span>
            <p className="-mt-1 text-sm font-medium italic leading-relaxed text-[var(--ac)]">
              Hayot — bu <br />
              kod yozish emas, <br />
              balki orzu qilish <br />
              va uni amalga oshirishdir.
            </p>
            <svg
              viewBox="0 0 120 10"
              className="mt-3 h-2 w-28 text-[var(--ac)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path className="draw" pathLength="130" d="M2 7 C 30 2, 70 2, 118 5" />
            </svg>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}