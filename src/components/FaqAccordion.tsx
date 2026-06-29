import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Do we have to replace our current software?',
    a: "No. We build bridges between the tools you already use. The goal is to make your existing stack work together — not to sell you a new one.",
  },
  {
    q: 'How much time will this take from our team?',
    a: "Less than 45 minutes to scope the audit. After that, implementation is handled on our side. We'll check in at key milestones, but we don't need to live in your calendar.",
  },
  {
    q: 'What if something breaks or behaves unexpectedly?',
    a: "Every system we build includes fail-safes, error logging, and fallback behavior. If something goes wrong, it fails quietly and notifies the right person — it doesn't cascade into a bigger problem.",
  },
  {
    q: "We've tried automation tools before and they didn't stick. Why is this different?",
    a: "Most automation tools fail because they're configured around ideal conditions, not real ones. We build for edge cases, exceptions, and the messy reality of how your team actually works.",
  },
  {
    q: 'What does a typical project cost?',
    a: "Scope varies, but most first engagements fall in the $3,000–$12,000 range depending on complexity. We're not the cheapest option — but most clients see full payback within 30–60 days from time saved alone. The audit is always free, with no obligation to move forward.",
  },
  {
    q: 'How long does it take to get something running?',
    a: "Most systems go live within 2–4 weeks from kickoff. Simpler automations can be production-ready in under a week. We don't disappear for months — you'll see working progress early.",
  },
  {
    q: 'Do you provide ongoing support after the build?',
    a: "Yes. Every delivery includes full documentation and a handover session. We offer optional maintenance retainers for monitoring, updates, and iteration — but there's no lock-in. Many clients run their systems independently after handoff.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 bg-[#141414] px-6">
      <div className="max-w-3xl mx-auto">
        <div className="sticky top-20 z-20 pointer-events-none mb-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#0a0a0a]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-gray-500 border border-white/5 shadow-lg shadow-black/20 pointer-events-auto"
          >
            COMMON QUESTIONS
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            We've heard the objections. Here are straight answers.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-white/10 divide-y divide-white/8"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`transition-colors ${open === i ? 'bg-[#101010]' : 'bg-[#0d0d0d] hover:bg-[#0f0f0f]'}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className={`text-sm font-medium pr-4 transition-colors ${open === i ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                  {faq.q}
                </span>
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? 'border-teal-400/40 bg-teal-400/10 rotate-180' : 'border-white/15'}`}>
                  <ChevronDown size={13} className={`transition-colors ${open === i ? 'text-teal-400' : 'text-gray-500'}`} />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm leading-relaxed px-6 pb-5 border-t border-white/5 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
