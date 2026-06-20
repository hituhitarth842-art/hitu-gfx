export interface Service {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface VideoProject {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string; // Dynamic video URL or fallback
  watchTime?: string;
  viewsLimit?: string;
  isCustom?: boolean;
}

export interface ThumbnailProject {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  ctr: string;
  views: string;
}

export interface Creator {
  id: string;
  name: string;
  subscribers: string;
  avatarUrl: string;
}

export interface Tool {
  name: string;
  iconName: string; // Special SVG / icon
  category: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  subscribers: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}
