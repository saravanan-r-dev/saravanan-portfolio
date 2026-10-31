import { technicalSkills } from '../data/portfolioData';

export function SkillBadge({ name }) {
  return (
    <span className="inline-flex items-center rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 hover:border-red-500/30 transition-all duration-200">
      {name}
    </span>
  );
}

export function SkillCard({ category, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(255,42,42,0.15)] flex flex-col justify-between"
    >
      <div>
        <h3 className="text-lg md:text-xl font-black uppercase text-white tracking-wider pb-3 border-b border-white/10 mb-4">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Blurred Red Circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-red-500/10 border border-red-500/30 text-red-400">
              Technical Stack
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            My Skillset
          </h2>

          <p className="text-white/50 text-sm md:text-base">
            Core technologies, libraries, and frameworks I leverage to construct scalable digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
