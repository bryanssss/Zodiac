import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, Star, Heart, RefreshCw, Info, X } from 'lucide-react';
import { zodiacSigns } from '../data/zodiacData';
import ScrollToTop from './ScrollToTop';
import { AffiliateMessage } from '../utils/affiliateLinks';

export default function LoveCompass() {
  const [selectedSign, setSelectedSign] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [matchedSign, setMatchedSign] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);

  const findBestMatch = (sign: string) => {
    const signData = zodiacSigns.find(s => s.name === sign);
    if (!signData) return null;
    
    const compatibleSigns = signData.compatibility;
    return compatibleSigns[Math.floor(Math.random() * compatibleSigns.length)];
  };

  const spinCompass = () => {
    if (!selectedSign || isSpinning) return;

    setIsSpinning(true);
    setMatchedSign(null);

    const bestMatch = findBestMatch(selectedSign);
    const targetIndex = zodiacSigns.findIndex(s => s.name === bestMatch);
    const segmentAngle = 360 / zodiacSigns.length;
    const targetRotation = -(segmentAngle * targetIndex + segmentAngle / 2);
    const spins = 5 + Math.floor(Math.random() * 3); // 5-7 full spins
    const newRotation = targetRotation + (spins * 360);

    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setMatchedSign(bestMatch);
    }, 6000);
  };

  const getElementColor = (element: string) => {
    switch (element) {
      case 'Fire': return 'from-orange-400 to-red-500';
      case 'Earth': return 'from-emerald-400 to-green-500';
      case 'Air': return 'from-sky-400 to-blue-500';
      case 'Water': return 'from-indigo-400 to-purple-500';
      default: return 'from-rose-400 to-pink-500';
    }
  };

  const getMatchMessage = (sign1: string, sign2: string | null) => {
    if (!sign2) return '';
    const sign1Data = zodiacSigns.find(s => s.name === sign1);
    const sign2Data = zodiacSigns.find(s => s.name === sign2);
    
    return `The cosmic compass reveals that ${sign1}'s ${sign1Data?.element} energy harmonizes beautifully with ${sign2}'s ${sign2Data?.element} nature. Together, you create a powerful connection that balances ${sign1Data?.traits.join(' and ')} with ${sign2Data?.traits.join(' and ')}.`;
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
            <Compass className="inline-block text-rose-300" />
            Love Compass
            <Heart className="inline-block text-rose-300" />
          </h1>
          <p className="text-white/90 text-lg mb-2">
            Let the cosmic compass guide you to your perfect match
          </p>
          <button
            onClick={() => setShowTutorial(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300 mt-2"
          >
            <Info className="w-4 h-4" />
            How it Works
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
                <Compass className="w-6 h-6 text-rose-300" />
                Finding Your Match
              </h2>
              <div className="space-y-4 text-white/90">
                <p>1. Select your zodiac sign to attune the compass</p>
                <p>2. Focus on your desire for love and connection</p>
                <p>3. Click "Spin Compass" to reveal your direction</p>
                <p>4. The compass will point to your most compatible match</p>
                <div className="bg-white/10 rounded-lg p-4 mt-4">
                  <p className="font-medium mb-2">Compass Reading Tips:</p>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Trust in the cosmic guidance</li>
                    <li>Be open to unexpected connections</li>
                    <li>Consider the elemental harmony</li>
                    <li>Follow your heart's true north</li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => setShowTutorial(false)}
                className="w-full mt-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300"
              >
                Begin Journey
              </button>
            </div>
          </div>
        )}

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-8">
          {/* Sign Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Choose Your Sign
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {zodiacSigns.map((sign) => (
                <button
                  key={sign.name}
                  onClick={() => setSelectedSign(sign.name)}
                  disabled={isSpinning}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    selectedSign === sign.name
                      ? 'bg-white/30 scale-105'
                      : 'bg-white/10 hover:bg-white/20'
                  } ${isSpinning ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-3xl mb-2">{sign.symbol}</span>
                    <span className="text-white font-medium">{sign.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Compass */}
          <div className="relative max-w-md mx-auto aspect-square mb-8">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
            
            {/* Compass rose */}
            <div
              className="absolute inset-4 transition-transform duration-[6000ms] ease-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {zodiacSigns.map((sign, index) => {
                const angle = (360 / zodiacSigns.length) * index;
                return (
                  <div
                    key={sign.name}
                    className="absolute w-full h-full origin-center"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 
                        bg-gradient-to-br ${getElementColor(sign.element)} 
                        rounded-full flex items-center justify-center 
                        transform -rotate-[var(--angle)]
                        border-2 border-white/30`}
                      style={{ '--angle': `${angle}deg` } as any}
                    >
                      <div className="text-center">
                        <span className="text-3xl text-white">{sign.symbol}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center piece */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center z-10 border-4 border-white/30">
              <button
                onClick={spinCompass}
                disabled={!selectedSign || isSpinning}
                className={`w-24 h-24 rounded-full bg-gradient-to-br from-rose-500 to-purple-500 
                  flex items-center justify-center transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${isSpinning ? 'scale-95' : 'hover:scale-105'}`}
              >
                <Compass className={`w-12 h-12 text-white ${isSpinning ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Spin Button */}
          <button
            onClick={spinCompass}
            disabled={!selectedSign || isSpinning}
            className="w-full py-4 bg-rose-500/40 hover:bg-rose-500/50 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSpinning ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Finding Match...
              </>
            ) : (
              <>
                <Compass className="w-5 h-5" />
                Spin Compass
              </>
            )}
          </button>

          {/* Result */}
          {matchedSign && (
            <div className="mt-8 text-center animate-fade-in">
              <div className="bg-white/20 rounded-xl p-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Star className="text-rose-300 w-6 h-6" />
                  <h2 className="text-2xl font-bold text-white">Perfect Match!</h2>
                  <Star className="text-rose-300 w-6 h-6" />
                </div>

                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="text-center">
                    <span className="text-6xl block mb-2">
                      {zodiacSigns.find(s => s.name === selectedSign)?.symbol}
                    </span>
                    <p className="text-white text-lg">{selectedSign}</p>
                  </div>
                  <Heart className="w-12 h-12 text-rose-300 animate-pulse" />
                  <div className="text-center">
                    <span className="text-6xl block mb-2">
                      {zodiacSigns.find(s => s.name === matchedSign)?.symbol}
                    </span>
                    <p className="text-white text-lg">{matchedSign}</p>
                  </div>
                </div>

                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  {getMatchMessage(selectedSign, matchedSign)}
                </p>

                <button
                  onClick={() => {
                    setMatchedSign(null);
                    setRotation(prevRotation => prevRotation % 360);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300 mb-6"
                >
                  <RefreshCw className="w-5 h-5" />
                  Try Again
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