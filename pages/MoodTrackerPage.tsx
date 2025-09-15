import React, { useState } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { useMood } from '@/hooks/useMood';
import { useDiary } from '@/hooks/useDiary';
import type { Mood } from '@/types';
import { MoodIcon } from '@/components/icons/ModuleIcons';
import { TrashIcon } from '@/components/icons/StatusIcons';

const moods: { name: Mood; emoji: string; color: string }[] = [
  { name: 'Happy', emoji: '😊', color: 'bg-green-100 text-green-800' },
  { name: 'Calm', emoji: '😌', color: 'bg-blue-100 text-blue-800' },
  { name: 'Neutral', emoji: '😐', color: 'bg-slate-100 text-slate-800' },
  { name: 'Anxious', emoji: '😟', color: 'bg-amber-100 text-amber-800' },
  { name: 'Sad', emoji: '😢', color: 'bg-indigo-100 text-indigo-800' },
];

const MoodTrackerPage: React.FC = () => {
  const navigate = ReactRouterDom.useNavigate();
  const { moodLogs, addMoodLog, deleteMoodLog } = useMood();
  const { addEntry } = useDiary();
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [note, setNote] = useState('');

  const handleLogMood = () => {
    if (!selectedMood) {
      alert('Please select a mood.');
      return;
    }
    addMoodLog({ mood: selectedMood, note });
    setSelectedMood(null);
    setNote('');
  };
  
  const expandInDiary = (log: typeof moodLogs[0]) => {
      const newEntry = addEntry({
          title: `Mood Log: ${new Date(log.date).toLocaleDateString()}`,
          content: `<h3>Feeling: ${log.mood}</h3><p>${log.note}</p>`
      });
      navigate(`/diary/entry/${newEntry.id}`);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-brand-text">Mood Tracker</h1>
        <p className="mt-2 text-lg text-brand-text-muted">
          How are you feeling right now? Log your mood to track patterns over time.
        </p>
      </div>

      <div className="bg-brand-surface p-6 rounded-lg shadow-sm border border-slate-200">
        <h2 className="font-semibold text-lg text-brand-text mb-4">Select Your Mood</h2>
        <div className="flex justify-around items-center mb-4">
          {moods.map(({ name, emoji, color }) => (
            <button
              key={name}
              onClick={() => setSelectedMood(name)}
              className={`w-16 h-16 rounded-full flex flex-col items-center justify-center transition-all duration-200 transform hover:scale-110 ${selectedMood === name ? 'ring-2 ring-brand-primary scale-110' : 'opacity-70'}`}
              aria-label={name}
            >
              <span className="text-3xl">{emoji}</span>
              <span className="text-xs font-semibold">{name}</span>
            </button>
          ))}
        </div>
        
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a note about why you're feeling this way... (optional)"
          rows={3}
          className="w-full p-2 border border-slate-300 rounded-md focus:ring-brand-primary focus:border-brand-primary"
        />
        
        <button
          onClick={handleLogMood}
          disabled={!selectedMood}
          className="w-full mt-4 bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-primary/90 disabled:bg-slate-400"
        >
          Log Mood
        </button>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold text-brand-text mb-4">Recent Logs</h2>
        {moodLogs.length > 0 ? (
          <div className="space-y-4">
            {moodLogs.map((log) => {
              const moodInfo = moods.find(m => m.name === log.mood);
              return (
                <div key={log.id} className="bg-brand-surface p-4 rounded-lg shadow-sm border border-slate-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className={`text-2xl px-2 rounded-md ${moodInfo?.color}`}>{moodInfo?.emoji}</span>
                        <div>
                            <p className="font-bold text-lg text-brand-text">{log.mood}</p>
                            <p className="text-xs text-brand-text-muted">{new Date(log.date).toLocaleString()}</p>
                        </div>
                      </div>
                      {log.note && <p className="mt-3 text-brand-text-muted pl-1 italic">"{log.note}"</p>}
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-1">
                        <button onClick={() => expandInDiary(log)} className="text-xs font-semibold text-brand-primary hover:underline p-2">Expand in Diary</button>
                        <button onClick={() => deleteMoodLog(log.id)} className="p-2 text-slate-400 hover:text-brand-danger rounded-full" aria-label="Delete log">
                           <TrashIcon className="h-4 w-4" />
                        </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-10 bg-brand-surface rounded-lg border border-dashed">
            <MoodIcon className="h-12 w-12 text-slate-400 mx-auto mb-2" />
            <p className="text-brand-text-muted">Your mood history will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodTrackerPage;
