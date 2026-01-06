import { SectionTitle } from '@/components/shared/SectionTitle';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { projects } from '@/data/projects';
import { Users, Code2, Chrome } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Production applications showcasing full-stack expertise"
        />

        {/* Summary Stats */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap justify-center gap-8 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-indigo-500/20">
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">25,000+</div>
                <div className="text-sm text-gray-500">Users Served</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-500/20">
                <Code2 className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100,000+</div>
                <div className="text-sm text-gray-500">Lines of Code</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500/20">
                <Chrome className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-sm text-gray-500">Chrome Extensions</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
