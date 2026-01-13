import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, X, Code2, Layers, Sparkles, Zap, CheckCircle2,
  GitBranch, BarChart3, FileCode, Globe, Cpu, Database, Cloud,
  Smartphone, Brain, Users, Shield, Rocket, Settings, Chrome
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projectIcons: Record<string, typeof Code2> = {
  'gnote': Globe,
  'graphos-ai-studio': Brain,
  'localize-ai': Chrome,
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const ProjectIcon = projectIcons[project.id] || Code2;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="h-full"
      >
        <Card className="h-full flex flex-col overflow-hidden group hover:border-indigo-500/30">
          <div className="h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 group-hover:scale-110 transition-transform duration-500" />
            <ProjectIcon className="w-12 h-12 text-indigo-400/60" />
            <Badge className="absolute top-3 right-3 text-xs" variant="secondary">
              {project.type}
            </Badge>
          </div>
          
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Layers className="w-4 h-4 text-indigo-400" />
              {project.title}
            </CardTitle>
            <CardDescription className="text-indigo-300/70 text-sm line-clamp-2">
              {project.tagline}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex flex-col flex-1 pt-0">
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-3">
              {project.description}
            </p>

            {/* Metrics row */}
            <div className="flex gap-4 mb-3 text-center">
              {project.metrics.slice(0, 3).map((metric) => (
                <div key={metric.label} className="flex-1">
                  <div className="text-sm font-semibold text-white">{metric.value}</div>
                  <div className="text-xs text-gray-500 truncate">{metric.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {project.techStack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 4 && (
                <Badge variant="outline" className="text-xs px-2 py-0.5">
                  +{project.techStack.length - 4}
                </Badge>
              )}
            </div>

            {/* Spacer to push button to bottom */}
            <div className="flex-1" />

            <Button variant="primary" size="sm" onClick={() => setModalOpen(true)} className="w-full">
              <Sparkles className="w-3.5 h-3.5" />
              View Details
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <ProjectModal project={project} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

const featureIcons = [
  CheckCircle2, Zap, Shield, Rocket, Globe, Database, 
  Cloud, Smartphone, Brain, Users, Settings, FileCode
];

const archIcons = [GitBranch, Cpu, Database, Cloud, Shield, Settings];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15 }}
        className="bg-gray-900/95 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <Badge variant="secondary" className="mb-2 text-xs">{project.type}</Badge>
              <h2 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 shrink-0" />
                <span className="truncate">{project.title}</span>
              </h2>
              <p className="text-indigo-300/70 text-xs sm:text-sm mt-1">{project.tagline}</p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-500 hover:text-white shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{project.description}</p>

          {/* Metrics with icons */}
          <div className="flex flex-wrap gap-3 sm:gap-6">
            {project.metrics.map((metric, i) => {
              const icons = [BarChart3, FileCode, Globe];
              const Icon = icons[i % icons.length];
              return (
                <div key={metric.label} className="flex items-center gap-2">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-indigo-500/10">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-white">{metric.value}</div>
                    <div className="text-[10px] sm:text-xs text-gray-500">{metric.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Features with icons */}
          <div>
            <h3 className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
              {project.features.map((feature, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                return (
                  <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-white/5 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                    <span className="truncate">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Architecture with icons */}
          <div>
            <h3 className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
              Architecture
            </h3>
            <div className="space-y-1.5 sm:space-y-2">
              {project.architectureHighlights.map((highlight, i) => {
                const Icon = archIcons[i % archIcons.length];
                return (
                  <div key={highlight} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech Stack with icon */}
          <div>
            <h3 className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-[10px] sm:text-xs">{tech}</Badge>
              ))}
            </div>
          </div>

          {/* Links with icons */}
          <div className="flex flex-wrap gap-2 pt-1 sm:pt-2">
            {project.links.map((link) => {
              const isChrome = link.icon === 'Chrome' || link.label.toLowerCase().includes('chrome');
              const LinkIcon = isChrome ? Chrome : ExternalLink;
              return (
                <Button key={link.label} variant={isChrome ? 'secondary' : 'primary'} size="sm" asChild className="text-xs sm:text-sm">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex flex-row items-center gap-1.5 sm:gap-2">
                    <LinkIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>{link.label}</span>
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
