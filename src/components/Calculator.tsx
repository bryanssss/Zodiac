import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { zodiacSigns } from '../data/zodiacData';
import { AffiliateMessage } from '../utils/affiliateLinks';

function getCompatibilityDescription(sign1: string, sign2: string): string {
  const sign1Data = zodiacSigns.find(s => s.name === sign1);
  const sign2Data = zodiacSigns.find(s => s.name === sign2);
  
  if (!sign1Data || !sign2Data) return '';

  const baseDescription = `${sign1Data.description} Meanwhile, ${sign2Data.description.toLowerCase()} `;

  if (sign1 === sign2) {
    return baseDescription + `When two ${sign1}s come together, their shared understanding creates an intensely passionate and harmonious connection. They instinctively know each other's desires and rhythms, leading to deeply satisfying encounters that feel almost telepathic.`;
  }

  if (sign1Data.compatibility.includes(sign2)) {
    if (sign1Data.element === 'Fire' || sign2Data.element === 'Fire') {
      return baseDescription + `The natural chemistry between ${sign1} and ${sign2} is electric and all-consuming. Their passionate encounters are filled with intensity and excitement, creating memorable moments of pure physical connection.`;
    }
    if (sign1Data.element === 'Water' || sign2Data.element === 'Water') {
      return baseDescription + `Together, ${sign1} and ${sign2} create a deep emotional and sensual bond that transcends the physical. Their intimate moments are filled with intensity and meaning, creating a powerful spiritual connection.`;
    }
    if (sign1Data.element === 'Earth' || sign2Data.element === 'Earth') {
      return baseDescription + `The connection between ${sign1} and ${sign2} is grounding and sensual. They take time to explore each other fully, building a physical relationship that's both satisfying and lasting.`;
    }
    if (sign1Data.element === 'Air' || sign2Data.element === 'Air') {
      return baseDescription + `${sign1} and ${sign2} share an intellectually stimulating and playful connection. Their creativity and communication lead to exciting and varied encounters that keep both partners engaged and satisfied.`;
    }
  }

  if (sign1Data.element === sign2Data.element) {
    return baseDescription + `As fellow ${sign1Data.element} signs, they share a natural understanding of each other's physical and emotional needs, creating a harmonious and fulfilling intimate connection.`;
  }

  return baseDescription + `While ${sign1} and ${sign2} may have different approaches to intimacy, their unique perspectives can create an exciting and growth-oriented connection. With open communication and patience, they can discover new depths of pleasure together.`;
}

function getCompatibilityScore(sign1: string, sign2: string): number {
  const sign1Data = zodiacSigns.find(s => s.name === sign1);
  if (!sign1Data) return 0;
  if (sign1 === sign2) return 95;
  if (sign1Data.compatibility.includes(sign2)) return 90;
  if (sign1Data.element === zodiacSigns.find(s => s.name === sign2)?.element) return 80;
  return 60;
}

export default function Calculator() {
  const [sign1, setSign1] = useState<string>('');
  const [sign2, setSign2] = useState<string>('');
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = () => {
    if (sign1 && sign2) {
      setShowResult(true);
    }
  };

  const compatibilityScore = sign1 && sign2 ? getCompatibilityScore(sign1, sign2) : 0;
  const description = sign1 && sign2 ? getCompatibilityDescription(sign1, sign2) : '';
  const sign1Data = zodiacSigns.find(s => s.name === sign1);
  const sign2Data = zodiacSigns.find(s => s.name === sign2);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block text-white text-lg font-medium">Your Sign</label>
          <select
            value={sign1}
            onChange={(e) => {
              setSign1(e.target.value);
              setShowResult(false);
            }}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <option value="" style={{ color: 'black' }}>Select your sign</option>
            {zodiacSigns.map((sign) => (
              <option key={sign.name} value={sign.name} style={{ color: 'black' }}>
                {sign.symbol} {sign.name} ({sign.date})
              </option>
            ))}
          </select>
          {sign1 && (
            <div className="p-4 bg-white/10 rounded-lg">
              <p className="text-white/90">{zodiacSigns.find(s => s.name === sign1)?.description}</p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <label className="block text-white text-lg font-medium">Partner's Sign</label>
          <select
            value={sign2}
            onChange={(e) => {
              setSign2(e.target.value);
              setShowResult(false);
            }}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <option value="" style={{ color: 'black' }}>Select partner's sign</option>
            {zodiacSigns.map((sign) => (
              <option key={sign.name} value={sign.name} style={{ color: 'black' }}>
                {sign.symbol} {sign.name} ({sign.date})
              </option>
            ))}
          </select>
          {sign2 && (
            <div className="p-4 bg-white/10 rounded-lg">
              <p className="text-white/90">{zodiacSigns.find(s => s.name === sign2)?.description}</p>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={handleCalculate}
        disabled={!sign1 || !sign2}
        className="mt-8 w-full py-4 bg-rose-500/40 hover:bg-rose-500/50 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Heart className="w-5 h-5" />
        Reveal Passion Compatibility
      </button>

      {showResult && (
        <div className="mt-8 text-center animate-fade-in">
          <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Sparkles className="text-rose-300 w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">Passion Score</h2>
              <Sparkles className="text-rose-300 w-6 h-6" />
            </div>
            <div className="text-6xl font-bold text-white mb-4">{compatibilityScore}%</div>
            <div className="text-3xl text-white/90 mb-6">
              {sign1Data?.symbol} + {sign2Data?.symbol}
            </div>
            <p className="text-white/90 text-lg mb-4 leading-relaxed">
              {description}
            </p>
            {sign1 && sign2 && (
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <h3 className="text-white font-medium mb-2">Key Passion Traits</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {zodiacSigns.find(s => s.name === sign1)?.traits.map((trait, index) => (
                    <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          {sign1 && <AffiliateMessage sign={sign1} />}
        </div>
      )}
    </div>
  );
}