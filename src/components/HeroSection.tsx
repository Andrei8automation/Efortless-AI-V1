import { motion } from 'framer-motion';

interface Props {
  onOpenModal: () => void;
}

export default function HeroSection({ onOpenModal }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-[#0a0a0a] overflow-hidden">
      {/* ambient teal glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* faint horizontal lines for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '100% 80px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-teal-400/25 bg-teal-400/5 rounded-full px-4 py-1.5 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 text-xs font-medium tracking-widest uppercase">B2B Automation Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-[3.75rem] font-semibold text-white leading-[1.12] tracking-tight mb-7"
        >
          Your business runs on manual work that should have been automated{' '}
          <span className="text-teal-400">yesterday.</span>
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
            className="btn-shimmer bg-teal-400 hover:bg-teal-500 text-[#0a0a0a] font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_32px_rgba(79,158,143,0.25)]"
          >
            Request an Automation Audit
          </button>
          <p className="text-gray-600 text-sm">
            No commitment. No sales pitch. Just clarity on where automation can help.
          </p>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <span className="text-gray-700 text-[10px] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-6 bg-gradient-to-b from-gray-700 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
