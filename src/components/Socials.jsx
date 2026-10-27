import { SOCIALS } from "../data";

export default function Socials() {
  return (
    <div className="flex gap-3">
      {SOCIALS.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className="w-10 h-10 grid place-items-center rounded-full text-blue-300 hover:text-white hover:bg-blue-600/30 transition"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d={s.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
