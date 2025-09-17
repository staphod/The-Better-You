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
import RiddlesPage from '@/pages/puzzles/RiddlesPage';
import SequencingPage from '@/pages/puzzles/SequencingPage';
import DotConnectionPage from '@/pages/puzzles/DotConnectionPage';
import OneLineDrawingPage from '@/pages/puzzles/OneLineDrawingPage';

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
import Buffetts525StrategyPage from '@/pages/tools/Buffetts5-25StrategyPage';
import BruceLeesSimplicityPage from '@/pages/tools/BruceLeesSimplicityPage';
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
import LawOfEffortPage from './pages/laws/LawOfEffortPage';
import LawOfExpectationsPage from './pages/laws/LawOfExpectationsPage';
import LawOfAttractionPage from './pages/laws/LawOfAttractionPage';
import LawOfFailurePage from './pages/laws/LawOfFailurePage';
import LawOfConcentrationPage from './pages/laws/LawOfConcentrationPage';
import LawOfPrioritiesPage from './pages/laws/LawOfPrioritiesPage';
import LawOfAccumulationPage from './pages/laws/LawOfAccumulationPage';
import LawOfBeliefPage from './pages/laws/LawOfBeliefPage';
import LawOfPracticePage from './pages/laws/LawOfPracticePage';
import LawOfClarityPage from './pages/laws/LawOfClarityPage';
import LawOfWritingPage from './pages/laws/LawOfWritingPage';
import LawOfPlanningPage from './pages/laws/LawOfPlanningPage';
import LawOfVisualizationPage from './pages/laws/LawOfVisualizationPage';
import LawOfFeedbackPage from './pages/laws/LawOfFeedbackPage';
import LawOfFocusPage from './pages/laws/LawOfFocusPage';
import LawOfPersistencePage from './pages/laws/LawOfPersistencePage';
import LawOfTimingPage from './pages/laws/LawOfTimingPage';
import LawOfReinforcementPage from './pages/laws/LawOfReinforcementPage';
import LawOfFlexibilityPage from './pages/laws/LawOfFlexibilityPage';
import LawOfContinuousLearningPage from './pages/laws/LawOfContinuousLearningPage';
import LawOfCuriosityPage from './pages/laws/LawOfCuriosityPage';
import LawOfReadingPage from './pages/laws/LawOfReadingPage';
import LawOfListeningPage from './pages/laws/LawOfListeningPage';
import LawOfThinkingPage from './pages/laws/LawOfThinkingPage';
import LawOfModelingPage from './pages/laws/LawOfModelingPage';
import LawOfDiscoveryPage from './pages/laws/LawOfDiscoveryPage';
import LawOfTeachingPage from './pages/laws/LawOfTeachingPage';
import LawOfLearningFromExperiencePage from './pages/laws/LawOfLearningFromExperiencePage';
import LawOfApplicationPage from './pages/laws/LawOfApplicationPage';
import LawOfTimePage from './pages/laws/LawOfTimePage';
import LawOfDailyPlanningPage from './pages/laws/LawOfDailyPlanningPage';
import LawOfTaskPrioritizationPage from './pages/laws/LawOfTaskPrioritizationPage';
import LawOfEfficiencyPage from './pages/laws/LawOfEfficiencyPage';
import LawOfRenewalPage from './pages/laws/LawOfRenewalPage';
import LawOfSingleHandlingPage from './pages/laws/LawOfSingleHandlingPage';
import LawOfUtilizationPage from './pages/laws/LawOfUtilizationPage';
import LawOfPunctualityPage from './pages/laws/LawOfPunctualityPage';
import LawOfCompletionPage from './pages/laws/LawOfCompletionPage';
import LawOfIrreplaceabilityPage from './pages/laws/LawOfIrreplaceabilityPage';
import TheGoldenLawPage from './pages/laws/TheGoldenLawPage';
import LawOfMomentumPage from './pages/laws/LawOfMomentumPage';

