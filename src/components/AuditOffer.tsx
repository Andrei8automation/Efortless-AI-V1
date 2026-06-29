import { motion } from 'framer-motion';

interface Props {
  onOpenModal: () => void;
}

const covers = [
  'Current workflow mapping',
  'Identification of automation opportunities',
  'Honest assessment of complexity and effort',
  'A prioritized list of where to start',
  'No upsell. No pressure. Just a clear picture.',
];

export default function AuditOffer({ onOpenModal }: Props) {
  return (
    <section className="py-28 bg-[#111111] dot-grid px-6">
      <div className="max-w-3xl mx-auto">
        <div className="sticky top-20 z-20 pointer-events-none mb-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#0a0a0a]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-premium uppercase text-gray-500 border border-white/5 shadow-lg shadow-black/20 pointer-events-auto"
          >
            THE OFFER
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight text-center mb-8">
            Free Automation Audit —{' '}
            <span className="text-teal-400">No Strings Attached</span>
          </h2>

          <p className="text-gray-400 text-base leading-relaxed mb-4">
            In a single focused session, we review how your business currently operates, identify where automation would have the highest impact, and give you a plain-language breakdown of what's possible — and what isn't.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-10">
            You'll walk away with clarity, even if we never work together.
          </p>

          <div className="card-glow relative bg-[#0d0d0d] border border-teal-400/15 rounded-2xl p-6 md:p-8 mb-10 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,158,143,0.06) 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            <h3 className="text-white font-semibold text-xs uppercase tracking-premium mb-5 text-center">
              What the audit covers
            </h3>
            <ul className="space-y-3">
              {covers.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <button
              onClick={onOpenModal}
              className="btn-shimmer relative overflow-hidden bg-teal-400/10 hover:bg-teal-400/20 text-teal-300 font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-teal-400/30 hover:border-teal-400/60 shadow-[0_0_30px_rgba(79,158,143,0.15)] hover:shadow-[0_0_40px_rgba(79,158,143,0.3)] backdrop-blur-md"
            >
              Request Your Free Audit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
