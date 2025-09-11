import React from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';
import { OnlineStatusProvider } from '@/hooks/useOnlineStatus';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';

// Test Pages
import TestsHomePage from '@/pages/TestsHomePage';
import TestsListPage from '@/pages/TestsListPage';
import TestPage from '@/pages/TestPage';
import KnowledgeBaseListPage from '@/pages/KnowledgeBaseListPage';
import KnowledgeBaseDetailPage from '@/pages/KnowledgeBaseDetailPage';

import PuzzlesPage from '@/pages/PuzzlesPage';
import OfflinePage from '@/pages/OfflinePage';
import HabitsPage from '@/pages/HabitsPage';
import ToolsPage from '@/pages/ToolsPage';
import AddictionsPage from '@/pages/AddictionsPage';
import AddictionDetailPage from '@/pages/AddictionDetailPage';
import AboutPage from '@/pages/AboutPage'; // New About Page
import DiaryPage from '@/pages/DiaryPage'; // New Diary List Page
import DiaryEntryPage from '@/pages/DiaryEntryPage'; // New Diary Entry Page
import SupportPage from '@/pages/SupportPage'; // New Support Page

// Tools Sub-pages
import ToolsStrategiesPage from '@/pages/ToolsStrategiesPage';
import MentalModelsPage from '@/pages/MentalModelsPage';
import LifeLawsPage from '@/pages/LifeLawsPage';
import SixtyMinutesOfSilencePage from '@/pages/tools/SixtyMinutesOfSilencePage';
import CBTPage from '@/pages/tools/CBTPage';
import JournalingPage from '@/pages/tools/JournalingPage';
import FirstPrinciplesPage from '@/pages/mentalmodels/FirstPrinciplesPage';
import StoicismPage from '@/pages/mentalmodels/StoicismPage';
import CauseAndEffectPage from '@/pages/laws/CauseAndEffectPage';
import EntropyPage from '@/pages/laws/EntropyPage';
import SowingAndReapingPage from '@/pages/laws/SowingAndReapingPage';


function App() {
  const { HashRouter, Routes, Route } = ReactRouterDom;
  return (
    <OnlineStatusProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Updated Test Routes */}
            <Route path="/tests" element={<TestsHomePage />} />
            <Route path="/tests/list" element={<TestsListPage />} />
            <Route path="/test/:testId" element={<TestPage />} />
            <Route path="/tests/knowledge-base" element={<KnowledgeBaseListPage />} />
            <Route path="/tests/knowledge-base/:testId" element={<KnowledgeBaseDetailPage />} />

            <Route path="/puzzles" element={<PuzzlesPage />} />
            <Route path="/habits" element={<HabitsPage />} />
            
            {/* New Diary Routes */}
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/diary/entry/:entryId" element={<DiaryEntryPage />} />

            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/tools/strategies" element={<ToolsStrategiesPage />} />
            <Route path="/tools/strategies/60-minutes-of-silence" element={<SixtyMinutesOfSilencePage />} />
            <Route path="/tools/strategies/cbt" element={<CBTPage />} />
            <Route path="/tools/strategies/journaling" element={<JournalingPage />} />
            <Route path="/tools/models" element={<MentalModelsPage />} />
            <Route path="/tools/models/first-principles" element={<FirstPrinciplesPage />} />
            <Route path="/tools/models/stoicism" element={<StoicismPage />} />
            <Route path="/tools/laws" element={<LifeLawsPage />} />
            <Route path="/tools/laws/cause-and-effect" element={<CauseAndEffectPage />} />
            <Route path="/tools/laws/entropy" element={<EntropyPage />} />
            <Route path="/tools/laws/sowing-and-reaping" element={<SowingAndReapingPage />} />
            <Route path="/addictions" element={<AddictionsPage />} />
            <Route path="/addiction/:addictionId" element={<AddictionDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/offline" element={<OfflinePage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </OnlineStatusProvider>
  );
}

export default App;
