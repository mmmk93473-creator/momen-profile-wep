import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Instagram, Linkedin, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design & Development',
    budget: '$5,000 - $10,000',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        service: 'Web Design & Development',
        budget: '$5,000 - $10,000',
        message: '',
      });
    }, 4000);
  };

  const contactLinks = [
    {
      label: 'Email',
      value: 'mmmk93473@gmail.com',
      icon: Mail,
      href: 'mailto:mmmk93473@gmail.com',
      isExternal: false,
      hoverType: 'highlight',
    },
    {
      label: 'WhatsApp',
      value: '01006550329',
      icon: WhatsAppIcon,
      href: 'https://wa.me/201006550329',
      isExternal: true,
      hoverType: 'highlight',
    },
    {
      label: 'Instagram',
      value: '@momen_memo_1',
      icon: Instagram,
      href: 'https://www.instagram.com/momen_memo_1?stkn=eno0ZTFmcjBvZm1j',
      isExternal: true,
      hoverType: 'movement',
    },
    {
      label: 'LinkedIn',
      value: 'Moamen Elmon',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/moamen-elmon-158973436/',
      isExternal: true,
      hoverType: 'movement',
    },
  ];

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#05070d] overflow-hidden border-t border-cyan-500/15">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              GET IN TOUCH
            </span>
            <span className="w-5 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            HAVE A PROJECT <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 text-cyan-glow">
              IN MIND?
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-xl font-normal leading-relaxed">
            Let's turn your idea into something people remember.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left: Contact Channels & Placeholders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl md:rounded-3xl bg-[#080d1a]/90 border border-cyan-500/20 p-6 sm:p-8 space-y-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <h3 className="font-heading font-bold text-xl text-white">
                Direct Channels
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Available for select consulting, design architecture, and high-end digital production worldwide.
              </p>

              <div className="space-y-3">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  const isMove = item.hoverType === 'movement';
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-[#0b1322] border border-cyan-500/15 hover:border-cyan-400/50 hover:bg-[#0e192c] transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 shrink-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all duration-300">
                          <Icon className={`w-4 h-4 transition-transform duration-300 ${isMove ? 'group-hover:-translate-y-0.5 group-hover:scale-110' : 'group-hover:scale-105'}`} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-mono text-slate-400 block">{item.label}</span>
                          <span className="text-sm font-mono text-white font-medium group-hover:text-cyan-300 transition-colors duration-300 truncate block">
                            {item.value}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 shrink-0 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 ml-2" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Quick Project Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl md:rounded-3xl bg-[#080d1a]/90 border border-cyan-500/20 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Start a Project
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Tell me about your timeline, goals and ideas.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-cyan-500/15 border border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-slate-300 max-w-sm">
                    Thank you! I will review your project brief and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#0b1322] border border-cyan-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0b1322] border border-cyan-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                      Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b1322] border border-cyan-500/20 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    >
                      <option value="Web Design & Development">Web Design &amp; Development</option>
                      <option value="AI Integration & Agents">AI Integration &amp; Agents</option>
                      <option value="AI Automation Pipelines">AI Automation Pipelines</option>
                      <option value="3D Web & Visual Design">3D Web &amp; Visual Design</option>
                      <option value="Creative Advertising & Direction">Creative Advertising &amp; Direction</option>
                      <option value="UX/UI Systems">UX/UI Systems</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you would like to build..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0b1322] border border-cyan-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <MagneticButton
                      type="submit"
                      variant="primary"
                      className="w-full py-3.5 text-sm uppercase tracking-wider font-semibold"
                    >
                      <span>Start a Project</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
