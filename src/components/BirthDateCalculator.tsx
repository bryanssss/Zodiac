import React, { useState } from 'react';
import { zodiacSigns } from '../data/zodiacData';
import { Sparkles } from 'lucide-react';

interface BirthDateCalculatorProps {
  signName: string;
}

interface BirthChart {
  sunSign: string;
  moonSign: string;
  risingSign: string;
}

function calculateCompatibility(mainSign: string, chart: BirthChart): {
  score: number;
  description: string;
} {
  const sunCompatibility = getSignCompatibility(mainSign, chart.sunSign);
  const moonCompatibility = getSignCompatibility(mainSign, chart.moonSign);
  const risingCompatibility = getSignCompatibility(mainSign, chart.risingSign);

  const totalScore = Math.round((sunCompatibility * 0.4 + moonCompatibility * 0.3 + risingCompatibility * 0.3) * 100);

  return {
    score: totalScore,
    description: getDetailedCompatibility(mainSign, chart)
  };
}

function getSignCompatibility(sign1: string, sign2: string): number {
  const sign1Data = zodiacSigns.find(s => s.name === sign1);
  if (!sign1Data) return 0;
  if (sign1 === sign2) return 1;
  if (sign1Data.compatibility.includes(sign2)) return 0.9;
  if (sign1Data.element === zodiacSigns.find(s => s.name === sign2)?.element) return 0.8;
  return 0.6;
}

function getDetailedCompatibility(mainSign: string, chart: BirthChart): string {
  const mainSignData = zodiacSigns.find(s => s.name === mainSign);
  if (!mainSignData) return '';

  return `Your birth chart reveals a complex compatibility with ${mainSign}. Your Sun sign (${chart.sunSign}) represents your core essence, Moon sign (${chart.moonSign}) reflects your emotional nature, and Rising sign (${chart.risingSign}) shows how you approach relationships. This combination creates a unique dynamic with ${mainSign}'s ${mainSignData.element} energy.`;
}

// Simplified birth chart calculation for demo purposes
function calculateBirthChart(birthDate: string, birthTime: string): BirthChart {
  // This is a simplified version - in reality, you'd need precise astronomical calculations
  const date = new Date(birthDate + 'T' + birthTime);
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();

  // Simplified calculations for demo
  const sunSign = getZodiacSign(month, day);
  const moonSign = getZodiacSign((month + 3) % 12, day); // Simplified moon calculation
  const risingSign = getZodiacSign((month + hour) % 12, day); // Simplified rising calculation

  return {
    sunSign,
    moonSign,
    risingSign
  };
}

function getZodiacSign(month: number, day: number): string {
  const signs = zodiacSigns.map(s => s.name);
  const index = (month + Math.floor(day / 15)) % 12;
  return signs[index];
}

export default function BirthDateCalculator({ signName }: BirthDateCalculatorProps) {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [compatibility, setCompatibility] = useState<{ score: number; description: string } | null>(null);
  const [birthChart, setBirthChart] = useState<BirthChart | null>(null);

  const handleCalculate = () => {
    if (birthDate && birthTime) {
      const chart = calculateBirthChart(birthDate, birthTime);
      setBirthChart(chart);
      setCompatibility(calculateCompatibility(signName, chart));
      setShowResult(true);
    }
  };

  return (
    <div className="bg-white/20 rounded-xl p-6 mb-8">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-white text-lg font-medium mb-2">Birth Date</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>
        <div>
          <label className="block text-white text-lg font-medium mb-2">Birth Time</label>
          <input
            type="time"
            value={birthTime}
            onChange={(e) => setBirthTime(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>
      </div>

      <button
        onClick={handleCalculate}
        disabled={!birthDate || !birthTime}
        className="w-full py-4 bg-rose-500/40 hover:bg-rose-500/50 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Calculate Birth Chart Compatibility
      </button>

      {showResult && birthChart && compatibility && (
        <div className="mt-6 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles className="text-rose-300 w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">Birth Chart Results</h3>
            <Sparkles className="text-rose-300 w-6 h-6" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Sun Sign</h4>
              <p className="text-white/90">{birthChart.sunSign}</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Moon Sign</h4>
              <p className="text-white/90">{birthChart.moonSign}</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Rising Sign</h4>
              <p className="text-white/90">{birthChart.risingSign}</p>
            </div>
          </div>

          <div className="text-6xl font-bold text-white mb-4">{compatibility.score}%</div>
          <p className="text-white/90 text-lg leading-relaxed">
            {compatibility.description}
          </p>
        </div>
      )}
    </div>
  );
}