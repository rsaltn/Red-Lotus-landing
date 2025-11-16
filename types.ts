export enum ResourceType {
  CAD = 'CAD',
  Portfolio = 'Portfolio',
  Lesson = 'Lesson',
  Code = 'Code',
}

export interface Resource {
  title: string;
  description: string;
  link: string;
  type: ResourceType;
  slug: string;
  content?: string;
}

export interface Sponsor {
  name: string;
  logoUrl: string;
  website: string;
  tier: 'Platinum' | 'Gold' | 'Silver';
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}
