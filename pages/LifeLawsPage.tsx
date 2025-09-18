import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ScaleIcon, ToolsIcon, NetworkIcon, BrainIcon, FeatherIcon, AtomIcon, PillarIcon, ClockIcon, HeartbeatIcon, PencilIcon, OceanIcon, BookOpenIcon, CrownIcon, BicycleIcon, LeafIcon } from '@/components/icons/ModuleIcons';
import { LightbulbIcon, TrendingUpIcon, ShieldCheckIcon, HeartIcon } from '@/components/icons/StatusIcons';

const LawCard: React.FC<{ to: string; title: string; description: string; icon: React.ReactNode; }> = ({ to, title, description, icon }) => {
  return (
    <Link to={to} className="block group">
      <div className="flex items-center p-6 bg-brand-surface rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-slate-200 group-hover:border-brand-primary">
        <div className="bg-brand-accent/10 text-brand-accent rounded-lg p-3">
            {icon}
        </div>
        <div className="ml-4">
            <h3 className="text-lg font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{title}</h3>
            <p className="text-sm text-brand-text-muted mt-1">{description}</p>
        </div>
        <div className="ml-auto flex-shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-brand-primary transition-colors transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

const laws = [
    // --- Fundamental Laws ---
    {
      category: "Fundamental Laws",
      to: "/tools/laws/golden-law",
      title: "The Golden Law",
      description: "Do unto others as you would have them do unto you.",
      icon: <CrownIcon className="h-6 w-6" />,
    },
    {
      category: "Fundamental Laws",
      to: "/tools/laws/cause-and-effect",
      title: "Law of Cause and Effect",
      description: "Every effect has a specific cause; your actions create your reality.",
      icon: <ScaleIcon className="h-6 w-6" />,
    },
    {
      category: "Fundamental Laws",
      to: "/tools/laws/sowing-and-reaping",
      title: "Law of Sowing and Reaping",
      description: "You reap what you sow, often more than you sow, and after you sow.",
      icon: <LeafIcon className="h-6 w-6" />,
    },
     {
      category: "Fundamental Laws",
      to: "/tools/laws/entropy",
      title: "Law of Entropy",
      description: "Systems move from order to disorder without constant energy input.",
      icon: <ToolsIcon className="h-6 w-6" />,
    },
    {
      category: "Fundamental Laws",
      to: "/tools/laws/momentum",
      title: "Law of Momentum",
      description: "Stability and progress in life come from continuous forward action.",
      icon: <BicycleIcon className="h-6 w-6" />,
    },
    {
      category: "Fundamental Laws",
      to: "/tools/laws/attraction",
      title: "Law of Attraction",
      description: "Your dominant thoughts and attitude attract corresponding life experiences.",
      icon: <FeatherIcon className="h-6 w-6" />,
    },
     {
      category: "Fundamental Laws",
      to: "/tools/laws/belief",
      title: "Law of Belief",
      description: "Whatever you believe with feeling becomes your reality.",
      icon: <HeartbeatIcon className="h-6 w-6" />,
    },
    {
      category: "Fundamental Laws",
      to: "/tools/laws/tipping-point",
      title: "The Law of the Tipping Point",
      description: "One single drop can change everything. Each small action matters.",
      icon: <AtomIcon className="h-6 w-6" />,
    },
    // --- Productivity & Success ---
    {
      category: "Productivity & Success",
      to: "/tools/laws/pareto-principle",
      title: "Pareto Principle (80/20 Rule)",
      description: "Roughly 80% of consequences come from 20% of the causes.",
      icon: <ScaleIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/focus",
      title: "Law of Focus",
      description: "If you chase two rabbits, you will catch neither.",
      icon: <PillarIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/concentration",
      title: "Law of Concentration",
      description: "Your power is proportional to your ability to focus on a single point.",
      icon: <PillarIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/priorities",
      title: "Law of Priorities",
      description: "Effectiveness comes from scheduling your priorities.",
      icon: <ClockIcon className="h-6 w-6" />,
    },
     {
      category: "Productivity & Success",
      to: "/tools/laws/task-prioritization",
      title: "Law of Priorities (Hardest First)",
      description: "Do your most important task first to build unstoppable momentum.",
      icon: <PillarIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/planning",
      title: "Law of Planning",
      description: "A plan is the bridge between your goals and your reality.",
      icon: <NetworkIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/daily-planning",
      title: "Law of Daily Planning",
      description: "Plan your day before it starts for a massive productivity advantage.",
      icon: <PencilIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/persistence",
      title: "Law of Persistence",
      description: "The ability to continue despite setbacks is the key to victory.",
      icon: <HeartbeatIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/effort",
      title: "Law of Effort",
      description: "Success is the direct result of focused, persistent effort.",
      icon: <ToolsIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/accumulation",
      title: "Law of Accumulation",
      description: "Small, consistent efforts compound into massive results over time.",
      icon: <NetworkIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/completion",
      title: "Law of Completion",
      description: "Finishing what you start frees up mental energy and builds momentum.",
      icon: <TrendingUpIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/single-handling",
      title: "Law of Single Handling",
      description: "Handle each task or piece of information once and only once.",
      icon: <ToolsIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/efficiency",
      title: "Law of Efficiency",
      description: "Focus on the 20% of activities that yield 80% of the results.",
      icon: <ScaleIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/time",
      title: "Law of Time",
      description: "Time is your most precious, non-renewable resource. Use it wisely.",
      icon: <ClockIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/timing",
      title: "Law of Timing",
      description: "There is a right season for every action and every outcome.",
      icon: <ClockIcon className="h-6 w-6" />,
    },
    {
      category: "Productivity & Success",
      to: "/tools/laws/punctuality",
      title: "Law of Punctuality",
      description: "Being on time is a powerful statement of respect and reliability.",
      icon: <ClockIcon className="h-6 w-6" />,
    },
     {
      category: "Productivity & Success",
      to: "/tools/laws/irreplaceability",
      title: "Law of Irreplaceability",
      description: "Time lost can never be regained; treat it as your most valuable asset.",
      icon: <AtomIcon className="h-6 w-6" />,
    },
     {
      category: "Productivity & Success",
      to: "/tools/laws/renewal",
      title: "Law of Renewal",
      description: "Rest is part of the work. You must regularly 'sharpen the saw.'",
      icon: <HeartbeatIcon className="h-6 w-6" />,
    },
    // --- Learning & Knowledge ---
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/continuous-learning",
      title: "Law of Continuous Learning",
      description: "Your growth stops the moment you believe you know enough.",
      icon: <BrainIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/curiosity",
      title: "Law of Curiosity",
      description: "An inquisitive mind is a growing mind. Ask 'why?'.",
      icon: <LightbulbIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/reading",
      title: "Law of Reading",
      description: "A reader lives a thousand lives; the person who doesn't read lives only one.",
      icon: <BookOpenIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/listening",
      title: "Law of Listening",
      description: "Listen to understand, not to reply. You have two ears and one mouth for a reason.",
      icon: <FeatherIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/thinking",
      title: "Law of Thinking",
      description: "The quality of your life is determined by the quality of your thinking.",
      icon: <BrainIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/practice",
      title: "Law of Practice",
      description: "You become good at whatever you repeatedly do, positive or negative.",
      icon: <PencilIcon className="h-6 w-6" />,
    },
     {
      category: "Learning & Knowledge",
      to: "/tools/laws/clarity",
      title: "Law of Clarity",
      description: "The clearer you are about what you want, the faster you will achieve it.",
      icon: <LightbulbIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/writing",
      title: "Law of Writing",
      description: "A goal not in writing is merely a wish.",
      icon: <PencilIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/visualization",
      title: "Law of Visualization",
      description: "See it, feel it, believe it, and your mind will work to achieve it.",
      icon: <BrainIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/feedback",
      title: "Law of Feedback",
      description: "Accurate feedback is the breakfast of champions and key to improvement.",
      icon: <ToolsIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/modeling",
      title: "Law of Modeling",
      description: "Success leaves clues. Learn from those who have gone before you.",
      icon: <NetworkIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/discovery",
      title: "Law of Discovery",
      description: "Venture into the unknown to find new opportunities and knowledge.",
      icon: <OceanIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/teaching",
      title: "Law of Teaching",
      description: "To teach is to learn twice.",
      icon: <PillarIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/learning-from-experience",
      title: "Law of Learning From Experience",
      description: "Evaluated experience is the best teacher.",
      icon: <AtomIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/application",
      title: "Law of Application",
      description: "Knowledge is only potential power. Applied knowledge is real power.",
      icon: <ToolsIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/utilization",
      title: "Law of Utilization",
      description: "Use small pockets of 'dead time' for learning and growth.",
      icon: <BookOpenIcon className="h-6 w-6" />,
    },
    {
      category: "Learning & Knowledge",
      to: "/tools/laws/flexibility",
      title: "Law of Flexibility",
      description: "Be firm in vision, flexible in method. The willow survives by bending.",
      icon: <OceanIcon className="h-6 w-6" />,
    },
     {
      category: "Learning & Knowledge",
      to: "/tools/laws/reinforcement",
      title: "Law of Reinforcement",
      description: "A behavior that is rewarded is a behavior that is repeated.",
      icon: <TrendingUpIcon className="h-6 w-6" />,
    },
    // --- Money & Wealth ---
    {
      category: "Money & Wealth",
      to: "/tools/laws/saving",
      title: "Law of Saving",
      description: "Spend less than you earn. The foundation of financial freedom.",
      icon: <ScaleIcon className="h-6 w-6" />,
    },
    {
      category: "Money & Wealth",
      to: "/tools/laws/pay-yourself-first",
      title: "Law of Pay Yourself First",
      description: "Save before you spend. Automate your savings to build wealth effortlessly.",
      icon: <TrendingUpIcon className="h-6 w-6" />,
    },
    {
      category: "Money & Wealth",
      to: "/tools/laws/investing",
      title: "Law of Investing",
      description: "Invest for the future. Put your money to work for you.",
      icon: <NetworkIcon className="h-6 w-6" />,
    },
    {
      category: "Money & Wealth",
      to: "/tools/laws/compounding",
      title: "Law of Compounding",
      description: "Money grows with patience. Let compound interest be your greatest ally.",
      icon: <ClockIcon className="h-6 w-6" />,
    },
    {
      category: "Money & Wealth",
      to: "/tools/laws/debt",
      title: "Law of Debt",
      description: "Avoid consumer debt when possible. It is a mortgage on your future.",
      icon: <ScaleIcon className="h-6 w-6" />,
    },
    {
      category: "Money & Wealth",
      to: "/tools/laws/small-matters",
      title: "Law of Small Matters",
      description: "Take care of small coins. Seemingly insignificant expenses add up.",
      icon: <PencilIcon className="h-6 w-6" />,
    },
    {
      category: "Money & Wealth",
      to: "/tools/laws/caution",
      title: "Law of Caution",
      description: "Protect your money. Be wary of 'get rich quick' schemes.",
      icon: <ShieldCheckIcon className="h-6 w-6" />,
    },
    {
      category: "Money & Wealth",
      to: "/tools/laws/financial-education",
      title: "Law of Financial Education",
      description: "Learn how money works. Your financial intelligence is your greatest asset.",
      icon: <BookOpenIcon className="h-6 w-6" />,
    },
    {
      category: "Money & Wealth",
      to: "/tools/laws/giving",
      title: "Law of Giving",
      description: "Be generous—it multiplies. A mindset of abundance attracts more abundance.",
      icon: <FeatherIcon className="h-6 w-6" />,
    },
    {
      category: "Money & Wealth",
      to: "/tools/laws/service",
      title: "Law of Service",
      description: "Wealth comes from service. Your income is proportional to the value you provide.",
      icon: <HeartIcon className="h-6 w-6" />,
    },
    // --- Relationships & People ---
    {
      category: "Relationships & People",
      to: "/tools/laws/reciprocity",
      title: "Law of Reciprocity",
      description: "Treat others how you want to be treated. Also known as The Golden Law.",
      icon: <CrownIcon className="h-6 w-6" />,
    },
    {
      category: "Relationships & People",
      to: "/tools/laws/kindness",
      title: "Law of Kindness",
      description: "Be kind—it always pays off in ways you can't measure.",
      icon: <FeatherIcon className="h-6 w-6" />,
    },
    {
      category: "Relationships & People",
      to: "/tools/laws/gratitude",
      title: "Law of Gratitude",
      description: "Say “thank you” often. Gratitude strengthens bonds and attracts positivity.",
      icon: <HeartIcon className="h-6 w-6" />,
    },
    {
      category: "Relationships & People",
      to: "/tools/laws/altruism",
      title: "Law of Altruism",
      description: "Help without expecting return. True generosity is its own reward.",
      icon: <LeafIcon className="h-6 w-6" />,
    },
    {
      category: "Relationships & People",
      to: "/tools/laws/attention",
      title: "Law of Attention",
      description: "Listen with care. Giving someone your full attention is a great gift.",
      icon: <PencilIcon className="h-6 w-6" />,
    },
    {
      category: "Relationships & People",
      to: "/tools/laws/responsibility",
      title: "Law of Responsibility",
      description: "Apologize when wrong. It shows strength, not weakness.",
      icon: <ShieldCheckIcon className="h-6 w-6" />,
    },
    {
      category: "Relationships & People",
      to: "/tools/laws/forgiveness",
      title: "Law of Forgiveness",
      description: "Forgive and let go. Holding a grudge hurts you more than the other person.",
      icon: <FeatherIcon className="h-6 w-6" />,
    },
    {
      category: "Relationships & People",
      to: "/tools/laws/association",
      title: "Law of Association",
      description: "Choose good friends. You are the average of the five people you spend the most time with.",
      icon: <NetworkIcon className="h-6 w-6" />,
    },
    {
      category: "Relationships & People",
      to: "/tools/laws/encouragement",
      title: "Law of Encouragement",
      description: "Encourage others. Your words can be the wind in someone else's sails.",
      icon: <TrendingUpIcon className="h-6 w-6" />,
    },
    {
      category: "Relationships & People",
      to: "/tools/laws/pleasantness",
      title: "Law of Pleasantness",
      description: "Smile—it changes the room. A pleasant demeanor is magnetic.",
      icon: <HeartIcon className="h-6 w-6" />,
    },
    // --- Leadership & Influence ---
    {
      category: "Leadership & Influence",
      to: "/tools/laws/leadership",
      title: "Law of Leadership",
      description: "Lead by example. Your actions speak louder than your words.",
      icon: <CrownIcon className="h-6 w-6" />,
    },
    {
      category: "Leadership & Influence",
      to: "/tools/laws/accountability",
      title: "Law of Accountability",
      description: "Take responsibility. Great leaders own the outcomes, good or bad.",
      icon: <ShieldCheckIcon className="h-6 w-6" />,
    },
    {
      category: "Leadership & Influence",
      to: "/tools/laws/generosity-in-leadership",
      title: "Law of Generosity in Leadership",
      description: "Share credit, take blame. This builds a loyal and trusting team.",
      icon: <FeatherIcon className="h-6 w-6" />,
    },
    {
      category: "Leadership & Influence",
      to: "/tools/laws/trust",
      title: "Law of Trust",
      description: "Build trust above all else. It is the foundation of all influence.",
      icon: <PillarIcon className="h-6 w-6" />,
    },
    {
      category: "Leadership & Influence",
      to: "/tools/laws/importance",
      title: "Law of Importance",
      description: "Make people feel important. The deepest human need is to be appreciated.",
      icon: <HeartIcon className="h-6 w-6" />,
    },
    {
      category: "Leadership & Influence",
      to: "/tools/laws/fairness",
      title: "Law of Fairness",
      description: "Be fair always. Consistent and impartial judgment earns respect.",
      icon: <ScaleIcon className="h-6 w-6" />,
    },
    {
      category: "Leadership & Influence",
      to: "/tools/laws/promise-keeping",
      title: "Law of Promise Keeping",
      description: "Keep promises. Your reliability is a measure of your character.",
      icon: <ShieldCheckIcon className="h-6 w-6" />,
    },
    {
      category: "Leadership & Influence",
      to: "/tools/laws/communication",
      title: "Law of Communication",
      description: "Communicate clearly. Ambiguity is the enemy of execution.",
      icon: <PencilIcon className="h-6 w-6" />,
    },
    {
      category: "Leadership & Influence",
      to: "/tools/laws/calmness",
      title: "Law of Calmness",
      description: "Solve problems calmly. The leader's composure sets the tone for the team.",
      icon: <OceanIcon className="h-6 w-6" />,
    },
    {
      category: "Leadership & Influence",
      to: "/tools/laws/inspiration",
      title: "Law of Inspiration",
      description: "Inspire, don’t force. Pull people up, don't push them down.",
      icon: <LightbulbIcon className="h-6 w-6" />,
    },
    // --- Decision & Problem Solving ---
    {
      category: "Decision & Problem Solving",
      to: "/tools/laws/definition",
      title: "Law of Definition",
      description: "Define the problem clearly. A problem well-stated is a problem half-solved.",
      icon: <LightbulbIcon className="h-6 w-6" />,
    },
    {
      category: "Decision & Problem Solving",
      to: "/tools/laws/alternatives",
      title: "Law of Alternatives",
      description: "Look at all options. Never make a decision with only one choice.",
      icon: <NetworkIcon className="h-6 w-6" />,
    },
    {
      category: "Decision & Problem Solving",
      to: "/tools/laws/consequences",
      title: "Law of Consequences",
      description: "Think about long-term effects. Practice second-order thinking.",
      icon: <BrainIcon className="h-6 w-6" />,
    },
    {
      category: "Decision & Problem Solving",
      to: "/tools/laws/objectivity",
      title: "Law of Objectivity",
      description: "Trust facts more than feelings. Make decisions based on data.",
      icon: <ScaleIcon className="h-6 w-6" />,
    },
    {
      category: "Decision & Problem Solving",
      to: "/tools/laws/counsel",
      title: "Law of Counsel",
      description: "Ask for advice. Seek input from those with more experience.",
      icon: <FeatherIcon className="h-6 w-6" />,
    },
    {
      category: "Decision & Problem Solving",
      to: "/tools/laws/decisiveness",
      title: "Law of Decisiveness",
      description: "Decide quickly, change slowly. Be decisive once you have the facts.",
      icon: <ToolsIcon className="h-6 w-6" />,
    },
    {
      category: "Decision & Problem Solving",
      to: "/tools/laws/reflection",
      title: "Law of Reflection",
      description: "Learn from bad decisions. Every mistake is a lesson in disguise.",
      icon: <BrainIcon className="h-6 w-6" />,
    },
    {
      category: "Decision & Problem Solving",
      to: "/tools/laws/emotional-control",
      title: "Law of Emotional Control",
      description: "Don’t decide when angry. Make major decisions in a calm state.",
      icon: <OceanIcon className="h-6 w-6" />,
    },
    {
      category: "Decision & Problem Solving",
      to: "/tools/laws/compounding-decisions",
      title: "Law of Compounding Decisions",
      description: "Small decisions add up. Your life is the sum of your choices.",
      icon: <NetworkIcon className="h-6 w-6" />,
    },
    {
      category: "Decision & Problem Solving",
      to: "/tools/laws/inaction",
      title: "Law of Inaction",
      description: "No decision is also a decision. Choosing not to act has consequences.",
      icon: <ClockIcon className="h-6 w-6" />,
    },
    // --- Character & Integrity ---
    {
      category: "Character & Integrity",
      to: "/tools/laws/truth",
      title: "Law of Truth",
      description: "Always tell the truth. It simplifies your life and builds self-respect.",
      icon: <ShieldCheckIcon className="h-6 w-6" />,
    },
    {
      category: "Character & Integrity",
      to: "/tools/laws/right-action",
      title: "Law of Right Action",
      description: "Do what’s right, not what’s easy. Character is forged in difficult choices.",
      icon: <PillarIcon className="h-6 w-6" />,
    },
    {
      category: "Character & Integrity",
      to: "/tools/laws/honor",
      title: "Law of Honor",
      description: "Your word is your bond. Live in such a way that you are a person of integrity.",
      icon: <CrownIcon className="h-6 w-6" />,
    },
    {
      category: "Character & Integrity",
      to: "/tools/laws/integrity",
      title: "Law of Integrity",
      description: "Integrity builds respect. It is the quality of being honest with strong moral principles.",
      icon: <PillarIcon className="h-6 w-6" />,
    },
    {
      category: "Character & Integrity",
      to: "/tools/laws/confidentiality",
      title: "Law of Confidentiality",
      description: "Keep secrets safe. Being a trustworthy confidant is a rare and valuable trait.",
      icon: <ShieldCheckIcon className="h-6 w-6" />,
    },
    {
      category: "Character & Integrity",
      to: "/tools/laws/admission",
      title: "Law of Admission",
      description: "Admit mistakes fast. Honesty about your failures builds trust and accelerates learning.",
      icon: <ToolsIcon className="h-6 w-6" />,
    },
    {
      category: "Character & Integrity",
      to: "/tools/laws/loyalty",
      title: "Law of Loyalty",
      description: "Be loyal to those not present. It builds the trust of those who are.",
      icon: <HeartIcon className="h-6 w-6" />,
    },
    {
      category: "Character & Integrity",
      to: "/tools/laws/justice",
      title: "Law of Justice",
      description: "Stand up for what’s fair, especially for those who cannot stand for themselves.",
      icon: <ScaleIcon className="h-6 w-6" />,
    },
    {
      category: "Character & Integrity",
      to: "/tools/laws/character",
      title: "Law of Character",
      description: "Character is what you do when no one is watching. It is your true self.",
      icon: <PillarIcon className="h-6 w-6" />,
    },
    {
      category: "Character & Integrity",
      to: "/tools/laws/fragility-of-trust",
      title: "Law of Fragility of Trust",
      description: "Trust is built slowly, lost quickly. It's the most valuable and fragile asset.",
      icon: <ShieldCheckIcon className="h-6 w-6" />,
    },
    // --- Happiness & Life ---
    {
      category: "Happiness & Life",
      to: "/tools/laws/happiness",
      title: "Law of Happiness",
      description: "Happiness comes from inside. It is a choice, not a condition.",
      icon: <HeartIcon className="h-6 w-6" />,
    },
    {
      category: "Happiness & Life",
      to: "/tools/laws/gratitude-life",
      title: "Law of Gratitude",
      description: "Gratitude makes you rich. It shifts focus from what you lack to what you have.",
      icon: <FeatherIcon className="h-6 w-6" />,
    },
    {
      category: "Happiness & Life",
      to: "/tools/laws/health",
      title: "Law of Health",
      description: "Health is wealth. Your physical well-being is the foundation for everything else.",
      icon: <HeartbeatIcon className="h-6 w-6" />,
    },
    {
      category: "Happiness & Life",
      to: "/tools/laws/fitness",
      title: "Law of Fitness",
      description: "Exercise your body and mind. A strong body supports a strong mind.",
      icon: <BicycleIcon className="h-6 w-6" />,
    },
    {
      category: "Happiness & Life",
      to: "/tools/laws/balance",
      title: "Law of Balance",
      description: "Balance work and play. Renewal is a necessary part of a productive life.",
      icon: <ScaleIcon className="h-6 w-6" />,
    },
    {
      category: "Happiness & Life",
      to: "/tools/laws/presence",
      title: "Law of Presence",
      description: "Be present in the moment. The past is history, the future is a mystery.",
      icon: <LeafIcon className="h-6 w-6" />,
    },
    {
      category: "Happiness & Life",
      to: "/tools/laws/contribution",
      title: "Law of Contribution",
      description: "Give more than you take. The secret to living is giving.",
      icon: <HeartIcon className="h-6 w-6" />,
    },
    {
      category: "Happiness & Life",
      to: "/tools/laws/hope",
      title: "Law of Hope",
      description: "Hope makes life brighter. It is the belief that things can and will get better.",
      icon: <LightbulbIcon className="h-6 w-6" />,
    },
    {
      category: "Happiness & Life",
      to: "/tools/laws/love",
      title: "Law of Love",
      description: "Love is the greatest power. It is the ultimate force for connection and good.",
      icon: <HeartIcon className="h-6 w-6" />,
    },
    {
      category: "Happiness & Life",
      to: "/tools/laws/living-in-the-now",
      title: "Law of Living in the Now",
      description: "Live today fully—it won’t return. The present moment is all you ever have.",
      icon: <ClockIcon className="h-6 w-6" />,
    },
    // --- Humanized Academia ---
    {
      category: "Humanized Academia",
      to: "/tools/laws/newtons-laws-of-motion",
      title: "Newton's Laws of Motion",
      description: "Applying physics principles to understand inertia, force, and momentum in life.",
      icon: <AtomIcon className="h-6 w-6" />,
    },
];

const categories = [
    "Fundamental Laws",
    "Productivity & Success",
    "Learning & Knowledge",
    "Money & Wealth",
    "Relationships & People",
    "Leadership & Influence",
    "Decision & Problem Solving",
    "Character & Integrity",
    "Happiness & Life",
    "Humanized Academia",
];

const LifeLawsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredLaws = useMemo(() => {
    if (!searchQuery) return laws;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return laws.filter(law =>
      law.title.toLowerCase().includes(lowerCaseQuery) ||
      law.description.toLowerCase().includes(lowerCaseQuery) ||
      law.category.toLowerCase().includes(lowerCaseQuery)
    );
  }, [searchQuery]);

  const groupedAndFilteredLaws = useMemo(() => {
    return filteredLaws.reduce((acc, law) => {
      const category = law.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(law);
      return acc;
    }, {} as Record<string, typeof laws>);
  }, [filteredLaws]);


  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-left mb-8">
        <div className="flex items-center gap-3">
          <ScaleIcon className="h-10 w-10 text-brand-primary" />
          <h1 className="text-3xl font-bold text-brand-text">Life Laws & Principles</h1>
        </div>
        <p className="mt-2 text-lg text-brand-text-muted">
          Explore timeless laws and principles that govern success, happiness, and human behavior.
        </p>
        <Link to="/tools" className="text-sm text-brand-primary hover:underline mt-4 inline-block">&larr; Back to All Tools</Link>
      </div>

      <div className="mb-8 relative">
        <input
            type="text"
            placeholder="Search laws..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary bg-brand-surface"
        />
        <svg className="h-5 w-5 text-slate-400 absolute top-1/2 left-3 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
      
       {searchQuery && filteredLaws.length > 0 && (
        <div className="space-y-4 mb-8">
          {filteredLaws.map(law => (
            <LawCard key={law.to} {...law} />
          ))}
        </div>
      )}

      {searchQuery && filteredLaws.length === 0 && (
        <div className="text-center py-10 bg-brand-surface rounded-lg border border-dashed">
            <p className="text-brand-text-muted">No laws found for "{searchQuery}"</p>
        </div>
      )}

      {!searchQuery && (
          <div className="space-y-10">
              {categories.map(category => (
                groupedAndFilteredLaws[category] && (
                    <div key={category}>
                        <h2 className="text-2xl font-bold text-brand-text mb-4 pb-2 border-b-2 border-brand-primary">{category}</h2>
                        <div className="space-y-4">
                            {groupedAndFilteredLaws[category].map(law => (
                                <LawCard key={law.to} {...law} />
                            ))}
                        </div>
                    </div>
                )
              ))}
          </div>
      )}
    </div>
  );
};

export default LifeLawsPage;