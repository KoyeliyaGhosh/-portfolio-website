import { useRef, useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Send, MapPin, Copy, Check } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'koyeliya2004@gmail.com',
    href: 'mailto:koyeliya2004@gmail.com',
    color: 'teal',
    copyable: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 85830 15279',
    href: 'tel:+918583015279',
    color: 'cyan',
    copyable: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kolkata, West Bengal, India',
    href: null,
    color: 'emerald',
    copyable: false,
  },
];

const socialLinks = [
  {
    label: 'GitHub',
    emoji: '🐙',
    href: 'https://github.com/koyelya2004',
    username: '@koyelya2004',
    color: 'rgba(255,255,255,0.1)',
    hoverColor: 'rgba(255,255,255,0.2)',
  },
  {
    label: 'HuggingFace',
    emoji: '🤗',
    href: 'https://huggingface.co/koyelog',
    username: '@koyelog',
    color: 'rgba(255,183,0,0.1)',
    hoverColor: 'rgba(255,183,0,0.2)',
  },
  {
    label: 'LinkedIn',
    emoji: '💼',
    href: 'https://linkedin.com/in/koyeliya-ghosh-35718b324',
    username: 'koyeliya-ghosh',
    color: 'rgba(10,102,194,0.15)',
    hoverColor: 'rgba(10,102,194,0.3)',
  },
];

const colorMap = {
  teal: { glow: 'rgba(20,184,166,0.15)', text: 'text-teal-400', border: 'border-teal-500/20' },
  cyan: { glow: 'rgba(6,182,212,0.15)', text: 'text-cyan-400', border: 'border-cyan-500/20' },
  emerald: { glow: 'rgba(16,185,129,0.15)', text: 'text-emerald-400', border: 'border-emerald-500/20' },
};

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch {}
  };

  return (
    <section id="contact" className="py-28 section-bg-alt">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="section-subtitle">
          Open to internships, collaborations, research opportunities, and interesting conversations
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="card-glass rounded-2xl p-6 border border-teal-500/15">
              <h3 className="text-white font-semibold text-lg mb-2">Let's Connect!</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Whether you have an exciting project, research collaboration, or just want to chat about AI — 
                my inbox is always open. I respond within 24 hours.
              </p>

              <div className="space-y-4">
                {contactLinks.map((item) => {
                  const colors = colorMap[item.color];
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-4 p-4 rounded-xl border ${colors.border} group`}
                      style={{ background: colors.glow.replace('0.15', '0.05') }}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}
                        style={{ background: colors.glow }}
                      >
                        <item.icon size={18} className={colors.text} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-slate-500 text-xs mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            id={`contact-${item.label.toLowerCase()}`}
                            className={`${colors.text} text-sm font-medium hover:underline truncate block`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-slate-300 text-sm">{item.value}</span>
                        )}
                      </div>
                      {item.copyable && (
                        <button
                          onClick={() => copyToClipboard(item.value, item.label)}
                          id={`copy-${item.label.toLowerCase()}`}
                          className="flex-shrink-0 text-slate-500 hover:text-teal-400 transition-colors"
                          aria-label={`Copy ${item.label}`}
                        >
                          {copied === item.label ? (
                            <Check size={16} className="text-teal-400" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="card-glass rounded-xl p-4 border border-teal-500/15 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse flex-shrink-0" />
              <div>
                <span className="text-teal-400 text-sm font-semibold">Available for opportunities</span>
                <p className="text-slate-500 text-xs mt-0.5">Open to ML internships, research collaborations & freelance projects</p>
              </div>
            </div>
          </div>

          {/* Right: Social Links + CTA */}
          <div className="space-y-5">
            <div className="card-glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-semibold mb-4">Find Me Online</h3>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`social-${link.label.toLowerCase()}`}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/5 transition-all duration-200 group"
                    style={{ background: link.color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = link.hoverColor;
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = link.color;
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span className="text-2xl">{link.emoji}</span>
                    <div className="flex-1">
                      <div className="text-white font-medium text-sm">{link.label}</div>
                      <div className="text-slate-400 text-xs">{link.username}</div>
                    </div>
                    <ExternalLink size={14} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Email CTA */}
            <a
              href="mailto:koyeliya2004@gmail.com"
              id="contact-email-cta"
              className="block w-full btn-primary text-white text-center py-4 text-base font-semibold flex items-center justify-center gap-3 rounded-2xl"
            >
              <Send size={18} />
              Send Me an Email
            </a>

            {/* Fun fact card */}
            <div className="card-glass rounded-xl p-5 border border-violet-500/15 text-center">
              <p className="text-slate-400 text-sm leading-relaxed">
                🌟 <span className="text-violet-400 font-semibold">Fun fact:</span> My Face Recognition Model has been downloaded in{' '}
                <span className="text-white font-semibold">29,000+ sessions</span> globally — and I built it as a student!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
