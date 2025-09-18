import React from 'react';
import { Link } from 'react-router-dom';
import { FeatherIcon } from '@/components/icons/ModuleIcons';

const CBTPage: React.FC = () => {

  const cognitiveDistortions = [
    { name: "All-or-Nothing Thinking", description: "Seeing things in black-and-white categories. If your performance falls short of perfect, you see yourself as a total failure.", example: "Example: 'I got a B on the test, so I'm a complete idiot.'" },
    { name: "Overgeneralization", description: "You see a single negative event as a never-ending pattern of defeat by using words such as 'always' or 'never'.", example: "Example: 'I got nervous during the presentation. I'm always so awkward.'" },
    { name: "Mental Filter", description: "You pick out a single negative detail and dwell on it exclusively, so that your vision of all reality becomes darkened.", example: "Example: 'I got one critical comment on my report, so the whole thing must be terrible.'" },
    { name: "Catastrophizing", description: "You expect disaster to strike, no matter what. You magnify the importance of problems and shortcomings.", example: "Example: 'If I fail this exam, my life is over.'" },
    { name: "Mind Reading", description: "You arbitrarily conclude that someone is reacting negatively to you, and you don’t bother to check this out.", example: "Example: 'He didn't smile at me, he must think I'm annoying.'" },
    { name: "Emotional Reasoning", description: "You assume that your negative emotions necessarily reflect the way things really are.", example: "Example: 'I feel overwhelmed, therefore my problems are impossible to solve.'" }
  ];

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/strategies" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Tools & Strategies</Link>
      
      <div className="text-center mb-8">
        <FeatherIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Cognitive Behavioral Therapy (CBT)</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          A practical framework for understanding and reframing your negative thoughts.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea: The Cognitive Triangle</h2>
          <p>
            CBT is based on a simple but powerful idea: your <strong>thoughts</strong>, <strong>feelings</strong>, and <strong>behaviors</strong> are interconnected. A negative thought can lead to a negative feeling, which in turn can lead to a negative behavior. This creates a cycle that can be difficult to break.
          </p>
           <div className="text-center my-6 font-semibold">
            <p>Thought ("I'm a failure") &rarr; Feeling (Sadness, hopelessness) &rarr; Behavior (Staying in bed, avoiding tasks)</p>
          </div>
          <p>
            The good news is that you can intervene in this cycle. By learning to identify and challenge your unhelpful thoughts, you can change how you feel and what you do. CBT gives you the tools to become the architect of your own mind.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">Common Cognitive Distortions</h2>
          <p>Cognitive distortions are irrational, automatic thought patterns that can lead to anxiety and depression. Learning to spot them is the first step. Here are some of the most common ones:</p>
          <div className="space-y-4 mt-4">
            {cognitiveDistortions.map(d => (
              <div key={d.name} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-brand-text">{d.name}</h4>
                <p className="text-sm">{d.description}</p>
                <p className="text-sm italic text-slate-500 mt-2">{d.example}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Challenge a Negative Thought</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Identify the Automatic Thought:</strong> When you feel a sudden negative emotion, ask yourself: "What was just going through my mind?" Write the thought down exactly as it occurred.
            </li>
            <li>
              <strong>Identify the Distortion:</strong> Look at the list above. Which cognitive distortion(s) are at play in your thought? Naming it helps you see it as a pattern, not a fact.
            </li>
            <li>
              <strong>Examine the Evidence:</strong> Challenge the thought like a detective. Ask questions: "What is the evidence that this thought is true? What is the evidence against it? Is there a more balanced way of looking at this?"
            </li>
             <li>
              <strong>Create a Balanced, Alternative Thought:</strong> Based on your evidence, write a more rational and compassionate response to the automatic thought. It doesn't have to be overly positive, just more realistic.
            </li>
          </ol>
           <p className="mt-4"><strong>Example:</strong> Your automatic thought is, "I messed up that presentation, I'm so incompetent." You identify this as All-or-Nothing thinking. You examine the evidence: "One part was shaky, but the other parts went well and I got positive feedback on my data." Your new, balanced thought could be: "I was nervous and made a few mistakes, but I prepared well and delivered most of the presentation effectively. I can learn from this and do even better next time."</p>
        </section>
      </div>

      <div className="mt-8 text-center border-t pt-6">
         <Link to="/tools/strategies" className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity">
            Explore Other Tools
          </Link>
      </div>
    </div>
  );
};

export default CBTPage;