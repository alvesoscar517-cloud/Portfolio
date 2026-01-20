export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credlyBadgeId?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
}

export const certifications: Certification[] = [
  {
    id: 'credly-cert-1',
    name: 'Your Certification Name',
    issuer: 'Issuing Organization',
    date: 'January 2026',
    credlyBadgeId: '13b735ff-04a2-4a12-8a9c-fb776ae92017',
    credentialUrl: 'https://www.credly.com/badges/13b735ff-04a2-4a12-8a9c-fb776ae92017',
    description: 'Description of your certification',
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  }
  // Add more certifications here
];
