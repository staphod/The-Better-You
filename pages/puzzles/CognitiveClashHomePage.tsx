import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import ModuleCard from '@/components/ModuleCard';
import { CognitiveClashIcon, VisualClashIcon, WordClashIcon } from '@/components/icons/PuzzleIcons';

const CognitiveClashHomePage: React.FC = () => {
    const { Link } = ReactRouterDom;

    const gameModes = [
        {
            to: "/puzzles/cognitive-clash/game/visual",
            title: "Visual Clash",
            description: "A pure test of visual processing. React to colors and arrows while ignoring conflicting information.",
            icon: <VisualClashIcon />,
        },
        {
            to: "/puzzles/cognitive-clash/game/word",
            title: "Word Clash",
            description: "Challenge your verbal agility. Focus on word meanings, associations, and ignore visual cues.",
            icon: <WordClashIcon />,
        },
        {
            to: "/puzzles/cognitive-clash/game/mixed",
            title: "Mixed Clash",
            description: "The ultimate challenge. A random mix of all puzzle types to keep your brain on its toes.",
            icon: <CognitiveClashIcon />,
        },
    ];

    return (
        <div className="space-y-8">
            <div className="text-left mb-8">
                <Link to="/puzzles" className="text-sm text-brand-primary hover:underline mb-4 inline-block">&larr; Back to Puzzles Menu</Link>
                <div className="flex items-center gap-3">
                   <CognitiveClashIcon className="h-10 w-10 text-brand-primary" />
                   <h1 className="text-3xl font-bold text-brand-text">Cognitive Clash</h1>
                </div>
                <p className="mt-2 text-lg text-brand-text-muted">
                    Choose a mode to test your mental agility and focus under pressure.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gameModes.map(({ to, title, description, icon }) => (
                    <ModuleCard key={to} to={to} title={title} description={description} icon={icon} />
                ))}
            </div>
        </div>
    );
};

export default CognitiveClashHomePage;