import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

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
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center text-center md:items-start md:text-start"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F2FF]"></span>
              </span>
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              {t.hero.heading1} <span className="text-[#00F2FF]">ayub</span>Dev
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={(e) => scrollToSection(e, '#projects')}
                className="w-full sm:w-auto bg-[#00F2FF] text-[#120018] px-8 py-4 rounded-2xl font-bold hover:bg-[#00F2FF]/80 transition-all shadow-[0_0_15px_rgba(0,242,255,0.4)] hover:shadow-[0_0_25px_rgba(0,242,255,0.6)] hover:-translate-y-1 flex items-center justify-center group"
              >
                {t.hero.viewProjects}
                <ArrowRight className="ms-2 w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:-scale-x-100 transition-transform" />
              </button>
              <button
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full sm:w-auto bg-transparent text-[#00F2FF] border border-[#00F2FF]/50 px-8 py-4 rounded-2xl font-bold hover:bg-[#00F2FF]/10 transition-all hover:border-[#00F2FF] flex items-center justify-center"
              >
                {t.hero.hireMe}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-black/40 backdrop-blur-xl shadow-2xl border border-white/10 p-4 md:p-8 overflow-hidden group">
              <div className="absolute top-0 start-0 w-full h-1.5 bg-gradient-to-r from-[#00F2FF] to-[#cc00cc]"></div>

              {/* Metrics UI Element */}
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs font-bold text-white/50 uppercase tracking-widest">{t.hero.metricsTitle}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#120018]/50 p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-[#00F2FF]/10 transition-colors border border-white/5 hover:border-[#00F2FF]/30">
                    <Zap className="w-6 h-6 text-[#00F2FF] mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-3xl md:text-4xl font-extrabold text-white mb-1">{t.hero.metric1Value}</span>
                    <span className="text-xs font-bold text-[#00F2FF] uppercase tracking-wider">{t.hero.metric1Label}</span>
                  </div>
                  <div className="bg-[#120018]/50 p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-[#00F2FF]/10 transition-colors border border-white/5 hover:border-[#00F2FF]/30">
                    <TrendingUp className="w-6 h-6 text-[#00F2FF] mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-3xl md:text-4xl font-extrabold text-white mb-1">{t.hero.metric2Value}</span>
                    <span className="text-xs font-bold text-[#00F2FF] uppercase tracking-wider">{t.hero.metric2Label}</span>
                  </div>
                  <div className="bg-[#120018]/50 p-6 rounded-2xl flex flex-col items-center justify-center text-center col-span-2 group hover:bg-[#00F2FF]/10 transition-colors border border-white/5 hover:border-[#00F2FF]/30">
                    <CheckCircle className="w-6 h-6 text-[#00F2FF] mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-3xl md:text-4xl font-extrabold text-white mb-1">{t.hero.metric3Value}</span>
                    <span className="text-xs font-bold text-[#00F2FF] uppercase tracking-wider">{t.hero.metric3Label}</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-12 -end-12 w-48 h-48 bg-[#00F2FF]/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-12 -start-12 w-48 h-48 bg-[#cc00cc]/10 rounded-full blur-3xl"></div>
            </div>

            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#00F2FF]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
