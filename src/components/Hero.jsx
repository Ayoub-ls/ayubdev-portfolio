import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
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
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
              {t.hero.heading1} <span className="text-blue-600">ayub</span>Dev
              <br />
              {t.hero.heading2}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={(e) => scrollToSection(e, '#projects')}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center group"
              >
                {t.hero.viewProjects}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all hover:border-gray-300 flex items-center justify-center"
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
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 md:p-8 overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400"></div>

              {/* Mock UI Element */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>

                <div className="h-4 w-3/4 bg-gray-100 rounded-full animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-100 rounded-full animate-pulse delay-75"></div>

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="aspect-square bg-blue-50 rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-blue-200"></div>
                  </div>
                  <div className="aspect-square bg-cyan-50 rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-cyan-200"></div>
                  </div>
                  <div className="aspect-square bg-indigo-50 rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-indigo-200"></div>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <div className="h-2 w-full bg-gray-50 rounded-full"></div>
                  <div className="h-2 w-full bg-gray-50 rounded-full"></div>
                  <div className="h-2 w-2/3 bg-gray-50 rounded-full"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl"></div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl"></div>
            </div>

            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
