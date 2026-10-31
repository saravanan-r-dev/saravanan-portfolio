import { leadershipList } from '../data/portfolioData';

export function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center w-full my-6 md:my-10">
      {/* Red Glowing Center Dot on the Timeline */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] border-2 border-black shadow-[0_0_15px_rgba(255,42,42,0.8)] z-20" />

      {/* Even items: Left side on md+ */}
      {isEven ? (
        <>
          <div
            data-aos="fade-right"
            className="w-full pl-12 md:pl-0 md:w-[45%] md:text-right"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_25px_rgba(255,42,42,0.15)] group">
              {item.badge && (
                <div className="mb-3 md:flex md:justify-end">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20">
                    {item.badge}
                  </span>
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-red-400 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-red-400 mt-1 mb-3">
                {item.role}
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
          {/* Spacer for opposite side */}
          <div className="hidden md:block md:w-[45%]" />
        </>
      ) : (
        /* Odd items: Right side on md+ */
        <>
          {/* Spacer for opposite side */}
          <div className="hidden md:block md:w-[45%]" />
          <div
            data-aos="fade-left"
            className="w-full pl-12 md:pl-0 md:w-[45%] md:text-left"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_25px_rgba(255,42,42,0.15)] group">
              {item.badge && (
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20">
                    {item.badge}
                  </span>
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-red-400 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-red-400 mt-1 mb-3">
                {item.role}
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Leadership() {
  if (!leadershipList || leadershipList.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn-Paper SVG Divider along top edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#ff2a2a] rotate-180"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Centered Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-block">
            <span className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-red-500/10 border border-red-500/30 text-red-400">
              Activities
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Leadership & Engagement
          </h2>

          <p className="text-white/50 text-sm md:text-base leading-relaxed">
            Community initiatives, hackathon mentorship, and organizational contributions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical 2px Gradient Timeline Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10 z-0" />

          {/* Timeline Items */}
          <div className="flex flex-col items-center w-full">
            {leadershipList.map((item, index) => (
              <LeadershipItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
