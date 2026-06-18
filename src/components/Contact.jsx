import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const GhSVG = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;
const LiSVG = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

export default function Contact() {
  const [copied, setCopied] = useState(null);
  const ref = useScrollReveal();

  const copy = async (val, key) => {
    try { await navigator.clipboard.writeText(val); setCopied(key); setTimeout(() => setCopied(null), 2000); } catch {}
  };

  const contactCards = [
    { icon: Mail, key: 'email', label: 'Email', val: 'koyeliya2004@gmail.com', href: 'mailto:koyeliya2004@gmail.com', copy: true },
    { icon: Phone, key: 'phone', label: 'Phone', val: '+91 85830 15279', href: 'tel:+918583015279', copy: true },
    { icon: MapPin, key: 'loc', label: 'Location', val: 'Kolkata, West Bengal, India', href: null, copy: false },
  ];

  const socials = [
    { label: 'GitHub', icon: <GhSVG />, href: 'https://github.com/koyelya2004', user: '@koyelya2004' },
    { label: 'HuggingFace', icon: <span style={{ fontSize: 18 }}>🤗</span>, href: 'https://huggingface.co/koyelog', user: '@koyelog' },
    { label: 'LinkedIn', icon: <LiSVG />, href: 'https://linkedin.com/in/koyeliya-ghosh-35718b324', user: 'koyeliya-ghosh' },
  ];

  return (
    <section id="contact" ref={ref} className="py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="reveal mb-12">
          <h2 className="section-heading mb-3">
            <span className="code-prefix">{'</>'}</span> GET IN TOUCH
          </h2>
          <div className="gold-line" style={{ maxWidth: 400 }} />
          <p className="section-subtitle mt-3">Open to internships, research collaborations & interesting conversations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left */}
          <div className="space-y-4 reveal-left">
            <div className="card p-6">
              <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
                Let's build something together
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Whether you have a project in mind, a research collaboration, or just want to connect — reach out. I reply within 24 hours.
              </p>
              <div className="space-y-3">
                {contactCards.map(item => (
                  <div key={item.key}
                    className="flex items-center gap-3 p-3.5 rounded-lg"
                    style={{ background: 'rgba(243,198,35,0.03)', border: '1px solid rgba(243,198,35,0.1)' }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(243,198,35,0.08)' }}>
                      <item.icon size={15} style={{ color: '#f3c623' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: '0.1rem' }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} style={{ fontSize: '0.85rem', fontWeight: 500, color: '#f3c623', textDecoration: 'none' }}
                            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>{item.val}</a>
                        : <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>{item.val}</span>
                      }
                    </div>
                    {item.copy && (
                      <button onClick={() => copy(item.val, item.key)}
                        style={{ color: '#64748b', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#f3c623'}
                        onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                        {copied === item.key ? <Check size={14} style={{ color: '#22c55e' }} /> : <Copy size={14} />}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#22c55e', animation: 'pulse 1.5s ease infinite' }} />
              <div>
                <p style={{ color: '#22c55e', fontSize: '0.875rem', fontWeight: 600 }}>Available for opportunities</p>
                <p style={{ color: '#64748b', fontSize: '0.75rem' }}>ML internships · research · freelance</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4 reveal-right">
            <div className="card p-6">
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f3c623', marginBottom: '1rem' }}>
                ✦ ONLINE
              </p>
              <div className="space-y-2.5">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-lg transition-all group"
                    style={{ background: 'rgba(243,198,35,0.03)', border: '1px solid rgba(243,198,35,0.1)', textDecoration: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(243,198,35,0.06)'; e.currentTarget.style.borderColor = 'rgba(243,198,35,0.25)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(243,198,35,0.03)'; e.currentTarget.style.borderColor = 'rgba(243,198,35,0.1)'; e.currentTarget.style.transform = ''; }}
                  >
                    <span style={{ color: '#f3c623' }}>{s.icon}</span>
                    <div className="flex-1">
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#f1f5f9' }}>{s.label}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{s.user}</div>
                    </div>
                    <ExternalLink size={13} style={{ color: '#334155' }} />
                  </a>
                ))}
              </div>
            </div>

            <a href="mailto:koyeliya2004@gmail.com" id="contact-cta" className="btn-primary"
              style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0.9rem', borderRadius: 12 }}>
              <Send size={15} style={{ marginRight: '0.5rem' }} />
              SEND AN EMAIL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
