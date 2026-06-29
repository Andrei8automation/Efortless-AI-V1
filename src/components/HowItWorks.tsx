import { useState, useEffect } from 'react';
import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Eye, Target, Cpu, CheckCircle2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import BlueprintCrosshair from './BlueprintCrosshair';

const steps = [
  {
    num: '01',
    title: 'We map your operations together',
    desc: "A short conversation to understand how your business actually runs — not how it's supposed to run.",
    icon: Eye,
    detail: "We shadow your team to document exact workflows."
  },
  {
    num: '02',
    title: 'We identify the highest-leverage friction points',
    desc: 'Not everything should be automated. We find what will actually move the needle.',
    icon: Target,
    detail: "Prioritizing tasks that save 10+ hours a week."
  },
  {
    num: '03',
    title: 'We design a system that fits what you already have',
    desc: 'No ripping out tools. No new platforms forced on your team. We work with your existing stack.',
    icon: Cpu,
    detail: "Integrations via API, webhook, or light scripts."
  },
  {
    num: '04',
    title: 'You decide what happens next',
    desc: "We give you a clear picture of what's possible. The decision is entirely yours.",
    icon: CheckCircle2,
    detail: "Full documentation and system handoff provided."
  },
];

export default function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const targetProgress = useMotionValue(0.25); // Defaults to Step 1 (25%)
  const smoothProgress = useSpring(targetProgress, { stiffness: 80, damping: 20 });
  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Update targetProgress when hoveredIndex changes, defaulting to Step 1 (25%) when not hovering
  useEffect(() => {
    if (hoveredIndex !== null) {
      targetProgress.set((hoveredIndex + 1) * 0.25);
    } else {
      targetProgress.set(0.25);
    }
  }, [hoveredIndex, targetProgress]);

  return (
    <section id="how-it-works" className="py-28 bg-[#0a0a0a] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="sticky top-20 z-20 pointer-events-none mb-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#0a0a0a]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-premium uppercase text-gray-500 border border-white/5 shadow-lg shadow-black/20 pointer-events-auto"
          >
            THE PROCESS
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Four steps. No jargon. No surprises.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Blueprint markers for the line */}
          <BlueprintCrosshair className="top-8 -left-1.5 -translate-y-1/2 z-20" />
          <BlueprintCrosshair className="top-8 -right-1.5 -translate-y-1/2 z-20" />

          {/* Base faint line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/5" aria-hidden="true" />
          {/* Animated bright line */}
          <motion.div 
            className="hidden lg:block absolute top-8 left-0 h-px bg-gradient-to-r from-teal-400/0 via-teal-400 to-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)] origin-left z-10"
            style={{ width: lineWidth }}
            aria-hidden="true" 
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <SpotlightCard className="h-full bg-[#0d0d0d] border-white/8 hover:border-teal-400/20 rounded-2xl p-7 transition-colors group flex flex-col justify-between min-h-[220px]">
                    <div>
                      <div className="flex items-start justify-between mb-5">
                        <span className="text-4xl font-bold text-teal-400/20 tabular-nums leading-none group-hover:text-teal-400/35 transition-colors">
                          {step.num}
                        </span>
                        <div className="text-teal-400/30 group-hover:text-teal-400 transition-colors mt-1">
                          <Icon size={20} />
                        </div>
                      </div>
                      <h3 className="text-white font-semibold text-sm mb-2.5 leading-snug">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                    
                    {/* Hover Reveal Details */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-350 ease-in-out overflow-hidden mt-3">
                      <p className="text-teal-400/80 text-xs leading-relaxed border-t border-white/5 pt-2.5">
                        {step.detail}
                      </p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
