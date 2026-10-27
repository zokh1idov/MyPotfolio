import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Socials from "./Socials";

const EMAIL = "zokhidov9@gmail.com";
const PHONE = "+998 93 189 20 11";

const info = [
  { icon: Mail, text: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, text: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
  { icon: MapPin, text: "Fergana, O‘zbekiston" },
];

const field =
  "w-full rounded-lg border border-[rgba(70,120,255,.25)] bg-[rgba(9,20,48,.6)] px-3 py-2.5 text-sm text-slate-200 outline-none transition placeholder:text-slate-400 hover:border-[rgba(70,120,255,.5)] focus:border-[var(--ac)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--ac)_20%,transparent)]";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Backend yo'q: xabar foydalanuvchining pochta ilovasida ochiladi
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio: ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.phone})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="border-t border-[rgba(70,120,255,.15)] py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-5 lg:grid-cols-[1fr_1.7fr_0.9fr]">
        {/* Chap: sarlavha va ma'lumotlar */}
        <Reveal>
          <p className="mb-3 flex gap-3 text-xs font-medium text-[var(--ac)]">
            <span>05</span>
            <span>Contact</span>
          </p>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Aloqa
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            <span className="font-medium text-white">
              Menga xabar yozing, birgalikda
            </span>
            <br />
            <span className="text-slate-300">yangi loyihani boshlaymiz!</span>
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            {info.map(({ icon: Icon, text, href }) => {
              const row = (
                <>
                  <Icon size={16} className="shrink-0 text-[var(--ac)]" />
                  <span>{text}</span>
                </>
              );
              return (
                <li key={text}>
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-3 transition-colors hover:text-[var(--ac)]"
                    >
                      {row}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3">{row}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* O'rta: forma */}
        <Reveal delay={150}>
          <form onSubmit={onSubmit} className="glass grid gap-3 p-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Ismingiz"
                required
                className={field}
              />
              <input
                name="phone"
                type="tel"
                inputMode="tel"
                value={form.phone}
                onChange={onChange}
                placeholder="Telefon raqamingiz"
                required
                className={field}
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Xabar"
              required
              rows={4}
              className={`${field} resize-none`}
            />
            <button type="submit" className="bp w-full justify-center rounded-lg">
              <Send size={15} />
              Xabar yuborish
              <ArrowRight size={15} />
            </button>
          </form>
        </Reveal>

        {/* O'ng: ijtimoiy tarmoqlar */}
        <Reveal delay={300}>
          <div className="glass relative p-4">
            {/* Burchakdagi nurli shar */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_35%_30%,var(--ac2),var(--ac)_45%,transparent_72%)] opacity-70" />
            <div className="relative">
              <h3 className="mb-4 text-sm font-medium">Ijtimoiy tarmoqlar</h3>
              <Socials />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}