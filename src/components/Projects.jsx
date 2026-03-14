import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-xl text-lg"
            >
              A selection of my recent work, showcasing my expertise in building modern web applications.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 font-bold hover:underline"
            >
              View all on GitHub <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex space-x-3">
                    <a 
                      href={project.github}
                      className="p-2 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white hover:text-gray-900 transition-all"
                      title="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.live}
                      className="p-2 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white hover:text-gray-900 transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a 
                    href={project.live}
                    className="text-sm font-bold text-gray-900 hover:text-blue-600 flex items-center transition-colors"
                  >
                    View Case Study <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

