import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import BlueprintCrosshair from './BlueprintCrosshair';

const testimonials = [
  {
    quote:
      "We were spending 3+ hours every morning manually moving data between our CRM and billing system. That's gone. Completely gone. First week after go-live we recovered 15 hours across the team.",
    name: 'Rachel T.',
    role: 'VP of Operations',
    industry: 'B2B SaaS',
    metric: '15 hrs / week recovered',
  },
  {
    quote:
      "I was skeptical because we'd tried Zapier and Make ourselves and nothing stuck. This was different — they built around how we actually work, not how we're supposed to work. Six months later, still running without issues.",
    name: 'Marcus D.',
    role: 'Founder & CEO',
    industry: 'Professional Services',
    metric: '0 manual handoffs',
  },
  {
    quote:
      "Client onboarding went from 4 days to same-day. The audit surfaced two bottlenecks we didn't even know existed. The ROI was obvious within the first 30 days.",
    name: 'Priya K.',
    role: 'Director of Client Success',
    industry: 'Logistics',
    metric: '4 days → same day',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 bg-[#141414] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="sticky top-20 z-20 pointer-events-none mb-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#0a0a0a]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-premium uppercase text-gray-500 border border-white/5 shadow-lg shadow-black/20 pointer-events-auto"
          >
            CLIENT RESULTS
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Real operators. Real outcomes.
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            These aren't edge cases — they're the standard result when you fix the right friction points.
          </p>
        </motion.div>

        <div className="relative">
          <BlueprintCrosshair className="-top-1.5 -left-1.5 z-10" />
          <BlueprintCrosshair className="-top-1.5 -right-1.5 z-10" />
          <BlueprintCrosshair className="-bottom-1.5 -left-1.5 z-10" />
          <BlueprintCrosshair className="-bottom-1.5 -right-1.5 z-10" />

          <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <SpotlightCard className="h-full bg-[#0d0d0d] p-7 flex flex-col gap-6 hover:bg-white/[0.02]">
                  {/* Metric badge */}
                  <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-teal-400/8 border border-teal-400/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                    <span className="text-teal-300 text-xs font-semibold tabular-nums">{t.metric}</span>
                  </div>

                  {/* Quote */}
                  <div className="flex-1 relative">
                    <Quote size={18} className="text-teal-400/20 absolute -top-1 -left-0.5 rotate-180" />
                    <p className="text-gray-300 text-sm leading-relaxed pt-4 pl-1">
                      {t.quote}
                    </p>
                  </div>

                  {/* Attribution */}
                  <div className="border-t border-white/5 pt-5 flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full bg-teal-400/10 border border-teal-400/20 flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <span className="text-teal-400 text-xs font-bold">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.role} · {t.industry}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
