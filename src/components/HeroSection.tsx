import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Hero3DBackground from './Hero3DBackground';

interface Props {
  onOpenModal: () => void;
}

const phrases = [
  "manual work",
  "spreadsheet work",
  "copy-paste work",
  "approval chains",
  "data entry"
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function HeroSection({ onOpenModal }: Props) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-[#0a0a0a] overflow-hidden">
      {/* true 3D background element */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <Hero3DBackground />
      </motion.div>

      {/* ambient teal glow */}
      <motion.div className="hero-glow absolute inset-0 pointer-events-none" style={{ y: glowY }} aria-hidden="true" />

      {/* faint horizontal lines for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '100% 80px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-teal-400/25 bg-teal-400/5 rounded-full px-4 py-1.5 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 text-xs font-medium tracking-premium uppercase">B2B Automation Agency</span>
        </motion.div>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] font-semibold text-white leading-[1.35] tracking-tight mb-7 flex flex-wrap justify-center items-center gap-x-[0.22em] gap-y-[0.1em]"
        >
          {"Your business runs on".split(" ").map((word, i) => (
            <motion.span key={`w1-${i}`} variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          ))}
          
          <span className="relative inline-flex items-center gap-2.5 px-4 py-1.5 mx-1 rounded-2xl bg-teal-400/5 border border-teal-400/20 text-teal-400 font-bold align-middle select-none">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse flex-shrink-0" />
            <span className="relative inline-block">
              <span className="invisible select-none pointer-events-none" aria-hidden="true">
                spreadsheet work
              </span>
              <span className="absolute left-0 right-0 top-0 text-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentPhraseIndex}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-teal-400 to-teal-300"
                  >
                    {phrases[currentPhraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </span>

          {"that should have been automated".split(" ").map((word, i) => (
            <motion.span key={`w2-${i}`} variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          ))}

          <motion.span variants={wordVariants} className="inline-block text-teal-400">
            yesterday.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Effortless AI builds quiet, reliable automation systems that eliminate operational drag — not AI experiments, not chatbots. Systems that work while you focus on what matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={onOpenModal}
            className="btn-shimmer relative overflow-hidden bg-teal-400/10 hover:bg-teal-400/20 text-teal-300 font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-teal-400/30 hover:border-teal-400/60 shadow-[0_0_30px_rgba(79,158,143,0.15)] hover:shadow-[0_0_40px_rgba(79,158,143,0.3)] backdrop-blur-md"
          >
            Request an Automation Audit
          </button>
          <p className="text-gray-600 text-sm">
            No commitment. No sales pitch. Just clarity on where automation can help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
