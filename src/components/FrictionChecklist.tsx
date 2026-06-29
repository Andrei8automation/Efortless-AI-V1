import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onOpenModal: () => void;
}

const PILLS = [
  { id: 'data-entry', label: 'Manual data entry across multiple tools' },
  { id: 'disconnected', label: "Disconnected software that doesn't sync" },
  { id: 'reporting', label: 'Repetitive reporting or status updates' },
  { id: 'onboarding', label: 'Slow client or customer onboarding' },
  { id: 'approvals', label: 'Internal approvals stuck in email or chat' },
  { id: 'scheduling', label: 'Scheduling and coordination overhead' },
  { id: 'copypaste', label: 'Copy-pasting between spreadsheets and systems' },
  { id: 'handoffs', label: 'Inconsistent handoffs between team members' },
];

function getMessage(count: number): string {
  if (count <= 2) return "You've identified a focused area. An audit can clarify exactly what's automatable here.";
  if (count <= 4) return "This level of friction is common in growing operations. There's likely significant time to recover.";
  return "This is a meaningful operational load. An audit would give you a clear picture of what to prioritize first.";
}

export default function FrictionChecklist({ onOpenModal }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const count = selected.size;

  return (
    <section className="py-28 bg-[#111111] px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
            Find Your Friction
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
            Where is your business losing time right now?
          </h2>
          <p className="text-gray-500 text-sm">
            Select everything that applies. We'll show you where automation typically helps most.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2.5 justify-center mb-10"
          role="group"
          aria-label="Friction point checklist"
        >
          {PILLS.map((pill, i) => {
            const active = selected.has(pill.id);
            return (
              <motion.button
                key={pill.id}
                onClick={() => toggle(pill.id)}
                aria-pressed={active}
                whileTap={{ scale: 0.96 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 + i * 0.04 }}
                className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  active
                    ? 'border-teal-400/60 bg-teal-400/12 text-teal-300 shadow-[0_0_12px_rgba(79,158,143,0.15)]'
                    : 'border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-gray-200 hover:bg-white/[0.05]'
                }`}
              >
                {active && <span className="mr-1.5">✓</span>}
                {pill.label}
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {count > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="card-glow relative border border-teal-400/20 bg-teal-400/5 rounded-2xl p-7 text-center overflow-hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(79,158,143,0.07) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-xs font-medium text-teal-400 bg-teal-400/10 border border-teal-400/20 rounded-full px-2.5 py-1">
                  {count} area{count !== 1 ? 's' : ''} selected
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {getMessage(count)}
              </p>
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 text-teal-400 hover:text-white hover:bg-teal-400 font-semibold text-sm border border-teal-400/40 hover:border-teal-400 px-5 py-2.5 rounded-lg transition-all duration-200"
              >
                See What an Audit Covers →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
