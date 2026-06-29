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
            className="btn-shimmer bg-teal-400 hover:bg-teal-500 text-[#0a0a0a] font-semibold px-10 py-4 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(79,158,143,0.3)]"
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
