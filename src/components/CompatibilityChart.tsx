import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Star, Sparkles, Moon, Sun, Download } from 'lucide-react';
import { zodiacSigns } from '../data/zodiacData';
import html2canvas from 'html2canvas';
import ScrollToTop from './ScrollToTop';

export default function CompatibilityChart() {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [hoveredSign, setHoveredSign] = useState<string | null>(null);
  const fullChartRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const getCompatibilityScore = (sign1: string, sign2: string): number => {
    const sign1Data = zodiacSigns.find(s => s.name === sign1);
    const sign2Data = zodiacSigns.find(s => s.name === sign2);
    
    if (!sign1Data || !sign2Data) return 0;
    if (sign1 === sign2) return 95;
    if (sign1Data.compatibility.includes(sign2)) return 85;
    if (sign1Data.element === sign2Data.element) return 75;
    return 65;
  };

  const getCompatibilityColor = (score: number): string => {
    if (score >= 90) return 'from-violet-500 to-purple-600';
    if (score >= 80) return 'from-emerald-500 to-green-600';
    if (score >= 70) return 'from-blue-500 to-indigo-600';
    return 'from-rose-500 to-pink-600';
  };

  const handleDownload = async () => {
    if (!fullChartRef.current || downloading || !selectedSign) return;
    setDownloading(true);
    
    try {
      const canvas = await html2canvas(fullChartRef.current, {
        backgroundColor: '#2d1b69',
        scale: 2,
        logging: false,
        allowTaint: true,
        useCORS: true
      });
      
      const link = document.createElement('a');
      link.download = `zodiac-compatibility-${selectedSign.toLowerCase()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating chart:', error);
    }
    setDownloading(false);
  };

  const getSignPosition = (index: number, total: number) => {
    const angle = (index * 360) / total - 90;
    const radian = (angle * Math.PI) / 180;
    const radius = window.innerWidth < 768 ? 140 : 180; // Smaller radius on mobile
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius;
    return { x, y };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-purple-500 to-indigo-500 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-rose-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Calculator
          </Link>

          <button
            onClick={handleDownload}
            disabled={downloading || !selectedSign}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300 disabled:opacity-50"
          >
            <Download className="w-5 h-5" />
            {downloading ? 'Downloading...' : selectedSign ? 'Download Chart' : 'Select a sign'}
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <Sun className="inline-block text-rose-300" />
            Zodiac Compatibility Wheel
            <Moon className="inline-block text-rose-300" />
          </h1>
          <p className="text-white/90 text-lg">
            Click on any sign to explore its cosmic connections
          </p>
        </div>

        <div 
          ref={fullChartRef}
          className="flex flex-col md:flex-row gap-8 items-center justify-center p-4 md:p-8 rounded-3xl"
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-white/10 backdrop-blur-lg rounded-full p-4">
            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-32 h-24 md:h-32 rounded-full bg-white/20 flex items-center justify-center z-20">
              <div className="text-white text-center">
                <Star className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-rose-300" />
                <span className="text-sm md:text-base">{selectedSign || 'Select a sign'}</span>
              </div>
            </div>

            {/* Zodiac signs */}
            {zodiacSigns.map((sign, index) => {
              const { x, y } = getSignPosition(index, zodiacSigns.length);
              const isSelected = selectedSign === sign.name;
              const isHovered = hoveredSign === sign.name;
              const centerX = window.innerWidth < 768 ? 150 : 225;
              const centerY = window.innerWidth < 768 ? 150 : 225;

              return (
                <button
                  key={sign.name}
                  className={`absolute w-[48px] md:w-[72px] h-[48px] md:h-[72px] rounded-full transition-all duration-300 cursor-pointer
                    ${isSelected || isHovered ? 'scale-110 z-30' : 'scale-100 z-20'}
                    ${isSelected ? 'bg-white/30' : 'bg-white/20 hover:bg-white/25'}`}
                  style={{
                    left: `${x + centerX}px`,
                    top: `${y + centerY}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredSign(sign.name)}
                  onMouseLeave={() => setHoveredSign(null)}
                  onClick={() => setSelectedSign(selectedSign === sign.name ? null : sign.name)}
                >
                  <div className="flex flex-col items-center justify-center h-full p-1 md:p-2">
                    <span className="text-lg md:text-2xl text-white mb-0.5 md:mb-1">{sign.symbol}</span>
                    <span className="text-[10px] md:text-xs text-white/90 text-center leading-tight">{sign.name}</span>
                  </div>
                </button>
              );
            })}

            {/* Connection lines */}
            {selectedSign && zodiacSigns.map((sign) => {
              if (sign.name === selectedSign) return null;
              const score = getCompatibilityScore(selectedSign, sign.name);
              const startPos = getSignPosition(
                zodiacSigns.findIndex(s => s.name === selectedSign),
                zodiacSigns.length
              );
              const endPos = getSignPosition(
                zodiacSigns.findIndex(s => s.name === sign.name),
                zodiacSigns.length
              );
              const centerX = window.innerWidth < 768 ? 150 : 225;
              const centerY = window.innerWidth < 768 ? 150 : 225;

              return (
                <svg
                  key={`line-${sign.name}`}
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 10 }}
                >
                  <line
                    x1={startPos.x + centerX}
                    y1={startPos.y + centerY}
                    x2={endPos.x + centerX}
                    y2={endPos.y + centerY}
                    className={`stroke-2 opacity-50 transition-all duration-300
                              ${hoveredSign === sign.name ? 'opacity-100' : 'opacity-50'}
                              bg-gradient-to-r ${getCompatibilityColor(score)}`}
                    style={{
                      stroke: `url(#gradient-${sign.name})`,
                      strokeWidth: hoveredSign === sign.name ? 3 : 2
                    }}
                  />
                  <defs>
                    <linearGradient id={`gradient-${sign.name}`}>
                      <stop offset="0%" className={`stop-color-${getCompatibilityColor(score).split(' ')[0]}`} />
                      <stop offset="100%" className={`stop-color-${getCompatibilityColor(score).split(' ')[1]}`} />
                    </linearGradient>
                  </defs>
                </svg>
              );
            })}
          </div>

          {/* Compatibility details panel */}
          {selectedSign && (
            <div className="w-full md:w-96 bg-white/10 backdrop-blur-lg rounded-2xl p-6 animate-fade-in">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="text-rose-300" />
                {selectedSign} Compatibility
              </h2>
              
              <div className="space-y-4">
                {zodiacSigns
                  .filter(sign => sign.name !== selectedSign)
                  .map(sign => {
                    const score = getCompatibilityScore(selectedSign, sign.name);
                    return (
                      <div
                        key={sign.name}
                        className={`p-4 rounded-lg transition-all duration-300
                                ${hoveredSign === sign.name ? 'bg-white/20 scale-105' : 'bg-white/10'}
                                cursor-pointer`}
                        onMouseEnter={() => setHoveredSign(sign.name)}
                        onMouseLeave={() => setHoveredSign(null)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{sign.symbol}</span>
                            <span className="text-white font-medium">{sign.name}</span>
                          </div>
                          <span className="text-white font-bold">{score}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${getCompatibilityColor(score)}`}
                            style={{ width: `${score}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}