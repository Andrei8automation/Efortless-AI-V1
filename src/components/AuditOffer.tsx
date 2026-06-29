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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6 text-center">
            The Offer
          </p>
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
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5 text-center">
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
              className="btn-shimmer bg-teal-400 hover:bg-teal-500 text-[#0a0a0a] font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_24px_rgba(79,158,143,0.2)]"
            >
              Request Your Free Audit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
