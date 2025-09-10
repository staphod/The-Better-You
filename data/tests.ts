import type { TestListing } from '@/types';
import { BrainIcon, OceanIcon, ClockIcon, HeartbeatIcon } from '@/components/icons/ModuleIcons';

export const testListings: TestListing[] = [
  {
    id: 'mbti-architect',
    title: 'MBTI Personality: The Architect',
    summary: 'Discover your strategic and independent personality traits.',
    icon: BrainIcon,
    requires_online: true,
  },
  {
    id: 'big-five-ipip-120',
    title: 'Big Five Personality Test (120 Qs)',
    summary: 'A comprehensive measure of Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.',
    icon: OceanIcon,
    requires_online: true,
  },
  {
    id: 'procrastination-type',
    title: 'Procrastination Type Test',
    summary: 'Identify your procrastination archetype and get tailored strategies to overcome it.',
    icon: ClockIcon,
    requires_online: true,
  },
  {
    id: 'anxiety-level-test',
    title: 'Anxiety Level Test',
    summary: 'Assess your symptoms of general anxiety, social anxiety, and panic.',
    icon: HeartbeatIcon,
    requires_online: true,
  }
];