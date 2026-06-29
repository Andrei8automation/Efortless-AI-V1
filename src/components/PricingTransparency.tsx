import { motion } from 'framer-motion';
import { DollarSign, Clock, Package } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const tiers = [
  {
    icon: Package,
    label: 'Focused Automation',
    range: '$3k – $6k',
    description: 'One workflow, end to end. Ideal for a single high-friction process that needs solving fast.',
    timeline: '1–2 weeks',
  },
  {
    icon: Clock,
    label: 'Multi-System Build',
    range: '$6k – $12k',
    description: 'Multiple connected automations across 2–3 tools. For teams with compounding friction.',
    timeline: '2–4 weeks',
    highlight: true,
  },
  {
    icon: DollarSign,
    label: 'Ops Transformation',
    range: 'Custom',
    description: 'Full operational audit plus a system of automations. For businesses ready to eliminate the category of manual work.',
    timeline: '4–8 weeks',
  },
];

export default function PricingTransparency() {
  return (
    <section id="pricing" className="py-28 bg-[#0a0a0a] border-t border-white/5 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="sticky top-20 z-20 pointer-events-none mb-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#0a0a0a]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-premium uppercase text-gray-500 border border-white/5 shadow-lg shadow-black/20 pointer-events-auto"
          >
            INVESTMENT
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Transparent from the start.
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            No vague "contact us for pricing." Here's a realistic range based on scope — the audit will tell us exactly where you land.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <SpotlightCard
                  className={`h-full rounded-2xl p-7 flex flex-col gap-5 transition-colors ${
                    tier.highlight
                      ? 'bg-teal-400/5 border border-teal-400/25 hover:border-teal-400/40'
                      : 'bg-[#0d0d0d] border border-white/8 hover:border-white/15'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${tier.highlight ? 'bg-teal-400/15 border-teal-400/30' : 'bg-white/5 border-white/10'}`}>
                    <Icon size={16} className={tier.highlight ? 'text-teal-400' : 'text-gray-400'} />
                  </div>

                  <div>
                    <p className={`text-xs font-semibold tracking-premium uppercase mb-1 ${tier.highlight ? 'text-teal-400/80' : 'text-gray-500'}`}>
                      {tier.label}
                    </p>
                    <p className={`text-3xl font-bold tracking-tight tabular-nums ${tier.highlight ? 'text-teal-300' : 'text-white'}`}>
                      {tier.range}
                    </p>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {tier.description}
                  </p>

                  <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                    <Clock size={12} className="text-gray-600 flex-shrink-0" />
                    <p className="text-gray-600 text-xs">Typical timeline: {tier.timeline}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-600 text-xs leading-relaxed max-w-md mx-auto">
            The audit is always free. We'll tell you what scope applies to your situation before any commitment is made.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
