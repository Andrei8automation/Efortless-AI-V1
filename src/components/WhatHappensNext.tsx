import { motion } from 'framer-motion';

const steps = [
  {
    num: 1,
    title: "You'll receive a confirmation",
    desc: 'A short message acknowledging your request. No automated sales sequence.',
  },
  {
    num: 2,
    title: "We'll reach out within 1 business day",
    desc: 'A real person, not a bot, to schedule a 20-minute intro call.',
  },
  {
    num: 3,
    title: 'The intro call is not a sales call',
    desc: "We ask questions, you ask questions. We figure out if an audit makes sense.",
  },
  {
    num: 4,
    title: 'You get the audit findings',
    desc: 'Clear, written recommendations. You decide what to do with them.',
  },
];

export default function WhatHappensNext() {
  return (
    <section className="py-28 bg-[#0a0a0a] px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
            After You Submit
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Here's exactly what to expect.
          </h2>
        </motion.div>

        <div className="relative pl-6">
          {/* vertical connecting line */}
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-teal-400/30 via-teal-400/10 to-transparent" aria-hidden="true" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative flex items-start gap-5 bg-[#0d0d0d] border border-white/8 hover:border-white/12 rounded-xl p-6 transition-colors"
              >
                {/* dot on the line */}
                <span className="absolute -left-[19px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0a0a0a] border-2 border-teal-400/50" aria-hidden="true" />
                <span className="w-8 h-8 rounded-full bg-teal-400/10 border border-teal-400/20 flex items-center justify-center flex-shrink-0 text-teal-400 text-sm font-bold">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
