import { useEffect, useState } from 'react';

interface Props {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" aria-hidden="true" />
          <span className="text-white font-semibold text-base tracking-tight">Effortless AI</span>
        </div>
        <button
          onClick={onOpenModal}
          className="text-sm font-semibold text-teal-300 border border-teal-400/30 bg-teal-400/10 hover:bg-teal-400/20 hover:border-teal-400/60 hover:text-teal-200 px-5 py-2 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(79,158,143,0.1)] hover:shadow-[0_0_20px_rgba(79,158,143,0.2)] backdrop-blur-md"
          aria-label="Request an Automation Audit"
        >
          Request an Automation Audit
        </button>
      </div>
    </nav>
  );
}
