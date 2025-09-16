import React from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';
import { OnlineStatusProvider } from '@/hooks/useOnlineStatus';
import { ThemeProvider } from '@/hooks/useTheme';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';

// Test Pages
import TestsHomePage from '@/pages/TestsHomePage';
import TestsListPage from '@/pages/TestsListPage';
import TestPage from '@/pages/TestPage';
import TestHistoryPage from '@/pages/TestHistoryPage';
import TestHistoryDetailPage from '@/pages/TestHistoryDetailPage';
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
import DiaryDetailPage from '@/pages/DiaryDetailPage'; // New Diary Detail Page
import DiaryEntryPage from '@/pages/DiaryEntryPage'; // New Diary Entry Page
import SupportPage from '@/pages/SupportPage'; // New Support Page
import MoodTrackerPage from '@/pages/MoodTrackerPage'; // New Mood Tracker Page

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
import SecondOrderThinkingPage from './pages/mentalmodels/SecondOrderThinkingPage';
import InversionPage from './pages/mentalmodels/InversionPage';
import OpportunityCostPage from './pages/mentalmodels/OpportunityCostPage';
import OccamsRazorPage from './pages/mentalmodels/OccamsRazorPage';
import HanlonsRazorPage from './pages/mentalmodels/HanlonsRazorPage';
import ConfirmationBiasPage from './pages/mentalmodels/ConfirmationBiasPage';
import AvailabilityHeuristicPage from './pages/mentalmodels/AvailabilityHeuristicPage';
import SurvivorshipBiasPage from './pages/mentalmodels/SurvivorshipBiasPage';
import LossAversionPage from './pages/mentalmodels/LossAversionPage';
import CircleOfCompetencePage from './pages/mentalmodels/CircleOfCompetencePage';
import BayesianThinkingPage from './pages/mentalmodels/BayesianThinkingPage';
import ParetoPrinciplePage from './pages/laws/ParetoPrinciplePage';
import DiminishingReturnsPage from './pages/laws/DiminishingReturnsPage';
import FeedbackLoopsPage from './pages/laws/FeedbackLoopsPage';


function App() {
  const { HashRouter, Routes, Route } = ReactRouterDom;
  return (
    <OnlineStatusProvider>
      <ThemeProvider>
        <HashRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              {/* Updated Test Routes */}
              <Route path="/tests" element={<TestsHomePage />} />
              <Route path="/tests/list" element={<TestsListPage />} />
              <Route path="/test/:testId" element={<TestPage />} />
              <Route path="/tests/history" element={<TestHistoryPage />} />
              <Route path="/tests/history/:historyId" element={<TestHistoryDetailPage />} />
              <Route path="/tests/knowledge-base" element={<KnowledgeBaseListPage />} />
              <Route path="/tests/knowledge-base/:testId" element={<KnowledgeBaseDetailPage />} />

              <Route path="/puzzles" element={<PuzzlesPage />} />
              <Route path="/habits" element={<HabitsPage />} />
              
              {/* New Diary Routes */}
              <Route path="/diary" element={<DiaryPage />} />
              <Route path="/diary/detail/:entryId" element={<DiaryDetailPage />} />
              <Route path="/diary/entry/:entryId" element={<DiaryEntryPage />} />
              
              {/* New Mood Tracker Route */}
              <Route path="/mood" element={<MoodTrackerPage />} />

              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/tools/strategies" element={<ToolsStrategiesPage />} />
              <Route path="/tools/strategies/60-minutes-of-silence" element={<SixtyMinutesOfSilencePage />} />
              <Route path="/tools/strategies/cbt" element={<CBTPage />} />
              <Route path="/tools/strategies/journaling" element={<JournalingPage />} />
              <Route path="/tools/models" element={<MentalModelsPage />} />
              <Route path="/tools/models/first-principles" element={<FirstPrinciplesPage />} />
              <Route path="/tools/models/stoicism" element={<StoicismPage />} />
              <Route path="/tools/models/second-order-thinking" element={<SecondOrderThinkingPage />} />
              <Route path="/tools/models/inversion" element={<InversionPage />} />
              <Route path="/tools/models/opportunity-cost" element={<OpportunityCostPage />} />
              <Route path="/tools/models/occams-razor" element={<OccamsRazorPage />} />
              <Route path="/tools/models/hanlons-razor" element={<HanlonsRazorPage />} />
              <Route path="/tools/models/confirmation-bias" element={<ConfirmationBiasPage />} />
              <Route path="/tools/models/availability-heuristic" element={<AvailabilityHeuristicPage />} />
              <Route path="/tools/models/survivorship-bias" element={<SurvivorshipBiasPage />} />
              <Route path="/tools/models/loss-aversion" element={<LossAversionPage />} />
              <Route path="/tools/models/circle-of-competence" element={<CircleOfCompetencePage />} />
              <Route path="/tools/models/bayesian-thinking" element={<BayesianThinkingPage />} />
              <Route path="/tools/laws" element={<LifeLawsPage />} />
              <Route path="/tools/laws/cause-and-effect" element={<CauseAndEffectPage />} />
              <Route path="/tools/laws/entropy" element={<EntropyPage />} />
              <Route path="/tools/laws/sowing-and-reaping" element={<SowingAndReapingPage />} />
              <Route path="/tools/laws/pareto-principle" element={<ParetoPrinciplePage />} />
              <Route path="/tools/laws/diminishing-returns" element={<DiminishingReturnsPage />} />
              <Route path="/tools/laws/feedback-loops" element={<FeedbackLoopsPage />} />
              <Route path="/addictions" element={<AddictionsPage />} />
              <Route path="/addiction/:addictionId" element={<AddictionDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/offline" element={<OfflinePage />} />
            </Routes>
          </Layout>
        </HashRouter>
      </ThemeProvider>
    </OnlineStatusProvider>
  );
}

export default App;