import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, FileText, Server, UserCheck } from 'lucide-react';
import ScrollToTop from './ScrollToTop';

export default function PrivacyPolicy() {
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
            <Shield className="inline-block text-rose-300" />
            Privacy Policy
            <Lock className="inline-block text-rose-300" />
          </h1>
          <p className="text-white/90 text-lg">
            Your privacy is important to us. Learn how we protect and manage your data.
          </p>
        </div>

        <div className="space-y-6">
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Eye className="text-rose-300" />
              Information We Collect
            </h2>
            <div className="space-y-4 text-white/90">
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Birth date and time for astrological calculations</li>
                <li>Zodiac sign preferences and compatibility selections</li>
                <li>Game scores and preferences</li>
                <li>Device and browser information for optimal performance</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Server className="text-rose-300" />
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-white/90">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate astrological compatibility calculations</li>
                <li>Improve our website and services</li>
                <li>Personalize your experience</li>
                <li>Analyze usage patterns to enhance features</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <UserCheck className="text-rose-300" />
              Data Protection
            </h2>
            <div className="space-y-4 text-white/90">
              <p>We implement appropriate security measures to protect your information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Secure data storage</li>
                <li>Regular security updates</li>
                <li>Limited data collection</li>
                <li>No sharing with third parties</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="text-rose-300" />
              Your Rights
            </h2>
            <div className="space-y-4 text-white/90">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your data</li>
                <li>Delete your data</li>
                <li>Opt-out of data collection</li>
                <li>Request data correction</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}