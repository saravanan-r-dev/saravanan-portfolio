import { internshipsList } from '../data/portfolioData';

export function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between"
    >
      <div className="space-y-4">
        {/* Top Row: Duration and Mini Badge */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-white/50">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-black text-white">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <div>
          <h3 className="text-2xl font-black text-white tracking-tight">
            {intern.role}
          </h3>
          <p className="text-xs uppercase font-bold tracking-widest text-red-200 mt-1">
            {intern.organization}
          </p>
        </div>

        {/* Skills Gained */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/70">
              Skills Gained:
            </h4>
            <ul className="space-y-1.5 text-xs text-white/90">
              {intern.skills.map((skill) => (
                <li key={skill} className="flex items-start space-x-2">
                  <span className="text-black font-black select-none">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies Section */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="pt-6 mt-6 border-t border-white/10 space-y-2">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/60">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((technology) => (
              <span
                key={technology}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-black/40 border border-white/10 text-white/90"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Internships() {
  if (!internshipsList || internshipsList.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn-Paper SVG Divider along top edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a] rotate-180"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative Pulsing Black Star - Bottom Left */}
      <div className="absolute bottom-8 left-8 z-10 opacity-20 animate-pulse pointer-events-none">
        <svg className="w-12 h-12 fill-black" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base font-medium">
            Professional industry training and real-world software engineering apprenticeships.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={`${intern.organization}-${index}`}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
