import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Star, Moon, Heart, Wand2, Loader2, RefreshCw } from 'lucide-react';
import { zodiacSigns } from '../data/zodiacData';
import ScrollToTop from './ScrollToTop';
import { AffiliateMessage } from '../utils/affiliateLinks';

const spellPhrases = [
  "By starlight and moonbeams bright",
  "Love's wisdom now take flight",
  "Through cosmic dance and stellar fire",
  "Reveal the path of heart's desire",
  "As above, so shall it be below",
  "Let love's true fortune now be known"
];

const loveSpellResults = {
  romance: [
    "💖 A passionate romance is about to enter your life. Keep your heart open to unexpected encounters.",
    "💫 Your soulmate is closer than you think. They will be drawn to your magnetic energy.",
    "✨ Love at first sight awaits you in an unexpected place. Trust your intuition when it happens."
  ],
  growth: [
    "🌱 A period of romantic growth approaches. Past lessons will lead to future happiness.",
    "🦋 Your heart is transforming. This metamorphosis will attract your perfect match.",
    "🌟 Self-discovery will guide you to true love. Embrace your authentic self."
  ],
  healing: [
    "🌸 Healing energies surround your love life. Past wounds are transforming into wisdom.",
    "🕊️ Release old patterns to welcome new love. Your heart is ready for fresh beginnings.",
    "🌈 A cycle of healing brings romantic renewal. Trust in the timing of love."
  ],
  adventure: [
    "🌍 Love will find you during an adventure. Stay open to new experiences.",
    "⭐ An exciting romantic journey begins. Follow your heart's compass.",
    "🚀 Unexpected travel may lead to romance. Be ready for spontaneous connections."
  ]
};

export default function LoveSpell() {
  const [selectedSign, setSelectedSign] = useState('');
  const [isCasting, setIsCasting] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [fortune, setFortune] = useState('');
  const [spellType, setSpellType] = useState<'romance' | 'growth' | 'healing' | 'adventure'>('romance');

  const castSpell = () => {
    if (!selectedSign) return;
    
    setIsCasting(true);
    setShowResult(false);
    setCurrentPhrase(0);

    // Randomly select spell type
    const types: ('romance' | 'growth' | 'healing' | 'adventure')[] = ['romance', 'growth', 'healing', 'adventure'];
    setSpellType(types[Math.floor(Math.random() * types.length)]);

    // Progress through spell phrases
    const interval = setInterval(() => {
      setCurrentPhrase(prev => {
        if (prev >= spellPhrases.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            const results = loveSpellResults[spellType];
            setFortune(results[Math.floor(Math.random() * results.length)]);
            setShowResult(true);
            setIsCasting(false);
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const resetSpell = () => {
    setShowResult(false);
    setCurrentPhrase(0);
    setFortune('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-purple-500 to-indigo-500 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-white mb-6 hover:text-rose-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <Moon className="inline-block text-rose-300" />
            Love Spell Fortune
            <Star className="inline-block text-rose-300" />
          </h1>
          <p className="text-white/90 text-lg">
            Cast a magical spell to reveal your romantic destiny
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-8">
          {/* Sign Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Choose Your Zodiac Sign
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {zodiacSigns.map((sign) => (
                <button
                  key={sign.name}
                  onClick={() => setSelectedSign(sign.name)}
                  disabled={isCasting}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    selectedSign === sign.name
                      ? 'bg-white/30 scale-105'
                      : 'bg-white/10 hover:bg-white/20'
                  } ${isCasting ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-3xl mb-2">{sign.symbol}</span>
                    <span className="text-white font-medium">{sign.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Spell Casting Button */}
          <button
            onClick={castSpell}
            disabled={!selectedSign || isCasting}
            className="w-full py-4 bg-rose-500/40 hover:bg-rose-500/50 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isCasting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Casting Spell...
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5" />
                Cast Love Spell
              </>
            )}
          </button>

          {/* Spell Casting Animation */}
          {isCasting && (
            <div className="mt-8 text-center animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-rose-500/20 rounded-lg blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8">
                  <Sparkles className="w-8 h-8 text-rose-300 mx-auto mb-4 animate-pulse" />
                  <p className="text-white text-xl font-medium mb-4">
                    {spellPhrases[currentPhrase]}
                  </p>
                  <div className="flex justify-center gap-2">
                    {spellPhrases.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentPhrase ? 'bg-rose-300 scale-125' : 'bg-white/30'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Fortune Result */}
          {showResult && (
            <div className="mt-8 text-center animate-fade-in">
              <div className="bg-white/20 rounded-xl p-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Star className="text-rose-300 w-6 h-6" />
                  <h2 className="text-2xl font-bold text-white">Your Love Fortune</h2>
                  <Star className="text-rose-300 w-6 h-6" />
                </div>

                <div className="mb-6">
                  <span className="text-4xl block mb-4">
                    {zodiacSigns.find(s => s.name === selectedSign)?.symbol}
                  </span>
                  <Heart className="w-8 h-8 text-rose-300 mx-auto animate-pulse" />
                </div>

                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  {fortune}
                </p>

                <button
                  onClick={resetSpell}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300 mb-6"
                >
                  <RefreshCw className="w-5 h-5" />
                  Cast Another Spell
                </button>

                {selectedSign && <AffiliateMessage sign={selectedSign} />}
              </div>
            </div>
          )}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}