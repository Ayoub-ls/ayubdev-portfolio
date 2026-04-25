import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="text-2xl font-bold text-[#00F2FF] tracking-tight mb-2">
              Ayub<span className="text-white">Dev</span>
            </a>
            <p className="text-white/60 text-sm">{t.footer.tagline}</p>
          </div>

          <div className="flex items-center space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#00F2FF] transition-colors"
                title={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {currentYear} AyubDev. {t.footer.rights}
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white/40 text-xs hover:text-[#00F2FF] transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-white/40 text-xs hover:text-[#00F2FF] transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
