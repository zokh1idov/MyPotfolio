import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

/* Raqamlarni o'zingizga moslab o'zgartiring */
const STATS = [
  { value: 2, suffix: "+", label: "Yillik tajriba", icon: "calendar" },
  { value: 60, suffix: "+", label: "Loyihalar", icon: "folder" },
  { value: 100, suffix: "%", label: "Sifatli ish", icon: "bolt" },
];

const ICONS = {
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M8 3v4M16 3v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeWidth="2.4" />
    </>
  ),
  folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
};

function Icon({ name }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[name]}
    </svg>
  );
}

// Ekranga kirganda 0 dan boshlab sanaydi
function useCountUp(target, duration = 1400) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (reduce) return setN(target);
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return [ref, n];
}

function Stat({ value, suffix, label, icon, delay }) {
  const [ref, n] = useCountUp(value);
  return (
    <Reveal delay={delay}>
      <div ref={ref} className="group flex items-center gap-5">
        <div className="w-14 h-14 shrink-0 rounded-2xl grid place-items-center bg-[var(--ac)]/10 border border-[var(--ac)]/25 text-[var(--ac)] transition duration-300 group-hover:shadow-[0_0_26px_-4px_var(--ac)] group-hover:-translate-y-1">
          <Icon name={icon} />
        </div>
        <div>
          <div className="text-2xl font-semibold leading-none">{n}{suffix}</div>
          <div className="text-sm text-slate-400 mt-1">{label}</div>
        </div>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-blue-500/10">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-[1.15fr_.8fr_1fr] gap-12 lg:gap-10 items-center">
        {/* 1) Matn */}
        <Reveal>
          <div className="flex items-center gap-3 text-sm text-[var(--ac)] mb-3">
            <span>01</span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">Men haqimda</h2>
          <p className="text-slate-300 text-[15px] leading-relaxed max-w-md">
            Salom! Men Zohidov Furqatjon, frontend dasturchiman. Mening asosiy
            maqsadim — zamonaviy, tezkor va foydalanuvchi uchun qulay veb-ilovalar
            yaratish. Doim yangi texnologiyalarni o‘rganishni va o‘z ustimda
            ishlashni yaxshi ko‘raman.
          </p>
          <a href="#experience" className="bo mt-7 !py-2.5 !px-5 !text-sm">
            Batafsil <span aria-hidden="true">→</span>
          </a>
        </Reveal>

        {/* 2) Statistika */}
        <div className="grid gap-8 lg:justify-self-center">
          {STATS.map((s, i) => (
            <Stat key={s.label} {...s} delay={150 + i * 120} />
          ))}
        </div>

        {/* 3) Iqtibos */}
        <Reveal delay={250}>
          <figure className="relative glass !rounded-2xl p-7 pt-9 mt-5">
            <span className="absolute -top-5 left-6 w-11 h-11 rounded-full grid place-items-center bg-[#06122b] border border-[var(--ac)] text-[var(--ac)] shadow-[0_0_20px_-4px_var(--ac)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 6C4.2 6 3 8.2 3 11v7h7v-7H6.5C6.5 9.3 7.3 8.3 9 8V6H7zm10 0c-2.8 0-4 2.2-4 5v7h7v-7h-3.5c0-1.700.8-2.700 2.500-3V6h-2z" />
              </svg>
            </span>
            <blockquote className="text-lg leading-snug font-medium">
              “Kichik qadamlar ham katta natijalarga olib keladi.”
            </blockquote>
            <figcaption className="mt-5 flex flex-col items-start">
              <span className="sig">Zohidov</span>
              <svg className="-mt-1 ml-1" width="120" height="14" viewBox="0 0 120 14" fill="none">
                <path className="draw" d="M2 9C30 2 70 2 118 7" stroke="var(--ac)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}