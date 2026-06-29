import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onOpenModal: () => void;
}

const PILLS = [
  { id: 'data-entry', label: 'Manual data entry across multiple tools', hours: 12 },
  { id: 'disconnected', label: "Disconnected software that doesn't sync", hours: 8 },
  { id: 'reporting', label: 'Repetitive reporting or status updates', hours: 6 },
  { id: 'onboarding', label: 'Slow client or customer onboarding', hours: 10 },
  { id: 'approvals', label: 'Internal approvals stuck in email or chat', hours: 5 },
  { id: 'scheduling', label: 'Scheduling and coordination overhead', hours: 4 },
  { id: 'copypaste', label: 'Copy-pasting between spreadsheets and systems', hours: 15 },
  { id: 'handoffs', label: 'Inconsistent handoffs between team members', hours: 7 },
];

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = displayValue;
    const end = value;
    if (start === end) return;

    const duration = 800; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = start + (end - start) * ease;
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <>{Math.round(displayValue).toLocaleString()}</>;
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
  const totalHours = Array.from(selected).reduce((acc, id) => {
    const pill = PILLS.find(p => p.id === id);
    return acc + (pill ? pill.hours : 0);
  }, 0);
  const totalCost = totalHours * 65; // $65/hr average burdened rate

  return (
    <section id="friction-checklist" className="py-28 bg-[#0a0a0a] border-t border-white/5 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Checklist */}
        <div>
          <div className="mb-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-[#0a0a0a]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-premium uppercase text-gray-500 border border-white/5 shadow-lg shadow-black/20 pointer-events-auto mb-6"
            >
              FIND YOUR FRICTION
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4"
            >
              Where is your business losing time right now?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-sm leading-relaxed"
            >
              Select the bottlenecks holding your team back. We'll show you the hidden cost of maintaining the status quo.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
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
                  className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] text-left ${
                    active
                      ? 'border-teal-400/60 bg-teal-400/10 text-teal-300 shadow-[0_0_15px_rgba(79,158,143,0.15)]'
                      : 'border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20 hover:text-gray-200 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${active ? 'border-teal-400 bg-teal-400' : 'border-gray-600'}`}>
                      {active && <span className="text-black text-[10px] font-bold">✓</span>}
                    </div>
                    {pill.label}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Right Side: Interactive Tally Panel */}
        <div className="sticky top-32 lg:mt-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-glow relative overflow-hidden bg-[#0d0d0d] border border-white/8 rounded-3xl p-8 lg:p-10"
          >
            {/* Background spotlight */}
            <div 
              className="absolute -inset-px opacity-50 pointer-events-none"
              style={{
                background: count > 0 
                  ? 'radial-gradient(circle at top right, rgba(45, 212, 191, 0.15), transparent 60%)' 
                  : 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.03), transparent 60%)',
                transition: 'background 0.5s ease'
              }}
            />

            <h3 className="text-gray-400 text-xs font-semibold tracking-premium uppercase mb-8">Estimated Operational Drag</h3>

            <div className="space-y-8">
              <div>
                <p className="text-gray-500 text-sm mb-2">Hours lost per week</p>
                <div className="text-5xl font-bold text-white tabular-nums tracking-tight font-editorial italic">
                  <AnimatedNumber value={totalHours} /> <span className="text-2xl text-gray-600 not-italic">hrs</span>
                </div>
              </div>

              <div className="h-px w-full bg-white/5" />

              <div>
                <p className="text-gray-500 text-sm mb-2">Estimated financial bleed (Monthly)</p>
                <div className="text-4xl font-bold text-teal-400 tabular-nums tracking-tight">
                  $<AnimatedNumber value={totalCost * 4} />
                </div>
                <p className="text-xs text-gray-600 mt-2">Based on avg. $65/hr burdened rate</p>
              </div>
            </div>

            <AnimatePresence>
              {count > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: 20, height: 0 }}
                  className="mt-8 pt-8 border-t border-white/5 overflow-hidden"
                >
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    You've identified <strong>{count}</strong> friction point{count > 1 ? 's' : ''}. Our automation systems typically recover 60-80% of this lost time within the first 30 days.
                  </p>
                  <button
                    onClick={onOpenModal}
                    className="w-full relative overflow-hidden bg-teal-400/10 hover:bg-teal-400/20 text-teal-300 font-semibold py-3.5 rounded-lg transition-all duration-300 text-sm border border-teal-400/30 hover:border-teal-400/60 shadow-[0_0_20px_rgba(79,158,143,0.1)] hover:shadow-[0_0_30px_rgba(79,158,143,0.2)] backdrop-blur-md"
                  >
                    Request an Automation Audit
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
