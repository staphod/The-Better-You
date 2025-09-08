import type { TestListing } from '@/types';
import { BrainIcon, OceanIcon } from '@/components/icons/ModuleIcons';

export const testListings: TestListing[] = [
  {
    id: 'mbti-architect',
    title: 'MBTI Personality: The Architect',
    summary: 'Discover your strategic and independent personality traits.',
    icon: BrainIcon,
    requires_online: true,
  },
  {
    id: 'big-five-ocean',
    title: 'Big Five Personality Test',
    summary: 'Measure your levels of Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.',
    icon: OceanIcon,
    requires_online: true,
  },
];