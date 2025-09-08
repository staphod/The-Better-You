
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { OnlineStatusProvider } from './hooks/useOnlineStatus';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TestsListPage from './pages/TestsListPage';
import TestPage from './pages/TestPage';
import PuzzlesPage from './pages/PuzzlesPage';
import OfflinePage from './pages/OfflinePage';
import HabitsPage from './pages/HabitsPage';
import ToolsPage from './pages/ToolsPage';
import AddictionsPage from './pages/AddictionsPage';

function App() {
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
            <Route path="/addictions" element={<AddictionsPage />} />
            <Route path="/offline" element={<OfflinePage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </OnlineStatusProvider>
  );
}

export default App;
