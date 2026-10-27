import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(70,120,255,.15)] py-8">
      <div className="mx-auto grid max-w-6xl items-center gap-4 px-5 text-center text-xs text-slate-400 md:grid-cols-3">
        <a
          href="#home"
          className="justify-self-center text-xl font-medium text-white transition-opacity hover:opacity-80 md:justify-self-start"
        >
          Zohidovdev<span className="text-[var(--ac)]">.</span>
        </a>

        <p>© {new Date().getFullYear()} Furqatjon Barcha huquqlar himoyalangan.</p>

        <p className="flex items-center justify-center gap-2 md:justify-self-end">
          Frontend Developer
          <Heart size={13} className="fill-[var(--ac)] text-[var(--ac)]" />
        </p>
      </div>
    </footer>
  );
}