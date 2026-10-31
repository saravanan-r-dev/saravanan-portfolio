import { softSkillsList } from '../data/portfolioData';

export function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.03] hover:border-red-500/30 hover:shadow-[0_10px_30px_rgba(255,42,42,0.12)] cursor-default"
    >
      {/* Emoji Icon in Rounded Square */}
      <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:bg-red-50 group-hover:border-red-200 group-hover:scale-110">
        <span role="img" aria-label={skill.name}>
          {skill.icon}
        </span>
      </div>

      {/* Uppercase Name */}
      <h3 className="text-base font-black uppercase text-gray-900 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-200 mb-2">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-xs">
        {skill.desc}
      </p>
    </div>
  );
}

export default function SoftSkills() {
  if (!softSkillsList || softSkillsList.length === 0) {
    return null;
  }

  return (
    <section className="bg-white bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Centered Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-block">
            <span className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-red-50 border border-red-200 text-[#ff2a2a]">
              Core Competencies
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 tracking-tight">
            Professional Soft Skills
          </h2>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Interpersonal strengths, analytical discipline, and collaboration methodologies that drive team success.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
