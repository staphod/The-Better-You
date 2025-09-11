import React from 'react';
import { HeartIcon } from '@/components/icons/StatusIcons';

const SupportPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <div className="text-center mb-12">
        <HeartIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">Support Our Mission: Self-Discovery for All</h1>
      </div>

      <div className="prose prose-slate max-w-none text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-info">
        <p className="lead">"My name is Staphod Cylas."</p>
        <p>
          My journey with this app began with a simple yet powerful vision: to provide a tool that empowers people to gain the knowledge and ability to achieve deep self-awareness and personal growth. I built this app completely free, with no ads, to ensure that your private journey of self-discovery remains just that—private and accessible to everyone.
        </p>
        <p>
          This app is more than just code; it's a passion project that I built entirely on my smartphone, a Tecno Pop 8. While this has been a testament to what's possible, it also comes with its limitations. As a web-based application, we face challenges in implementing more advanced, privacy-preserving features and ensuring a seamless offline-first experience.
        </p>

        <h2>Our Dream: A Native App for Everyone</h2>
        <p>
          Our ultimate goal is to build a full-fledged native application that runs smoothly on Android, iOS, Windows, and even KaiOS, reaching every corner of our community. A native app would allow for deeper device integration, better performance, and more robust features like secure, on-device AI analysis and reliable background reminders.
        </p>
        <p>
          To do this, we need to graduate from mobile development to a more robust setup. A laptop or desktop computer is essential for the demanding work of native app development—it allows for powerful emulators, faster code compilation, and the professional tools needed to build a world-class experience. Alongside this, a stable internet connection powered by a Wi-Fi router is crucial for research, collaboration, and deploying updates.
        </p>

        <h2>The Future is Private, Insightful, and Connected</h2>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Secure, Optional Cloud Sync:</strong> For users who want it, we'll offer end-to-end encrypted data sync so you never lose your diary or habit progress. It will always be opt-in.</li>
            <li><strong>On-Device AI Insights:</strong> Imagine an AI that can analyze your diary entries locally to help you spot patterns in your thinking, all without your data ever leaving your device.</li>
            <li><strong>Enhanced Tools:</strong> More interactive tools, guided meditations, and advanced visualizations to accelerate your growth.</li>
        </ul>

        <h2>You Can Be Part of This Mission</h2>
        <p>
          This app is, and always will be, free for its core features. It is a community-driven project, supported by users like you. Your contribution, no matter the size, helps us acquire the necessary tools to turn this vision into a reality and bring powerful tools for self-improvement to millions.
        </p>
        <p>
          We are also open to conversations with investors who share our vision of empowerment, on the condition that the app's essential services remain free for all.
        </p>
        <p>
          Thank you for believing in this journey.
        </p>
      </div>

      <div className="mt-10 pt-6 border-t">
        <h2 className="text-2xl font-semibold text-center text-brand-text mb-6">How You Can Help Us</h2>
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <ul className="space-y-4 text-brand-text break-words">
            <li><strong>M-Pesa:</strong> <code>0742985445</code></li>
            <li><strong>CRDB Bank:</strong> <code>01520000NXT00</code></li>
            <li><strong>Patreon:</strong> <a href="https://patreon.com/SmileSphere?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" target="_blank" rel="noopener noreferrer">patreon.com/SmileSphere</a></li>
            <li><strong>Airtm:</strong> <a href="https://airtm.me/staphod" target="_blank" rel="noopener noreferrer">airtm.me/staphod</a></li>
            <li><strong>Bitcoin:</strong> <code>1L5Rcs67933Dxrbq1ksY4DTpoRg9fvZS2R</code></li>
            <li>
              <strong>Paypal:</strong> <a href="https://www.paypal.com/paypalme/staphodcylas" target="_blank" rel="noopener noreferrer" title="staphodcylas01@gmail.com">Click here to donate</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
