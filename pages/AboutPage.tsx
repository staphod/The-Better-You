import React from 'react';
import { HeartIcon, ShieldCheckIcon, LightbulbIcon } from '@/components/icons/StatusIcons';
import { BrainIcon } from '@/components/icons/ModuleIcons';


const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg">
      <div className="text-center mb-12">
        <HeartIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-brand-text">About The Better You</h1>
        <p className="mt-4 text-lg text-brand-text-muted">
          Your private, offline-first companion for self-discovery and personal growth.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-brand-primary border-b pb-3 mb-4">Our Mission</h2>
          <p className="text-brand-text-muted">
            In a world of constant connectivity and data collection, we believe everyone deserves a private space to reflect, learn, and grow. Our mission is to provide high-quality, accessible tools for self-discovery that respect your privacy above all else. We aim to empower you with knowledge and frameworks to better understand yourself and the world around you, without ever compromising your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-primary border-b pb-3 mb-4">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-4">
            <div className="text-center">
              <ShieldCheckIcon className="h-12 w-12 text-brand-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-brand-text">Privacy First</h3>
              <p className="text-sm text-brand-text-muted mt-1">
                Your data is yours alone. All personal information, from test results to habit tracking, is stored exclusively on your device. We have no servers, no clouds, no tracking.
              </p>
            </div>
            <div className="text-center">
              <BrainIcon className="h-12 w-12 text-brand-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-brand-text">Empowerment Through Knowledge</h3>
              <p className="text-sm text-brand-text-muted mt-1">
                We provide frameworks, tests, and models used by top performers and therapists to help you build a mental toolkit for a better life. Knowledge is the first step to change.
              </p>
            </div>
            <div className="text-center">
              <LightbulbIcon className="h-12 w-12 text-brand-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-brand-text">Quality & Simplicity</h3>
              <p className="text-sm text-brand-text-muted mt-1">
                Our tools are designed to be simple, beautiful, and effective. We focus on providing well-researched, high-quality content in an interface that is a pleasure to use.
              </p>
            </div>
          </div>
        </section>

         <section>
          <h2 className="text-2xl font-semibold text-brand-primary border-b pb-3 mb-4">How It Works</h2>
          <p className="text-brand-text-muted">
            The Better You is built as a hybrid offline/online application. The core interface and your personal data work completely offline. An internet connection is only required to load new content for the first time, like a test or an article you haven't viewed before. Once loaded, it's cached on your device for future offline use. This model gives you the best of both worlds: access to a rich library of content with the security of local data storage.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;