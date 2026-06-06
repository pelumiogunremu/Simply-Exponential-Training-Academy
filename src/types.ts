/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Module {
  title: string;
  subtopics: string[];
}

export interface ProductProject {
  title: string;
  description: string;
}

export interface Tool {
  name: string;
  category: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  overview: string;
  duration: string;
  format: string;
  learningOutcomes: string[];
  curriculum: Module[];
  tools: Tool[];
  projects: ProductProject[];
  capstoneProject: {
    title: string;
    description: string;
  };
  careerOpportunities: string[];
  faqs: FAQ[];
  accentColor: string;
  bgGradient: string;
}

export interface Trainer {
  id: string;
  name: string;
  qualification: string;
  expertiseArea: string;
  bio: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  batch: string;
  content: string;
  rating: number;
}

export interface Partner {
  name: string;
  type: string;
  logoText: string;
}

export interface ApplicationInput {
  fullName: string;
  email: string;
  phone: string;
  courseId: string;
  currentStatus: string;
  motivation: string;
}
