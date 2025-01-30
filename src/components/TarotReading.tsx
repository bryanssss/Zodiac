import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Sparkles, Moon, Heart, Shuffle, RefreshCw, Info, X } from 'lucide-react';
import { zodiacSigns } from '../data/zodiacData';
import ScrollToTop from './ScrollToTop';
import { AffiliateMessage } from '../utils/affiliateLinks';

// Tarot card data
const tarotCards = [
  {
    name: "The Lovers",
    image: "https://images.unsplash.com/photo-1632505084024-f6bc3021fcb5?auto=format&fit=crop&q=80&w=500",
    description: "A deep connection is forming. Trust your heart's wisdom in matters of love.",
    keywords: ["harmony", "relationships", "choices"]
  },
  {
    name: "Two of Cups",
    image: "https://images.unsplash.com/photo-1590072149237-5f269b7a4b80?auto=format&fit=crop&q=80&w=500",
    description: "A new romantic partnership is blossoming. Open your heart to love's possibilities.",
    keywords: ["partnership", "attraction", "connection"]
  },
  {
    name: "The Star",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=500",
    description: "Hope and inspiration guide your love life. Your dreams of romance will manifest.",
    keywords: ["hope", "inspiration", "renewal"]
  },
  {
    name: "Ten of Cups",
    image: "https://images.unsplash.com/photo-1596005554384-d293674c91d7?auto=format&fit=crop&q=80&w=500",
    description: "Emotional fulfillment and lasting happiness await. Your heart's desires will be met.",
    keywords: ["fulfillment", "happiness", "harmony"]
  },
  {
    name: "Ace of Cups",
    image: "https://images.unsplash.com/photo-1515942661900-94b3d1972591?auto=format&fit=crop&q=80&w=500",
    description: "A new emotional beginning brings fresh love into your life. Embrace the opportunity.",
    keywords: ["new love", "emotions", "beginnings"]
  },
  {
    name: "The Sun",
    image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&q=80&w=500",
    description: "Joy and vitality illuminate your love life. Success in romance is assured.",
    keywords: ["joy", "success", "vitality"]
  }
];

// Love messages based on zodiac compatibility
const getLoveMessage = (sign: string, card: typeof tarotCards[0]) => {
  const signData = zodiacSigns.find(s => s.name === sign);
  return `The ${card.name} reveals that your ${signData?.element} nature will guide you to love. 
    ${card.description} Your ${signData?.traits.join(' and ')} qualities will attract the right person. 
    Focus on ${card.keywords.join(', ')} to manifest your romantic destiny.`;
};

export default function TarotReading() {
  const [selectedSign, setSelectedSign] = useState('');
  const [selectedCard, setSelectedCard] = useState<typeof tarotCards[0] | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);
  const [cards, setCards] = useState(tarotCards);

  const shuffleCards = () => {
    if (!selectedSign || isShuffling) return;
    
    setIsShuffling(true);
    setShowResult(false);
    setSelectedCard(null);

    // Animate shuffling
    const shuffleAnimation = setInterval(() => {
      setCards(prev => [...prev.sort(() => Math.random() - 0.5)]);
    }, 200);

    // Stop shuffling and reveal card
    setTimeout(() => {
      clearInterval(shuffleAnimation);
      const randomCard = cards[Math.floor(Math.random() * cards.length)];
      setSelectedCard(randomCard);
      setShowResult(true);
      setIsShuffling(false);
    }, 2000);
  };

  const resetReading = () => {
    setShowResult(false);
    setSelectedCard(null);
    setCards(tarotCards);
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
            Tarot Love Reading
            <Star className="inline-block text-rose-300" />
          </h1>
          <p className="text-white/90 text-lg mb-2">
            Let the cards reveal your romantic destiny
          </p>
          <button
            onClick={() => setShowTutorial(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300 mt-2"
          >
            <Info className="w-4 h-4" />
            How to Read
          </button>
        </div>

        {showTutorial && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 max-w-lg w-full relative">
              <button
                onClick={() => setShowTutorial(false)}
                className="absolute top-4 right-4 text-white hover:text-rose-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-rose-300" />
                Reading the Cards
              </h2>
              <div className="space-y-4 text-white/90">
                <p>1. Select your zodiac sign to attune the cards to your energy</p>
                <p>2. Focus on your romantic question or desire</p>
                <p>3. Click "Shuffle Cards" when you're ready</p>
                <p>4. The cards will reveal insights about your love life</p>
                <div className="bg-white/10 rounded-lg p-4 mt-4">
                  <p className="font-medium mb-2">Card Reading Tips:</p>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Clear your mind before the reading</li>
                    <li>Trust your intuition</li>
                    <li>Be open to the cards' messages</li>
                    <li>Consider how the message relates to your situation</li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => setShowTutorial(false)}
                className="w-full mt-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300"
              >
                Begin Reading
              </button>
            </div>
          </div>
        )}

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
                  disabled={isShuffling}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    selectedSign === sign.name
                      ? 'bg-white/30 scale-105'
                      : 'bg-white/10 hover:bg-white/20'
                  } ${isShuffling ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-3xl mb-2">{sign.symbol}</span>
                    <span className="text-white font-medium">{sign.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Shuffle Button */}
          <button
            onClick={shuffleCards}
            disabled={!selectedSign || isShuffling}
            className="w-full py-4 bg-rose-500/40 hover:bg-rose-500/50 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isShuffling ? (
              <>
                <Shuffle className="w-5 h-5 animate-spin" />
                Shuffling Cards...
              </>
            ) : (
              <>
                <Shuffle className="w-5 h-5" />
                Shuffle Cards
              </>
            )}
          </button>

          {/* Card Display */}
          {!showResult && !isShuffling && (
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {cards.map((card) => (
                <div
                  key={card.name}
                  className="aspect-[2/3] bg-white/10 rounded-xl overflow-hidden relative group hover:scale-105 transition-transform duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-medium text-lg">{card.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Reading Result */}
          {showResult && selectedCard && (
            <div className="mt-8 text-center animate-fade-in">
              <div className="bg-white/20 rounded-xl p-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Sparkles className="text-rose-300 w-6 h-6" />
                  <h2 className="text-2xl font-bold text-white">Your Reading</h2>
                  <Sparkles className="text-rose-300 w-6 h-6" />
                </div>

                <div className="max-w-sm mx-auto mb-6">
                  <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={selectedCard.image}
                      alt={selectedCard.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-4">{selectedCard.name}</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-white/90 text-lg leading-relaxed">
                    {getLoveMessage(selectedSign, selectedCard)}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {selectedCard.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 bg-white/20 rounded-full text-white/90 text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={resetReading}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300 mb-6"
                >
                  <RefreshCw className="w-5 h-5" />
                  New Reading
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