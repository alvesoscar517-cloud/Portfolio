import { Monitor, Server, Cloud, Sparkles } from 'lucide-react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SkillBadge } from '@/components/shared/SkillBadge';
import { skills } from '@/data/projects';

const categories = [
  { key: 'frontend', title: 'Frontend', color: 'from-blue-500/20 to-cyan-500/20', icon: Monitor },
  { key: 'backend', title: 'Backend', color: 'from-emerald-500/20 to-teal-500/20', icon: Server },
  { key: 'cloud', title: 'Cloud & DevOps', color: 'from-orange-500/20 to-amber-500/20', icon: Cloud },
  { key: 'specialized', title: 'Specialized', color: 'from-purple-500/20 to-pink-500/20', icon: Sparkles },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <AnimatedSection key={category.key} delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  <category.icon className="w-5 h-5 text-white" />
                  <h3 className="text-white font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills[category.key as keyof typeof skills].map((skill) => (
                    <SkillBadge key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
