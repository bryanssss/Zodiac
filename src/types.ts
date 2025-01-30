export type ZodiacSign = {
  name: string;
  date: string;
  element: string;
  symbol: string;
  compatibility: string[];
  traits: string[];
  description: string;
  sexualTraits: {
    strengths: string[];
    challenges: string[];
    preferences: string[];
    bestMatches: string[];
    worstMatches: string[];
    tips: string[];
  };
};