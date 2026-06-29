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
          className="text-sm font-medium text-gray-300 border border-white/15 hover:border-teal-400/50 hover:text-white hover:bg-teal-400/5 px-4 py-2 rounded-lg transition-all duration-200"
          aria-label="Request an Automation Audit"
        >
          Request an Automation Audit
        </button>
      </div>
    </nav>
  );
}
