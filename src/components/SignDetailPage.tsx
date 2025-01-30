import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { zodiacSigns } from '../data/zodiacData';
import { Flame, Heart, ArrowLeft, Star, Calendar } from 'lucide-react';
import BirthDateCalculator from './BirthDateCalculator';
import ScrollToTop from './ScrollToTop';
import { AffiliateMessage } from '../utils/affiliateLinks';

export default function SignDetailPage() {
  const { sign } = useParams();
  const signData = zodiacSigns.find(s => s.name.toLowerCase() === sign?.toLowerCase());
  const [showBirthDateCalc, setShowBirthDateCalc] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!signData) {
    return <div>Sign not found</div>;
  }

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

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Flame className="inline-block text-rose-300" />
              {signData.name} Sexual Compatibility
              <Flame className="inline-block text-rose-300" />
            </h1>
            <p className="text-white/90 text-xl">
              {signData.symbol} {signData.date} • {signData.element} Sign
            </p>
          </div>

          <button
            onClick={() => setShowBirthDateCalc(!showBirthDateCalc)}
            className="w-full mb-8 py-4 bg-rose-500/40 hover:bg-rose-500/50 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            {showBirthDateCalc ? 'Hide Birth Date Calculator' : 'Calculate Birth Date Compatibility'}
          </button>

          {showBirthDateCalc && <BirthDateCalculator signName={signData.name} />}

          <div className="space-y-8">
            <section className="bg-white/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Heart className="text-rose-300" />
                Overview
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                {signData.description}
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <section className="bg-white/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Strengths</h2>
                <ul className="space-y-2">
                  {signData.sexualTraits.strengths.map((strength, index) => (
                    <li key={index} className="text-white/90 flex items-start gap-2">
                      <Star className="w-5 h-5 text-rose-300 flex-shrink-0 mt-1" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-white/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Challenges</h2>
                <ul className="space-y-2">
                  {signData.sexualTraits.challenges.map((challenge, index) => (
                    <li key={index} className="text-white/90 flex items-start gap-2">
                      <Star className="w-5 h-5 text-rose-300 flex-shrink-0 mt-1" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="bg-white/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Preferences</h2>
              <div className="flex flex-wrap gap-3">
                {signData.sexualTraits.preferences.map((preference, index) => (
                  <span key={index} className="px-4 py-2 bg-white/20 rounded-full text-white">
                    {preference}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-white/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Best Matches</h2>
              <div className="space-y-3">
                {signData.sexualTraits.bestMatches.map((match, index) => (
                  <p key={index} className="text-white/90">
                    {match}
                  </p>
                ))}
              </div>
            </section>

            <section className="bg-white/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Tips for Better Intimacy</h2>
              <ul className="space-y-2">
                {signData.sexualTraits.tips.map((tip, index) => (
                  <li key={index} className="text-white/90 flex items-start gap-2">
                    <Star className="w-5 h-5 text-rose-300 flex-shrink-0 mt-1" />
                    {tip}
                  </li>
                ))}
              </ul>
            </section>

            {signData && <AffiliateMessage sign={signData.name} />}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}