import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { zodiacSigns } from '../data/zodiacData';
import { zodiacGifts } from '../data/giftsData';
import { Gift, ArrowLeft, Heart, Star, ChevronDown, ChevronUp } from 'lucide-react';
import ScrollToTop from './ScrollToTop';

export default function GiftsPage() {
  const [selectedSign, setSelectedSign] = useState<string>('');
  const [expandedGift, setExpandedGift] = useState<number | null>(null);
  const giftsRef = useRef<HTMLDivElement>(null);

  const gifts = selectedSign ? zodiacGifts[selectedSign] : [];

  useEffect(() => {
    if (selectedSign && giftsRef.current) {
      giftsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedSign]);

  const getGiftLink = (category: string) => {
    return category === 'experience' ? 'https://gyg.me/kqAQeaYT' : 'https://amzn.to/4gkeFjR';
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
            <Gift className="inline-block text-rose-300" />
            Astrological Gifts
            <Heart className="inline-block text-rose-300" />
          </h1>
          <p className="text-white/90 text-lg">
            Discover the perfect intimate gifts aligned with your lover's zodiac sign
          </p>
        </div>

        {/* Sign Selection */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose Your Lover's Sign</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {zodiacSigns.map((sign) => (
              <button
                key={sign.name}
                onClick={() => setSelectedSign(sign.name)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  selectedSign === sign.name
                    ? 'bg-white/30 scale-105'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl mb-2">{sign.symbol}</span>
                  <span className="text-white font-medium">{sign.name}</span>
                  <span className="text-white/70 text-sm">{sign.date}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedSign && (
          <div ref={giftsRef} className="space-y-4 scroll-mt-8">
            {gifts.map((gift, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedGift(expandedGift === index ? null : index)}
                  className="w-full p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{gift.name}</h3>
                      <p className="text-white/80">{gift.description}</p>
                    </div>
                    {expandedGift === index ? (
                      <ChevronUp className="w-6 h-6 text-white/80 flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-white/80 flex-shrink-0 ml-4" />
                    )}
                  </div>
                </button>

                {expandedGift === index && (
                  <div className="px-6 pb-6 space-y-4 animate-fade-in">
                    <div className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-rose-300 flex-shrink-0 mt-1" />
                      <p className="text-white/90">{gift.astrologicalSignificance}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {gift.keywords.map((keyword, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/20 rounded-full text-sm text-white/90"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    <a
                      href={getGiftLink(gift.category)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300"
                    >
                      <Gift className="w-4 h-4" />
                      Where to Buy
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <ScrollToTop />
    </div>
  );
}