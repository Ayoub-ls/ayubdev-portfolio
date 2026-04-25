import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PROJECT_IMAGES = [
  './images/amourshop.png',
  './images/badisuspension.png',
  './images/Lumina.png',
  './images/demomen.png',
  './images/asianrestaurant.png',
  './images/brbrart.png',
];

const PROJECT_LINKS = [
  'https://amourshop-store.vercel.app/',
  'https://demo-suspension.netlify.app/',
  'https://demo-boutique.netlify.app/',
  'https://demomen.netlify.app/',
  'https://asian-restaurant-kappa.vercel.app/',
  'https://brbrart.netlify.app/',
];

export default function Projects() {
  const { t } = useLanguage();

  // Safeguard in case translations are missing or structured differently
  const items = t.projects?.items || [];

  // We'll split the items: first two as Real Projects, third as Demo Project
  // If there are more/less, we handle them gracefully.
  const realProjects = items.slice(0, 2).map((item, i) => ({
    ...item,
    image: PROJECT_IMAGES[i],
    link: PROJECT_LINKS[i],
  }));

  const demoProjects = items.slice(2).map((item, i) => ({
    ...item,
    image: PROJECT_IMAGES[i + 2] || PROJECT_IMAGES[0],
    link: PROJECT_LINKS[i + 2] || PROJECT_LINKS[0],
  }));

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-[#120018]/60 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-sm hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all duration-500 flex flex-col"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative aspect-[4/3] overflow-hidden block">
        <img
          src={project.image}
          alt={project.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="flex space-x-3">
            <span
              className="p-2 bg-[#00F2FF]/20 backdrop-blur-md rounded-xl text-[#00F2FF] hover:bg-[#00F2FF] hover:text-[#120018] transition-all"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </span>
          </div>
        </div>
      </a>

      <div className="p-6 flex flex-col flex-grow items-center text-center md:items-start md:text-start">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F2FF] transition-colors">
          {project.name}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
        <div className="flex items-center justify-center md:justify-start pt-4 border-t border-white/10 mt-auto w-full">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-white hover:text-[#00F2FF] flex items-center transition-colors"
          >
            {t.projects?.viewCase || 'View Case Study'} <ArrowRight className="ms-1 w-4 h-4 rtl:-scale-x-100" />
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.projects?.heading || 'Projects'}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t.projects?.subheading || 'A selection of my recent work'}
          </p>
        </motion.div>

        {/* Real Projects Section */}
        {realProjects.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center justify-center md:justify-start mb-10">
              <h3 className="text-3xl font-bold text-white relative inline-block">
                {t.projects?.realProjects || 'Real Projects'}
                <span className="absolute -bottom-2 inset-x-0 mx-auto md:mx-0 md:inset-x-auto md:start-0 w-1/2 h-1 bg-[#00F2FF] rounded-full shadow-[0_0_10px_#00F2FF]"></span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realProjects.map((project, index) => (
                <ProjectCard key={project.name || index} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Demo Projects Section */}
        {demoProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-center md:justify-start mb-10">
              <h3 className="text-3xl font-bold text-white relative inline-block">
                {t.projects?.demoProjects || 'Demo Projects'}
                <span className="absolute -bottom-2 inset-x-0 mx-auto md:mx-0 md:inset-x-auto md:start-0 w-1/2 h-1 bg-[#cc00cc] rounded-full shadow-[0_0_10px_#cc00cc]"></span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demoProjects.map((project, index) => (
                <ProjectCard key={project.name || index} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
