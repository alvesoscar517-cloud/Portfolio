import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  Atom, FileCode2, Palette, Sparkles, FileText, Database, RefreshCw,
  Server, Flame, Zap, Radio, Network, Cloud, Container, GitBranch, Globe,
  Chrome, Smartphone, Brain, Users, Languages, type LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Atom, FileCode2, Palette, Sparkles, FileText, Database, RefreshCw,
  Server, Flame, Zap, Radio, Network, Cloud, Container, GitBranch, Globe,
  Chrome, Smartphone, Brain, Users, Languages
};

interface SkillBadgeProps {
  name: string;
  level: string;
  icon?: string;
}

export function SkillBadge({ name, level, icon }: SkillBadgeProps) {
  const levelColors = {
    Expert: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    Advanced: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    Intermediate: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  };

  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/10 hover:border-white/20 transition-colors">
      {IconComponent && <IconComponent className="w-4 h-4 text-indigo-400" />}
      <span className="text-white text-sm">{name}</span>
      <Badge className={cn('text-xs', levelColors[level as keyof typeof levelColors] || levelColors.Intermediate)}>
        {level}
      </Badge>
    </div>
  );
}
