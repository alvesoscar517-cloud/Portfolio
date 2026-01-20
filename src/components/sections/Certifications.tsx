import { ExternalLink, Calendar, Award, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { useEffect } from 'react';

export function Certifications() {
  useEffect(() => {
    // Load Credly embed script
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="certifications" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Google-style decorative background shapes */}
      {/* Shape middle - large star on right, partially cut off */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[600px] h-[600px] opacity-30 pointer-events-none">
        <svg width="479" height="480" viewBox="0 0 479 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M257.761 438.125C249.127 451.853 228.873 451.853 220.239 438.125L199.542 405.22C193.866 396.195 182.414 392.526 172.442 396.537L136.085 411.162C120.917 417.263 104.531 405.523 105.728 389.412L108.598 350.795C109.385 340.203 102.307 330.597 91.8492 328.062L53.7183 318.82C37.8107 314.964 31.5518 295.968 42.1231 283.629L67.4628 254.05C74.4128 245.937 74.4128 234.063 67.4628 225.95L42.1231 196.372C31.5518 184.032 37.8108 165.036 53.7183 161.18L91.8492 151.938C102.307 149.403 109.385 139.797 108.598 129.205L105.728 90.588C104.531 74.4774 120.917 62.7374 136.085 68.8386L172.442 83.4633C182.414 87.4745 193.866 83.8053 199.542 74.7802L220.239 41.8747C228.873 28.1471 249.127 28.1471 257.761 41.8747L278.458 74.7802C284.134 83.8053 295.586 87.4745 305.558 83.4633L341.915 68.8386C357.083 62.7374 373.469 74.4774 372.272 90.588L369.402 129.205C368.615 139.797 375.693 149.403 386.151 151.938L424.282 161.18C440.189 165.036 446.448 184.032 435.877 196.372L410.537 225.95C403.587 234.063 403.587 245.937 410.537 254.05L435.877 283.628C446.448 295.968 440.189 314.964 424.282 318.82L386.151 328.062C375.693 330.597 368.615 340.203 369.402 350.795L372.272 389.412C373.469 405.523 357.083 417.263 341.915 411.162L305.558 396.537C295.586 392.526 284.134 396.195 278.458 405.22L257.761 438.125Z" fill="#4285F4" fillOpacity="0.12"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional certifications and achievements"
        />

        <AnimatedSection>
          <Card className="relative overflow-hidden border-white/10 hover:border-white/20 transition-all duration-300 bg-gray-900/40 backdrop-blur-sm">
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Left side - Credly Badge Embed */}
                <div className="flex-shrink-0 mx-auto lg:mx-0">
                  <div className="bg-gray-100/95 rounded-lg p-4">
                    <div
                      className="credly-badge-wrapper"
                      data-iframe-width="150"
                      data-iframe-height="270"
                      data-share-badge-id="13b735ff-04a2-4a12-8a9c-fb776ae92017"
                      data-share-badge-host="https://www.credly.com"
                    />
                  </div>
                </div>

                {/* Right side - Information */}
                <div className="flex-1 space-y-5">
                  {/* Header with icon and link */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                        <Award className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                          Prompt Design in Vertex AI Skill Badge
                        </h3>
                        <p className="text-blue-400 font-medium text-sm">
                          Issued by <a 
                            href="https://cloud.google.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-blue-300 transition-colors underline"
                          >
                            Google Cloud
                          </a>
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://www.credly.com/badges/13b735ff-04a2-4a12-8a9c-fb776ae92017"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                      aria-label="View credential"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Issued January 2026</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Complete the introductory Prompt Design in Vertex AI skill badge to demonstrate skills in the 
                    following: prompt engineering, image analysis, and multimodal generative techniques, within 
                    Vertex AI. Discover how to craft effective prompts, guide generative AI output, and apply Gemini 
                    models to real-world marketing scenarios.
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-xs sm:text-sm rounded-md bg-gray-800/80 text-gray-200 border border-gray-700 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      Validation
                    </span>
                    <span className="px-3 py-1.5 text-xs sm:text-sm rounded-md bg-gray-800/80 text-gray-200 border border-gray-700 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      Foundational
                    </span>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2.5">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Artificial Intelligence (AI)', 'Gemini APIs', 'Generative AI', 'Prompt Engineering'].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs sm:text-sm rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Custom CSS to style Credly iframe content */}
        <style>{`
          .credly-badge-wrapper iframe {
            color-scheme: dark;
          }
          
          /* Try to force white text in iframe if possible */
          .credly-badge-wrapper {
            filter: brightness(1.1) contrast(1.05);
          }
        `}</style>
      </div>
    </section>
  );
}
