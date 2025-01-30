import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { zodiacAphrodisiacs } from '../data/aphrodisiacData';
import { zodiacSigns } from '../data/zodiacData';
import { Leaf, ArrowLeft, Star } from 'lucide-react';
import ScrollToTop from './ScrollToTop';

export default function AphrodisiacDetail() {
  const { sign } = useParams();
  const signData = zodiacSigns.find(s => s.name.toLowerCase() === sign?.toLowerCase());
  const aphrodisiacs = zodiacAphrodisiacs[signData?.name || ''] || [];

  if (!signData) {
    return <div>Sign not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-purple-500 to-indigo-500 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/aphrodisiacs" 
          className="inline-flex items-center text-white mb-6 hover:text-rose-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Aphrodisiacs
        </Link>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Leaf className="inline-block text-rose-300" />
              {signData.name} Aphrodisiacs
              <Leaf className="inline-block text-rose-300" />
            </h1>
            <p className="text-white/90 text-xl">
              {signData.symbol} Natural enhancers for {signData.element} signs
            </p>
          </div>

          <div className="space-y-8">
            {aphrodisiacs.map((aphrodisiac, index) => (
              <section key={index} className="bg-white/20 rounded-xl p-6">
                <div className="md:flex gap-6">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <img
                      src={aphrodisiac.image}
                      alt={aphrodisiac.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-white mb-4">{aphrodisiac.name}</h2>
                    <p className="text-white/90 text-lg mb-4">{aphrodisiac.description}</p>
                    
                    <h3 className="text-white font-medium mb-2">Benefits</h3>
                    <ul className="space-y-2 mb-4">
                      {aphrodisiac.benefits.map((benefit, i) => (
                        <li key={i} className="text-white/90 flex items-start gap-2">
                          <Star className="w-5 h-5 text-rose-300 flex-shrink-0 mt-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    {aphrodisiac.preparation && (
                      <>
                        <h3 className="text-white font-medium mb-2">Preparation</h3>
                        <p className="text-white/90">{aphrodisiac.preparation}</p>
                      </>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}