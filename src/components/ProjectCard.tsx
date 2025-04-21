'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <FiGithub /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <FiExternalLink /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}