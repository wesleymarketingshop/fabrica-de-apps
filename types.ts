import React from 'react';

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  age: number;
  image: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}