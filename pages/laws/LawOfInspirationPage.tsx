import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { LightbulbIcon } from '@/components/icons/StatusIcons';

const LawOfInspirationPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <LightbulbIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Inspiration</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Inspire, don’t force. Pull people toward a vision, don't push them through tasks.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"If you want to build a ship, don't drum up the men to gather wood, divide the work and give orders. Instead, teach them to yearn for the vast and endless sea."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Antoine de Saint-Exupéry</footer>
          </blockquote>
          <p>
            The Law of Inspiration states that the highest form of leadership is not management, but inspiration. You can force people to comply through authority (push), but you can only get their willing, passionate commitment by inspiring them with a compelling vision (pull). An inspired team will innovate, take ownership, and go the extra mile not because they have to, but because they want to. Inspiration unlocks discretionary effort.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Martin Luther King Jr.:</strong> He did not give a speech called "I Have a Plan." He gave a speech called "I Have a Dream." He painted a vivid, inspiring picture of a possible future that pulled millions into the Civil Rights Movement.
            </li>
            <li>
                <strong>Steve Jobs:</strong> He didn't just sell computers; he sold a vision of "a bicycle for the mind" and a mission "to make a dent in the universe." This inspired his employees to create revolutionary products.
            </li>
            <li>
                <strong>A Great Coach:</strong> A coach who just drills plays will have a compliant team. A coach who inspires their players with a vision of what they can become, both as athletes and as people, will have a committed and passionate team.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Be an Inspiring Leader</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Connect Work to a "Why":</strong> Always explain the purpose behind a task. Don't just tell people *what* to do; explain *why* it matters. How does this task contribute to the larger vision?
            </li>
            <li>
              <strong>Communicate with Passion and Conviction:</strong> You cannot inspire others if you are not inspired yourself. Believe deeply in the vision you are selling, and let that genuine passion show.
            </li>
            <li>
              <strong>Tell Stories:</strong> Human beings are wired for stories, not for spreadsheets. Use stories and metaphors to make your vision tangible, emotional, and memorable.
            </li>
             <li>
              <strong>Empower and Trust Your People:</strong> Inspiration involves trusting your team to figure out the "how." Give them the vision and the autonomy to find the best way to get there. This shows you believe in their capabilities, which is itself inspiring.
            </li>
          </ol>
        </section>
      </div>

      <div className="mt-8 text-center border-t pt-6">
         <Link to="/tools/laws" className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity">
            Explore Other Laws & Principles
          </Link>
      </div>
    </div>
  );
};

export default LawOfInspirationPage;