// New Law Imports
import LawOfSavingPage from './pages/laws/LawOfSavingPage';
import LawOfPayYourselfFirstPage from './pages/laws/LawOfPayYourselfFirstPage';
import LawOfInvestingPage from './pages/laws/LawOfInvestingPage';
import LawOfCompoundingPage from './pages/laws/LawOfCompoundingPage';
import LawOfDebtPage from './pages/laws/LawOfDebtPage';
import LawOfSmallMattersPage from './pages/laws/LawOfSmallMattersPage';
import LawOfCautionPage from './pages/laws/LawOfCautionPage';
import LawOfFinancialEducationPage from './pages/laws/LawOfFinancialEducationPage';
import LawOfGivingPage from './pages/laws/LawOfGivingPage';
import LawOfServicePage from './pages/laws/LawOfServicePage';
import LawOfReciprocityPage from './pages/laws/LawOfReciprocityPage';
import LawOfKindnessPage from './pages/laws/LawOfKindnessPage';
import LawOfGratitudePage from './pages/laws/LawOfGratitudePage';
import LawOfAltruismPage from './pages/laws/LawOfAltruismPage';
import LawOfAttentionPage from './pages/laws/LawOfAttentionPage';
import LawOfResponsibilityPage from './pages/laws/LawOfResponsibilityPage';
import LawOfForgivenessPage from './pages/laws/LawOfForgivenessPage';
import LawOfAssociationPage from './pages/laws/LawOfAssociationPage';
import LawOfEncouragementPage from './pages/laws/LawOfEncouragementPage';
import LawOfPleasantnessPage from './pages/laws/LawOfPleasantnessPage';
import LawOfLeadershipPage from './pages/laws/LawOfLeadershipPage';
import LawOfAccountabilityPage from './pages/laws/LawOfAccountabilityPage';
import LawOfGenerosityInLeadershipPage from './pages/laws/LawOfGenerosityInLeadershipPage';
import LawOfTrustPage from './pages/laws/LawOfTrustPage';
import LawOfImportancePage from './pages/laws/LawOfImportancePage';
import LawOfFairnessPage from './pages/laws/LawOfFairnessPage';
import LawOfPromiseKeepingPage from './pages/laws/LawOfPromiseKeepingPage';
import LawOfCommunicationPage from './pages/laws/LawOfCommunicationPage';
import LawOfCalmnessPage from './pages/laws/LawOfCalmnessPage';
import LawOfInspirationPage from './pages/laws/LawOfInspirationPage';
import LawOfDefinitionPage from './pages/laws/LawOfDefinitionPage';
import LawOfAlternativesPage from './pages/laws/LawOfAlternativesPage';
import LawOfConsequencesPage from './pages/laws/LawOfConsequencesPage';
import LawOfObjectivityPage from './pages/laws/LawOfObjectivityPage';
import LawOfCounselPage from './pages/laws/LawOfCounselPage';
import LawOfDecisivenessPage from './pages/laws/LawOfDecisivenessPage';
import LawOfReflectionPage from './pages/laws/LawOfReflectionPage';
import LawOfEmotionalControlPage from './pages/laws/LawOfEmotionalControlPage';
import LawOfCompoundingDecisionsPage from './pages/laws/LawOfCompoundingDecisionsPage';
import LawOfInactionPage from './pages/laws/LawOfInactionPage';
import LawOfTruthPage from './pages/laws/LawOfTruthPage';
import LawOfRightActionPage from './pages/laws/LawOfRightActionPage';
import LawOfHonorPage from './pages/laws/LawOfHonorPage';
import LawOfIntegrityPage from './pages/laws/LawOfIntegrityPage';
import LawOfConfidentialityPage from './pages/laws/LawOfConfidentialityPage';
import LawOfAdmissionPage from './pages/laws/LawOfAdmissionPage';
import LawOfLoyaltyPage from './pages/laws/LawOfLoyaltyPage';
import LawOfJusticePage from './pages/laws/LawOfJusticePage';
import LawOfCharacterPage from './pages/laws/LawOfCharacterPage';
import LawOfFragilityOfTrustPage from './pages/laws/LawOfFragilityOfTrustPage';
import LawOfHappinessPage from './pages/laws/LawOfHappinessPage';
import LawOfHealthPage from './pages/laws/LawOfHealthPage';
import LawOfFitnessPage from './pages/laws/LawOfFitnessPage';
import LawOfBalancePage from './pages/laws/LawOfBalancePage';
import LawOfPresencePage from './pages/laws/LawOfPresencePage';
import LawOfContributionPage from './pages/laws/LawOfContributionPage';
import LawOfHopePage from './pages/laws/LawOfHopePage';
import LawOfLovePage from './pages/laws/LawOfLovePage';
import LawOfLivingInTheNowPage from './pages/laws/LawOfLivingInTheNowPage';
import NewtonsLawsOfMotionPage from './pages/laws/NewtonsLawsOfMotionPage';
import LawOfTippingPointPage from './pages/laws/LawOfTippingPointPage';


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

              {/* Updated Puzzle Routes */}
              <Route path="/puzzles" element={<PuzzlesPage />} />
              <Route path="/puzzles/riddles" element={<RiddlesPage />} />
              <Route path="/puzzles/sequencing" element={<SequencingPage />} />
              <Route path="/puzzles/dot-connection" element={<DotConnectionPage />} />
              <Route path="/puzzles/one-line-drawing" element={<OneLineDrawingPage />} />

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
              <Route path="/tools/strategies/buffetts-5-25-strategy" element={<Buffetts525StrategyPage />} />
              <Route path="/tools/strategies/bruce-lees-simplicity" element={<BruceLeesSimplicityPage />} />
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
              <Route path="/tools/laws/golden-law" element={<TheGoldenLawPage />} />
              <Route path="/tools/laws/momentum" element={<LawOfMomentumPage />} />
              <Route path="/tools/laws/cause-and-effect" element={<CauseAndEffectPage />} />
              <Route path="/tools/laws/entropy" element={<EntropyPage />} />
              <Route path="/tools/laws/sowing-and-reaping" element={<SowingAndReapingPage />} />
              <Route path="/tools/laws/pareto-principle" element={<ParetoPrinciplePage />} />
              <Route path="/tools/laws/diminishing-returns" element={<DiminishingReturnsPage />} />
              <Route path="/tools/laws/feedback-loops" element={<FeedbackLoopsPage />} />
              <Route path="/tools/laws/effort" element={<LawOfEffortPage />} />
              <Route path="/tools/laws/expectations" element={<LawOfExpectationsPage />} />
              <Route path="/tools/laws/attraction" element={<LawOfAttractionPage />} />
              <Route path="/tools/laws/failure" element={<LawOfFailurePage />} />
              <Route path="/tools/laws/concentration" element={<LawOfConcentrationPage />} />
              <Route path="/tools/laws/priorities" element={<LawOfPrioritiesPage />} />
              <Route path="/tools/laws/accumulation" element={<LawOfAccumulationPage />} />
              <Route path="/tools/laws/belief" element={<LawOfBeliefPage />} />
              <Route path="/tools/laws/practice" element={<LawOfPracticePage />} />
              <Route path="/tools/laws/clarity" element={<LawOfClarityPage />} />
              <Route path="/tools/laws/writing" element={<LawOfWritingPage />} />
              <Route path="/tools/laws/planning" element={<LawOfPlanningPage />} />
              <Route path="/tools/laws/visualization" element={<LawOfVisualizationPage />} />
              <Route path="/tools/laws/feedback" element={<LawOfFeedbackPage />} />
              <Route path="/tools/laws/focus" element={<LawOfFocusPage />} />
              <Route path="/tools/laws/persistence" element={<LawOfPersistencePage />} />
              <Route path="/tools/laws/timing" element={<LawOfTimingPage />} />
              <Route path="/tools/laws/reinforcement" element={<LawOfReinforcementPage />} />
              <Route path="/tools/laws/flexibility" element={<LawOfFlexibilityPage />} />
              <Route path="/tools/laws/continuous-learning" element={<LawOfContinuousLearningPage />} />
              <Route path="/tools/laws/curiosity" element={<LawOfCuriosityPage />} />
              <Route path="/tools/laws/reading" element={<LawOfReadingPage />} />
              <Route path="/tools/laws/listening" element={<LawOfListeningPage />} />
              <Route path="/tools/laws/thinking" element={<LawOfThinkingPage />} />
              <Route path="/tools/laws/modeling" element={<LawOfModelingPage />} />
              <Route path="/tools/laws/discovery" element={<LawOfDiscoveryPage />} />
              <Route path="/tools/laws/teaching" element={<LawOfTeachingPage />} />
              <Route path="/tools/laws/learning-from-experience" element={<LawOfLearningFromExperiencePage />} />
              <Route path="/tools/laws/application" element={<LawOfApplicationPage />} />
              <Route path="/tools/laws/time" element={<LawOfTimePage />} />
              <Route path="/tools/laws/daily-planning" element={<LawOfDailyPlanningPage />} />
              <Route path="/tools/laws/task-prioritization" element={<LawOfTaskPrioritizationPage />} />
              <Route path="/tools/laws/efficiency" element={<LawOfEfficiencyPage />} />
              <Route path="/tools/laws/renewal" element={<LawOfRenewalPage />} />
              <Route path="/tools/laws/single-handling" element={<LawOfSingleHandlingPage />} />
              <Route path="/tools/laws/utilization" element={<LawOfUtilizationPage />} />
              <Route path="/tools/laws/punctuality" element={<LawOfPunctualityPage />} />
              <Route path="/tools/laws/completion" element={<LawOfCompletionPage />} />
              <Route path="/tools/laws/irreplaceability" element={<LawOfIrreplaceabilityPage />} />
              {/* New Law Routes */}
              <Route path="/tools/laws/saving" element={<LawOfSavingPage />} />
              <Route path="/tools/laws/pay-yourself-first" element={<LawOfPayYourselfFirstPage />} />
              <Route path="/tools/laws/investing" element={<LawOfInvestingPage />} />
              <Route path="/tools/laws/compounding" element={<LawOfCompoundingPage />} />
              <Route path="/tools/laws/debt" element={<LawOfDebtPage />} />
              <Route path="/tools/laws/small-matters" element={<LawOfSmallMattersPage />} />
              <Route path="/tools/laws/caution" element={<LawOfCautionPage />} />
              <Route path="/tools/laws/financial-education" element={<LawOfFinancialEducationPage />} />
              <Route path="/tools/laws/giving" element={<LawOfGivingPage />} />
              <Route path="/tools/laws/service" element={<LawOfServicePage />} />
              <Route path="/tools/laws/reciprocity" element={<LawOfReciprocityPage />} />
              <Route path="/tools/laws/kindness" element={<LawOfKindnessPage />} />
              <Route path="/tools/laws/gratitude" element={<LawOfGratitudePage />} />
              <Route path="/tools/laws/altruism" element={<LawOfAltruismPage />} />
              <Route path="/tools/laws/attention" element={<LawOfAttentionPage />} />
              <Route path="/tools/laws/responsibility" element={<LawOfResponsibilityPage />} />
              <Route path="/tools/laws/forgiveness" element={<LawOfForgivenessPage />} />
              <Route path="/tools/laws/association" element={<LawOfAssociationPage />} />
              <Route path="/tools/laws/encouragement" element={<LawOfEncouragementPage />} />
              <Route path="/tools/laws/pleasantness" element={<LawOfPleasantnessPage />} />
              <Route path="/tools/laws/leadership" element={<LawOfLeadershipPage />} />
              <Route path="/tools/laws/accountability" element={<LawOfAccountabilityPage />} />
              <Route path="/tools/laws/generosity-in-leadership" element={<LawOfGenerosityInLeadershipPage />} />
              <Route path="/tools/laws/trust" element={<LawOfTrustPage />} />
              <Route path="/tools/laws/importance" element={<LawOfImportancePage />} />
              <Route path="/tools/laws/fairness" element={<LawOfFairnessPage />} />
              <Route path="/tools/laws/promise-keeping" element={<LawOfPromiseKeepingPage />} />
              <Route path="/tools/laws/communication" element={<LawOfCommunicationPage />} />
              <Route path="/tools/laws/calmness" element={<LawOfCalmnessPage />} />
              <Route path="/tools/laws/inspiration" element={<LawOfInspirationPage />} />
              <Route path="/tools/laws/definition" element={<LawOfDefinitionPage />} />
              <Route path="/tools/laws/alternatives" element={<LawOfAlternativesPage />} />
              <Route path="/tools/laws/consequences" element={<LawOfConsequencesPage />} />
              <Route path="/tools/laws/objectivity" element={<LawOfObjectivityPage />} />
              <Route path="/tools/laws/counsel" element={<LawOfCounselPage />} />
              <Route path="/tools/laws/decisiveness" element={<LawOfDecisivenessPage />} />
              <Route path="/tools/laws/reflection" element={<LawOfReflectionPage />} />
              <Route path="/tools/laws/emotional-control" element={<LawOfEmotionalControlPage />} />
              <Route path="/tools/laws/compounding-decisions" element={<LawOfCompoundingDecisionsPage />} />
              <Route path="/tools/laws/inaction" element={<LawOfInactionPage />} />
              <Route path="/tools/laws/truth" element={<LawOfTruthPage />} />
              <Route path="/tools/laws/right-action" element={<LawOfRightActionPage />} />
              <Route path="/tools/laws/honor" element={<LawOfHonorPage />} />
              <Route path="/tools/laws/integrity" element={<LawOfIntegrityPage />} />
              <Route path="/tools/laws/confidentiality" element={<LawOfConfidentialityPage />} />
              <Route path="/tools/laws/admission" element={<LawOfAdmissionPage />} />
              <Route path="/tools/laws/loyalty" element={<LawOfLoyaltyPage />} />
              <Route path="/tools/laws/justice" element={<LawOfJusticePage />} />
              <Route path="/tools/laws/character" element={<LawOfCharacterPage />} />
              <Route path="/tools/laws/fragility-of-trust" element={<LawOfFragilityOfTrustPage />} />
              <Route path="/tools/laws/happiness" element={<LawOfHappinessPage />} />
              <Route path="/tools/laws/gratitude-life" element={<LawOfGratitudePage />} />
              <Route path="/tools/laws/health" element={<LawOfHealthPage />} />
              <Route path="/tools/laws/fitness" element={<LawOfFitnessPage />} />
              <Route path="/tools/laws/balance" element={<LawOfBalancePage />} />
              <Route path="/tools/laws/presence" element={<LawOfPresencePage />} />
              <Route path="/tools/laws/contribution" element={<LawOfContributionPage />} />
              <Route path="/tools/laws/hope" element={<LawOfHopePage />} />
              <Route path="/tools/laws/love" element={<LawOfLovePage />} />
              <Route path="/tools/laws/living-in-the-now" element={<LawOfLivingInTheNowPage />} />
              <Route path="/tools/laws/tipping-point" element={<LawOfTippingPointPage />} />
              <Route path="/tools/laws/newtons-laws-of-motion" element={<NewtonsLawsOfMotionPage />} />
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
