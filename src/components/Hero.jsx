import Reveal from "./Reveal";
import Socials from "./Socials";
import { CV_URL } from "../data";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 flex items-center">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center w-full">
        {/* Chap tomon */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full glass">
              <i className="w-2 h-2 rounded-full bg-blue-500" />
              Frontend Developer
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight ">
              Salom, men
              <br />
              <span className="gt">Furqatjonman</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-slate-300 max-w-md">
              React, Tailwind CSS va zamonaviy texnologiyalar bilan chiroyli, tez va
              animatsiyali veb-saytlar yarataman.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="bp">Loyihalarni ko‘rish →</a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bo"
              >
                CV yuklab olish
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8"><Socials /></div>
          </Reveal>
        </div>

        {/* O'ng tomon: nurli doira */}
        <Reveal delay={200} className="grid place-items-center">
          <div className="float">
            <div className="ring grid place-items-center">
              <div className="orb"><i /></div>
              <div className="orb r"><i /></div>
              <div className="pop">
                <img src="/imgs/zf.png" alt="Zohidov Furqatjon" draggable="false" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}