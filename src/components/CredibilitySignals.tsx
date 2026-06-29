import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrench, Settings, Building2, ShieldCheck } from 'lucide-react';

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
      className="card-glow bg-[#0d0d0d] rounded-none p-6 md:p-8 flex flex-col"
    >
      <div className="w-9 h-9 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center mb-5">
        <Icon size={16} className="text-teal-400" />
      </div>
      <p className="text-white font-bold text-3xl tabular-nums mb-1.5">
        {count}{suffix}
      </p>
      <p className="text-gray-500 text-xs leading-relaxed">{label}</p>
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
    <section className="py-28 bg-[#0a0a0a] dot-grid px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
            Why Trust This
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Built by people who've worked inside operations, not just around them.
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8 mb-16">
          {stats.map((s, i) => (
            <StatCard key={i} icon={s.icon} value={s.value} suffix={s.suffix} label={s.label} index={i} triggered={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-gray-600 text-xs font-medium tracking-widest uppercase mb-5">
            Trusted by operators across:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {placeholders.map((name, i) => (
              <div key={i} className="px-5 py-2.5 rounded-lg border border-white/8 bg-white/[0.02] text-gray-600 text-xs font-medium hover:border-white/15 hover:text-gray-400 transition-colors cursor-default">
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
