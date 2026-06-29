import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'We map your operations together',
    desc: "A short conversation to understand how your business actually runs — not how it's supposed to run.",
  },
  {
    num: '02',
    title: 'We identify the highest-leverage friction points',
    desc: 'Not everything should be automated. We find what will actually move the needle.',
  },
  {
    num: '03',
    title: 'We design a system that fits what you already have',
    desc: 'No ripping out tools. No new platforms forced on your team. We work with your existing stack.',
  },
  {
    num: '04',
    title: 'You decide what happens next',
    desc: "We give you a clear picture of what's possible. The decision is entirely yours.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-[#0a0a0a] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Four steps. No jargon. No surprises.
          </h2>
        </motion.div>

        {/* connecting line on desktop */}
        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" aria-hidden="true" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-[#0d0d0d] border border-white/8 hover:border-teal-400/20 rounded-2xl p-7 transition-colors group"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl font-bold text-teal-400/20 tabular-nums leading-none group-hover:text-teal-400/35 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-teal-400/30 mt-2 group-hover:bg-teal-400/60 transition-colors" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2.5 leading-snug">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
