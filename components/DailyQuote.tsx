import React, { useState, useEffect } from 'react';
import { quotes, Quote } from '@/data/quotes';

const DailyQuote: React.FC = () => {
    const [quote, setQuote] = useState<Quote | null>(null);

    useEffect(() => {
        try {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote(randomQuote);
        } catch (e) {
            console.error("Failed to load a quote.", e);
        }
    }, []);

    if (!quote) {
        return null;
    }

    return (
        <div className="bg-brand-surface p-6 rounded-xl border border-slate-200/80 shadow-sm h-full flex flex-col justify-center min-h-[160px]">
            <h3 className="text-sm font-semibold text-brand-text-muted mb-3">Quote of the Day</h3>
            <blockquote className="flex-grow">
                <p className="text-xl font-semibold text-brand-text italic">"{quote.text}"</p>
                <footer className="text-right mt-3 text-brand-text-muted">- {quote.author}</footer>
            </blockquote>
        </div>
    );
};

export default DailyQuote;
