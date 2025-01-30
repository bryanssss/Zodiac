import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Trophy, RefreshCw, Heart, MoveDown, Info, X } from 'lucide-react';
import { zodiacSigns } from '../data/zodiacData';
import ScrollToTop from './ScrollToTop';

interface MatchPair {
  sign1: string;
  sign2: string;
  isCompatible: boolean;
}

export default function MatchingGame() {
  const [availableSigns, setAvailableSigns] = useState<string[]>([]);
  const [matches, setMatches] = useState<MatchPair[]>([]);
  const [draggedSign, setDraggedSign] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [feedback, setFeedback] = useState<{ message: string; correct: boolean } | null>(null);
  const [touchedSign, setTouchedSign] = useState<string | null>(null);
  const [showTutorial, setShowTutorial] = useState(true);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  // Initialize game
  useEffect(() => {
    resetGame();
    const savedBestStreak = localStorage.getItem('zodiacGameBestStreak');
    if (savedBestStreak) {
      setBestStreak(parseInt(savedBestStreak));
    }
  }, []);

  const resetGame = () => {
    const shuffledSigns = [...zodiacSigns.map(sign => sign.name)]
      .sort(() => Math.random() - 0.5);
    setAvailableSigns(shuffledSigns);
    setMatches([]);
    setScore(0);
    setGameComplete(false);
    setFeedback(null);
    setTouchedSign(null);
    setStreak(0);
  };

  const handleDragStart = (sign: string) => {
    setDraggedSign(sign);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleTouchStart = (sign: string) => {
    setTouchedSign(sign);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
  };

  const handleTouchEnd = (targetSign: string) => {
    if (touchedSign && touchedSign !== targetSign) {
      handleMatch(touchedSign, targetSign);
    }
    setTouchedSign(null);
  };

  const handleMatch = (sign1: string, sign2: string) => {
    const sign1Data = zodiacSigns.find(s => s.name === sign1);
    const isCompatible = sign1Data?.compatibility.includes(sign2);

    const newMatch: MatchPair = {
      sign1,
      sign2,
      isCompatible: !!isCompatible
    };

    if (isCompatible) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
        localStorage.setItem('zodiacGameBestStreak', newStreak.toString());
      }
      setScore(prev => prev + 10);
      setFeedback({
        message: `Perfect match! ${sign1} and ${sign2} create cosmic harmony! 🌟`,
        correct: true
      });
    } else {
      setStreak(0);
      setScore(prev => Math.max(0, prev - 5));
      setFeedback({
        message: `Not quite! The stars aren't aligned for ${sign1} and ${sign2}. Try again! ✨`,
        correct: false
      });
    }

    setAvailableSigns(prev => 
      prev.filter(sign => sign !== sign1 && sign !== sign2)
    );

    setMatches(prev => [...prev, newMatch]);

    if (availableSigns.length <= 2) {
      setGameComplete(true);
    }
  };

  const handleDrop = (targetSign: string) => {
    if (!draggedSign || draggedSign === targetSign) return;
    handleMatch(draggedSign, targetSign);
    setDraggedSign(null);
  };

  const getSignSymbol = (signName: string) => {
    return zodiacSigns.find(s => s.name === signName)?.symbol || '';
  };

  const getSignElement = (signName: string) => {
    return zodiacSigns.find(s => s.name === signName)?.element || '';
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
            Zodiac Matching Game
            <Star className="inline-block text-rose-300" />
          </h1>
          <p className="text-white/90 text-lg mb-2">
            Match compatible zodiac signs to create cosmic harmony
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
                How to Play
              </h2>
              <div className="space-y-4 text-white/90">
                <p>1. Select a zodiac sign from the Available Signs.</p>
                <p>2. Match it with another sign you think is compatible.</p>
                <p>3. Correct matches earn 10 points, wrong matches lose 5 points.</p>
                <p>4. Build your streak for higher scores!</p>
                <div className="bg-white/10 rounded-lg p-4 mt-4">
                  <p className="font-medium mb-2">Tips:</p>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Fire signs match well with Air signs</li>
                    <li>Earth signs match well with Water signs</li>
                    <li>Same elements often have strong compatibility</li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => setShowTutorial(false)}
                className="w-full mt-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300"
              >
                Got it!
              </button>
            </div>
          </div>
        )}

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-rose-300" />
                <span className="text-2xl font-bold text-white">{score}</span>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-white/70 text-sm">Streak</span>
                <span className="text-xl font-bold text-white">{streak}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white/70 text-sm">Best</span>
                <span className="text-xl font-bold text-white">{bestStreak}</span>
              </div>
            </div>
            <button
              onClick={resetGame}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300"
            >
              <RefreshCw className="w-5 h-5" />
              New Game
            </button>
          </div>

          {feedback && (
            <div className={`p-4 rounded-lg mb-6 text-white text-center animate-fade-in ${
              feedback.correct ? 'bg-green-500/20' : 'bg-rose-500/20'
            }`}>
              {feedback.message}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-rose-300" />
                Available Signs
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {availableSigns.map((sign) => {
                  const element = getSignElement(sign);
                  return (
                    <div
                      key={sign}
                      draggable
                      onDragStart={() => handleDragStart(sign)}
                      onTouchStart={() => handleTouchStart(sign)}
                      onTouchMove={handleTouchMove}
                      className={`p-4 bg-gradient-to-br ${getElementColor(element)} rounded-xl cursor-move hover:scale-105 transition-all duration-300 ${
                        touchedSign === sign ? 'scale-105 ring-2 ring-white' : ''
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-3xl mb-2">{getSignSymbol(sign)}</span>
                        <span className="text-white font-medium">{sign}</span>
                        <span className="text-white/90 text-sm">{element}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-300" />
                Matches
              </h2>
              <div className="space-y-4">
                {matches.map((match, index) => (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-r rounded-xl p-4 ${
                      match.isCompatible ? 'from-green-500/20 to-emerald-500/20' : 'from-rose-500/20 to-pink-500/20'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-center">
                        <span className="text-2xl">{getSignSymbol(match.sign1)}</span>
                        <p className="text-white">{match.sign1}</p>
                      </div>
                      <Heart className={`w-5 h-5 ${match.isCompatible ? 'text-green-300' : 'text-rose-300'}`} />
                      <div className="text-center">
                        <span className="text-2xl">{getSignSymbol(match.sign2)}</span>
                        <p className="text-white">{match.sign2}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {availableSigns.length > 0 && (
                  <div
                    onDragOver={handleDragOver}
                    onDrop={(e) => draggedSign && handleDrop(availableSigns[0])}
                    onTouchEnd={() => touchedSign && handleTouchEnd(availableSigns[0])}
                    className={`border-2 border-dashed border-white/30 rounded-xl p-8 text-center text-white/70 ${
                      touchedSign ? 'bg-white/10 scale-105' : ''
                    } transition-all duration-300`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <MoveDown className="w-6 h-6" />
                      {touchedSign ? 'Drop here to match!' : 'Drag or tap a sign to start matching'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {gameComplete && (
            <div className="mt-8 text-center bg-white/20 rounded-xl p-8 animate-fade-in">
              <Trophy className="w-16 h-16 text-rose-300 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">Game Complete!</h2>
              <p className="text-white/90 text-lg mb-2">Final Score: {score}</p>
              <p className="text-white/90 mb-6">Best Streak: {bestStreak}</p>
              <button
                onClick={resetGame}
                className="px-8 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}