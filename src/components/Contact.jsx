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

  const contactInfo = [
    { icon: Mail,  key:'email', label:'Email',    val:'koyeliya2004@gmail.com', href:'mailto:koyeliya2004@gmail.com', copy:true,  color:'#60a5fa' },
    { icon: Phone, key:'phone', label:'Phone',    val:'+91 85830 15279',        href:'tel:+918583015279',             copy:true,  color:'#34d399' },
    { icon: MapPin,key:'loc',   label:'Location', val:'Kolkata, West Bengal, India', href:null,                       copy:false, color:'#94a3b8' },
  ];

  const socials = [
    { label:'GitHub',      icon:<GhSVG />, href:'https://github.com/koyelya2004',                   user:'@koyelya2004',         color:'#e2e8f0', hb:'rgba(255,255,255,0.08)' },
    { label:'HuggingFace', icon:<span style={{fontSize:18}}>🤗</span>, href:'https://huggingface.co/koyelog', user:'@koyelog', color:'#fbbf24', hb:'rgba(255,183,0,0.08)' },
    { label:'LinkedIn',    icon:<LiSVG />, href:'https://linkedin.com/in/koyeliya-ghosh-35718b324', user:'koyeliya-ghosh',       color:'#60a5fa', hb:'rgba(59,130,246,0.08)' },
  ];

  return (
    <section id="contact" ref={ref} className="section-dark py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="reveal text-center mb-12">
          <div className="section-divider" />
          <h2 className="section-heading mb-3">Get In Touch</h2>
          <p className="section-subtitle">Open to internships, research collaborations &amp; interesting conversations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left */}
          <div className="space-y-4 reveal-left">
            <div className="card p-6">
              <h3 className="text-white font-bold text-base mb-2">Let's build something together</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Whether you have a project in mind, a research collaboration, or just want to connect —
                reach out. I reply within 24 hours.
              </p>
              <div className="space-y-3">
                {contactInfo.map(item => (
                  <div key={item.key}
                    className="flex items-center gap-3 p-3.5 rounded-lg transition-all"
                    style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.06)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background:`${item.color}12` }}>
                      <item.icon size={15} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-600 mb-0.5">{item.label}</div>
                      {item.href
                        ? <a href={item.href} id={`c-${item.key}`}
                            className="text-sm font-medium truncate block transition-colors hover:underline"
                            style={{ color: item.color }}>{item.val}</a>
                        : <span className="text-sm text-slate-400">{item.val}</span>
                      }
                    </div>
                    {item.copy && (
                      <button onClick={() => copy(item.val, item.key)}
                        id={`copy-${item.key}`}
                        className="text-slate-600 hover:text-white transition-colors flex-shrink-0"
                        aria-label={`Copy ${item.label}`}>
                        {copied === item.key ? <Check size={14} style={{color:item.color}} /> : <Copy size={14} />}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Available */}
            <div className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background:'rgba(16,185,129,0.05)', border:'1px solid rgba(16,185,129,0.15)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-green-400 text-sm font-semibold">Available for opportunities</p>
                <p className="text-slate-600 text-xs mt-0.5">ML internships · research · freelance</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4 reveal-right">
            <div className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Online</p>
              <div className="space-y-2.5">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    id={`social-${s.label.toLowerCase()}`}
                    className="flex items-center gap-3 p-3.5 rounded-lg border transition-all group"
                    style={{ background:'rgba(255,255,255,0.02)', borderColor:'rgba(255,255,255,0.06)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = s.hb; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = ''; }}
                  >
                    <span style={{ color: s.color }}>{s.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm font-semibold" style={{ color: s.color }}>{s.label}</div>
                      <div className="text-xs text-slate-600">{s.user}</div>
                    </div>
                    <ExternalLink size={13} className="text-slate-700 group-hover:text-slate-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <a href="mailto:koyeliya2004@gmail.com" id="contact-cta"
              className="btn-primary w-full justify-center py-3.5 text-sm rounded-xl"
              style={{ display:'flex' }}>
              <Send size={15} className="mr-2" />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
