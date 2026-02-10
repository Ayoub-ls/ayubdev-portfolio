import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe, ExternalLink, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { assets } from "@/assets/assets";

export default function AyubDevPortfolio() {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      dir: "ltr",
      nav: { about: "About", projects: "Projects", skills: "Skills", contact: "Contact" },
      heroTitle: "Hi, We are AyubDev",
      heroDesc: "We build modern, responsive, and scalable web applications using the latest technologies.",
      viewProjects: "View Project",
      contactUs: "Contact Us",
      aboutTitle: "About Us",
      aboutDesc:
        "AyubDev is a passionate web development team focused on creating high-quality digital experiences. We specialize in frontend and backend development, delivering clean UI and efficient performance.",
      projectsTitle: "Featured Projects",
      skillsTitle: "Skills",
      contactTitle: "Get In Touch",
      contactDesc: "Want to work with us? Let's build something amazing together.",
    },
    fr: {
      dir: "ltr",
      nav: { about: "À propos", projects: "Projets", skills: "Compétences", contact: "Contact" },
      heroTitle: "Bonjour, nous sommes AyubDev",
      heroDesc:
        "Nous créons des applications web modernes, responsives et évolutives avec les dernières technologies.",
      viewProjects: "Voir le projet",
      contactUs: "Nous contacter",
      aboutTitle: "À propos de nous",
      aboutDesc:
        "AyubDev est une équipe passionnée spécialisée dans la création d'expériences numériques de haute qualité. Nous développons des solutions frontend et backend performantes.",
      projectsTitle: "Projets en Vedette",
      skillsTitle: "Compétences",
      contactTitle: "Contactez-nous",
      contactDesc: "Envie de travailler avec nous ? Construisons quelque chose d'incroyable ensemble.",
    },
    ar: {
      dir: "rtl",
      nav: { about: "من نحن", projects: "المشاريع", skills: "المهارات", contact: "تواصل" },
      heroTitle: "مرحباً، نحن AyubDev",
      heroDesc:
        "نقوم ببناء تطبيقات ويب حديثة ومتجاوبة وقابلة للتطوير باستخدام أحدث التقنيات.",
      viewProjects: "عرض المشروع",
      contactUs: "تواصل معنا",
      aboutTitle: "من نحن",
      aboutDesc:
        "AyubDev فريق تطوير ويب شغوف يركز على إنشاء تجارب رقمية عالية الجودة مع أداء وكفاءة عالية.",
      projectsTitle: "المشاريع المميزة",
      skillsTitle: "المهارات",
      contactTitle: "تواصل معنا",
      contactDesc: "هل ترغب في العمل معنا؟ دعنا نبني شيئاً رائعاً معاً.",
    },
  };

  const projects = [
    {
      id: 1,
      name: "E-Commerce App",
      description: "Mobile-first shopping platform with cart, checkout, and secure payments",
      skills: ["React Native", "Node.js", "MongoDB", "Stripe"],
      projectImg: assets.kishopImg,
      projectLink: "https://kidshop-website-5n8n.vercel.app/"
    },
    {
      id: 2,
      name: "Task Manager",
      description: "Mobile task management with real-time sync and notifications",
      skills: ["React Native", "Firebase", "Redux", "Push Notif"],
      projectImg: assets.kishopImg,
      projectLink: "https://kidshop-website-5n8n.vercel.app/"
    },
    {
      id: 3,
      name: "Fitness Tracker",
      description: "Health & fitness tracking app with workout plans and progress charts",
      skills: ["React Native", "GraphQL", "HealthKit", "Charts"],
      projectImg: assets.kishopImg,
      projectLink: "https://kidshop-website-5n8n.vercel.app/"
    },
  ];

  const t = translations[language];

  return (
    <div
      dir={t.dir}
      className="min-h-screen bg-gray-950 text-white scroll-smooth transition-all duration-300"
    >
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold tracking-wide">AyubDev</h1>
          <nav className="space-x-6 hidden md:block" aria-label="Main navigation">
            <a href="#about" className="hover:text-gray-400 transition-colors">{t.nav.about}</a>
            <a href="#projects" className="hover:text-gray-400 transition-colors">{t.nav.projects}</a>
            <a href="#skills" className="hover:text-gray-400 transition-colors">{t.nav.skills}</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">{t.nav.contact}</a>
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center gap-2">
            <Globe size={18} aria-hidden="true" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-800 text-white rounded-xl px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Select language"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">AR</option>
            </select>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center h-screen px-4">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          <span className="text-blue-500">{t.heroTitle}</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-gray-400 text-lg md:text-xl mb-8"
        >
          {t.heroDesc}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex gap-4"
        >
          <a href="#projects">
            <Button className="rounded-2xl bg-blue-600 hover:bg-blue-700">
              {t.viewProjects}
            </Button>
          </a>
          <a href="#contact">
            <Button 
              variant="outline" 
              className="rounded-2xl border-white text-black hover:bg-white hover:text-gray-950"
            >
              {t.contactUs}
            </Button>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">{t.aboutTitle}</h3>
        <p className="text-gray-400 leading-relaxed">{t.aboutDesc}</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center">{t.projectsTitle}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="rounded-2xl bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors overflow-hidden h-full">
                  <a href={project.projectLink} className="p-4">
                    {/* Phone Frame */}
                    <div className="relative mx-auto mb-6">
                      {/* Phone outline */}
                      <div className="relative w-48 h-100 mx-auto">
                        {/* Phone body */}
                        <div className="absolute inset-0 bg-gray-900 rounded-[40px] shadow-2xl border-8 border-gray-800 overflow-hidden">
                          {/* Phone notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-10"></div>
                          
                          {/* Phone screen */}
                          <div className="absolute inset-2.5 rounded-[32px] overflow-hidden">
                            {/* Screen content with app preview */}
                            <img src={project.projectImg} className="h-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-0">
                      {/* Project Name */}
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-semibold">{project.name}</h4>
                        <ExternalLink size={18} className="text-gray-400 cursor-pointer" />
                      </div>
                      
                      {/* Project Description */}
                      <p className="text-gray-400 text-sm mb-4">
                        {project.description}
                      </p>
                      
                      {/* Skills/Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* View Project Button */}
                      <Button 
                        size="sm" 
                        className="rounded-xl bg-blue-600 hover:bg-blue-700 w-full"
                      >
                        {t.viewProjects}
                      </Button>
                    </CardContent>
                  </a>
                </Card>
              </motion.div>
              
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10">{t.skillsTitle}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["React Native", "Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Firebase", "Git"].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:bg-gray-700 transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">{t.contactTitle}</h3>
          <p className="text-gray-400 mb-8">{t.contactDesc}</p>
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="hover:text-gray-400 transition-colors"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a 
              href="#" 
              className="hover:text-gray-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a 
              href="mailto:contact@ayubdev.com" 
              className="hover:text-gray-400 transition-colors"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
        © {new Date().getFullYear()} AyubDev. All rights reserved.
      </footer>
    </div>
  );
}