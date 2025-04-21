export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}