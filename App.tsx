import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { OnlineStatusProvider } from '@/hooks/useOnlineStatus';
import { ThemeProvider } from '@/hooks/useTheme';
import Layout from '@/components/Layout';

const PageLoader: React.FC = () => (
  <div className="flex justify-center items-center h-[calc(100vh-200px)]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
  </div>
);

// Lazy load all page components
const HomePage = lazy(() => import('@/pages/HomePage'));
const TestsHomePage = lazy(() => import('@/pages/TestsHomePage'));
const TestsListPage = lazy(() => import('@/pages/TestsListPage'));
const TestPage = lazy(() => import('@/pages/TestPage'));
const TestHistoryPage = lazy(() => import('@/pages/TestHistoryPage'));
const TestHistoryDetailPage = lazy(() => import('@/pages/TestHistoryDetailPage'));
const KnowledgeBaseListPage = lazy(() => import('@/pages/KnowledgeBaseListPage'));
const KnowledgeBaseDetailPage = lazy(() => import('@/pages/KnowledgeBaseDetailPage'));
const PuzzlesPage = lazy(() => import('@/pages/PuzzlesPage'));
const RiddlesPage = lazy(() => import('@/pages/puzzles/RiddlesPage'));
const SequencingPage = lazy(() => import('@/pages/puzzles/SequencingPage'));
const CognitiveClashHomePage = lazy(() => import('@/pages/puzzles/CognitiveClashHomePage'));
const CognitiveClashGamePage = lazy(() => import('@/pages/puzzles/CognitiveClashGamePage'));
const OneLineDrawingPage = lazy(() => import('@/pages/puzzles/OneLineDrawingPage'));
const OfflinePage = lazy(() => import('@/pages/OfflinePage'));
const ToolsPage = lazy(() => import('@/pages/ToolsPage'));
const AddictionsPage = lazy(() => import('@/pages/AddictionsPage'));
const AddictionDetailPage = lazy(() => import('@/pages/AddictionDetailPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const SupportPage = lazy(() => import('@/pages/SupportPage'));
const PurposeAiPage = lazy(() => import('@/pages/PurposeAiPage'));

// Tools Sub-pages
const ToolsStrategiesPage = lazy(() => import('@/pages/ToolsStrategiesPage'));
const MentalModelsPage = lazy(() => import('@/pages/MentalModelsPage'));
const LifeLawsPage = lazy(() => import('@/pages/LifeLawsPage'));
const SixtyMinutesOfSilencePage = lazy(() => import('@/pages/tools/SixtyMinutesOfSilencePage'));
const CBTPage = lazy(() => import('@/pages/tools/CBTPage'));
const JournalingPage = lazy(() => import('@/pages/tools/JournalingPage'));
const Buffetts525StrategyPage = lazy(() => import('@/pages/tools/Buffetts525StrategyPage'));
const BruceLeesSimplicityPage = lazy(() => import('@/pages/tools/BruceLeesSimplicityPage'));
const FirstPrinciplesPage = lazy(() => import('@/pages/mentalmodels/FirstPrinciplesPage'));
const StoicismPage = lazy(() => import('@/pages/mentalmodels/StoicismPage'));
const CauseAndEffectPage = lazy(() => import('@/pages/laws/CauseAndEffectPage'));
const EntropyPage = lazy(() => import('@/pages/laws/EntropyPage'));
const SowingAndReapingPage = lazy(() => import('@/pages/laws/SowingAndReapingPage'));
const SecondOrderThinkingPage = lazy(() => import('./pages/mentalmodels/SecondOrderThinkingPage'));
const InversionPage = lazy(() => import('./pages/mentalmodels/InversionPage'));
const OpportunityCostPage = lazy(() => import('./pages/mentalmodels/OpportunityCostPage'));
const OccamsRazorPage = lazy(() => import('./pages/mentalmodels/OccamsRazorPage'));
const HanlonsRazorPage = lazy(() => import('./pages/mentalmodels/HanlonsRazorPage'));
const ConfirmationBiasPage = lazy(() => import('./pages/mentalmodels/ConfirmationBiasPage'));
const AvailabilityHeuristicPage = lazy(() => import('./pages/mentalmodels/AvailabilityHeuristicPage'));
const SurvivorshipBiasPage = lazy(() => import('./pages/mentalmodels/SurvivorshipBiasPage'));
const LossAversionPage = lazy(() => import('./pages/mentalmodels/LossAversionPage'));
const CircleOfCompetencePage = lazy(() => import('./pages/mentalmodels/CircleOfCompetencePage'));
const BayesianThinkingPage = lazy(() => import('./pages/mentalmodels/BayesianThinkingPage'));
const ParetoPrinciplePage = lazy(() => import('./pages/laws/ParetoPrinciplePage'));
const DiminishingReturnsPage = lazy(() => import('./pages/laws/DiminishingReturnsPage'));
const FeedbackLoopsPage = lazy(() => import('./pages/laws/FeedbackLoopsPage'));
const LawOfEffortPage = lazy(() => import('./pages/laws/LawOfEffortPage'));
const LawOfExpectationsPage = lazy(() => import('./pages/laws/LawOfExpectationsPage'));
const LawOfAttractionPage = lazy(() => import('./pages/laws/LawOfAttractionPage'));
const LawOfFailurePage = lazy(() => import('./pages/laws/LawOfFailurePage'));
const LawOfConcentrationPage = lazy(() => import('./pages/laws/LawOfConcentrationPage'));
const LawOfPrioritiesPage = lazy(() => import('./pages/laws/LawOfPrioritiesPage'));
const LawOfAccumulationPage = lazy(() => import('./pages/laws/LawOfAccumulationPage'));
const LawOfBeliefPage = lazy(() => import('./pages/laws/LawOfBeliefPage'));
const LawOfPracticePage = lazy(() => import('./pages/laws/LawOfPracticePage'));
const LawOfClarityPage = lazy(() => import('./pages/laws/LawOfClarityPage'));
const LawOfWritingPage = lazy(() => import('./pages/laws/LawOfWritingPage'));
const LawOfPlanningPage = lazy(() => import('./pages/laws/LawOfPlanningPage'));
const LawOfVisualizationPage = lazy(() => import('./pages/laws/LawOfVisualizationPage'));
const LawOfFeedbackPage = lazy(() => import('./pages/laws/LawOfFeedbackPage'));
const LawOfFocusPage = lazy(() => import('./pages/laws/LawOfFocusPage'));
const LawOfPersistencePage = lazy(() => import('./pages/laws/LawOfPersistencePage'));
const LawOfTimingPage = lazy(() => import('./pages/laws/LawOfTimingPage'));
const LawOfReinforcementPage = lazy(() => import('./pages/laws/LawOfReinforcementPage'));
const LawOfFlexibilityPage = lazy(() => import('./pages/laws/LawOfFlexibilityPage'));
const LawOfContinuousLearningPage = lazy(() => import('./pages/laws/LawOfContinuousLearningPage'));
const LawOfCuriosityPage = lazy(() => import('./pages/laws/LawOfCuriosityPage'));
const LawOfReadingPage = lazy(() => import('./pages/laws/LawOfReadingPage'));
const LawOfListeningPage = lazy(() => import('./pages/laws/LawOfListeningPage'));
const LawOfThinkingPage = lazy(() => import('./pages/laws/LawOfThinkingPage'));
const LawOfModelingPage = lazy(() => import('./pages/laws/LawOfModelingPage'));
const LawOfDiscoveryPage = lazy(() => import('./pages/laws/LawOfDiscoveryPage'));
const LawOfTeachingPage = lazy(() => import('./pages/laws/LawOfTeachingPage'));
const LawOfLearningFromExperiencePage = lazy(() => import('./pages/laws/LawOfLearningFromExperiencePage'));
const LawOfApplicationPage = lazy(() => import('./pages/laws/LawOfApplicationPage'));
const LawOfTimePage = lazy(() => import('./pages/laws/LawOfTimePage'));
const LawOfDailyPlanningPage = lazy(() => import('./pages/laws/LawOfDailyPlanningPage'));
const LawOfTaskPrioritizationPage = lazy(() => import('./pages/laws/LawOfTaskPrioritizationPage'));
const LawOfEfficiencyPage = lazy(() => import('./pages/laws/LawOfEfficiencyPage'));
const LawOfRenewalPage = lazy(() => import('./pages/laws/LawOfRenewalPage'));
const LawOfSingleHandlingPage = lazy(() => import('./pages/laws/LawOfSingleHandlingPage'));
const LawOfUtilizationPage = lazy(() => import('./pages/laws/LawOfUtilizationPage'));
const LawOfPunctualityPage = lazy(() => import('./pages/laws/LawOfPunctualityPage'));
const LawOfCompletionPage = lazy(() => import('./pages/laws/LawOfCompletionPage'));
const LawOfIrreplaceabilityPage = lazy(() => import('./pages/laws/LawOfIrreplaceabilityPage'));
const TheGoldenLawPage = lazy(() => import('./pages/laws/TheGoldenLawPage'));
const LawOfMomentumPage = lazy(() => import('./pages/laws/LawOfMomentumPage'));
const LawOfSavingPage = lazy(() => import('./pages/laws/LawOfSavingPage'));
const LawOfPayYourselfFirstPage = lazy(() => import('./pages/laws/LawOfPayYourselfFirstPage'));
const LawOfInvestingPage = lazy(() => import('./pages/laws/LawOfInvestingPage'));
const LawOfCompoundingPage = lazy(() => import('./pages/laws/LawOfCompoundingPage'));
const LawOfDebtPage = lazy(() => import('./pages/laws/LawOfDebtPage'));
const LawOfSmallMattersPage = lazy(() => import('./pages/laws/LawOfSmallMattersPage'));
const LawOfCautionPage = lazy(() => import('./pages/laws/LawOfCautionPage'));
const LawOfFinancialEducationPage = lazy(() => import('./pages/laws/LawOfFinancialEducationPage'));
const LawOfGivingPage = lazy(() => import('./pages/laws/LawOfGivingPage'));
const LawOfServicePage = lazy(() => import('./pages/laws/LawOfServicePage'));
const LawOfReciprocityPage = lazy(() => import('./pages/laws/LawOfReciprocityPage'));
const LawOfKindnessPage = lazy(() => import('./pages/laws/LawOfKindnessPage'));
const LawOfGratitudePage = lazy(() => import('./pages/laws/LawOfGratitudePage'));
const LawOfAltruismPage = lazy(() => import('./pages/laws/LawOfAltruismPage'));
const LawOfAttentionPage = lazy(() => import('./pages/laws/LawOfAttentionPage'));
const LawOfResponsibilityPage = lazy(() => import('./pages/laws/LawOfResponsibilityPage'));
const LawOfForgivenessPage = lazy(() => import('./pages/laws/LawOfForgivenessPage'));
const LawOfAssociationPage = lazy(() => import('./pages/laws/LawOfAssociationPage'));
const LawOfEncouragementPage = lazy(() => import('./pages/laws/LawOfEncouragementPage'));
const LawOfPleasantnessPage = lazy(() => import('./pages/laws/LawOfPleasantnessPage'));
const LawOfLeadershipPage = lazy(() => import('./pages/laws/LawOfLeadershipPage'));
const LawOfAccountabilityPage = lazy(() => import('./pages/laws/LawOfAccountabilityPage'));
const LawOfGenerosityInLeadershipPage = lazy(() => import('./pages/laws/LawOfGenerosityInLeadershipPage'));
const LawOfTrustPage = lazy(() => import('./pages/laws/LawOfTrustPage'));
const LawOfImportancePage = lazy(() => import('./pages/laws/LawOfImportancePage'));
const LawOfFairnessPage = lazy(() => import('./pages/laws/LawOfFairnessPage'));
const LawOfPromiseKeepingPage = lazy(() => import('./pages/laws/LawOfPromiseKeepingPage'));
const LawOfCommunicationPage = lazy(() => import('./pages/laws/LawOfCommunicationPage'));
const LawOfCalmnessPage = lazy(() => import('./pages/laws/LawOfCalmnessPage'));
const LawOfInspirationPage = lazy(() => import('./pages/laws/LawOfInspirationPage'));
const LawOfDefinitionPage = lazy(() => import('./pages/laws/LawOfDefinitionPage'));
const LawOfAlternativesPage = lazy(() => import('./pages/laws/LawOfAlternativesPage'));
const LawOfConsequencesPage = lazy(() => import('./pages/laws/LawOfConsequencesPage'));
const LawOfObjectivityPage = lazy(() => import('./pages/laws/LawOfObjectivityPage'));
const LawOfCounselPage = lazy(() => import('./pages/laws/LawOfCounselPage'));
const LawOfDecisivenessPage = lazy(() => import('./pages/laws/LawOfDecisivenessPage'));
const LawOfReflectionPage = lazy(() => import('./pages/laws/LawOfReflectionPage'));
const LawOfEmotionalControlPage = lazy(() => import('./pages/laws/LawOfEmotionalControlPage'));
const LawOfCompoundingDecisionsPage = lazy(() => import('./pages/laws/LawOfCompoundingDecisionsPage'));
const LawOfInactionPage = lazy(() => import('./pages/laws/LawOfInactionPage'));
const LawOfTruthPage = lazy(() => import('./pages/laws/LawOfTruthPage'));
const LawOfRightActionPage = lazy(() => import('./pages/laws/LawOfRightActionPage'));
const LawOfHonorPage = lazy(() => import('./pages/laws/LawOfHonorPage'));
const LawOfIntegrityPage = lazy(() => import('./pages/laws/LawOfIntegrityPage'));
const LawOfConfidentialityPage = lazy(() => import('./pages/laws/LawOfConfidentialityPage'));
const LawOfAdmissionPage = lazy(() => import('./pages/laws/LawOfAdmissionPage'));
const LawOfLoyaltyPage = lazy(() => import('./pages/laws/LawOfLoyaltyPage'));
const LawOfJusticePage = lazy(() => import('./pages/laws/LawOfJusticePage'));
const LawOfCharacterPage = lazy(() => import('./pages/laws/LawOfCharacterPage'));
const LawOfFragilityOfTrustPage = lazy(() => import('./pages/laws/LawOfFragilityOfTrustPage'));
const LawOfHappinessPage = lazy(() => import('./pages/laws/LawOfHappinessPage'));
const LawOfHealthPage = lazy(() => import('./pages/laws/LawOfHealthPage'));
const LawOfFitnessPage = lazy(() => import('./pages/laws/LawOfFitnessPage'));
const LawOfBalancePage = lazy(() => import('./pages/laws/LawOfBalancePage'));
const LawOfPresencePage = lazy(() => import('./pages/laws/LawOfPresencePage'));
const LawOfContributionPage = lazy(() => import('./pages/laws/LawOfContributionPage'));
const LawOfHopePage = lazy(() => import('./pages/laws/LawOfHopePage'));
const LawOfLovePage = lazy(() => import('./pages/laws/LawOfLovePage'));
const LawOfLivingInTheNowPage = lazy(() => import('./pages/laws/LawOfLivingInTheNowPage'));
const NewtonsLawsOfMotionPage = lazy(() => import('./pages/laws/NewtonsLawsOfMotionPage'));
const LawOfTippingPointPage = lazy(() => import('./pages/laws/LawOfTippingPointPage'));

function App() {
  return (
    <OnlineStatusProvider>
      <ThemeProvider>
        <HashRouter>
          <Layout>
            <Suspense fallback={<PageLoader />}>
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
                <Route path="/puzzles/cognitive-clash" element={<CognitiveClashHomePage />} />
                <Route path="/puzzles/cognitive-clash/game/:mode" element={<CognitiveClashGamePage />} />
                <Route path="/puzzles/one-line-drawing" element={<OneLineDrawingPage />} />

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
                <Route path="/purpose-ai" element={<PurposeAiPage />} />
                <Route path="/offline" element={<OfflinePage />} />
              </Routes>
            </Suspense>
          </Layout>
        </HashRouter>
      </ThemeProvider>
    </OnlineStatusProvider>
  );
}

export default App;