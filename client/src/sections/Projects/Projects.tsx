import React from 'react';
import { ExternalLink, Github, Globe, Smartphone, Code2, Database, Layers } from 'lucide-react';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  github?: string;
  demo?: string;
}

interface ProjectsProps {
  theme: 'light' | 'dark';
}

const Projects: React.FC<ProjectsProps> = ({ theme = 'light' }) => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: Globe,
      github: "#",
      demo: "#"
    },
    {
      title: "Task Manager App",
      desc: "Collaborative task management application with real-time updates, team workspaces, and progress tracking.",
      tags: ["React", "Express", "Socket.io", "PostgreSQL"],
      icon: Layers,
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      desc: "Modern, responsive portfolio with smooth animations, dark mode, and optimized performance.",
      tags: ["React", "Vite", "Tailwind", "Framer Motion"],
      icon: Code2,
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      desc: "Real-time weather tracking app with location-based forecasts, interactive maps, and weather alerts.",
      tags: ["TypeScript", "React", "API", "Mapbox"],
      icon: Globe,
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Analytics",
      desc: "Analytics dashboard for tracking social media metrics, engagement rates, and audience insights.",
      tags: ["Next.js", "Python", "Chart.js", "Redis"],
      icon: Database,
      github: "#",
      demo: "#"
    },
    {
      title: "Fitness Tracker Mobile",
      desc: "Cross-platform mobile app for tracking workouts, nutrition, and progress with personalized recommendations.",
      tags: ["React Native", "Firebase", "Redux"],
      icon: Smartphone,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className={`py-24 transition-colors duration-300 ${
      theme === 'light' ? 'bg-white' : 'bg-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            theme === 'light' 
              ? 'bg-blue-100 text-blue-600' 
              : 'bg-blue-900/30 text-blue-400'
          }`}>
            My Work
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            theme === 'light' ? 'bg-gray-900' : 'bg-white'
          }`}></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className={`p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                  theme === 'light'
                    ? 'bg-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-800 hover:shadow-2xl'
                }`}
              >
                {/* Icon and Links */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl transition-colors ${
                    theme === 'light' 
                      ? 'bg-blue-100 group-hover:bg-blue-200' 
                      : 'bg-blue-900/30 group-hover:bg-blue-900/50'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                    }`} />
                  </div>
                  
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                          theme === 'light'
                            ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                            : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300'
                        }`}
                        aria-label={`View ${project.title} on GitHub`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                          theme === 'light'
                            ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                            : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300'
                        }`}
                        aria-label={`View ${project.title} demo`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-4 leading-relaxed ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 cursor-default ${
                        theme === 'light'
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
              theme === 'light'
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
            aria-label="View all projects"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;