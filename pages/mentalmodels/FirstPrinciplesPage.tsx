import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { AtomIcon } from '@/components/icons/ModuleIcons';

const FirstPrinciplesPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/models" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Mental Models</Link>
      
      <div className="text-center mb-8">
        <AtomIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">First Principles Thinking</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          The art of boiling things down to their fundamental truths and reasoning up from there.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">What is First Principles Thinking?</h2>
           <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"The first principle is a first basis from which a thing is known."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Aristotle</footer>
          </blockquote>
          <p>
            First principles thinking is a problem-solving approach that requires you to break down a complex problem into its most basic, foundational elements—the "first principles." These are the things you know to be true and that cannot be deduced from any other proposition or assumption. Once you have these fundamental truths, you can reassemble them from the ground up to create a novel and often more effective solution.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">First Principles vs. Reasoning by Analogy</h2>
          <p>
            Most people, most of the time, reason by analogy. This means they look at what others are doing, or what has been done before, and then make small iterations. For example, "My competitor has a feature that does X, so we should build a feature that does X plus a little bit of Y." This is a useful shortcut for daily life, but it rarely leads to breakthrough innovation.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Reasoning by Analogy:</strong> Building on pre-existing assumptions and conventions. It's like copying someone's recipe and just changing one spice.</li>
            <li><strong>Reasoning from First Principles:</strong> Breaking the recipe down to its core ingredients (flour, water, salt, heat) and figuring out how they interact to invent a completely new dish.</li>
          </ul>
        </section>

         <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Case Study: Elon Musk & SpaceX</h2>
          <p>
            Elon Musk is perhaps the most famous modern practitioner of first principles thinking. When he decided to send a rocket to Mars, he first investigated the cost of buying a rocket. He discovered they were astronomically expensive—up to $65 million per launch.
          </p>
           <p className="mt-3">
            Instead of accepting this price (reasoning by analogy), he deconstructed the problem from first principles:
          </p>
          <ol className="list-decimal list-inside space-y-3 mt-4 pl-2">
            <li>
                <strong>Question the Assumption:</strong> The assumption was "rockets are expensive." Musk asked, "What is a rocket actually made of?"
            </li>
            <li>
                <strong>Identify the Core Components:</strong> He discovered the materials were aerospace-grade aluminum alloys, titanium, copper, and carbon fiber.
            </li>
            <li>
                <strong>Determine the Cost of the Components:</strong> He then asked, "What is the cost of those materials on the commodity market?" He found that the raw material cost was only about <strong>2%</strong> of the typical final price of a rocket.
            </li>
            <li>
                <strong>Create a New Solution from the Ground Up:</strong> The huge gap between material cost and final price was due to labor, manufacturing processes, and the profit margins of established companies. Musk concluded that if SpaceX could build the rocket themselves, sourcing raw materials and using vertical integration, they could drastically reduce the cost. This insight was the foundation of SpaceX, which now builds rockets for a fraction of the cost of its competitors.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Apply First Principles in Your Life</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Identify a Core Problem or Goal:</strong> Pick an area where you feel stuck or want to achieve something significant (e.g., changing careers, learning a skill, improving your finances).
            </li>
            <li>
              <strong>Break It Down:</strong> Deconstruct the problem into its most fundamental parts. Challenge every assumption you have. Ask "Why?" repeatedly, like a curious child, until you get to the bedrock truths.
                <ul className="list-disc list-inside mt-2 pl-4 text-sm">
                    <li>"I need a degree to get a good job." &rarr; First principle: "I need to prove I have valuable skills." Is a degree the only way?</li>
                    <li>"Eating healthy is expensive." &rarr; First principle: "My body needs nutrients like protein, fiber, and vitamins." What are the cheapest, most basic sources of these nutrients (e.g., lentils, eggs, seasonal vegetables)?</li>
                </ul>
            </li>
            <li>
              <strong>Rebuild from the Ground Up:</strong> Once you have the fundamental truths, you can start to build a new, more effective strategy. What's the most direct path to acquiring skills? What's the most cost-effective way to get the nutrients you need? You'll often find that the conventional path is not the most efficient one.
            </li>
          </ol>
        </section>
      </div>

      <div className="mt-8 text-center border-t pt-6">
         <Link to="/tools/models" className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity">
            Explore Other Mental Models
          </Link>
      </div>
    </div>
  );
};

export default FirstPrinciplesPage;