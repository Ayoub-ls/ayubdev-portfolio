import { Code, Palette, Zap, Bug, Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, high-performance web applications using modern frameworks like React.',
    icon: Code,
  },
  {
    title: 'Website UI Design',
    description: 'Creating intuitive and visually appealing user interfaces that provide great user experiences.',
    icon: Palette,
  },
  {
    title: 'Website Optimization',
    description: 'Improving website speed, SEO, and overall performance for better user engagement.',
    icon: Zap,
  },
  {
    title: 'Bug Fixing',
    description: 'Identifying and resolving technical issues to ensure your website runs smoothly and reliably.',
    icon: Bug,
  },
];

export const PROJECTS = [
  {
    name: 'E-Commerce Dashboard',
    description: 'A comprehensive admin panel for managing products, orders, and customer data with real-time analytics.',
    image: 'https://picsum.photos/seed/dashboard/800/600',
    tech: ['React', 'Tailwind', 'Vite'],
    github: '#',
    live: '#',
  },
  {
    name: 'SaaS Landing Page',
    description: 'A high-converting landing page for a software-as-a-service product with smooth animations.',
    image: 'https://picsum.photos/seed/saas/800/600',
    tech: ['React', 'Motion', 'Tailwind'],
    github: '#',
    live: '#',
  },
  {
    name: 'Portfolio Template',
    description: 'A modern and clean portfolio template designed for creative professionals to showcase their work.',
    image: 'https://picsum.photos/seed/portfolio/800/600',
    tech: ['React', 'Vite', 'Tailwind'],
    github: '#',
    live: '#',
  },
];

export const SKILLS = [
  'React',
  'TailwindCSS',
  'JavaScript',
  'Vite',
  'Git',
  'Responsive Design',
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Email', href: 'mailto:ayoublamara52@gmail.com', icon: Mail },
];
