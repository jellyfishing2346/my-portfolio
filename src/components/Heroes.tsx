'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            Faizan Khan
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'Full-Stack Engineer',
              1500,
              'Backend Specialist',
              1500,
              'Data Scientist',
              1500,
            ]}
            speed={50}
            className="text-xl md:text-3xl text-zinc-600 dark:text-zinc-400"
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-4 justify-center"
        >
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white">
            View Projects
          </a>
          <a href="#contact" className="border-2 border-zinc-300 dark:border-zinc-700 px-6 py-3 rounded-lg">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}