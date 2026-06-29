import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrench, Settings, Building2, ShieldCheck } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import BlueprintCrosshair from './BlueprintCrosshair';

function useCountUp(target: number, duration = 1400, triggered: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);
  return count;
}

interface StatProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  index: number;
  triggered: boolean;
}

function StatCard({ icon: Icon, value, suffix, label, index, triggered }: StatProps) {
  const count = useCountUp(value, 1200, triggered);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="h-full"
    >
      <SpotlightCard className="h-full bg-[#0d0d0d] rounded-none p-6 md:p-8 flex flex-col hover:bg-white/[0.02]">
        <div className="w-9 h-9 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center mb-5">
          <Icon size={16} className="text-teal-400" />
        </div>
        <p className="text-white font-bold text-3xl tabular-nums mb-1.5">
          {count}{suffix}
        </p>
        <p className="text-gray-500 text-xs leading-relaxed">{label}</p>
      </SpotlightCard>
    </motion.div>
  );
}

const stats = [
  { icon: Wrench,      value: 8,  suffix: '+ Years',       label: 'Working with business systems and data infrastructure' },
  { icon: Settings,    value: 40, suffix: '+ Automations', label: 'Running in production across client environments' },
  { icon: Building2,   value: 12, suffix: ' Industries',   label: 'From logistics to professional services to e-commerce' },
  { icon: ShieldCheck, value: 100,suffix: '% Private',     label: 'No public model training. Ever.' },
];

const placeholders = ['Logistics', 'Professional Services', 'E-Commerce', 'Healthcare Ops', 'Financial Services'];

export default function CredibilitySignals() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="credibility" className="py-28 bg-[#0a0a0a] dot-grid px-6">
      <div className="max-w-6xl mx-auto">
        <div className="sticky top-20 z-20 pointer-events-none mb-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#0a0a0a]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-premium uppercase text-gray-500 border border-white/5 shadow-lg shadow-black/20 pointer-events-auto"
          >
            WHY TRUST THIS
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
            Built by people who've worked inside operations, not just around them.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Blueprint markers */}
          <BlueprintCrosshair className="-top-1.5 -left-1.5 z-10" />
          <BlueprintCrosshair className="-top-1.5 -right-1.5 z-10" />
          <BlueprintCrosshair className="-bottom-1.5 -left-1.5 z-10" />
          <BlueprintCrosshair className="-bottom-1.5 -right-1.5 z-10" />

          <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8 mb-16 relative z-0">
            {stats.map((s, i) => (
              <StatCard key={i} icon={s.icon} value={s.value} suffix={s.suffix} label={s.label} index={i} triggered={inView} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto overflow-hidden"
        >
          <p className="text-gray-600 text-xs font-medium tracking-premium uppercase mb-5 text-center">
            Trusted by operators across:
          </p>
          <div className="relative w-full overflow-hidden">
            {/* Fade masks */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <div className="flex w-max">
              <motion.div
                className="flex gap-4 pr-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 20,
                  repeat: Infinity,
                }}
              >
                {/* Double-duplicated list of placeholders */}
                {[...placeholders, ...placeholders].map((name, i) => (
                  <div
                    key={i}
                    className="px-6 py-3 rounded-lg border border-white/8 bg-white/[0.02] text-gray-400 text-xs font-medium hover:border-teal-400/35 hover:text-teal-400 transition-all duration-300 cursor-default whitespace-nowrap"
                  >
                    {name}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
