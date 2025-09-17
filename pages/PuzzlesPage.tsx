import React from 'react';
import ModuleCard from '@/components/ModuleCard';
import { PuzzleIcon } from '@/components/icons/ModuleIcons';
import { SequencingIcon, DotsIcon, OneLineIcon } from '@/components/icons/PuzzleIcons';

const PuzzlesPage: React.FC = () => {
    const puzzleModules = [
        {
            to: "/puzzles/riddles",
            title: "Logic & Riddles",
            description: "Challenge your mind with a large repository of classic word and number puzzles.",
            icon: <PuzzleIcon />,
        },
        {
            to: "/puzzles/sequencing",
            title: "Sequencing Puzzles",
            description: "Arrange items in the correct order. A test of logic and pattern recognition.",
            icon: <SequencingIcon />,
        },
        {
            to: "/puzzles/dot-connection",
            title: "Dot Connection",
            description: "Coming Soon! Connect the dots without crossing lines in this spatial reasoning challenge.",
            icon: <DotsIcon />,
        },
        {
            to: "/puzzles/one-line-drawing",
            title: "One-Line Drawing",
            description: "Coming Soon! Trace complex shapes with a single, continuous line without lifting your finger.",
            icon: <OneLineIcon />,
        },
    ];

    return (
        <div className="space-y-8">
            <div className="text-left mb-8">
                <h1 className="text-3xl font-bold text-brand-text">Mind Puzzles</h1>
                <p className="mt-2 text-lg text-brand-text-muted">
                    Select a category to sharpen your mind with our interactive challenges.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {puzzleModules.map(({ to, title, description, icon }) => (
                    <ModuleCard key={to} to={to} title={title} description={description} icon={icon} />
                ))}
            </div>
        </div>
    );
};

export default PuzzlesPage;
