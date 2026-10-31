import { useState } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import stackImage from '../assets/about/profile.png';
import { personalInfo, socialLinks, aboutContent } from '../data/portfolioData';

export default function About() {
  const [flipped, setFlipped] = useState(false);

  const qrValue = socialLinks.linkedin || `mailto:${personalInfo.emails.primary}`;

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative 4-Point Star - Top Right */}
      <div className="absolute top-10 right-10 z-10 opacity-30 animate-pulse pointer-events-none">
        <svg className="w-10 h-10 fill-black" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      {/* Decorative 4-Point Star - Bottom Left */}
      <div
        className="absolute bottom-28 left-8 z-10 opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
      >
        <svg className="w-12 h-12 fill-black" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-20">
        {/* Left: ID Badge on a Lanyard with Framer Motion drop-in */}
        <div className="md:w-[350px] shrink-0 w-full flex flex-col items-center md:items-start pt-16 md:pt-20">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
            className="relative flex flex-col items-center"
          >
            {/* Lanyard String */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black z-0 rounded-b" />

            {/* Grey Clip Rectangle */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-gray-400 rounded-sm shadow-md z-30 border border-gray-500 flex items-center justify-center">
              <div className="w-4 h-1 bg-gray-600 rounded-full" />
            </div>

            {/* Flip Card Wrapper Button */}
            <button
              type="button"
              aria-label="Flip ID card"
              onClick={() => setFlipped(!flipped)}
              className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer text-left"
            >
              <div
                className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* FRONT Face */}
                <div className="absolute inset-0 [backface-visibility:hidden] z-20 bg-gray-900 rounded-2xl p-3 shadow-2xl border border-gray-800 flex flex-col justify-between">
                  {/* Cutout Slot */}
                  <div className="w-12 h-2 bg-black/60 rounded-full mx-auto mb-2 border border-white/10 shrink-0" />

                  {/* Profile Photo */}
                  <div className="w-full flex-1 overflow-hidden rounded-xl">
                    <img
                      src={stackImage}
                      alt="SARAVANAN — Java Full Stack Developer, TAP Academy student"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Badge Footer Label */}
                  <div className="mt-2 text-center shrink-0">
                    <span className="text-[10px] font-mono tracking-widest text-white/60 uppercase">
                      {personalInfo.brandName} · DEVELOPER
                    </span>
                  </div>
                </div>

                {/* BACK Face (Visiting Card) */}
                <div
                  className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] z-20 bg-gradient-to-br from-[#141414] to-[#1f1f1f] rounded-2xl shadow-2xl border border-white/10 flex flex-col justify-between overflow-hidden"
                >
                  {/* 6px Red Top Bar */}
                  <div className="h-1.5 w-full bg-[#ff2a2a] shrink-0" />

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <h3 className="text-xl font-black text-white tracking-tight">
                        {personalInfo.brandName}
                        <span className="text-[#ff2a2a]">.</span>
                      </h3>
                      <p className="text-[10px] uppercase tracking-widest text-red-400 font-semibold mt-0.5">
                        {personalInfo.title}
                      </p>
                      <hr className="border-white/10 my-2" />
                    </div>

                    {/* Contact Rows */}
                    <div className="space-y-1.5 text-xs text-white/85">
                      {personalInfo.emails.primary && (
                        <a
                          href={`mailto:${personalInfo.emails.primary}`}
                          onClick={handleLinkClick}
                          className="flex items-center space-x-2 hover:text-white transition-colors duration-150 truncate"
                        >
                          <svg className="w-3.5 h-3.5 text-red-400 shrink-0 fill-current" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span className="truncate">{personalInfo.emails.primary}</span>
                        </a>
                      )}

                      {personalInfo.phone && (
                        <a
                          href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                          onClick={handleLinkClick}
                          className="flex items-center space-x-2 hover:text-white transition-colors duration-150"
                        >
                          <svg className="w-3.5 h-3.5 text-red-400 shrink-0 fill-current" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                          </svg>
                          <span>{personalInfo.phone}</span>
                        </a>
                      )}

                      {personalInfo.location && (
                        <div className="flex items-center space-x-2">
                          <svg className="w-3.5 h-3.5 text-red-400 shrink-0 fill-current" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span className="truncate">{personalInfo.location}</span>
                        </div>
                      )}

                      {socialLinks.linkedin && (
                        <a
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLinkClick}
                          className="flex items-center space-x-2 hover:text-white transition-colors duration-150"
                        >
                          <svg className="w-3.5 h-3.5 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          <span>LinkedIn</span>
                        </a>
                      )}

                      {socialLinks.github && (
                        <a
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLinkClick}
                          className="flex items-center space-x-2 hover:text-white transition-colors duration-150"
                        >
                          <svg className="w-3.5 h-3.5 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>

                    {/* Bottom QR Code Box */}
                    <div className="pt-2 flex items-center space-x-3">
                      <div className="bg-white rounded-lg p-1.5 shadow-md flex items-center justify-center shrink-0">
                        <QRCode value={qrValue} size={64} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white/60 font-mono tracking-tight leading-tight">
                          Scan to connect
                        </span>
                        <span className="text-[9px] text-red-400 font-mono tracking-tighter mt-0.5">
                          via LinkedIn
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Tap to Flip Hint */}
            <p className="text-xs font-bold text-black/60 mt-4 select-none">
              Tap the card to flip ↻
            </p>
          </motion.div>
        </div>

        {/* Right: Heading & Bio Content */}
        <div
          data-aos="fade-left"
          className="flex-1 space-y-6 pt-4 md:pt-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
            {aboutContent.heading}
          </h2>

          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {aboutContent.techStack && (
            <div className="pt-4 flex flex-wrap gap-2">
              {aboutContent.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black text-white shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Torn-Paper SVG Divider along bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-14 md:h-20 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
