import { motion } from 'framer-motion';

interface Props {
  onOpenModal: () => void;
}

export default function FinalCta({ onOpenModal }: Props) {
  return (
    <section className="relative py-36 bg-[#0d0d0d] px-6 overflow-hidden">
      {/* ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(79,158,143,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      {/* dot grid */}
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-60" aria-hidden="true" />

      {/* Drifting Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[10%] left-[10%] w-[320px] h-[320px] rounded-full bg-teal-500/8 blur-[110px] animate-float-orb-1" />
        <div className="absolute bottom-[10%] right-[10%] w-[360px] h-[360px] rounded-full bg-gray-500/8 blur-[130px] animate-float-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-teal-600/5 blur-[95px] animate-float-orb-3" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-5">
            If your business runs on manual work, there's a better way.
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Start with a conversation. No commitment required.
          </p>
          <button
            onClick={onOpenModal}
            className="btn-shimmer relative overflow-hidden bg-teal-400/10 hover:bg-teal-400/20 text-teal-300 font-semibold px-10 py-4 rounded-xl text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-teal-400/30 hover:border-teal-400/60 shadow-[0_0_30px_rgba(79,158,143,0.15)] hover:shadow-[0_0_40px_rgba(79,158,143,0.3)] backdrop-blur-md"
          >
            Request an Automation Audit
          </button>
          <p className="text-gray-600 text-sm mt-4">
            Takes less than 2 minutes. We'll handle the rest.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
