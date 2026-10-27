import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { NAV, ACCENTS } from "./data";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("home");
  const [accent, setAccent] = useState(0);

  // Aktiv bo'limni navbarda belgilash
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Tema rangini almashtirish
  const nextAccent = () => {
    const n = (accent + 1) % ACCENTS.length;
    setAccent(n);
    const root = document.documentElement.style;
    root.setProperty("--ac", ACCENTS[n][0]);
    root.setProperty("--ac2", ACCENTS[n][1]);
  };

  return (
    <>
      <Navbar active={active} onAccent={nextAccent} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Statistics/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}