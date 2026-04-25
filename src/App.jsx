import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen relative font-sans text-white selection:bg-[#00F2FF] selection:text-[#120018]">
        {/* Dynamic Background with Dark Blurred Layer */}
        <div className="fixed inset-0 z-[-1] bg-[#05000a] overflow-hidden">
          {/* Glowing Orbs */}
          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] rounded-full bg-[#cc00cc] opacity-30 blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-[#00F2FF] opacity-20 blur-[120px]"></div>

          {/* Dark Blurred Layer */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[70px]"></div>
        </div>
        <Navbar />

        <main>
          <Hero />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Projects />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.div>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
