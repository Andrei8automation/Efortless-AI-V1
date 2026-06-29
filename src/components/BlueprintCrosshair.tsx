export default function BlueprintCrosshair({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={`absolute w-3 h-3 text-white/25 pointer-events-none ${className}`} 
      viewBox="0 0 12 12" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}
