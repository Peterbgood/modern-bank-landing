const Logo = () => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      {/* The Icon: Pure SVG code */}
      <div className="relative w-10 h-10 flex items-center justify-center bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30 group-hover:bg-blue-500 transition-colors">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          className="w-6 h-6 text-white"
        >
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M17 7h4v4" />
        </svg>
      </div>

      {/* The Text */}
      <span className="text-2xl font-bold tracking-tight text-slate-900">
        Horizon<span className="text-blue-600">Pay</span>
      </span>
    </div>
  );
};

export default Logo;