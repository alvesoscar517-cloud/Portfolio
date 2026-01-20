import { Monitor, Server, Cloud, Sparkles } from 'lucide-react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SkillBadge } from '@/components/shared/SkillBadge';
import { skills } from '@/data/projects';

const categories = [
  { key: 'frontend', title: 'Frontend', color: 'from-blue-500/20 to-cyan-500/20', bgColor: 'from-blue-500/5 to-cyan-500/5', headerColor: 'bg-blue-500/15 text-blue-300', icon: Monitor },
  { key: 'backend', title: 'Backend', color: 'from-emerald-500/20 to-teal-500/20', bgColor: 'from-emerald-500/5 to-teal-500/5', headerColor: 'bg-emerald-500/15 text-emerald-300', icon: Server },
  { key: 'cloud', title: 'Cloud & DevOps', color: 'from-orange-500/20 to-amber-500/20', bgColor: 'from-orange-500/5 to-amber-500/5', headerColor: 'bg-orange-500/15 text-orange-300', icon: Cloud },
  { key: 'specialized', title: 'Specialized', color: 'from-purple-500/20 to-pink-500/20', bgColor: 'from-purple-500/5 to-pink-500/5', headerColor: 'bg-purple-500/15 text-purple-300', icon: Sparkles },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {categories.map((category, index) => (
            <AnimatedSection key={category.key} delay={index * 0.1}>
              <div className={`relative p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 h-full overflow-hidden group hover:border-white/20 transition-all`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-50`} />
                
                {/* Decorative SVG shapes - different for each box */}
                {index === 0 && (
                  <div className="absolute -top-20 -right-20 w-64 h-64 opacity-8 pointer-events-none">
                    <svg width="121" height="122" viewBox="0 0 121 122" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M120.371 90.1738C120.371 107.683 106.294 121.877 88.9297 121.877C76.102 121.877 65.0713 114.13 60.1816 103.023C55.2916 114.129 44.2599 121.875 31.4326 121.875C14.0683 121.875 -0.00781719 107.681 -0.00781642 90.1719C-0.00770141 77.2406 7.67059 66.1188 18.6807 61.1865C7.67288 56.2532 -0.00482373 45.1337 -0.0048842 32.2041C-0.00488343 14.695 14.0722 0.501118 31.4365 0.500973C44.2619 0.500973 55.2925 8.24459 60.1836 19.3477C65.0746 8.24442 76.1043 0.500106 88.9297 0.499999C106.294 0.499999 120.371 14.694 120.371 32.2031C120.371 45.1347 112.692 56.2562 101.682 61.1885C112.692 66.1207 120.371 77.2423 120.371 90.1738Z" fill="#3B82F6" fillOpacity="0.15"/>
                    </svg>
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute -top-20 -right-20 w-64 h-64 opacity-8 pointer-events-none rotate-45">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <g clipPath="url(#clip0_10629_3365)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M120 59.0722C120 68.9042 113.07 77.1164 103.833 79.0834C112.833 81.2258 119.527 89.3244 119.527 98.9878C119.527 110.287 110.375 119.447 99.0849 119.447C89.7005 119.447 81.793 113.118 79.3913 104.492C76.9896 113.118 69.0821 119.447 59.6977 119.447C50.3972 119.447 42.5473 113.231 40.0698 104.723C37.5923 113.231 29.7425 119.447 20.4419 119.447C9.15216 119.447 0 110.287 0 98.9878C0 89.2422 6.80833 81.0881 15.9243 79.03C6.80833 76.9718 0 68.8177 0 59.0721C0 50.1519 5.70393 42.565 13.6606 39.7656C5.70393 36.9663 0 29.3794 0 20.4592C0 9.15987 9.15216 0 20.4419 0C29.7425 0 37.5923 6.21636 40.0698 14.7241C40.0833 14.6778 40.1107 14.7241 40.1107 14.7241C42.6328 6.28759 50.4478 0 59.6977 0C69.4181 0 77.5538 6.79025 79.6279 15.8899C81.702 6.79025 89.8377 0 99.5581 0C110.848 0 120 9.15987 120 20.4592C120 29.3794 114.296 36.9663 106.339 39.7657C114.296 42.565 120 50.1519 120 59.0722Z" fill="#10B981" fillOpacity="0.15"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_10629_3365">
                          <rect width="120" height="120" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute -top-20 -right-20 w-64 h-64 opacity-8 pointer-events-none rotate-12">
                    <svg width="479" height="480" viewBox="0 0 479 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M257.761 438.125C249.127 451.853 228.873 451.853 220.239 438.125L199.542 405.22C193.866 396.195 182.414 392.526 172.442 396.537L136.085 411.162C120.917 417.263 104.531 405.523 105.728 389.412L108.598 350.795C109.385 340.203 102.307 330.597 91.8492 328.062L53.7183 318.82C37.8107 314.964 31.5518 295.968 42.1231 283.629L67.4628 254.05C74.4128 245.937 74.4128 234.063 67.4628 225.95L42.1231 196.372C31.5518 184.032 37.8108 165.036 53.7183 161.18L91.8492 151.938C102.307 149.403 109.385 139.797 108.598 129.205L105.728 90.588C104.531 74.4774 120.917 62.7374 136.085 68.8386L172.442 83.4633C182.414 87.4745 193.866 83.8053 199.542 74.7802L220.239 41.8747C228.873 28.1471 249.127 28.1471 257.761 41.8747L278.458 74.7802C284.134 83.8053 295.586 87.4745 305.558 83.4633L341.915 68.8386C357.083 62.7374 373.469 74.4774 372.272 90.588L369.402 129.205C368.615 139.797 375.693 149.403 386.151 151.938L424.282 161.18C440.189 165.036 446.448 184.032 435.877 196.372L410.537 225.95C403.587 234.063 403.587 245.937 410.537 254.05L435.877 283.628C446.448 295.968 440.189 314.964 424.282 318.82L386.151 328.062C375.693 330.597 368.615 340.203 369.402 350.795L372.272 389.412C373.469 405.523 357.083 417.263 341.915 411.162L305.558 396.537C295.586 392.526 284.134 396.195 278.458 405.22L257.761 438.125Z" fill="#F59E0B" fillOpacity="0.15"/>
                    </svg>
                  </div>
                )}
                {index === 3 && (
                  <div className="absolute -top-20 -right-20 w-64 h-64 opacity-8 pointer-events-none -rotate-12">
                    <svg width="480" height="480" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M429.474 249.023C429.474 348.683 344.643 429.474 240 429.474C135.356 429.474 50.5263 348.683 50.5263 249.023L50.5262 122.707C50.5262 82.8425 84.4583 50.5262 126.316 50.5262C138.722 50.5262 150.433 53.3654 160.77 58.3987C166.037 60.9634 171.292 63.7747 176.569 66.598C195.142 76.5336 213.989 86.6165 234.606 86.6165H245.393C266.011 86.6165 284.858 76.5336 303.431 66.598C308.708 63.7747 313.963 60.9634 319.23 58.3987C329.567 53.3654 341.278 50.5262 353.684 50.5262C395.542 50.5262 429.474 82.8425 429.474 122.707V249.023Z" fill="#A855F7" fillOpacity="0.15"/>
                    </svg>
                  </div>
                )}
                
                {/* Geometric shapes background */}
                <div className="absolute inset-0 opacity-20">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} rounded-full blur-2xl transform translate-x-12 -translate-y-12 group-hover:opacity-100 transition-opacity`} />
                  <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${category.color} rounded-full blur-xl transform -translate-x-10 translate-y-10 group-hover:opacity-100 transition-opacity`} />
                </div>
                
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
                </div>
                
                {/* Corner glow */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${category.color} blur-3xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg ${category.headerColor} mb-3 sm:mb-4`}>
                    <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <h3 className="font-semibold text-sm sm:text-base">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skills[category.key as keyof typeof skills].map((skill) => (
                      <SkillBadge 
                        key={skill.name} 
                        name={skill.name} 
                        level={skill.level} 
                        icon={skill.icon}
                        customIcon={(skill as any).customIcon}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
