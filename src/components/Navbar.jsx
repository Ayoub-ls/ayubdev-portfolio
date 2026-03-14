import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NAV_KEYS = ['home', 'services', 'projects', 'about', 'contact'];
const NAV_HREFS = {
  home: '#home',
  services: '#services',
  projects: '#projects',
  about: '#about',
  contact: '#contact',
};

const LANGS = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'ar', label: 'AR', flag: '🇸🇦' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const currentFlag = LANGS.find((l) => l.code === lang)?.flag;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 ${
        isScrolled ? 'pt-2' : 'pt-4'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border border-gray-200/50 py-3 px-6'
            : 'bg-transparent py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-2xl font-bold text-blue-600 tracking-tight"
          >
            Ayub<span className="text-gray-900">Dev</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_KEYS.map((key) => (
              <a
                key={key}
                href={NAV_HREFS[key]}
                onClick={(e) => scrollToSection(e, NAV_HREFS[key])}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {t.nav[key]}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                aria-label="Switch language"
              >
                <Globe size={16} />
                <span>{currentFlag}</span>
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-1 min-w-[110px] z-50"
                  >
                    {LANGS.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          lang === l.code
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              {t.nav.hireMe}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:hidden z-40"
          >
            <div className="flex flex-col space-y-4">
              {NAV_KEYS.map((key) => (
                <a
                  key={key}
                  href={NAV_HREFS[key]}
                  onClick={(e) => scrollToSection(e, NAV_HREFS[key])}
                  className="text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {t.nav[key]}
                </a>
              ))}

              {/* Language pills in mobile menu */}
              <div className="flex gap-2 pt-2">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                      lang === l.code
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'text-gray-600 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {l.flag} {l.label}
                  </button>
                ))}
              </div>

              <button
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-blue-700 transition-all shadow-sm"
              >
                {t.nav.hireMe}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
