import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50/50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm Ayub, a frontend developer focused on building modern, responsive and user-friendly websites using React and modern web technologies.
              </p>
              <p>
                With a passion for clean code and intuitive design, I bridge the gap between complex backend logic and seamless user experiences. I love turning creative ideas into functional, high-performance web applications.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or learning about the latest advancements in the web ecosystem.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">3+</div>
                <div className="text-sm text-gray-500 font-medium">Years Experience</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-gray-500 font-medium">Projects Completed</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
                <div className="text-sm text-gray-500 font-medium">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-200 shadow-xl relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-8 h-1 bg-blue-600 rounded-full mr-4"></span>
                My Skills
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform"></div>
                    <span className="font-semibold text-gray-700 group-hover:text-blue-700">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-blue-600 rounded-3xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-2">Always Learning</h4>
                  <p className="text-blue-100 text-sm">
                    Currently exploring Next.js 15 and advanced animation patterns with Motion.
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-blue-100 rounded-[2.5rem] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
