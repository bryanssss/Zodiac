import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Sparkles, Moon, Sun, Loader } from 'lucide-react';
import { zodiacSigns } from '../data/zodiacData';
import ScrollToTop from './ScrollToTop';

export default function DailyHoroscope() {
  const [selectedSign, setSelectedSign] = useState('');
  const [horoscope, setHoroscope] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedSign) {
      generateHoroscope(selectedSign);
    }
  }, [selectedSign]);

  const generateHoroscope = (sign: string) => {
    setLoading(true);
    const signData = zodiacSigns.find(s => s.name === sign);
    
    // Generate a random horoscope based on the sign's traits
    const horoscopeTemplates = [
      `Today, your ${signData?.traits.join(' and ')} nature will bring unexpected opportunities. Trust your instincts and remain open to new connections.`,
      `The stars align to enhance your ${signData?.element} energy. This is an excellent time for both personal growth and romantic endeavors.`,
      `Your ruling element of ${signData?.element} brings powerful energy today. Focus on expressing your authentic self in relationships.`,
      `Today's celestial alignment amplifies your natural ${signData?.traits[0]} tendencies. Use this energy to deepen your connections.`
    ];

    // Simulate API delay
    setTimeout(() => {
      setHoroscope(horoscopeTemplates[Math.floor(Math.random() * horoscopeTemplates.length)]);
      setLoading(false);
    }, 1000);
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
            <Sun className="inline-block text-rose-300" />
            Daily Love Horoscope
            <Moon className="inline-block text-rose-300" />
          </h1>
          <p className="text-white/90 text-lg">
            Discover what the stars have in store for your love life today
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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

          {loading && (
            <div className="text-center py-12">
              <Loader className="w-8 h-8 text-white animate-spin mx-auto mb-4" />
              <p className="text-white">Reading the stars...</p>
            </div>
          )}

          {horoscope && !loading && (
            <div className="bg-white/20 rounded-xl p-6 animate-fade-in">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Sparkles className="text-rose-300 w-6 h-6" />
                <h2 className="text-2xl font-bold text-white">
                  {selectedSign}'s Love Horoscope
                </h2>
                <Sparkles className="text-rose-300 w-6 h-6" />
              </div>
              <p className="text-white/90 text-lg text-center leading-relaxed">
                {horoscope}
              </p>
            </div>
          )}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}