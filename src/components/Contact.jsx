import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.contact.heading}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t.contact.subheading}
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">
                    {t.contact.emailMe}
                  </div>
                  <a
                    href="mailto:ayoublamara52@gmail.com"
                    className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    ayoublamara52@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-6">
                  {t.contact.followMe}
                </div>
                <div className="flex space-x-4">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                      title={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-200 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState !== 'idle'}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center transition-all ${
                  formState === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {formState === 'idle' && (
                  <>
                    {t.contact.send}
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
                {formState === 'sending' && (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                )}
                {formState === 'success' && (
                  <>
                    {t.contact.sent}
                    <CheckCircle className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
