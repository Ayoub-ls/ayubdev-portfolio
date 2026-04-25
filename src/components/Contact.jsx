import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Facebook, Phone } from 'lucide-react';

const TESTIMONIAL_IMAGES = [
  "https://i.pravatar.cc/150?u=marcus",
  "https://i.pravatar.cc/150?u=elena"
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-32 px-4 relative z-10">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Testimonials */}
        {(t.contact?.testimonials || []).map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#120018]/40 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
          >
            {/* Quote Icon Background */}
            <div className="absolute top-4 end-8 text-white/5 font-serif text-9xl leading-none select-none group-hover:text-white/10 transition-colors duration-500">
              "
            </div>

            <p className="text-white/90 text-lg md:text-xl font-light italic leading-relaxed mb-8 relative z-10 text-center md:text-start">
              {testimonial.quote}
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 space-x-0 relative z-10 text-center md:text-start">
              <img
                src={TESTIMONIAL_IMAGES[index]}
                alt={testimonial.name}
                className="w-16 h-16 md:w-12 md:h-12 rounded-xl object-cover border border-white/10"
              />
              <div className="md:ms-4 rtl:md:ms-0 rtl:md:me-4">
                <h4 className="text-white font-bold text-sm tracking-wider uppercase">{testimonial.name}</h4>
                <p className="text-[#00F2FF] text-xs font-medium">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* CTA / Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[#120018]/60 backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-[2.5rem] shadow-2xl text-center mt-12 relative overflow-hidden"
        >
          {/* Subtle glow effect in the background of the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00F2FF]/10 via-transparent to-transparent opacity-50 blur-2xl pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {t.contact?.ctaHeading}
            </h3>
            <p className="text-white/70 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed">
              {t.contact?.ctaSubheading}
            </p>

            <a
              href="mailto:ayoublamara52@gmail.com"
              className="inline-block bg-[#00F2FF] text-[#120018] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#00F2FF]/90 transition-all shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:shadow-[0_0_35px_rgba(0,242,255,0.7)] hover:-translate-y-1 active:scale-95 w-full sm:w-auto mb-10"
            >
              {t.contact?.ctaButton}
            </a>

            {/* Social & Contact Details */}
            <div className="flex flex-col items-center justify-center space-y-6 pt-8 border-t border-white/10 max-w-xs mx-auto">
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/ayubdev/" className="text-white/40 hover:text-[#00F2FF] transition-colors" title="Instagram">
                  <Instagram size={28} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61587270189205&ref=PROFILE_EDIT_xav_ig_profile_page_web#" className="text-white/40 hover:text-[#00F2FF] transition-colors" title="Facebook">
                  <Facebook size={28} />
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80 bg-black/20 px-6 py-3 rounded-2xl border border-white/5">
                <Phone size={18} className="text-[#00F2FF]" />
                <span className="text-sm font-medium tracking-wide">
                  +33 746639234 <span className="text-white/20 mx-1">/</span> +213 556436073
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
