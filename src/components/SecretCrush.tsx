import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Star, Sparkles, Lock, Unlock, Send, RefreshCw } from 'lucide-react';
import { zodiacSigns } from '../data/zodiacData';
import ScrollToTop from './ScrollToTop';
import { AffiliateMessage } from '../utils/affiliateLinks';

export default function SecretCrush() {
  const [userSign, setUserSign] = useState('');
  const [crushSign, setCrushSign] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [fortune, setFortune] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);

  const generateFortune = () => {
    const userSignData = zodiacSigns.find(s => s.name === userSign);
    const crushSignData = zodiacSigns.find(s => s.name === crushSign);
    const isCompatible = userSignData?.compatibility.includes(crushSign);
    
    const fortunes = {
      compatible: [
        `💫 The stars are aligned in your favor! Your ${userSign} energy harmonizes beautifully with your crush's ${crushSign} nature. This could be the start of something magical!`,
        `✨ What a cosmic connection! Your ${userSign} traits complement your crush's ${crushSign} characteristics perfectly. The universe is giving you a big YES!`,
        `🌟 This is a match written in the stars! Your ${userSign} soul resonates deeply with your crush's ${crushSign} spirit. Take that leap of faith!`
      ],
      neutral: [
        `🌙 While your ${userSign} and their ${crushSign} energies may need some adjustment, love knows no zodiac bounds. Focus on building a genuine connection!`,
        `✨ Your ${userSign} nature brings unique qualities to their ${crushSign} world. With understanding and patience, this could blossom into something special.`,
        `💫 Though your signs may pose some challenges, remember that the greatest love stories often begin with unlikely pairs!`
      ]
    };

    const fortuneArray = isCompatible ? fortunes.compatible : fortunes.neutral;
    return fortuneArray[Math.floor(Math.random() * fortuneArray.length)];
  };

  const handleReveal = () => {
    if (!userSign || !crushSign) return;
    
    setIsRevealing(true);
    setTimeout(() => {
      setFortune(generateFortune());
      setShowResult(true);
      setIsRevealing(false);
      
      // Scroll to result after it's shown
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 2000);
  };

  const resetForm = () => {
    setShowResult(false);
    setFortune('');
    setCrushSign('');
    setUserSign('');
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
            <Lock className="inline-block text-rose-300" />
            Secret Crush Reveal
            <Heart className="inline-block text-rose-300" />
          </h1>
          <p className="text-white/90 text-lg">
            Discover what the stars say about your secret crush
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Your Sign Selection */}
            <div>
              <label className="block text-white text-lg font-medium mb-4">
                Your Zodiac Sign
              </label>
              <div className="grid grid-cols-2 gap-4">
                {zodiacSigns.map((sign) => (
                  <button
                    key={`user-${sign.name}`}
                    onClick={() => setUserSign(sign.name)}
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      userSign === sign.name
                        ? 'bg-white/30 scale-105'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-3xl mb-2">{sign.symbol}</span>
                      <span className="text-white font-medium">{sign.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Crush Sign Selection */}
            <div>
              <label className="block text-white text-lg font-medium mb-4">
                Your Crush's Sign
              </label>
              <div className="grid grid-cols-2 gap-4">
                {zodiacSigns.map((sign) => (
                  <button
                    key={`crush-${sign.name}`}
                    onClick={() => setCrushSign(sign.name)}
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      crushSign === sign.name
                        ? 'bg-white/30 scale-105'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-3xl mb-2">{sign.symbol}</span>
                      <span className="text-white font-medium">{sign.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reveal Button */}
          <button
            onClick={handleReveal}
            disabled={!userSign || !crushSign || isRevealing}
            className="w-full py-4 bg-rose-500/40 hover:bg-rose-500/50 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isRevealing ? (
              <>
                <Unlock className="w-5 h-5 animate-pulse" />
                Revealing...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Reveal Compatibility
              </>
            )}
          </button>

          {/* Results */}
          {showResult && (
            <div ref={resultRef} className="mt-8 animate-fade-in">
              <div className="bg-white/20 rounded-xl p-8 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Sparkles className="text-rose-300 w-6 h-6" />
                  <h2 className="text-2xl font-bold text-white">Cosmic Love Reading</h2>
                  <Sparkles className="text-rose-300 w-6 h-6" />
                </div>

                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="text-center">
                    <span className="text-4xl block mb-2">
                      {zodiacSigns.find(s => s.name === userSign)?.symbol}
                    </span>
                    <p className="text-white">You</p>
                  </div>
                  <Heart className="w-8 h-8 text-rose-300 animate-pulse" />
                  <div className="text-center">
                    <span className="text-4xl block mb-2">
                      {zodiacSigns.find(s => s.name === crushSign)?.symbol}
                    </span>
                    <p className="text-white">Your Crush</p>
                  </div>
                </div>

                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  {fortune}
                </p>

                <button
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300"
                >
                  <RefreshCw className="w-5 h-5" />
                  Try Another Crush
                </button>

                {crushSign && <AffiliateMessage sign={crushSign} />}
              </div>
            </div>
          )}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}