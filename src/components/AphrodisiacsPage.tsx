import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { zodiacAphrodisiacs } from '../data/aphrodisiacData';
import { zodiacSigns } from '../data/zodiacData';
import { Leaf, ArrowLeft, ChevronDown, ChevronUp, Star } from 'lucide-react';
import ScrollToTop from './ScrollToTop';

export default function AphrodisiacsPage() {
  const [expandedSign, setExpandedSign] = useState<string | null>(null);

  const toggleSign = (signName: string) => {
    setExpandedSign(expandedSign === signName ? null : signName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-purple-500 to-indigo-500 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-white mb-6 hover:text-rose-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Compatibility Calculator
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <Leaf className="inline-block text-rose-300" />
            Zodiac Aphrodisiacs
            <Leaf className="inline-block text-rose-300" />
          </h1>
          <p className="text-white/90 text-lg">Discover natural enhancers aligned with your zodiac energy</p>
        </div>

        <div className="space-y-4">
          {zodiacSigns.map((sign) => {
            const isExpanded = expandedSign === sign.name;
            return (
              <div
                key={sign.name}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleSign(sign.name)}
                  className="w-full p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{sign.symbol}</span>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{sign.name}</h2>
                        <p className="text-white/80">{sign.date}</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-white/80" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-white/80" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-6 pt-0 space-y-6 animate-fade-in">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <Star className="w-5 h-5 text-rose-300" />
                        Zodiac Profile
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-white/90 mb-2">
                            <span className="font-medium">Element:</span> {sign.element}
                          </p>
                          <p className="text-white/90 mb-2">
                            <span className="font-medium">Traits:</span> {sign.traits.join(', ')}
                          </p>
                          <p className="text-white/90">
                            <span className="font-medium">Ruling Planet:</span> {getRulingPlanet(sign.name)}
                          </p>
                        </div>
                        <div>
                          <p className="text-white/90 mb-2">
                            <span className="font-medium">Quality:</span> {getQuality(sign.name)}
                          </p>
                          <p className="text-white/90">
                            <span className="font-medium">Lucky Colors:</span> {getLuckyColors(sign.name)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {zodiacAphrodisiacs[sign.name]?.map((aphrodisiac, index) => (
                        <div key={index} className="bg-white/10 rounded-lg p-4">
                          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            <Leaf className="w-5 h-5 text-rose-300" />
                            {aphrodisiac.name}
                          </h3>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-white font-medium mb-2">Description</h4>
                              <p className="text-white/90">{aphrodisiac.description}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-white font-medium mb-2">Benefits</h4>
                              <ul className="grid md:grid-cols-2 gap-2">
                                {aphrodisiac.benefits.map((benefit, i) => (
                                  <li key={i} className="text-white/80 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {aphrodisiac.preparation && (
                              <div>
                                <h4 className="text-white font-medium mb-2">Preparation & Usage</h4>
                                <p className="text-white/80">{aphrodisiac.preparation}</p>
                              </div>
                            )}

                            {aphrodisiac.history && (
                              <div>
                                <h4 className="text-white font-medium mb-2">Historical & Cultural Significance</h4>
                                <p className="text-white/80">{aphrodisiac.history}</p>
                              </div>
                            )}

                            {aphrodisiac.bestPairings && (
                              <div>
                                <h4 className="text-white font-medium mb-2">Complementary Pairings</h4>
                                <div className="flex flex-wrap gap-2">
                                  {aphrodisiac.bestPairings.map((pairing, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-white/90 text-sm">
                                      {pairing}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div>
                              <h4 className="text-white font-medium mb-2">Astrological Connection</h4>
                              <p className="text-white/80">
                                {getAstrologicalConnection(sign.name, aphrodisiac.name)}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-white font-medium mb-2">Seasonal Availability</h4>
                              <p className="text-white/80">
                                {getSeasonalInfo(aphrodisiac.name)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white/5 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Additional Recommendations</h3>
                      <p className="text-white/90">{getAdditionalRecommendations(sign.name)}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

function getRulingPlanet(sign: string): string {
  const planets: Record<string, string> = {
    Aries: 'Mars',
    Taurus: 'Venus',
    Gemini: 'Mercury',
    Cancer: 'Moon',
    Leo: 'Sun',
    Virgo: 'Mercury',
    Libra: 'Venus',
    Scorpio: 'Pluto & Mars',
    Sagittarius: 'Jupiter',
    Capricorn: 'Saturn',
    Aquarius: 'Uranus & Saturn',
    Pisces: 'Neptune & Jupiter'
  };
  return planets[sign] || '';
}

function getQuality(sign: string): string {
  const qualities: Record<string, string> = {
    Aries: 'Cardinal Fire - Initiative and leadership',
    Taurus: 'Fixed Earth - Stability and sensuality',
    Gemini: 'Mutable Air - Adaptability and communication',
    Cancer: 'Cardinal Water - Emotional leadership',
    Leo: 'Fixed Fire - Sustained passion',
    Virgo: 'Mutable Earth - Practical adaptability',
    Libra: 'Cardinal Air - Social initiative',
    Scorpio: 'Fixed Water - Emotional intensity',
    Sagittarius: 'Mutable Fire - Spiritual adaptability',
    Capricorn: 'Cardinal Earth - Material leadership',
    Aquarius: 'Fixed Air - Mental stability',
    Pisces: 'Mutable Water - Emotional adaptability'
  };
  return qualities[sign] || '';
}

function getLuckyColors(sign: string): string {
  const colors: Record<string, string> = {
    Aries: 'Red, White, Pink',
    Taurus: 'Green, Pink, Earth tones',
    Gemini: 'Yellow, Light Blue, Orange',
    Cancer: 'Silver, White, Pearl',
    Leo: 'Gold, Orange, Royal Purple',
    Virgo: 'Navy Blue, Grey, Earth tones',
    Libra: 'Pink, Blue, Pastel shades',
    Scorpio: 'Deep Red, Black, Purple',
    Sagittarius: 'Purple, Blue, Turquoise',
    Capricorn: 'Brown, Black, Dark Green',
    Aquarius: 'Electric Blue, Turquoise, Silver',
    Pisces: 'Sea Green, Lavender, Purple'
  };
  return colors[sign] || '';
}

function getAstrologicalConnection(sign: string, aphrodisiac: string): string {
  const connections: Record<string, Record<string, string>> = {
    Aries: {
      'Chili Peppers': 'Connected to Mars\' fiery energy, chili peppers mirror Aries\' natural heat and passion. The spiciness represents the sign\'s bold approach to life and love.',
      'Dark Chocolate': 'Rich in compounds that boost energy and mood, dark chocolate resonates with Aries\' need for quick, powerful experiences and instant gratification.'
    },
    Taurus: {
      'Figs': 'Sacred to Venus, Taurus\' ruling planet, figs represent the sign\'s connection to earthly pleasures and sensual experiences.',
      'Honey': 'The sweet, natural essence of honey aligns with Taurus\' appreciation for life\'s simple pleasures and their connection to nature\'s bounty.'
    }
    // Add more connections for other signs
  };
  return connections[sign]?.[aphrodisiac] || 
    `This aphrodisiac resonates with ${sign}'s natural elemental energy and astrological qualities.`;
}

function getSeasonalInfo(aphrodisiac: string): string {
  const seasonality: Record<string, string> = {
    'Chili Peppers': 'Best harvested in late summer and early fall. Can be dried and used year-round.',
    'Dark Chocolate': 'Available year-round, with peak quality during cooler months.',
    'Figs': 'Peak season is late summer to early fall, with some varieties available twice yearly.',
    'Honey': 'Harvested primarily in late summer, but available year-round. Different seasonal flowers create unique varieties.',
    // Add more seasonal information for other aphrodisiacs
  };
  return seasonality[aphrodisiac] || 'Available throughout the year with varying seasonal qualities.';
}

function getAdditionalRecommendations(sign: string): string {
  const recommendations: Record<string, string> = {
    Aries: 'Combine aphrodisiacs with vigorous physical activity and spontaneous adventures. Consider spicy food festivals or cooking classes focused on heat and passion.',
    Taurus: 'Create a multi-sensory experience with aromatherapy, texture-rich foods, and natural settings. Consider wine tasting or gourmet food pairing events.',
    Gemini: 'Experiment with variety and novel combinations. Try fusion cuisine or international food markets to satisfy your curious nature.',
    Cancer: 'Focus on comfort foods with emotional significance. Consider home cooking classes or family recipe exploration.',
    Leo: 'Seek out luxury ingredients and dramatic presentation. Consider high-end dining experiences or theatrical cooking shows.',
    Virgo: 'Emphasize pure, organic ingredients and precise preparation methods. Consider herbalism classes or organic farming workshops.',
    Libra: 'Balance flavors and aesthetic presentation. Consider food styling classes or romantic dinner planning.',
    Scorpio: 'Explore rare and exotic ingredients with transformative properties. Consider mystery dinner experiences or food psychology workshops.',
    Sagittarius: 'Seek out international flavors and adventurous combinations. Consider global cuisine tours or spice market expeditions.',
    Capricorn: 'Focus on traditional, time-tested ingredients with proven benefits. Consider artisanal food crafting or vintage recipe restoration.',
    Aquarius: 'Experiment with innovative and unconventional combinations. Consider molecular gastronomy or future food trends.',
    Pisces: 'Embrace ethereal flavors and dreamy presentations. Consider underwater restaurant experiences or mystical tea ceremonies.'
  };
  return recommendations[sign] || '';
}