import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ShieldCheckIcon } from '@/components/icons/StatusIcons';

const LawOfConfidentialityPage: React.FC = () => {
  const { Link } = ReactRouterDom;

  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <Link to="/tools/laws" className="text-sm text-brand-primary hover:underline mb-6 inline-block">&larr; Back to Life Laws & Principles</Link>
      
      <div className="text-center mb-8">
        <ShieldCheckIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">The Law of Confidentiality</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Keep secrets safe. Being a trustworthy confidant is a rare and valuable trait.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Core Idea</h2>
          <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
            <p>"Whoever goes about slandering reveals secrets, but he who is trustworthy in spirit keeps a thing covered."</p>
            <footer className="text-right text-sm font-semibold mt-2 not-italic">- Proverbs 11:13</footer>
          </blockquote>
          <p>
            The Law of Confidentiality states that the ability to keep a secret is a fundamental aspect of trustworthiness and character. When someone confides in you, they are offering you a piece of their vulnerability. Honoring that trust by keeping their information confidential is a profound act of respect and loyalty. Gossip and the revealing of secrets may offer a fleeting sense of importance, but they permanently damage your reputation as a person of integrity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">The Law in Action</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
                <strong>Friendship:</strong> The friends we trust the most are the ones we know we can share our deepest fears and insecurities with, confident that they will not be repeated.
            </li>
            <li>
                <strong>Professionalism:</strong> In fields like medicine, law, and therapy, confidentiality is a legal and ethical cornerstone. It allows clients and patients to be completely honest without fear of exposure.
            </li>
            <li>
                <strong>Leadership:</strong> A leader is often privy to sensitive information about the company or its employees. The ability to handle this information with discretion is essential for maintaining the trust of their team.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-text mb-3">How to Practice Confidentiality</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Assume Information is Private:</strong> Unless explicitly told otherwise, treat personal information shared with you as confidential.
            </li>
            <li>
              <strong>Resist the Urge to Gossip:</strong> When you are tempted to share a piece of juicy information about someone else, pause and consider the source and your motivation. Participating in gossip erodes trust all around.
            </li>
            <li>
              <strong>Don't Use "Vague-booking":</strong> Avoid sharing vague but suggestive details about someone else's situation on social media or in groups. This is a passive form of revealing secrets.
            </li>
             <li>
              <strong>Be a Vault:</strong> Make it your personal policy to be a "vault" for the secrets of others. When people know that information stops with you, they will grant you a level of trust that is invaluable.
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

export default LawOfConfidentialityPage;
