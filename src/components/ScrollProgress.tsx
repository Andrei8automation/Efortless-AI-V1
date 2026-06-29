import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'who-its-for', label: 'Is This For You?' },
  { id: 'how-it-works', label: 'The Process' },
  { id: 'friction-checklist', label: 'Find Your Friction' },
  { id: 'security', label: 'Privacy & Security' },
  { id: 'faq', label: 'Common Questions' },
  { id: 'credibility', label: 'Why Trust This' },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      SECTIONS.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 2px top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-teal-400 origin-left z-50 shadow-[0_0_8px_rgba(79,158,143,0.5)]"
        style={{ scaleX }}
      />

      {/* Floating Vertical dot-trail */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40 hidden md:flex">
        {/* Vertical connector track line */}
        <div className="w-px bg-white/10 absolute top-2 bottom-2 left-1/2 -translate-x-1/2 -z-10" />

        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="group relative flex items-center justify-center w-4 h-4 rounded-full focus:outline-none"
              aria-label={`Scroll to ${sec.label}`}
            >
              {/* Dot */}
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-teal-400 scale-[1.3] shadow-[0_0_8px_rgba(79,158,143,0.8)]'
                    : 'bg-white/25 hover:bg-white/60 hover:scale-110'
                }`}
              />

              {/* Tooltip */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-[#0d0d0d]/90 backdrop-blur border border-white/10 text-[10px] font-medium tracking-wide text-gray-400 whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none mr-1 shadow-lg">
                {sec.label}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
