export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-black">

      {/* Glow Ring */}
      <div className="absolute w-72 h-72 rounded-full border border-blue-400/30 animate-pulse blur-sm" />

      {/* Main Content */}
      <div className="relative text-center animate-fade-in">

        {/* Brand Text */}
        <h1
          className="
            text-6xl font-extrabold tracking-wide
            text-transparent bg-clip-text
            bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500
            drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]
          "
        >
          CAMonk
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-blue-300 tracking-widest text-sm uppercase">
          Skyrocket Your Finance Career
        </p>

        {/* Loading Bar */}
        <div className="mt-6 h-1 w-48 bg-blue-900 rounded-full overflow-hidden mx-auto">
          <div className="h-full w-full bg-gradient-to-r from-blue-400 to-cyan-300 animate-loading-bar" />
        </div>

      </div>
    </div>
  )
}
