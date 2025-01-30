import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart, Flame, Leaf, Info, Gift, Star, MessageCircle, Shield, Menu, ChevronDown, ChevronUp, Wand2, Lock, Sparkles } from 'lucide-react';
import { zodiacSigns } from './data/zodiacData';
import SignDetailPage from './components/SignDetailPage';
import Calculator from './components/Calculator';
import AphrodisiacsPage from './components/AphrodisiacsPage';
import AphrodisiacDetail from './components/AphrodisiacDetail';
import AboutUs from './components/AboutUs';
import CompatibilityChart from './components/CompatibilityChart';
import GiftsPage from './components/GiftsPage';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import SecretCrush from './components/SecretCrush';
import LoveSpell from './components/LoveSpell';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign/:sign" element={<SignDetailPage />} />
        <Route path="/aphrodisiacs" element={<AphrodisiacsPage />} />
        <Route path="/aphrodisiacs/:sign" element={<AphrodisiacDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/compatibility-chart" element={<CompatibilityChart />} />
        <Route path="/gifts" element={<GiftsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/secret-crush" element={<SecretCrush />} />
        <Route path="/love-spell" element={<LoveSpell />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsNavOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-purple-500 to-indigo-500 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <Flame className="inline-block text-rose-300" />
            Zodiac Passion Match
            <Flame className="inline-block text-rose-300" />
          </h1>
          <p className="text-white/90 text-lg">Discover your intimate astrological compatibility</p>
          
          <div className="inline-block relative mt-4" ref={menuRef}>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-all duration-300"
            >
              <Menu className="w-5 h-5" />
              Menu
              {isNavOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>

            {isNavOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 py-2 w-64 bg-white/20 backdrop-blur-lg rounded-xl shadow-xl animate-fade-in z-50">
                <Link
                  to="/aphrodisiacs"
                  className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/20 transition-colors"
                >
                  <Leaf className="w-5 h-5" />
                  Zodiac Aphrodisiacs
                </Link>
                <Link
                  to="/compatibility-chart"
                  className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/20 transition-colors"
                >
                  <Star className="w-5 h-5" />
                  Compatibility Chart
                </Link>
                <Link
                  to="/gifts"
                  className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/20 transition-colors"
                >
                  <Gift className="w-5 h-5" />
                  Zodiac Gifts
                </Link>
                <Link
                  to="/secret-crush"
                  className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/20 transition-colors"
                >
                  <Lock className="w-5 h-5" />
                  Secret Crush
                </Link>
                <Link
                  to="/love-spell"
                  className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/20 transition-colors"
                >
                  <Wand2 className="w-5 h-5" />
                  Love Spell
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/20 transition-colors"
                >
                  <Info className="w-5 h-5" />
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/20 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Us
                </Link>
                <Link
                  to="/privacy"
                  className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/20 transition-colors"
                >
                  <Shield className="w-5 h-5" />
                  Privacy Policy
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
            <Heart className="text-rose-300" />
            Calculate Your Passion Match
          </h2>
          <Calculator />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Explore Your Sign</h2>
          <p className="text-white/90 text-lg mb-6">
            Click on your zodiac sign below to discover your unique passion profile and compatibility matches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {zodiacSigns.map((sign) => (
            <Link
              key={sign.name}
              to={`/sign/${sign.name.toLowerCase()}`}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{sign.symbol}</span>
                <div>
                  <h2 className="text-xl font-bold text-white">{sign.name}</h2>
                  <p className="text-white/80">{sign.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Discover More Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Sparkles className="text-rose-300" />
              Discover More Cosmic Wisdom
              <Sparkles className="text-rose-300" />
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Astrology Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Astrology Insights</h3>
              <a href="https://e08e5oqcmci8qz5nwkw2yfjmzk.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">The Truth In Your Stars</a>
              <a href="https://706ebv2em-o2o238y1rhwa2v9z.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Call Of Destiny</a>
              <a href="https://89e83usjn-sauc2rrby3qfmab6.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Astro Triggers</a>
              <a href="https://3f974vwjxbi5w4a3-swnah-rcw.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Astrology and Horoscope Reports</a>
              <a href="https://8a44en0g0bjcr9b1omg7rmh3mn.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Anna Kovach Astrology Consultation</a>
              <a href="https://70a04s1hrapcs1aw0otim3uv5d.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Astrology Language</a>
            </div>

            {/* Readings Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Cosmic Readings</h3>
              <a href="https://6b24evwhu1p3q66wym2ca4n5kr.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">AstroVedic Reading</a>
              <a href="https://246e1jsis6r3rddi461lum4qcm.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Transit Reading</a>
              <a href="https://badacj1dt5r6v0d4loqk0jqc04.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Star Path Reading</a>
              <a href="https://efa56pvhm6hey-b7heolw9qlzk.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Destiny's Guide</a>
              <a href="https://4759cp-eu6k5v259khk5zh8x1v.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Love Tarot Reading</a>
              <a href="https://d7540m0os5jgsce83sukk9sz2z.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">3 Cards Tarot Reading</a>
            </div>

            {/* Love & Romance Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Love & Romance</h3>
              <a href="https://475dai-dm8jdtba0s84-1v7zd3.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Love & Wealth Tarot Reading</a>
              <a href="https://796c6n1oyaug0bdp33ycm8x-y1.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Twin Flame Tarot</a>
              <a href="https://8956cswjr4rdv95bf6yslkgb03.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Two Card Tarot Reading</a>
              <a href="https://chipjourney.com/popular/zodiac-sign-soulmate-quiz/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Zodiac Sign Soulmate Quiz</a>
              <a href="https://chipjourney.com/popular/best-lover-zodiac-sign/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Best Lover Zodiac Sign</a>
              <a href="https://chipjourney.com/popular/love-spell-herbs/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Love Spell Herbs</a>
              <a href="https://chipjourney.com/popular/prayer-to-get-my-ex-back/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-white">Prayer To Get My Ex Back</a>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;