import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const points = [
  'Zero public model training on proprietary workflows. Your internal processes stay internal.',
  'All automation logic is built and deployed within your environment or a private, isolated instance.',
  'We do not store, share, or reference client workflow data outside of the engagement.',
  'Enterprise-grade data handling practices applied to every project, regardless of company size.',
];

export default function SecuritySection() {
  return (
    <section className="py-28 bg-[#0a0a0a] px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-glow relative bg-[#0d0d0d] border border-teal-400/15 rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          {/* subtle corner glow */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle at top right, rgba(79,158,143,0.06) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">
            Privacy &amp; Data Security
          </p>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center flex-shrink-0">
              <Lock size={18} className="text-teal-400" />
            </div>
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              Your workflows are not training data.
            </h2>
          </div>

          <ul className="space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
