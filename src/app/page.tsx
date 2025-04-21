import Terminal from '../components/Terminal';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const projects: Project[] = projectsData.map((project) => ({
  ...project,
  id: project.id.toString(),
})) as Project[];

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
}

const typedProjects: Project[] = projects as Project[];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="space-y-8">
        <h1 className="text-5xl font-bold">Faizan Khan</h1>
          {typedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </section>

      {/* Projects Grid */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Terminal Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Terminal</h2>
            <div className="flex justify-center">
              <Terminal />
            </div>
            </section>
        </div>
      </section>
    </>
  );
}