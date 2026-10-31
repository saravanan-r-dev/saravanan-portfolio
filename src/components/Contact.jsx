import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    if (!form) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const firstName = form.firstName?.value?.trim() || '';
    const lastName = form.lastName?.value?.trim() || '';
    const email = form.email?.value?.trim() || '';
    const message = form.message?.value?.trim() || '';

    if (!firstName || !email || !message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const { serviceId, templateId, publicKey } = emailjsConfig;
    const isConfigured =
      Boolean(serviceId) &&
      Boolean(templateId) &&
      Boolean(publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (!isConfigured) {
      // Fallback: Open mailto link
      const subject = `Portfolio Contact from ${firstName} ${lastName}`.trim();
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`;
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.open(mailtoUrl, '_blank');
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // EmailJS submission
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('EmailJS submission error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Parallax Typography */}
      <motion.div
        style={{ y }}
        className="absolute top-10 left-0 w-full pointer-events-none z-0 overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/[0.04] whitespace-nowrap pl-6"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Front Red Card Container */}
      <div className="w-full flex justify-end relative z-10">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 rounded-tl-[3rem] shadow-2xl"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between pb-8 border-b border-white/20 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white">
              Reach Me
            </span>

            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 transition-all duration-200"
              >
                DM on Instagram
              </a>
            )}
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: Underline Inputs */}
              <div className="flex flex-col space-y-8">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    required
                    placeholder="First Name *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder="Your Email *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Right Column: Message Textarea */}
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message *"
                  className="w-full h-full min-h-[140px] bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:border-white focus:outline-none resize-none transition-colors duration-200"
                />
              </div>
            </div>

            {/* Bottom Form Actions */}
            <div className="pt-4 border-t border-white/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-md">
                <label className="flex items-start space-x-3 text-xs text-white/90 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    required
                    className="mt-0.5 rounded border-white/40 text-black focus:ring-0"
                  />
                  <span>
                    I consent to having this website store my submitted information so they can respond to my inquiry.
                  </span>
                </label>

                <p className="text-[11px] text-white/70 leading-relaxed">
                  Your message will be sent directly to my inbox. I typically respond within 24-48 hours. Urgent? Reach me directly at{' '}
                  <a
                    href={`mailto:${personalInfo.emails.primary}`}
                    className="underline text-white font-medium hover:text-black transition-colors"
                  >
                    {personalInfo.emails.primary}
                  </a>.
                </p>
              </div>

              {/* Submit Button */}
              <div>
                {status === 'sending' && (
                  <button
                    type="button"
                    disabled
                    className="px-8 py-3.5 rounded-full bg-white/20 border border-white/30 text-white font-semibold text-sm inline-flex items-center space-x-3 cursor-not-allowed"
                  >
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </button>
                )}

                {status === 'success' && (
                  <button
                    type="button"
                    className="px-8 py-3.5 rounded-full bg-emerald-600 border border-emerald-400 text-white font-semibold text-sm shadow-lg inline-flex items-center space-x-2"
                  >
                    <span>Sent Successfully ✓</span>
                  </button>
                )}

                {status === 'error' && (
                  <button
                    type="button"
                    className="px-8 py-3.5 rounded-full bg-red-950 border border-red-500 text-red-200 font-semibold text-sm inline-flex items-center space-x-2"
                  >
                    <span>Failed — Try Again</span>
                  </button>
                )}

                {status === 'idle' && (
                  <button
                    type="submit"
                    className="group px-8 py-3.5 rounded-full bg-transparent border-2 border-white text-white font-bold text-sm md:text-base hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                  >
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 stroke-current fill-none transition-transform duration-300 group-hover:translate-x-1.5"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
