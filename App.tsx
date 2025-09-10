import React from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';
import { OnlineStatusProvider } from '@/hooks/useOnlineStatus';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import TestsListPage from '@/pages/TestsListPage';
import TestPage from '@/pages/TestPage';
import PuzzlesPage from '@/pages/PuzzlesPage';
import OfflinePage from '@/pages/OfflinePage';
import HabitsPage from '@/pages/HabitsPage';
import ToolsPage from '@/pages/ToolsPage';
import AddictionsPage from '@/pages/AddictionsPage';
import AddictionDetailPage from '@/pages/AddictionDetailPage';
import CreditsPage from '@/pages/CreditsPage';
import ToolsStrategiesPage from '@/pages/ToolsStrategiesPage';
import MentalModelsPage from '@/pages/MentalModelsPage';
import LifeLawsPage from '@/pages/LifeLawsPage';

function App() {
  const { HashRouter, Routes, Route } = ReactRouterDom;
  return (
    <OnlineStatusProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tests" element={<TestsListPage />} />
            <Route path="/test/:testId" element={<TestPage />} />
            <Route path="/puzzles" element={<PuzzlesPage />} />
            <Route path="/habits" element={<HabitsPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/tools/strategies" element={<ToolsStrategiesPage />} />
            <Route path="/tools/models" element={<MentalModelsPage />} />
            <Route path="/tools/laws" element={<LifeLawsPage />} />
            <Route path="/addictions" element={<AddictionsPage />} />
            <Route path="/addiction/:addictionId" element={<AddictionDetailPage />} />
            <Route path="/credits" element={<CreditsPage />} />
            <Route path="/offline" element={<OfflinePage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </OnlineStatusProvider>
  );
}

export default App;