export default function HeroBackground() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.webp"
        className="absolute inset-0 h-full w-full object-cover -scale-x-100"
      >
        <source
          src="/videos/shipping-line.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/25" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/50 to-white/40" />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[140px]" />

      <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:36px_36px]" />
    </>
  );
}