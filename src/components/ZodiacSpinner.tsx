import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Sparkles, RotateCw, Heart, Info, X, RefreshCw } from 'lucide-react';
import { zodiacSigns } from '../data/zodiacData';
import ScrollToTop from './ScrollToTop';
import { AffiliateMessage } from '../utils/affiliateLinks';

function ZodiacSpinner() {
  const [selectedSign, setSelectedSign] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [showTutorial, setShowTutorial] = useState(true);
  const wheelRef = useRef<HTMLDivElement>(null);

  const handleSignSelect = (sign: string) => {
    if (!isSpinning) {
      setSelectedSign(sign);
      setResult(null);
      setMessage(null);
      setRotation(prevRotation => prevRotation % 360); // Reset rotation to prevent accumulation
    }
  };

  const resetSpin = () => {
    setResult(null);
    setMessage(null);
    setRotation(prevRotation => prevRotation % 360);
  };

  const spinWheel = () => {
    if (isSpinning || !selectedSign) return;

    setIsSpinning(true);
    setResult(null);
    setMessage(null);

    // Calculate target position
    const sign1Data = zodiacSigns.find(s => s.name === selectedSign);
    const compatibleSigns = sign1Data?.compatibility || [];
    const randomCompatibleSign = compatibleSigns[Math.floor(Math.random() * compatibleSigns.length)];
    const signIndex = zodiacSigns.findIndex(s => s.name === randomCompatibleSign);
    
    // Ensure the wheel spins to exactly center the target sign
    const segmentAngle = 360 / zodiacSigns.length;
    const targetRotation = -(segmentAngle * signIndex + segmentAngle / 2); // Center the sign
    const spins = 5 + Math.floor(Math.random() * 3); // 5-7 full spins for dramatic effect
    const newRotation = targetRotation + (spins * 360);

    setRotation(newRotation);

    // Show result after animation completes
    setTimeout(() => {
      setIsSpinning(false);
      setResult(randomCompatibleSign);
      setMessage(getCompatibilityMessage(selectedSign, randomCompatibleSign));
    }, 6000);
  };

  const getCompatibilityMessage = (sign1: string, sign2: string): string => {
    const sign1Data = zodiacSigns.find(s => s.name === sign1);
    const sign2Data = zodiacSigns.find(s => s.name === sign2);
    
    const messages = [
      `✨ The cosmic forces have aligned! ${sign1} and ${sign2} share a powerful connection that transcends ordinary bonds.`,
      `🌟 When ${sign1}'s ${sign1Data?.element} energy meets ${sign2}'s ${sign2Data?.element} nature, magic happens!`,
      `💫 The stars have spoken! ${sign1} and ${sign2} create a harmony that echoes through the cosmos.`,
      `🌙 A divine match! ${sign1} and ${sign2} complement each other like the sun and moon.`,
      `⭐ The celestial dance between ${sign1} and ${sign2} creates a love story written in the stars!`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
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
            <Star className="inline-block text-rose-300" />
            Zodiac Love Spinner
            <Star className="inline-block text-rose-300" />
          </h1>
          <p className="text-white/90 text-lg mb-2">
            Let the stars guide you to your perfect match!
          </p>
          <button
            onClick={() => setShowTutorial(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300 mt-2"
          >
            <Info className="w-4 h-4" />
            How to Play
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
                <Info className="w-6 h-6 text-rose-300" />
                How to Find Your Match
              </h2>
              <div className="space-y-4 text-white/90">
                <p>1. Select your zodiac sign from the wheel</p>
                <p>2. Click the center button to spin the wheel of destiny</p>
                <p>3. Watch as the cosmos reveals your perfect match!</p>
                <div className="bg-white/10 rounded-lg p-4 mt-4">
                  <p className="font-medium mb-2">Did you know?</p>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Fire signs (Aries, Leo, Sagittarius) match well with Air signs</li>
                    <li>Earth signs (Taurus, Virgo, Capricorn) harmonize with Water signs</li>
                    <li>The wheel is magically guided to find your most compatible matches!</li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => setShowTutorial(false)}
                className="w-full mt-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300"
              >
                Let's Find Love!
              </button>
            </div>
          </div>
        )}

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-8">
          {/* Zodiac Sign Selection */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Choose Your Sign</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
              {zodiacSigns.map((sign) => (
                <button
                  key={sign.name}
                  onClick={() => handleSignSelect(sign.name)}
                  disabled={isSpinning}
                  className={`p-6 rounded-xl transition-all duration-300 bg-gradient-to-br ${
                    selectedSign === sign.name
                      ? `${getElementColor(sign.element)} scale-105`
                      : 'bg-white/10 hover:bg-white/20'
                  } ${isSpinning ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-4xl mb-3">{sign.symbol}</span>
                    <span className="text-white font-medium">{sign.name}</span>
                    <span className="text-white/80 text-sm">{sign.element}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Spinner Wheel */}
          <div className="relative max-w-md mx-auto aspect-square mb-16">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-pulse"></div>
            
            {/* Wheel */}
            <div
              ref={wheelRef}
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
                      className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 
                        bg-gradient-to-br ${getElementColor(sign.element)} 
                        backdrop-blur-sm rounded-full flex items-center justify-center 
                        transform -rotate-[var(--angle)] shadow-lg
                        border-2 border-white/30`}
                      style={{ '--angle': `${angle}deg` } as any}
                    >
                      <div className="text-center">
                        <span className="text-4xl text-white">{sign.symbol}</span>
                        <p className="text-white/90 text-xs mt-1">{sign.name}</p>
                      </div>
                    </div>
                    {/* Connecting lines */}
                    <div
                      className="absolute top-1/2 left-1/2 h-px bg-white/20"
                      style={{ width: '50%', transformOrigin: 'left' }}
                    ></div>
                  </div>
                );
              })}
            </div>

            {/* Center Button */}
            <button
              onClick={spinWheel}
              disabled={isSpinning || !selectedSign}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-40 h-40 bg-gradient-to-br from-rose-500 to-purple-500 
                hover:from-rose-400 hover:to-purple-400 backdrop-blur-lg rounded-full 
                flex items-center justify-center transition-all duration-300 
                disabled:opacity-50 disabled:cursor-not-allowed z-10
                border-4 border-white/30 shadow-xl
                ${isSpinning ? 'scale-95' : 'hover:scale-105'}`}
            >
              <div className="text-center">
                <RotateCw className={`w-12 h-12 text-white mb-2 ${isSpinning ? 'animate-spin' : ''}`} />
                <span className="text-white font-medium">
                  {isSpinning ? 'Spinning...' : selectedSign ? 'Spin!' : 'Select Sign'}
                </span>
              </div>
            </button>
          </div>

          {/* Instructions */}
          {!selectedSign && (
            <div className="text-center mb-8 text-white/90 text-lg">
              Select your zodiac sign to begin your journey to love!
            </div>
          )}

          {/* Results Section */}
          {result && message && (
            <div className="mt-12 text-center animate-fade-in">
              <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-8 backdrop-blur-lg border border-white/20">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Sparkles className="text-rose-300 w-8 h-8" />
                  <h3 className="text-3xl font-bold text-white">Cosmic Match!</h3>
                  <Sparkles className="text-rose-300 w-8 h-8" />
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
                      {zodiacSigns.find(s => s.name === result)?.symbol}
                    </span>
                    <p className="text-white text-lg">{result}</p>
                  </div>
                </div>
                <p className="text-white/90 text-xl leading-relaxed mb-6">{message}</p>
                
                <button
                  onClick={resetSpin}
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300 flex items-center gap-2 mx-auto mb-6"
                >
                  <RefreshCw className="w-5 h-5" />
                  Spin Again
                </button>
                
                <AffiliateMessage sign={selectedSign} />
              </div>
            </div>
          )}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default ZodiacSpinner;