'use client';
import { motion } from 'framer-motion';

const skills = {
  'Backend': ['Node.js', 'Python', 'Go', 'REST APIs', 'GraphQL'],
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  'Data Science': ['Pandas', 'NumPy', 'PyTorch', 'MLOps'],
  'DevOps': ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}