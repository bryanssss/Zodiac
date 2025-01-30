import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Star, Sparkles, Moon, Sun } from 'lucide-react';
import ScrollToTop from './ScrollToTop';

export default function AboutUs() {
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
            <Moon className="inline-block text-rose-300" />
            Our Cosmic Journey
            <Sun className="inline-block text-rose-300" />
          </h1>
          <p className="text-white/90 text-lg">
            Exploring the mysteries of love through astrology
          </p>
        </div>

        <div className="space-y-8">
          {/* Mission Section */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Star className="text-rose-300" />
              Our Mission
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              We believe that understanding cosmic connections can deepen and enrich our most intimate relationships. Our mission is to blend ancient astrological wisdom with modern relationship insights, creating a unique platform for exploring compatibility and passion through the lens of the zodiac.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <Heart className="w-6 h-6 text-rose-300 mb-2" />
                <h3 className="text-white font-semibold mb-2">Passion</h3>
                <p className="text-white/80">Igniting the spark of romance through celestial guidance</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <Sparkles className="w-6 h-6 text-rose-300 mb-2" />
                <h3 className="text-white font-semibold mb-2">Wisdom</h3>
                <p className="text-white/80">Combining ancient knowledge with modern understanding</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <Star className="w-6 h-6 text-rose-300 mb-2" />
                <h3 className="text-white font-semibold mb-2">Connection</h3>
                <p className="text-white/80">Building deeper bonds through astrological insight</p>
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Moon className="text-rose-300" />
              Our Story
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Born from a passion for astrology and a desire to help others find deeper connections, our journey began with a simple question: How can we use the wisdom of the stars to enhance our most intimate relationships? This led us to create a unique platform that combines traditional astrological knowledge with modern relationship dynamics.
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              Today, we're proud to offer a comprehensive suite of tools and insights that help couples explore their compatibility, understand their passionate nature, and discover ways to deepen their connection through the lens of astrology.
            </p>
          </section>

          {/* What We Offer Section */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Sun className="text-rose-300" />
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-300" />
                    Compatibility Analysis
                  </h3>
                  <p className="text-white/80">
                    Deep insights into zodiac compatibility and relationship dynamics
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-rose-300" />
                    Personalized Guidance
                  </h3>
                  <p className="text-white/80">
                    Tailored advice based on your unique astrological profile
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-rose-300" />
                    Relationship Tools
                  </h3>
                  <p className="text-white/80">
                    Interactive features to explore and enhance your connection
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Moon className="w-5 h-5 text-rose-300" />
                    Astrological Resources
                  </h3>
                  <p className="text-white/80">
                    Educational content about zodiac signs and their influence on relationships
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values Section */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="text-rose-300" />
              Our Values
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose-300 rounded-full mt-2"></div>
                <p className="text-white/90 flex-1">
                  <strong className="text-white">Authenticity:</strong> We provide genuine astrological insights based on traditional wisdom and modern understanding.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose-300 rounded-full mt-2"></div>
                <p className="text-white/90 flex-1">
                  <strong className="text-white">Inclusivity:</strong> Our platform welcomes all forms of love and relationship dynamics.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose-300 rounded-full mt-2"></div>
                <p className="text-white/90 flex-1">
                  <strong className="text-white">Growth:</strong> We believe in the continuous evolution of relationships and self-understanding.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose-300 rounded-full mt-2"></div>
                <p className="text-white/90 flex-1">
                  <strong className="text-white">Privacy:</strong> We respect and protect the intimate nature of relationship exploration.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}