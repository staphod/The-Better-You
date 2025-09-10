import type { FullTest, Question, Addiction } from '@/types';
import { addictions } from '@/data/addictions';

const FIVE_POINT_LIKERT = [
    { text: "Strongly Disagree", value: 0 }, 
    { text: "Disagree", value: 1 }, 
    { text: "Neutral", value: 2 }, 
    { text: "Agree", value: 3 }, 
    { text: "Strongly Agree", value: 4 }
];

const mockTestDb: FullTest[] = [
  {
    id: 'mbti-architect',
    title: "MBTI Personality: The Architect",
    questions: [
      { id: 'q1', text: "You enjoy spending time alone.", type: 'likert', options: [{text: "Agree", value: 1}, {text: "Neutral", value: 0}, {text: "Disagree", value: -1}] },
      { id: 'q2', text: "You prefer to plan things out rather than be spontaneous.", type: 'likert', options: [{text: "Agree", value: 1}, {text: "Neutral", value: 0}, {text: "Disagree", value: -1}] },
      { id: 'q3', text: "You are more interested in abstract ideas than practical matters.", type: 'likert', options: [{text: "Agree", value: 1}, {text: "Neutral", value: 0}, {text: "Disagree", value: -1}] },
      { id: 'q4', text: "Your decisions are driven more by logic than emotion.", type: 'likert', options: [{text: "Agree", value: 1}, {text: "Neutral", value: 0}, {text: "Disagree", value: -1}] },
      { id: 'q5', text: "You find it easy to introduce yourself to other people.", type: 'likert', options: [{text: "Agree", value: -1}, {text: "Neutral", value: 0}, {text: "Disagree", value: 1}] },
    ],
    result_template: {
      "high-score": {
        explanation: "As an Architect, you are a strategic thinker with a plan for everything. You are imaginative, decisive, and ambitious, always driven by a thirst for knowledge.",
        best_work: ["Software Developer", "Scientist", "Engineer", "Strategic Planner"],
        strengths: ["Rationality", "Independence", "Quick-thinking", "Determination"],
        weaknesses: ["Arrogance", "Overly critical", "Clueless in romance"],
        famous: ["Elon Musk", "Friedrich Nietzsche", "Michelle Obama"]
      },
      "low-score": {
        explanation: "Your results suggest a more spontaneous and people-oriented personality. You likely thrive in social situations and prefer to go with the flow rather than stick to a rigid plan.",
        best_work: ["Sales Representative", "Event Planner", "HR Manager"],
        strengths: ["Adaptability", "Empathy", "Sociability"],
        weaknesses: ["Can be disorganized", "May avoid long-term planning"],
        famous: ["Bill Clinton", "Marilyn Monroe"]
      }
    },
    knowledgeBase: {
        summary: "The Architect personality type is one of the rarest and most strategically capable personality types. Architects form only two percent of the population, and they are defined by their strategic thinking, imagination, and ambition. This knowledge base explores the two primary outcomes of our simplified assessment.",
        resultDetails: [
            { key: "high-score", title: "The Architect Profile (High Score)" },
            { key: "low-score", title: "The Spontaneous Profile (Low Score)" }
        ]
    }
  },
  {
    id: 'big-five-ipip-120',
    title: "Big Five Personality Test (120 Questions)",
    scoringThresholds: {
        O: { low: 38, high: 58 },
        C: { low: 42, high: 62 },
        E: { low: 35, high: 55 },
        A: { low: 45, high: 65 },
        N: { low: 32, high: 52 },
    },
    questions: [
        // Extraversion
        { id: 'e1', category: 'E', text: "I am the life of the party.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e2', category: 'E', text: "I don't talk a lot.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'e3', category: 'E', text: "I feel comfortable around people.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e4', category: 'E', text: "I keep in the background.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'e5', category: 'E', text: "I start conversations.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e6', category: 'E', text: "I have little to say.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'e7', category: 'E', text: "I talk to a lot of different people at parties.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e8', category: 'E', text: "I don't like to draw attention to myself.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'e9', category: 'E', text: "I don't mind being the center of attention.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e10', category: 'E', text: "I am quiet around strangers.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        // ... (10 more E questions)
        { id: 'e11', category: 'E', text: 'I feel at ease with people.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e12', category: 'E', text: 'I often feel overwhelmed by social events.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'e13', category: 'E', text: 'I make friends easily.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e14', category: 'E', text: 'I prefer to be alone.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'e15', category: 'E', text: 'I am skilled in handling social situations.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e16', category: 'E', text: 'I am hard to get to know.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'e17', category: 'E', text: 'I warm up quickly to others.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e18', category: 'E', text: 'I often withdraw from social gatherings.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'e19', category: 'E', text: 'I am full of energy.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e20', category: 'E', text: 'I have a low energy level.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'e21', category: 'E', text: 'I am always on the go.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e22', category: 'E', text: 'I prefer a slow-paced life.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'e23', category: 'E', text: 'I love excitement.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e24', category: 'E', text: 'I avoid risky situations.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        
        // Agreeableness
        { id: 'a1', category: 'A', text: "I am interested in people.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a2', category: 'A', text: "I insult people.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'a3', category: 'A', text: "I sympathize with others' feelings.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a4', category: 'A', text: "I am not interested in other people's problems.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'a5', category: 'A', text: "I have a soft heart.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a6', category: 'A', text: "I am not really interested in others.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'a7', category: 'A', text: "I take time out for others.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a8', category: 'A', text: "I feel others' emotions.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a9', category: 'A', text: "I make people feel at ease.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a10', category: 'A', text: "I am indifferent to the feelings of others.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        // ... (14 more A questions)
        { id: 'a11', category: 'A', text: 'I trust others.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a12', category: 'A', text: 'I am suspicious of others.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'a13', category: 'A', text: 'I believe that others have good intentions.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a14', category: 'A', text: 'I am wary of others.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'a15', category: 'A', text: 'I accept people as they are.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a16', category: 'A', text: 'I find fault with others.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'a17', category: 'A', text: "I am easy to satisfy.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a18', category: 'A', text: "I am demanding in my relationships.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'a19', category: 'A', text: 'I am cooperative.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a20', category: 'A', text: 'I am contrary.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'a21', category: 'A', text: 'I am not bothered by disorder.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true }, // Note: This seems more like C but is often in A scales
        { id: 'a22', category: 'A', text: 'I like order.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a23', category: 'A', text: 'I am patient with people.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a24', category: 'A', text: 'I get angry easily.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },

        // Conscientiousness
        { id: 'c1', category: 'C', text: "I am always prepared.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'c2', category: 'C', text: "I leave my belongings around.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'c3', category: 'C', text: "I pay attention to details.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'c4', category: 'C', text: "I make a mess of things.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'c5', category: 'C', text: "I get chores done right away.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'c6', category: 'C', text: "I often forget to put things back in their proper place.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'c7', category: 'C', text: "I like order.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'c8', category: 'C', text: "I shirk my duties.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'c9', category: 'C', text: "I follow a schedule.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'c10', category: 'C', text: "I am exacting in my work.", type: 'likert', options: FIVE_POINT_LIKERT },
        // ... (14 more C questions)
        { id: 'c11', category: 'C', text: 'I am careful.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'c12', category: 'C', text: 'I am not a very methodical person.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'c13', category: 'C', text: 'I am thorough.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'c14', category: 'C', text: 'I am sometimes careless.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'c15', category: 'C', text: 'I am diligent.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'c16', category: 'C', text: 'I get distracted easily.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'c17', category: 'C', text: 'I finish what I start.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'c18', category: 'C', text: 'I give up easily.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'c19', category: 'C', text: 'I am a hard worker.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'c20', category: 'C', text: 'I am lazy.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'c21', category: 'C', text: 'I push myself hard.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'c22', category: 'C', text: 'I do just enough to get by.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'c23', category: 'C', text: 'I am ambitious.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'c24', category: 'C', text: 'I am not driven to succeed.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },

        // Neuroticism
        { id: 'n1', category: 'N', text: "I am easily disturbed.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'n2', category: 'N', text: "I am relaxed most of the time.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'n3', category: 'N', text: "I get stressed out easily.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'n4', category: 'N', text: "I seldom feel blue.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'n5', category: 'N', text: "I worry about things.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'n6', category: 'N', text: "I am not easily bothered by things.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'n7', category: 'N', text: "I am often down in the dumps.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'n8', category: 'N', text: "I feel secure.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'n9', category: 'N', text: "My mood goes up and down.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'n10', category: 'N', text: "I remain calm in tense situations.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        // ... (14 more N questions)
        { id: 'n11', category: 'N', text: 'I get angry easily.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'n12', category: 'N', text: 'I rarely get irritated.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'n13', category: 'N', text: 'I often feel threatened.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'n14', category: 'N', text: 'I am not afraid of many things.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'n15', category: 'N', text: 'I am easily frightened.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'n16', category: 'N', text: 'I am courageous.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'n17', category: 'N', text: 'I feel that I have to be on guard.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'n18', category: 'N', text: 'I trust people.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'n19', category: 'N', text: 'I am easily tempted.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'n20', category: 'N', text: 'I am able to control my cravings.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'n21', category: 'N', text: 'I often overindulge.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'n22', category: 'N', text: 'I have good self-control.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'n23', category: 'N', text: 'I am able to stand up for myself.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'n24', category: 'N', text: 'I am easily intimidated.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },

        // Openness
        { id: 'o1', category: 'O', text: "I have a rich vocabulary.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'o2', category: 'O', text: "I have difficulty understanding abstract ideas.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'o3', category: 'O', text: "I have a vivid imagination.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'o4', category: 'O', text: "I am not interested in abstract ideas.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'o5', category: 'O', text: "I have excellent ideas.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'o6', category: 'O', text: "I do not have a good imagination.", type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'o7', category: 'O', text: "I am quick to understand things.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'o8', category: 'O', text: "I use difficult words.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'o9', category: 'O', text: "I spend time reflecting on things.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'o10', category: 'O', text: "I am full of ideas.", type: 'likert', options: FIVE_POINT_LIKERT },
        // ... (14 more O questions)
        { id: 'o11', category: 'O', text: 'I enjoy beauty and art.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'o12', category: 'O', text: 'I am not interested in art.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'o13', category: 'O', text: 'I love to reflect on things.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'o14', category: 'O', text: 'I avoid philosophical discussions.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'o15', category: 'O', text: 'I get excited by new ideas.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'o16', category: 'O', text: 'I am not interested in theoretical discussions.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'o17', category: 'O', text: 'I have a wide range of interests.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'o18', category: 'O', text: 'I have a narrow range of interests.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'o19', category: 'O', text: 'I am imaginative.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'o20', category: 'O', text: 'I am down-to-earth.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'o21', category: 'O', text: 'I believe in the importance of art.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'o22', category: 'O', text: 'I do not like poetry.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },
        { id: 'o23', category: 'O', text: 'I am open to change.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'o24', category: 'O', text: 'I prefer familiar routines.', type: 'likert', options: FIVE_POINT_LIKERT, reverse: true },

    ],
    result_template: {
        "O_high": { explanation: "High scorers in Openness are imaginative, creative, and curious. They enjoy new experiences, are open to unconventional ideas, and appreciate art and beauty.", strengths: ["Creativity", "Intellectual curiosity", "Wide range of interests", "Adaptability"], weaknesses: ["May be seen as unpredictable", "Can struggle with routine", "Prone to impractical ideas"] },
        "O_average": { explanation: "Average scorers in Openness have a balance between a need for novelty and a preference for routine. They are practical but willing to consider new ideas when presented logically.", strengths: ["Practical", "Balanced", "Open-minded but grounded"], weaknesses: ["May lack strong artistic passion", "Less likely to be a trailblazer"] },
        "O_low": { explanation: "Low scorers in Openness are practical, conventional, and prefer routine over novelty. They are down-to-earth and straightforward, with a narrower range of interests.", strengths: ["Practicality", "Consistency", "Preference for the familiar", "Grounded"], weaknesses: ["Resistance to change", "Narrower interests", "May be seen as unimaginative"] },
        "C_high": { explanation: "High scorers in Conscientiousness are organized, disciplined, and reliable. They are goal-oriented, detail-focused, and prefer to plan things in advance.", strengths: ["Organization", "Reliability", "Self-discipline", "Thoroughness"], weaknesses: ["Can be overly perfectionistic", "May be perceived as rigid or stubborn", "Can struggle with spontaneity"] },
        "C_average": { explanation: "Average scorers in Conscientiousness are moderately organized and reliable. They can be flexible when needed but generally prefer to have a plan.", strengths: ["Dependable", "Flexible", "Balanced approach to work and life"], weaknesses: ["Can be inconsistent at times", "May not be highly detail-oriented"] },
        "C_low": { explanation: "Low scorers in Conscientiousness are more spontaneous, flexible, and laid-back. They may struggle with organization, deadlines, and long-term planning.", strengths: ["Spontaneity", "Flexibility", "Can handle chaos well", "Easy-going"], weaknesses: ["Procrastination", "Disorganization", "May be seen as unreliable"] },
        "E_high": { explanation: "High scorers in Extraversion are outgoing, energetic, and sociable. They draw energy from social interaction and enjoy being the center of attention.", strengths: ["Sociability", "Enthusiasm", "Assertiveness", "Action-oriented"], weaknesses: ["Can be impulsive", "May dominate conversations", "Can find solitude draining"] },
        "E_average": { explanation: "Average scorers in Extraversion, often called ambiverts, enjoy a balance of social time and solitude. They are comfortable in groups but also value their alone time to recharge.", strengths: ["Balanced", "Good listener", "Adaptable to social and solitary situations"], weaknesses: ["Can be mistaken for either introvert or extrovert", "May not have a strong preference either way"] },
        "E_low": { explanation: "Low scorers in Extraversion (introverts) are more reserved, reflective, and prefer smaller groups or solitude. They draw energy from spending time alone.", strengths: ["Thoughtfulness", "Good listening skills", "Independence", "Deep relationships"], weaknesses: ["May be seen as aloof or shy", "Can be overwhelmed by large social events", "May be hesitant to speak up"] },
        "A_high": { explanation: "High scorers in Agreeableness are cooperative, compassionate, and trusting. They are helpful, considerate of others, and tend to avoid conflict.", strengths: ["Empathy", "Cooperativeness", "Trustworthiness", "Kindness"], weaknesses: ["Can be taken advantage of", "May struggle to assert their own needs", "Can avoid necessary conflict"] },
        "A_average": { explanation: "Average scorers in Agreeableness are generally considerate but are also willing to express their own opinions, even if it leads to conflict. They can be both empathetic and assertive.", strengths: ["Balanced", "Assertive when necessary", "Generally cooperative"], weaknesses: ["Can sometimes seem inconsistent", "May not always be diplomatic"] },
        "A_low": { explanation: "Low scorers in Agreeableness are more analytical, competitive, and skeptical. They are more likely to assert their own interests and can be seen as tough-minded and assertive.", strengths: ["Analytical thinking", "Competitiveness", "Ability to make tough decisions", "Assertiveness"], weaknesses: ["Can be seen as uncooperative or argumentative", "May come across as cynical", "Can be less empathetic"] },
        "N_high": { explanation: "High scorers in Neuroticism (low Emotional Stability) tend to experience negative emotions like anxiety, stress, and sadness more frequently and intensely. They are more emotionally reactive.", strengths: ["Awareness of threats", "Sensitivity", "Can be empathetic to others' pain"], weaknesses: ["Prone to worry and anxiety", "Emotional instability", "Can be pessimistic"] },
        "N_average": { explanation: "Average scorers in Neuroticism have a typical level of emotional stability. They experience stress and worry in response to difficult situations but are generally able to cope effectively.", strengths: ["Resilient", "Generally calm", "Emotionally aware"], weaknesses: ["Can experience occasional moodiness", "May have periods of self-doubt"] },
        "N_low": { explanation: "Low scorers in Neuroticism (high Emotional Stability) are generally calm, resilient, and emotionally stable. They are less prone to worry and can handle stress well.", strengths: ["Emotional stability", "Resilience", "Calmness under pressure", "Optimism"], weaknesses: ["May be seen as unconcerned or unemotional", "Can be less aware of potential threats", "May not be as empathetic to others' anxiety"] }
    },
    knowledgeBase: {
        summary: "The Big Five model is a comprehensive, empirical, data-driven research finding. It identifies the five broad domains of human personality: Openness to Experience (O), Conscientiousness (C), Extraversion (E), Agreeableness (A), and Neuroticism (N). The acronym OCEAN is often used to remember them. This test provides a score for each domain, helping you understand your unique personality profile.",
        resultDetails: [
            { key: "O", title: "Openness to Experience" },
            { key: "C", title: "Conscientiousness" },
            { key: "E", title: "Extraversion" },
            { key: "A", title: "Agreeableness" },
            { key: "N", title: "Neuroticism (Emotional Stability)" },
        ]
    }
  },
  {
    id: 'procrastination-type',
    title: "Procrastination Type Test",
    questions: [
        // Perfectionist Questions (10)
        { id: 'p1', category: 'perfectionist', text: 'I often delay starting a task because I fear I won\'t do it perfectly.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p2', category: 'perfectionist', text: 'I would rather submit nothing than submit work that is "good enough" but not flawless.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p3', category: 'perfectionist', text: 'I get stuck in the planning phase, trying to create the "perfect" plan before starting.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p4', category: 'perfectionist', text: 'I often miss deadlines because I am still trying to improve the final product.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p5', category: 'perfectionist', text: 'The thought of potential flaws in my work paralyzes me from starting.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p6', category: 'perfectionist', text: 'I have an "all-or-nothing" approach to tasks.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p7', category: 'perfectionist', text: 'I spend too much time on minor details, which significantly slows me down.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p8', category: 'perfectionist', text: 'Criticism of my work feels like a personal failure, making me hesitant to show it to others.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p9', category: 'perfectionist', text: 'I believe my work is a direct reflection of my self-worth.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p10', category: 'perfectionist', text: 'I often feel my final result isn\'t good enough, even after spending a lot of time on it.', type: 'likert', options: FIVE_POINT_LIKERT },
        // Thrill-Seeker Questions (10)
        { id: 't1', category: 'thrill-seeker', text: 'I feel that I do my best work under extreme pressure.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 't2', category: 'thrill-seeker', text: 'I find routine, scheduled tasks to be boring and unmotivating.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 't3', category: 'thrill-seeker', text: 'I get a rush of excitement from finishing a task at the very last minute.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 't4', category: 'thrill-seeker', text: 'I often tell myself "I have plenty of time," even when a deadline is close.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 't5', category: 'thrill-seeker', text: 'I find it difficult to get motivated without the adrenaline of an impending deadline.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 't6', category: 'thrill-seeker', text: 'I secretly enjoy the challenge and energy of a last-minute scramble.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 't7', category: 'thrill-seeker', text: 'I find it hard to start projects early because there is no sense of urgency.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 't8', category: 'thrill-seeker', text: 'I tend to view deadlines as a suggested start time, not a due date.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 't9', category: 'thrill-seeker', text: 'I am easily bored by tasks that require long-term, steady effort.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 't10', category: 'thrill-seeker', text: 'I often underestimate the amount of time a task will take to complete.', type: 'likert', options: FIVE_POINT_LIKERT },
        // Avoider Questions (10)
        { id: 'a1', category: 'avoider', text: 'I put off tasks because I find them unpleasant or overwhelming.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a2', category: 'avoider', text: 'I avoid tasks where I\'m afraid of failing or receiving negative feedback.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a3', category: 'avoider', text: 'When faced with a large project, I feel paralyzed and don\'t know where to start.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a4', category: 'avoider', text: 'I often fill my day with unimportant "busy work" to avoid the one important task I should be doing.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a5', category: 'avoider', text: 'I tell myself I\'m "not in the mood" or "I\'ll do it tomorrow" to justify delaying a difficult task.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a6', category: 'avoider', text: 'I feel a sense of temporary relief when I decide to put off a task I\'ve been dreading.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a7', category: 'avoider', text: 'I worry a lot about the outcome of a task before I even begin.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a8', category: 'avoider', text: 'I often hope that if I ignore a task long enough, it will resolve itself or go away.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a9', category: 'avoider', text: 'I find it hard to make decisions related to the task, so I just avoid starting it altogether.', type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'a10', category: 'avoider', text: 'The fear of being judged for my performance causes me to postpone my work.', type: 'likert', options: FIVE_POINT_LIKERT }
    ],
    result_template: {
      "perfectionist": {
        explanation: "You are The Perfectionist. You procrastinate because your high standards make you afraid to start or finish a task. The fear of not doing it perfectly can be paralyzing, leading you to delay in the hope of finding the 'perfect' time or plan. Your identity is often tied to your work, so anything less than flawless feels like a personal failure.",
        strengths: ["High standards", "Attention to detail", "Produces high-quality work", "Conscientious and thorough"],
        weaknesses: ["'All-or-nothing' thinking", "Gets bogged down in details", "Fears criticism", "Often misses deadlines due to over-editing"],
        strategies: ["Aim for 'B+' work", "Set strict time limits for tasks (Timeboxing)", "Break tasks into smaller, less intimidating steps", "Focus on 'done' is better than 'perfect'"]
      },
      "thrill-seeker": {
        explanation: "You are The Thrill-Seeker. You procrastinate because you get a rush from working under pressure. You find routine tasks boring and are only motivated by the adrenaline of a last-minute deadline. You convince yourself that you work best in a high-stakes environment, enjoying the challenge of the race against time.",
        strengths: ["Works well under pressure", "Can be very productive in short bursts", "Energetic and focused when a deadline is near", "Often creative in a crisis"],
        weaknesses: ["Underestimates time needed", "Produces rushed, sometimes sloppy work", "Creates unnecessary stress for self and others", "Struggles with long-term projects"],
        strategies: ["Create artificial, earlier deadlines for yourself", "Break large projects into smaller 'sprints' with their own deadlines", "Find healthy ways to get an adrenaline rush (e.g., exercise)", "Use a public commitment to create accountability"]
      },
      "avoider": {
        explanation: "You are The Avoider. You procrastinate because you are afraid of the task or the outcome. The task may seem overwhelming, unpleasant, or you may fear failure and judgment. You put it off to avoid these negative feelings, choosing the temporary relief of delay over the discomfort of starting. This is often a self-protective, but ultimately self-defeating, strategy.",
        strengths: ["Sensitive and empathetic", "Good at recognizing potential problems", "Thoughtful and considerate"],
        weaknesses: ["Overwhelmed by large tasks", "Fears failure and negative feedback", "Fills time with 'busy work'", "Decision-making can be paralyzing"],
        strategies: ["Use the '2-Minute Rule': if it takes less than 2 minutes, do it now", "Break down overwhelming tasks into the smallest possible first step", "Focus on the process, not the outcome", "Reward yourself for starting, not just for finishing"]
      }
    },
    knowledgeBase: {
        summary: "Procrastination is not just a matter of poor time management; it's a complex emotional response to certain tasks. Understanding your specific 'type' of procrastination is the first step toward overcoming it. This knowledge base explores the three common archetypes: The Perfectionist, The Thrill-Seeker, and The Anxious Avoider.",
        resultDetails: [
            { key: "perfectionist", title: "The Perfectionist Procrastinator" },
            { key: "thrill-seeker", title: "The Thrill-Seeker Procrastinator" },
            { key: "avoider", title: "The Anxious Avoider Procrastinator" }
        ]
    }
  }
];

export const fetchTestById = (id: string): Promise<FullTest> => {
  console.log(`Fetching test with id: ${id}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const test = mockTestDb.find(t => t.id === id);
      if (test) {
        resolve(test);
      } else {
        reject(new Error("Test not found"));
      }
    }, 1000); // Simulate network delay
  });
};

export const fetchAddictionById = (id: string): Promise<Addiction> => {
  console.log(`Fetching addiction with id: ${id}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addiction = addictions.find(a => a.id === id);
      if (addiction) {
        resolve(addiction);
      } else {
        reject(new Error("Addiction assessment not found"));
      }
    }, 1000); // Simulate network delay
  });
};