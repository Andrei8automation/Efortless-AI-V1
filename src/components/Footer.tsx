export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/8 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" aria-hidden="true" />
            <p className="text-white font-semibold text-sm">Effortless AI</p>
          </div>
          <span className="hidden sm:block text-white/15 text-sm">—</span>
          <p className="text-gray-600 text-sm">Quiet systems. Real results.</p>
        </div>
        <p className="text-gray-700 text-xs">
          &copy; 2025 Effortless AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
