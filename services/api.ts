import type { FullTest, Question, Addiction } from '@/types';
import { addictions } from '@/data/addictions';

const FIVE_POINT_LIKERT = [
    { text: "Strongly Disagree", value: 0 }, 
    { text: "Disagree", value: 1 }, 
    { text: "Neutral", value: 2 }, 
    { text: "Agree", value: 3 }, 
    { text: "Strongly Agree", value: 4 }
];

const SEVEN_POINT_LIKERT = [
    { text: "Strongly Agree", value: 3 },
    { text: "Agree", value: 2 },
    { text: "Slightly Agree", value: 1 },
    { text: "Neutral", value: 0 },
    { text: "Slightly Disagree", value: -1 },
    { text: "Disagree", value: -2 },
    { text: "Strongly Disagree", value: -3 },
];

const mockTestDb: FullTest[] = [
  {
    id: 'imposter-syndrome-test',
    title: "Imposter Syndrome Test",
    scoringThresholds: { "high-imposter": 120, "moderate-imposter": 80 },
    questions: [
        // Doubting Abilities & Fearing Exposure
        { id: 'is1', text: "I often worry that I will be 'found out' or exposed as a fraud.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is2', text: "I am afraid people important to me may find out that I am not as capable as they think I am.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is3', text: "When I succeed, I secretly feel that I fooled others.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is4', text: "I often compare my ability to those around me and think they may be more intelligent than I am.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is5', text: "I live in fear of being discovered.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is6', text: "I tend to feel that my accomplishments are not a big deal.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is7', text: "I am disappointed with my present accomplishments.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is8', text: "I feel like I have to work harder than others to prove my worth.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is9', text: "I believe I am less capable than my peers.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is10', text: "I often doubt my own intelligence and abilities.", type: 'likert', options: FIVE_POINT_LIKERT },
        // Attributing Success to External Factors
        { id: 'is11', text: "I tend to attribute my successes to luck or timing.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is12', text: "I believe my success is a result of a mistake or an error in judgment by others.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is13', text: "I think my success is due to people overestimating my abilities.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is14', text: "When I do well, I often feel it was just a fluke.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is15', text: "I feel that my achievements are the result of external factors, not my own skills.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is16', text: "I have a hard time believing my success is deserved.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is17', text: "I dismiss my accomplishments as 'not that important'.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is18', text: "I feel my success is due to being in the right place at the right time.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is19', text: "I feel that other people's help is the main reason for my success.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is20', text: "I rarely feel my own competence is the reason for my success.", type: 'likert', options: FIVE_POINT_LIKERT },
        // Difficulty Accepting Praise
        { id: 'is21', text: "I have difficulty accepting compliments about my intelligence or accomplishments.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is22', text: "When praised, I tend to downplay my achievements.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is23', text: "I feel uncomfortable when someone praises my work.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is24', text: "I often believe that compliments are insincere.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is25', text: "I deflect praise by giving credit to others or external factors.", type: 'likert', options: FIVE_POINT_LIKERT },
        // Perfectionism & Fear of Failure
        { id: 'is26', text: "I set very high, often unattainable, goals for myself.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is27', text: "I feel crushed by even small mistakes or failures.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is28', text: "I often over-prepare for tasks to avoid being seen as incompetent.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is29', text: "I procrastinate on tasks because I'm afraid I won't do them perfectly.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is30', text: "Failure is a significant source of shame for me.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is31', text: "I believe I must be the best at everything I do.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is32', text: "I tend to focus on what I didn't do perfectly rather than what I did well.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is33', text: "I am often afraid to try new things for fear of not being good at them immediately.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is34', text: "I feel like a failure if I'm not constantly achieving.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is35', text: "I am very critical of my own work.", type: 'likert', options: FIVE_POINT_LIKERT },
        // General Feelings
        { id: 'is36', text: "I often feel isolated by my feelings of being a fraud.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is37', text: "I am uncomfortable with being seen as an expert or mentor.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is38', text: "I believe that if I were truly intelligent, things would be easier for me.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is39', text: "I feel a constant pressure to perform and succeed.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'is40', text: "I have a hard time internalizing my successes.", type: 'likert', options: FIVE_POINT_LIKERT },
    ],
    result_template: {
      "low-imposter": {
        level: "Low Imposter Feelings",
        explanation: "Your responses suggest that you have a healthy level of self-confidence and are able to internalize your successes. You likely see your abilities realistically and accept your achievements as well-earned.",
        advice: ["Continue to celebrate your wins, both big and small.", "Acknowledge the effort and skill you put into your work.", "When self-doubt creeps in, remind yourself of your past accomplishments."]
      },
      "moderate-imposter": {
        level: "Moderate Imposter Feelings",
        explanation: "Your responses indicate that you experience a moderate level of imposter feelings. You may frequently doubt your abilities, attribute success to luck, and fear being seen as incompetent, which can cause significant stress and anxiety.",
        advice: ["Keep a 'brag file' of your accomplishments and positive feedback to review when you feel doubtful.", "Practice accepting compliments with a simple 'Thank you'.", "Share your feelings with a trusted friend or mentor; you'll often find they feel the same way.", "Focus on progress, not perfection."]
      },
      "high-imposter": {
        level: "High Imposter Feelings",
        explanation: "Your responses suggest you are experiencing a high level of imposter feelings that likely cause significant distress and may be holding you back. These feelings of being a fraud, despite evidence of your competence, are persistent and impactful.",
        advice: ["It is highly recommended to talk to a therapist or counselor about these feelings. CBT can be very effective.", "Actively work on reframing your thoughts. When you think 'I was just lucky,' reframe it to 'I worked hard to be in a position to take advantage of that opportunity.'", "Stop comparing yourself to others. Focus on your own journey and growth.", "Remember that seeking help is a sign of strength, not a confirmation of incompetence."]
      }
    },
    knowledgeBase: {
        summary: "Imposter Syndrome, also known as imposter phenomenon, is an internal experience of believing that you are not as competent as others perceive you to be. It's the feeling of being a 'fraud' despite external evidence of your competence. It is not a mental disorder but a common experience that can cause anxiety, stress, and self-doubt. Understanding your level of these feelings is the first step to managing them.",
        resultDetails: [
            { key: "high-imposter", title: "High Imposter Feelings" },
            { key: "moderate-imposter", title: "Moderate Imposter Feelings" },
            { key: "low-imposter", title: "Low Imposter Feelings" }
        ]
    }
  },
  {
    id: '16-personality-types',
    title: "16 Personality Types Test (84 Qs)",
    questions: [
        // Mind: Extraverted (E) vs. Introverted (I) - Positive score towards E
        { id: 'm1', category: 'mind', text: "I enjoy being the center of attention in social gatherings.", type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'm2', text: "I prefer to spend my weekends with a small group of close friends or alone.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'm3', text: "I am energized by social events.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'm4', text: "I often feel drained after being in a large crowd.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'm5', text: "I am quick to introduce myself to new people.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'm6', text: "I prefer to listen rather than talk in conversations.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'm7', text: "I find it easy to make new friends.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'm8', text: "I need a lot of time to myself to recharge.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'm9', text: "I am talkative and outgoing.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'm10', text: "I think carefully before I speak.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'm11', text: "I enjoy large parties and celebrations.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'm12', text: "I find small talk to be tedious.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'm13', text: "I often initiate conversations.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'm14', text: "I value deep, one-on-one conversations more than group discussions.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'm15', text: "I am seen as a 'people person'.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'm16', text: "I am more reserved and quiet.", category: 'mind', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },

        // Energy: Intuitive (N) vs. Observant (S) - Positive score towards N
        { id: 'e1', category: 'energy', text: "I am more interested in abstract ideas than concrete facts.", type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'e2', text: "I prefer to focus on the details and practical realities of a situation.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'e3', text: "I enjoy thinking about the future and its possibilities.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'e4', text: "I am more grounded in the present moment.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'e5', text: "I often get lost in thought and imagination.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'e6', text: "I trust my experiences more than my theories.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'e7', text: "I like to understand the underlying patterns and connections between things.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'e8', text: "I prefer hands-on activities and learning by doing.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'e9', text: "I am drawn to symbolic meanings and metaphors.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'e10', text: "I am a practical and down-to-earth person.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'e11', text: "I enjoy discussing complex theories.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'e12', text: "I focus on what is happening here and now.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'e13', text: "I trust my intuition and hunches.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'e14', text: "I rely on facts and evidence to make decisions.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'e15', text: "I am more of a dreamer than a realist.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'e16', text: "I prefer clear and straightforward information.", category: 'energy', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },

        // Nature: Thinking (T) vs. Feeling (F) - Positive score towards T
        { id: 'n1', category: 'nature', text: "I make decisions based on logic and objective analysis.", type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'n2', text: "I consider people's feelings and the impact on them when making decisions.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'n3', text: "I value truth and justice over harmony.", type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'n4', text: "I prioritize maintaining positive relationships.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'n5', text: "I am seen as a rational and level-headed person.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'n6', text: "I am empathetic and attuned to others' emotions.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'n7', text: "I am not afraid to voice a critical opinion, even if it might cause conflict.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'n8', text: "I try to avoid hurting other people's feelings.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'n9', text: "I believe efficiency and effectiveness are more important than personal considerations.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'n10', text: "I am guided by my heart more than my head.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'n11', text: "I am good at finding flaws in an argument.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'n12', text: "I am a warm and supportive person.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'n13', text: "My decisions are consistent and based on principles.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'n14', text: "I am sensitive to the needs of others.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'n15', text: "I can be direct and blunt with my feedback.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'n16', text: "I am diplomatic and seek consensus.", category: 'nature', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },

        // Tactics: Judging (J) vs. Prospecting (P) - Positive score towards J
        { id: 't1', category: 'tactics', text: "I prefer to have a clear plan and stick to it.", type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 't2', text: "I like to keep my options open and be spontaneous.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 't3', text: "I am organized and like to have things decided.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 't4', text: "I am adaptable and enjoy last-minute changes.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 't5', text: "I feel a sense of satisfaction from completing tasks and checking them off my list.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 't6', text: "I prefer to mix work with play.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 't7', text: "I dislike uncertainty and surprises.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 't8', text: "I am comfortable going with the flow.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 't9', text: "I am punctual and always meet my deadlines.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 't10', text: "I often procrastinate and work in bursts of energy.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 't11', text: "I enjoy making schedules and to-do lists.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 't12', text: "I find structure and rules to be confining.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 't13', text: "I prefer a predictable and orderly life.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 't14', text: "I enjoy exploring new possibilities and options.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 't15', text: "I feel better once a decision is made.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 't16', text: "I like to leave things open-ended.", category: 'tactics', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },

        // Identity: Assertive (A) vs. Turbulent (T) - Positive score towards A
        { id: 'i1', category: 'identity', text: "I am confident in my abilities and decisions.", type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'i2', text: "I often worry about what others think of me.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'i3', text: "I remain calm and composed under pressure.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'i4', text: "I am easily stressed and overwhelmed.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'i5', text: "I am not easily bothered by criticism.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'i6', text: "I am very self-conscious.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'i7', text: "I am satisfied with who I am.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'i8', text: "I am a perfectionist and often feel that my work isn't good enough.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'i9', text: "I don't second-guess my choices.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'i10', text: "I often feel insecure.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'i11', text: "I am resilient to setbacks.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'i12', text: "I am sensitive to stress.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'i13', text: "I don't let worries control me.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'i14', text: "I often experience mood swings.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'i115', text: "I feel in control of my emotions.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'i16', text: "I am often driven by a desire for success and recognition.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'i17', text: "I am not easily upset.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'i18', text: "I am very aware of my flaws and shortcomings.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
        { id: 'i19', text: "I am generally an optimistic person.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT },
        { id: 'i20', text: "I often think about my past mistakes.", category: 'identity', type: 'likert', options: SEVEN_POINT_LIKERT, reverse: true },
    ],
    result_template: {
        "Mind": {
            level: "Mind: Introversion (I) vs. Extraversion (E)",
            explanation: "This trait defines the source and direction of an individual's energy expression. An extraverted (E) individual finds energy in interactions with others, while an introverted (I) individual finds energy in their own inner world. Extraverts are action-oriented, while introverts are thought-oriented."
        },
        "Energy": {
            level: "Energy: Sensing (S) vs. Intuition (N)",
            explanation: "This trait defines how a person perceives information. Sensing (S) means a person mainly believes information they receive directly from the external world. Intuition (N) means a person believes mainly information from their inner or imaginative world. Sensing types are concrete and practical, while Intuitive types are abstract and imaginative."
        },
        "Nature": {
            level: "Nature: Thinking (T) vs. Feeling (F)",
            explanation: "This trait reflects how a person processes emotions and makes decisions. Thinking (T) individuals make decisions with their head and are more logical, objective, and detached. Feeling (F) individuals make decisions with their heart, are more empathetic, and focus on harmony and cooperation."
        },
        "Tactics": {
            level: "Tactics: Judging (J) vs. Perceiving (P)",
            explanation: "This trait reflects a person's approach to structure and planning. Judging (J) individuals prefer a planned and organized approach to life and like to have things decided. Perceiving (P) individuals prefer a flexible and spontaneous approach and like to keep their options open."
        },
        "Identity": {
            level: "Identity: Assertive (A) vs. Turbulent (T)",
            explanation: "This trait underpins all others, showing how confident we are in our abilities and decisions. Assertive (A) individuals are self-assured, even-tempered, and resistant to stress. They don’t worry too much about others' opinions. Turbulent (T) individuals are self-conscious and sensitive to stress. They are often perfectionistic, success-driven, and eager to improve."
        },
        "A": { level: "Assertive", explanation: "This trait affects your confidence and resilience. Assertive individuals are self-assured, even-tempered, and resistant to stress. They don't worry too much about others' opinions and are confident in their abilities. They tend to be satisfied with their lives and don't push themselves too hard for improvement." },
        "T": { level: "Turbulent", explanation: "This trait affects your confidence and resilience. Turbulent individuals are self-conscious and sensitive to stress. They are often perfectionistic, success-driven, and eager to improve. They are highly aware of their own emotions and can be prone to worry, but this also fuels their drive for change and achievement." },
        "INTJ": {
            explanation: "INTJs are strategic thinkers, with a plan for everything. They are imaginative yet decisive, ambitious yet private, and astonishingly curious. They are driven by their own original ideas to achieve their goals. They are logical, rational, and have a deep thirst for knowledge.",
            strengths: ["Rational", "Independent", "Determined", "Curious"],
            weaknesses: ["Arrogant", "Overly critical", "Dismissive of emotions", "Combative"],
            best_work: ["Scientist", "Engineer", "Strategic Planner", "Lawyer"]
        },
        "INTP": {
            explanation: "INTPs are innovative inventors with an unquenchable thirst for knowledge. They are known for their brilliant theories and unrelenting logic. They are quiet, contained, and flexible, with a talent for seeing patterns and creating logical explanations for how things work.",
            strengths: ["Analytical", "Original", "Open-minded", "Objective"],
            weaknesses: ["Private and withdrawn", "Insensitive", "Absent-minded", "Condescending"],
            best_work: ["Philosopher", "Software Architect", "Researcher", "Professor"]
        },
        "ENTJ": {
            explanation: "ENTJs are bold, imaginative, and strong-willed leaders, always finding a way – or making one. They are decisive people who love a good challenge. They are natural-born leaders, projecting authority and charisma that draws crowds together behind a common goal.",
            strengths: ["Efficient", "Energetic", "Self-confident", "Strategic"],
            weaknesses: ["Stubborn and dominant", "Intolerant", "Impatient", "Arrogant"],
            best_work: ["CEO", "Entrepreneur", "Military Commander", "Judge"]
        },
        "ENTP": {
            explanation: "ENTPs are quick-witted, clever, and charismatic. They love intellectual challenges and are known for their ability to argue for or against any point, often just for the fun of it. They are idea people, always exploring new concepts and possibilities.",
            strengths: ["Knowledgeable", "Quick Thinker", "Charismatic", "Energetic"],
            weaknesses: ["Very Argumentative", "Insensitive", "Intolerant", "Can find it difficult to focus"],
            best_work: ["Lawyer", "Consultant", "Entrepreneur", "Politician"]
        },
        "INFJ": {
            explanation: "INFJs are quiet and mystical, yet very inspiring and tireless idealists. They have a deep sense of idealism and integrity, but they aren't idle dreamers. They take concrete steps to realize their goals and make a lasting positive impact.",
            strengths: ["Creative", "Insightful", "Principled", "Passionate", "Altruistic"],
            weaknesses: ["Sensitive to criticism", "Reluctant to open up", "Perfectionistic", "Can burn out easily"],
            best_work: ["Counselor", "Writer", "Social Worker", "Human Resources"]
        },
        "INFP": {
            explanation: "INFPs are poetic, kind, and altruistic people, always eager to help a good cause. They are guided by their principles, and their inner flame and passion can shine brightly. They are true idealists, always looking for the hint of good in even the worst of people and events.",
            strengths: ["Idealistic", "Seek and Value Harmony", "Open-Minded and Flexible", "Very Creative", "Passionate and Energetic"],
            weaknesses: ["Too idealistic", "Too altruistic", "Impractical", "Take things personally"],
            best_work: ["Artist", "Writer", "Therapist", "Designer"]
        },
        "ENFJ": {
            explanation: "ENFJs are natural-born leaders, full of passion and charisma. They are often our politicians, coaches, and teachers, reaching out and inspiring others to achieve and to do good in the world. They have a natural confidence that begets influence.",
            strengths: ["Tolerant", "Reliable", "Charismatic", "Altruistic", "Natural Leaders"],
            weaknesses: ["Overly idealistic", "Too selfless", "Too sensitive", "Struggle to make tough decisions"],
            best_work: ["Teacher", "Politician", "Sales Manager", "Life Coach"]
        },
        "ENFP": {
            explanation: "ENFPs are enthusiastic, creative, and sociable free spirits, who can always find a reason to smile. They are charming, independent, energetic, and compassionate. They thrive on making social and emotional connections with others.",
            strengths: ["Curious", "Observant", "Energetic and Enthusiastic", "Excellent Communicators", "Know how to relax"],
            weaknesses: ["Poor practical skills", "Find it difficult to focus", "Overthink things", "Get stressed easily"],
            best_work: ["Journalist", "Actor", "Event Planner", "Marketing Manager"]
        },
        "ISTJ": {
            explanation: "ISTJs are practical and fact-minded individuals, whose reliability cannot be doubted. They are reserved yet willful, with a rational outlook on life. They compose their actions carefully and carry them out with methodical purpose.",
            strengths: ["Honest and Direct", "Strong-willed and Dutiful", "Very Responsible", "Calm and Practical"],
            weaknesses: ["Stubborn", "Insensitive", "Always by the book", "Judgmental"],
            best_work: ["Accountant", "Auditor", "Military Officer", "Logistics Manager"]
        },
        "ISFJ": {
            explanation: "ISFJs are very dedicated and warm protectors, always ready to defend their loved ones. They are efficient and responsible, with a deep sense of personal responsibility. Their kindness is often underestimated, as is their resolve.",
            strengths: ["Supportive", "Reliable and Patient", "Imaginative and Observant", "Enthusiastic", "Loyal and Hardworking"],
            weaknesses: ["Humble and shy", "Take things too personally", "Repress their feelings", "Overload themselves"],
            best_work: ["Nurse", "Teacher", "Social Worker", "Office Manager"]
        },
        "ESTJ": {
            explanation: "ESTJs are excellent administrators, unsurpassed at managing things or people. They are representatives of tradition and order, utilizing their understanding of what is right, wrong, and socially acceptable to bring families and communities together.",
            strengths: ["Dedicated", "Strong-willed", "Direct and Honest", "Loyal, Patient, and Reliable", "Enjoy Creating Order"],
            weaknesses: ["Inflexible and stubborn", "Uncomfortable with unconventional situations", "Judgmental", "Too focused on social status"],
            best_work: ["Judge", "Financial Officer", "School Administrator", "Project Manager"]
        },
        "ESFJ": {
            explanation: "ESFJs are extraordinarily caring, social, and popular people, always eager to help. They are attentive and people-focused, and they enjoy taking part in their social community. Their achievements are guided by decisive values, and they willingly offer guidance to others.",
            strengths: ["Strong practical skills", "Strong sense of duty", "Very loyal", "Sensitive and warm"],
            weaknesses: ["Worried about their social status", "Inflexible", "Vulnerable to criticism", "Often too needy"],
            best_work: ["Event Coordinator", "Nurse", "Paralegal", "Public Relations"]
        },
        "ISTP": {
            explanation: "ISTPs are bold and practical experimenters, masters of all kinds of tools. They love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity.",
            strengths: ["Optimistic and Energetic", "Creative and Practical", "Spontaneous and Rational", "Know how to prioritize"],
            weaknesses: ["Stubborn", "Insensitive", "Private and reserved", "Easily bored"],
            best_work: ["Mechanic", "Pilot", "Firefighter", "Forensic Scientist"]
        },
        "ISFP": {
            explanation: "ISFPs are flexible and charming artists, always ready to explore and experience something new. They live in a colorful, sensual world, inspired by connections with people and ideas. They are spontaneous, and their joy in the moment is infectious.",
            strengths: ["Charming", "Sensitive to others", "Imaginative", "Passionate", "Curious"],
            weaknesses: ["Fiercely independent", "Unpredictable", "Easily stressed", "Overly competitive"],
            best_work: ["Musician", "Fashion Designer", "Chef", "Physical Therapist"]
        },
        "ESTP": {
            explanation: "ESTPs are smart, energetic, and very perceptive people, who truly enjoy living on the edge. They are the life of the party, with a love for drama, passion, and pleasure for its own sake. They are natural group leaders, pulling everyone along with them.",
            strengths: ["Bold", "Rational and Practical", "Original", "Perceptive", "Direct"],
            weaknesses: ["Insensitive", "Impatient", "Risk-prone", "Unstructured"],
            best_work: ["Salesperson", "Paramedic", "Detective", "Stockbroker"]
        },
        "ESFP": {
            explanation: "ESFPs are spontaneous, energetic, and enthusiastic people – life is never boring around them. They are born entertainers, with a flair for the dramatic. They love the spotlight and are excellent at keeping the people around them engaged.",
            strengths: ["Bold", "Original", "Aesthetics and Showmanship", "Practical", "Excellent People Skills"],
            weaknesses: ["Sensitive", "Conflict-averse", "Easily bored", "Poor long-term planners"],
            best_work: ["Performer", "Event Planner", "Tour Guide", "Flight Attendant"]
        },
        "DEFAULT": {
            explanation: "Your personality type is a unique combination of traits. Further research into your specific type code will reveal detailed insights into your strengths, weaknesses, and ideal career paths.",
            strengths: ["Unique perspective", "Individualistic", "Potentially creative"],
            weaknesses: ["May be misunderstood", "Can be unpredictable"],
            best_work: ["Artist", "Consultant", "Entrepreneur"]
        }
    },
    knowledgeBase: {
        summary: "This test is based on a model of 16 personality types, expanding on Carl Jung's theory of psychological types. It measures five key dimensions of personality to create a detailed profile: Mind, Energy, Nature, Tactics, and Identity. Your five-letter type code provides a framework for understanding your preferences, strengths, and potential areas for growth.",
        resultDetails: [
            { key: "Mind", title: "Mind: Introverted (I) vs. Extraverted (E)" },
            { key: "Energy", title: "Energy: Intuitive (N) vs. Observant (S)" },
            { key: "Nature", title: "Nature: Thinking (T) vs. Feeling (F)" },
            { key: "Tactics", title: "Tactics: Judging (J) vs. Prospecting (P)" },
            { key: "Identity", title: "Identity: Assertive (A) vs. Turbulent (T)" }
        ]
    }
  },
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
        level: "The Architect",
        explanation: "As an Architect, you are a strategic thinker with a plan for everything. You are imaginative, decisive, and ambitious, always driven by a thirst for knowledge.",
        best_work: ["Software Developer", "Scientist", "Engineer", "Strategic Planner"],
        strengths: ["Rationality", "Independence", "Quick-thinking", "Determination"],
        weaknesses: ["Arrogance", "Overly critical", "Clueless in romance"],
        famous: ["Elon Musk", "Friedrich Nietzsche", "Michelle Obama"]
      },
      "low-score": {
        level: "The Spontaneous Profile",
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
        level: "The Perfectionist",
        explanation: "You are The Perfectionist. You procrastinate because your high standards make you afraid to start or finish a task. The fear of not doing it perfectly can be paralyzing, leading you to delay in the hope of finding the 'perfect' time or plan. Your identity is often tied to your work, so anything less than flawless feels like a personal failure.",
        strengths: ["High standards", "Attention to detail", "Produces high-quality work", "Conscientious and thorough"],
        weaknesses: ["'All-or-nothing' thinking", "Gets bogged down in details", "Fears criticism", "Often misses deadlines due to over-editing"],
        strategies: ["Aim for 'B+' work", "Set strict time limits for tasks (Timeboxing)", "Break tasks into smaller, less intimidating steps", "Focus on 'done' is better than 'perfect'"]
      },
      "thrill-seeker": {
        level: "The Thrill-Seeker",
        explanation: "You are The Thrill-Seeker. You procrastinate because you get a rush from working under pressure. You find routine tasks boring and are only motivated by the adrenaline of a last-minute deadline. You convince yourself that you work best in a high-stakes environment, enjoying the challenge of the race against time.",
        strengths: ["Works well under pressure", "Can be very productive in short bursts", "Energetic and focused when a deadline is near", "Often creative in a crisis"],
        weaknesses: ["Underestimates time needed", "Produces rushed, sometimes sloppy work", "Creates unnecessary stress for self and others", "Struggles with long-term projects"],
        strategies: ["Create artificial, earlier deadlines for yourself", "Break large projects into smaller 'sprints' with their own deadlines", "Find healthy ways to get an adrenaline rush (e.g., exercise)", "Use a public commitment to create accountability"]
      },
      "avoider": {
        level: "The Avoider",
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
  },
  {
    id: 'anxiety-level-test',
    title: "Anxiety Level Test",
    scoringThresholds: { "high-anxiety": 75, "moderate-anxiety": 45 },
    questions: [
        // General Anxiety
        { id: 'g1', text: "I feel nervous, anxious, or on edge.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'g2', text: "I am not able to stop or control worrying.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'g3', text: "I worry too much about different things.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'g4', text: "I have trouble relaxing.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'g5', text: "I am so restless that it is hard to sit still.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'g6', text: "I become easily annoyed or irritable.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'g7', text: "I feel afraid, as if something awful might happen.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'g8', text: "My heart races or pounds for no apparent reason.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'g9', text: "I experience shortness of breath or a feeling of smothering.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'g10', text: "I have difficulty falling or staying asleep because of my worries.", type: 'likert', options: FIVE_POINT_LIKERT },
        // Social Anxiety
        { id: 's1', text: "I am fearful or anxious about social situations where I might be scrutinized by others.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's2', text: "I avoid doing things or speaking to people for fear of embarrassment or humiliation.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's3', text: "I fear that I will act or appear in a way that will be negatively evaluated.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's4', text: "I find it scary to be with people I don't know well.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's5', text: "I am very conscious of my actions when I am in social situations.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's6', text: "I often worry about what other people think of me.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's7', text: "I avoid social events, even ones I might enjoy.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's8', text: "Being the center of attention makes me feel very anxious.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's9', text: "I blush, sweat, or tremble around other people.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's10', text: "After a social event, I spend a lot of time replaying my interactions in my head.", type: 'likert', options: FIVE_POINT_LIKERT },
        // Panic Symptoms
        { id: 'p1', text: "I have had sudden and repeated periods of intense fear or discomfort (panic attacks).", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p2', text: "I experience a feeling of being detached from myself or my surroundings.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p3', text: "I have a fear of losing control or 'going crazy'.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p4', text: "I experience chest pain or discomfort during periods of high anxiety.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p5', text: "I feel dizzy, light-headed, or faint when I'm very anxious.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p6', text: "I worry intensely about when my next panic attack will occur.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p7', text: "I experience numbness or tingling sensations in my body.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p8', text: "I have a fear of dying when I feel panicky.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p9', text: "I avoid places or situations where I've had a panic attack before.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'p10', text: "I feel a sense of impending doom for no logical reason.", type: 'likert', options: FIVE_POINT_LIKERT },
    ],
    result_template: {
      "low-anxiety": {
        level: "Low Anxiety",
        explanation: "Your responses suggest you experience a low level of anxiety symptoms. You generally feel calm and in control, and anxiety does not seem to significantly interfere with your daily life. This is a healthy baseline.",
        advice: ["Continue practicing healthy coping mechanisms for everyday stress.", "Engage in regular physical activity and mindfulness exercises to maintain your well-being.", "Maintain a strong social support network."]
      },
      "moderate-anxiety": {
        level: "Moderate Anxiety",
        explanation: "Your responses indicate that you are experiencing a moderate level of anxiety symptoms. While you may be functioning well in many areas, anxiety, worry, or fear is likely causing you some distress and may be interfering with your quality of life at times.",
        advice: ["Explore relaxation techniques like deep breathing, meditation, or progressive muscle relaxation.", "Identify your anxiety triggers and develop strategies to manage them.", "Consider reducing caffeine and alcohol intake, as they can exacerbate anxiety.", "Speaking with a therapist or counselor could provide you with valuable tools and support."]
      },
      "high-anxiety": {
        level: "High Anxiety",
        explanation: "Your responses suggest you are experiencing a high level of anxiety symptoms that are likely causing significant distress and impairment in important areas of your life, such as work, school, or relationships. It is highly recommended that you seek professional support.",
        advice: ["It is very important to speak with a mental health professional (like a therapist, psychologist, or psychiatrist) for a formal assessment and to discuss treatment options.", "Cognitive-Behavioral Therapy (CBT) is a highly effective treatment for anxiety.", "Do not hesitate to reach out to a crisis line if your anxiety feels overwhelming.", "Be kind to yourself; recovery is a journey, and asking for help is a sign of strength."]
      }
    },
    knowledgeBase: {
        summary: "Anxiety is a normal human emotion, but when it becomes excessive and persistent, it can develop into an anxiety disorder. This test is a screening tool for symptoms related to generalized anxiety, social anxiety, and panic. It is not a diagnosis. The results can help you better understand your experiences and guide you toward appropriate resources.",
        resultDetails: [
            { key: "high-anxiety", title: "High Anxiety" },
            { key: "moderate-anxiety", title: "Moderate Anxiety" },
            { key: "low-anxiety", title: "Low Anxiety" }
        ]
    }
  },
  {
    id: 'stress-level-test',
    title: "Stress Level Test",
    scoringThresholds: { "high-stress": 70, "moderate-stress": 40 },
    questions: [
        // Emotional Symptoms
        { id: 's_e1', text: "I feel easily agitated, frustrated, or moody.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_e2', text: "I feel overwhelmed, as if I am losing control or need to take control.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_e3', text: "I have difficulty relaxing and quieting my mind.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_e4', text: "I feel bad about myself (low self-esteem), lonely, or worthless.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_e5', text: "I tend to avoid others or social situations.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_e6', text: "My mind is always racing with worries.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_e7', text: "I find it hard to see the positive in situations.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_e8', text: "I feel a sense of dread for no specific reason.", type: 'likert', options: FIVE_POINT_LIKERT },
        // Physical Symptoms
        { id: 's_p1', text: "I have low energy or feel fatigued most of the time.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_p2', text: "I suffer from headaches or migraines.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_p3', text: "I experience stomach issues, such as nausea, diarrhea, or constipation.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_p4', text: "I have aches, pains, and tense muscles.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_p5', text: "I have difficulty sleeping (falling asleep, staying asleep, or sleeping too much).", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_p6', text: "I experience frequent colds or infections.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_p7', text: "I notice a loss of sexual desire or ability.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_p8', text: "I clench my jaw or grind my teeth.", type: 'likert', options: FIVE_POINT_LIKERT },
        // Behavioral Symptoms
        { id: 's_b1', text: "I have changes in my appetite (eating more or less than usual).", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_b2', text: "I procrastinate and avoid my responsibilities.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_b3', text: "I use alcohol, drugs, or cigarettes to relax.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_b4', text: "I have nervous habits, such as nail-biting, fidgeting, or pacing.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_b5', text: "I find it difficult to concentrate or make decisions.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_b6', text: "I find myself withdrawing from friends and family.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_b7', text: "I neglect my daily routines or personal care.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_b8', text: "I find that small, insignificant things bother me more than they should.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 's_b9', text: "I feel I don't have enough time to get everything done.", type: 'likert', options: FIVE_POINT_LIKERT },
    ],
    result_template: {
      "low-stress": {
        level: "Low Stress",
        explanation: "Your responses suggest that you are currently managing life's pressures well. You likely have effective coping mechanisms and a good sense of balance in your life. This is a healthy state to be in.",
        advice: ["Continue to prioritize self-care, including adequate sleep, nutrition, and exercise.", "Maintain your healthy coping strategies for dealing with daily challenges.", "Stay connected with your support system of friends and family."]
      },
      "moderate-stress": {
        level: "Moderate Stress",
        explanation: "Your responses indicate that you are experiencing a moderate level of stress. This may be noticeable and could be affecting your mood, sleep, or ability to function at your best. It's a good time to focus on stress management.",
        advice: ["Incorporate regular relaxation practices into your day, such as deep breathing, meditation, or yoga.", "Ensure you are getting regular physical activity, as it is a powerful stress reducer.", "Identify your main stressors and brainstorm practical solutions or ways to manage them.", "Practice good time management and learn to say 'no' to new commitments if you feel overwhelmed."]
      },
      "high-stress": {
        level: "High Stress",
        explanation: "Your responses suggest you are experiencing a high and potentially chronic level of stress. This is likely having a significant negative impact on your physical and mental health, and it is very important to take action.",
        advice: ["It is highly recommended to speak with a healthcare provider or a mental health professional to discuss your stress levels and develop a management plan.", "Prioritize getting 7-9 hours of quality sleep per night, as lack of sleep severely worsens stress.", "Delegate tasks where possible and ask for help from your support system.", "Reduce or eliminate stimulants like caffeine and nicotine, which can amplify the stress response."]
      }
    },
    knowledgeBase: {
        summary: "Stress is the body's reaction to any change that requires an adjustment or response. The body reacts to these changes with physical, mental, and emotional responses. This test is a screening tool for common symptoms of stress. It is not a diagnosis. The results can help you better understand how stress may be affecting you and guide you toward appropriate resources.",
        resultDetails: [
            { key: "high-stress", title: "High Stress" },
            { key: "moderate-stress", title: "Moderate Stress" },
            { key: "low-stress", title: "Low Stress" }
        ]
    }
  },
  {
    id: 'overthinking-test',
    title: "Overthinking Tendency Test",
    scoringThresholds: { "high-overthinking": 128, "moderate-overthinking": 64 },
    questions: [
        // Rumination (Dwelling on the Past)
        { id: 'ot_r1', text: "I find myself replaying past conversations over and over in my mind.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_r2', text: "I often think about my past mistakes for long periods.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_r3', text: "I struggle to let go of embarrassing moments from my past.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_r4', text: "I frequently analyze past events, trying to understand what I could have done differently.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_r5', text: "I often feel stuck in the past and can't move on.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_r6', text: "My mood is heavily influenced by memories of past failures.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_r7', text: "I spend a lot of time thinking about 'what if' scenarios related to past decisions.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_r8', text: "I find it hard to forgive myself for past errors.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_r9', text: "I bring up old arguments or hurts in my mind long after they have passed.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_r10', text: "I analyze past interactions to find hidden meanings in what people said.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_r11', text: "I feel regret about past choices on a daily basis.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_r12', text: "I find that thinking about the past prevents me from enjoying the present.", type: 'likert', options: FIVE_POINT_LIKERT },
        // Worrying (Anxiety about the Future)
        { id: 'ot_w1', text: "I often worry about things that are unlikely to happen.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_w2', text: "I find myself imagining worst-case scenarios for future events.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_w3', text: "My mind races with anxious thoughts about the future.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_w4', text: "I worry about what other people will think of me in future social situations.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_w5', text: "I find it difficult to relax because I'm always thinking about what could go wrong.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_w6', text: "I often feel a sense of impending doom about the future for no clear reason.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_w7', text: "I make detailed plans for the future to try and control every possible outcome.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_w8', text: "I lose sleep because of worrying about future tasks or events.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_w9', text: "I frequently ask others for reassurance about my future plans.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_w10', text: "I feel paralyzed by worry when I think about my long-term goals.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_w11', text: "My worries about the future often feel uncontrollable.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_w12', text: "I feel physically tense (e.g., muscle aches, headaches) due to worrying about the future.", type: 'likert', options: FIVE_POINT_LIKERT },
        // Analysis Paralysis (Over-analyzing Decisions)
        { id: 'ot_ap1', text: "I spend an excessive amount of time researching even minor decisions.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_ap2', text: "I am afraid of making the 'wrong' choice, which makes it hard to decide at all.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_ap3', text: "I often delay making decisions because I feel I don't have enough information.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_ap4', text: "I create complex pros and cons lists for simple choices.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_ap5', text: "After making a decision, I immediately start second-guessing it.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_ap6', text: "I often ask for many opinions from others before I can make a choice.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_ap7', text: "I feel overwhelmed when faced with too many options.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_ap8', text: "I miss opportunities because I take too long to decide.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_ap9', text: "I believe there is one 'perfect' solution to every problem and I have to find it.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_ap10', text: "The fear of regret is a major factor in my decision-making process.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_ap11', text: "I continue to think about a decision long after it has been made.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_ap12', text: "I find it hard to make simple decisions, like what to eat for dinner or what to wear.", type: 'likert', options: FIVE_POINT_LIKERT },
        // Social Overthinking (Reading into Social Cues)
        { id: 'ot_s1', text: "After a social event, I spend a lot of time analyzing my own behavior.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_s2', text: "I worry about whether I said or did the right thing in a social situation.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_s3', text: "I often try to figure out the 'hidden meaning' behind what people say to me.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_s4', text: "I am highly sensitive to others' tone of voice and body language, often assuming the worst.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_s5', text: "I avoid speaking up in groups because I'm overthinking how my words will be perceived.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_s6', text: "I replay social interactions in my head, focusing on any perceived awkwardness.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_s7', text: "I often assume people are judging me negatively.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_s8', text: "I craft and re-craft text messages or emails to make them 'perfect' before sending.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_s9', text: "I feel exhausted after social interactions because of how much mental energy I spend analyzing them.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_s10', text: "I find it difficult to be spontaneous in conversations because I'm busy thinking of what to say next.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_s11', text: "I worry that I might have accidentally offended someone without realizing it.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'ot_s12', text: "I find myself comparing my social skills or popularity to others.", type: 'likert', options: FIVE_POINT_LIKERT },
    ],
    result_template: {
      "low-overthinking": {
        level: "Low Overthinking",
        explanation: "Your responses suggest you have a healthy and balanced thought process. You are likely decisive, present-focused, and do not let worry or rumination control your life. You can process events and move on without getting stuck in negative thought loops.",
        advice: ["Continue to trust your intuition and make decisions with confidence.", "Practice mindfulness to stay grounded in the present moment.", "Recognize that 'good enough' is often better than waiting for 'perfect'."]
      },
      "moderate-overthinking": {
        level: "Moderate Overthinking",
        explanation: "Your responses indicate a tendency to overthink, which may be causing you some stress, anxiety, or indecisiveness. While you may function well, you likely spend significant mental energy ruminating on the past, worrying about the future, or over-analyzing decisions.",
        advice: ["Set time limits for decisions. Give yourself 5 minutes for small choices and 30 for bigger ones.", "Practice 'thought-stopping'. When you catch yourself in a loop, mentally say 'Stop' and redirect your focus to a physical sensation.", "Schedule a 15-minute 'worry time' each day. If a worry comes up outside that time, write it down and save it for later.", "Talk through your thoughts with a trusted friend to get an outside perspective."]
      },
      "high-overthinking": {
        level: "High Overthinking",
        explanation: "Your responses suggest a strong pattern of overthinking that is likely causing significant distress and interfering with your ability to enjoy life, make decisions, and feel at peace. This 'analysis paralysis' and constant worry can be exhausting and detrimental to your well-being.",
        advice: ["It is highly recommended to explore Cognitive Behavioral Therapy (CBT) techniques to challenge and reframe negative thought patterns.", "Practice mindfulness meditation daily to train your brain to focus on the present rather than getting lost in thought.", "Take action, even if it's small. Action is the best antidote to overthinking. Break tasks into tiny steps.", "Consider speaking with a mental health professional who can provide you with targeted strategies and support."]
      }
    },
    knowledgeBase: {
        summary: "Overthinking is the habit of repeatedly thinking about or dwelling on a particular thought, event, or problem. It often manifests as rumination (obsessing over the past) or worrying (catastrophizing about the future). While analysis is useful, overthinking becomes counterproductive, leading to 'analysis paralysis,' anxiety, and a disconnect from the present moment. This test helps identify your tendency to overthink and provides insights into managing these thought patterns.",
        resultDetails: [
            { key: "high-overthinking", title: "High Overthinking" },
            { key: "moderate-overthinking", title: "Moderate Overthinking" },
            { key: "low-overthinking", title: "Low Overthinking" }
        ]
    }
  },
  {
    id: 'enneagram-test',
    title: "Enneagram Personality Test",
    questions: [
        // Type 1: The Reformer (principled, purposeful, self-controlled, and perfectionistic)
        { id: 'e1_1', category: 'type1', text: "I have a strong sense of right and wrong.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e1_2', category: 'type1', text: "I strive to be a good, ethical person.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e1_3', category: 'type1', text: "I am often critical of myself and others when standards are not met.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e1_4', category: 'type1', text: "I feel a responsibility to improve myself and the world around me.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e1_5', category: 'type1', text: "I am well-organized and detail-oriented.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e1_6', category: 'type1', text: "I have an 'inner critic' that constantly judges my actions.", type: 'likert', options: FIVE_POINT_LIKERT },
        // Type 2: The Helper (caring, interpersonal, generous, and people-pleasing)
        { id: 'e2_1', category: 'type2', text: "I am naturally attuned to the needs and feelings of others.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e2_2', category: 'type2', text: "I feel best about myself when I am helping others.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e2_3', category: 'type2', text: "I sometimes struggle to acknowledge my own needs.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e2_4', category: 'type2', text: "I want to be loved and appreciated for what I do for others.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e2_5', category: 'type2', text: "I find it hard to say 'no' to requests for help.", type: 'likert', options: FIVE_POINT_LIKERT },
        { id: 'e2_6', category: 'type2', text: "I am very good at making people feel welcome and comfortable.", type: 'likert', options: FIVE_POINT_LIKERT },
        // Type 3: The Achiever (success-oriented, pragmatic, adaptive, and image-conscious)
        { id: 'e3_1', category: 'type3', text: "I am highly motivated by success and achieving my goals.", type: 'likert', options: FIVE_POINT_LIKERT },
        // ... (remaining questions are truncated)
    ],
    result_template: {
        "type1": {
            level: "Type 1: The Reformer",
            explanation: "Ones are conscientious and ethical, with a strong sense of right and wrong. They are teachers, crusaders, and advocates for change: always striving to improve things, but afraid of making a mistake.",
            basic_fear: "Of being corrupt/evil, defective.",
            basic_desire: "To be good, to have integrity, to be balanced."
        },
        "type2": {
            level: "Type 2: The Helper",
            explanation: "Twos are empathetic, sincere, and warm-hearted. They are friendly, generous, and self-sacrificing, but can also be sentimental, flattering, and people-pleasing.",
            basic_fear: "Of being unwanted, unworthy of being loved.",
            basic_desire: "To feel loved."
        },
         "type3": {
            level: "Type 3: The Achiever",
            explanation: "Threes are self-assured, attractive, and charming. Ambitious, competent, and energetic, they can also be status-conscious and highly driven for advancement.",
            basic_fear: "Of being worthless.",
            basic_desire: "To feel valuable and worthwhile."
        }
        // ... (other types would follow)
    },
     knowledgeBase: {
        summary: "The Enneagram is a personality system that describes nine distinct but interconnected types. Each type has a core belief about how the world works, which drives their deepest motivations and fears. Understanding your type can provide profound insights into your behavior, relationships, and path to personal growth.",
        resultDetails: [
            { key: "type1", title: "Type 1: The Reformer" },
            { key: "type2", title: "Type 2: The Helper" },
            { key: "type3", title: "Type 3: The Achiever" },
            // ... (other types)
        ]
    }
  }
];

// In a real app, you would fetch this from a server or have a more robust offline solution.
// For this project, we simulate an async fetch from our mock DB.
export const fetchTestById = (id: string): Promise<FullTest> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const test = mockTestDb.find(t => t.id === id);
      if (test) {
        resolve(test);
      } else {
        reject(new Error(`Test with id "${id}" not found.`));
      }
    }, 500); // Simulate network delay
  });
};

export const fetchAddictionById = (id: string): Promise<Addiction> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addiction = addictions.find(a => a.id === id);
      if (addiction) {
        resolve(addiction);
      } else {
        reject(new Error(`Addiction with id "${id}" not found.`));
      }
    }, 500);
  });
};