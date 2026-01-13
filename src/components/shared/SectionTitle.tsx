import { AnimatedSection } from './AnimatedSection';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <AnimatedSection className="text-center mb-8 sm:mb-16 px-2 sm:px-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
