import type { TestListing } from '@/types';
import { BrainIcon, OceanIcon, ClockIcon, HeartbeatIcon, NetworkIcon, ScaleIcon } from '@/components/icons/ModuleIcons';
import { FireIcon } from '@/components/icons/StatusIcons';

export const testListings: TestListing[] = [
  {
    id: '16-personality-types',
    title: '16 Personality Types Test (84 Qs)',
    summary: 'Discover your 5-letter personality type (e.g., INTP-A) and understand your unique strengths.',
    icon: NetworkIcon,
    requires_online: true,
  },
  {
    id: 'imposter-syndrome-test',
    title: 'Imposter Syndrome Test',
    summary: 'Assess feelings of being a "fraud" and difficulty internalizing your accomplishments.',
    icon: ScaleIcon,
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
    id: 'enneagram-test',
    title: 'Enneagram Personality Test',
    summary: 'Discover your core motivations, fears, and desires with the nine Enneagram types.',
    icon: NetworkIcon,
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
  },
  {
    id: 'stress-level-test',
    title: 'Stress Level Test',
    summary: 'Assess your current stress levels and identify key stressors in your life.',
    icon: HeartbeatIcon,
    requires_online: true,
  },
  {
    id: 'overthinking-test',
    title: 'Overthinking Tendency Test',
    summary: 'Assess your tendency to ruminate, worry, and over-analyze.',
    icon: BrainIcon,
    requires_online: true,
  },
  {
    id: 'burnout-test',
    title: 'Burnout Risk Assessment',
    summary: 'Measure your risk of burnout by assessing exhaustion, cynicism, and efficacy.',
    icon: FireIcon,
    requires_online: true,
  },
  {
    id: 'mbti-architect',
    title: 'MBTI Personality: The Architect',
    summary: 'Discover your strategic and independent personality traits.',
    icon: BrainIcon,
    requires_online: true,
  },
];
