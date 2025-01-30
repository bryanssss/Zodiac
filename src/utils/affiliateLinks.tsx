import React from 'react';

// Affiliate links for each zodiac sign
export const zodiacAffiliateLinks: Record<string, string> = {
  Aries: 'https://a4258gpkp1tgvb94t5soq7u74a.hop.clickbank.net/',
  Taurus: 'https://03adbhpl01meod5gom2p3ah93g.hop.clickbank.net/',
  Gemini: 'https://a2afatrqu2mbx0c5f7qhqm0zbb.hop.clickbank.net/',
  Cancer: 'https://655deg0gn9gf-ba7pivbekfn7y.hop.clickbank.net/',
  Leo: 'https://85fd8gqppakht3fjim6beelgx5.hop.clickbank.net/',
  Virgo: 'https://5a74dk0eobkgwa2lsisaihow98.hop.clickbank.net/',
  Libra: 'https://e24c1jylxzpfv1c5v-35p707db.hop.clickbank.net/',
  Scorpio: 'https://a33c6uyiz1vgs36fgb1ew6-vcj.hop.clickbank.net/',
  Sagittarius: 'https://670e8ksdp7n6t01pk4qhw9oq9q.hop.clickbank.net/',
  Capricorn: 'https://53bebo2m-1v6x89ypi4hm96rda.hop.clickbank.net/',
  Aquarius: 'https://a89f5u2e-2uerbe9skcoqvum06.hop.clickbank.net/',
  Pisces: 'https://364ceh0gwai2tcalvmq60eqm20.hop.clickbank.net/'
};

// Custom messages for each zodiac sign
export const getZodiacMessage = (sign: string): string => {
  const messages: Record<string, string> = {
    Aries: "Master the Art of Attracting and Keeping Your Fiery Aries (Even If You Feel Overwhelmed by Their Intensity)",
    Taurus: "Unlock the Secrets to Your Taurus's Heart: A Celestial Guide to Deep, Lasting Love",
    Gemini: "Capture Your Gemini's Heart and Mind: The Astrological Path to Twin Flame Connection",
    Cancer: "Navigate the Depths of Your Cancer's Heart with the Power of Astrology",
    Leo: "Win Your Leo's Royal Heart: Astrological Secrets to Becoming Their Everything",
    Virgo: "Perfect Love with Your Virgo: An Astrological Blueprint for Lasting Connection",
    Libra: "Balance and Romance: Your Cosmic Guide to Winning a Libra's Heart",
    Scorpio: "Unlock Scorpio's Passionate Heart: Deep Astrological Secrets Revealed",
    Sagittarius: "Adventure in Love: Your Guide to Capturing a Sagittarius Heart",
    Capricorn: "Build Lasting Love with Your Capricorn: An Astrological Success Strategy",
    Aquarius: "Connect with Your Unique Aquarius: Cosmic Keys to Unconventional Love",
    Pisces: "Dive Deep into Pisces Love: Your Spiritual Guide to Eternal Romance"
  };
  return messages[sign] || "Discover Your Perfect Love Match with the Magic of Astrology";
};

interface AffiliateMessageProps {
  sign: string;
}

export const AffiliateMessage: React.FC<AffiliateMessageProps> = ({ sign }) => {
  return (
    <div className="mt-6 p-4 bg-white/10 rounded-lg animate-fade-in">
      <a
        href={zodiacAffiliateLinks[sign]}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-white hover:text-rose-200 transition-colors text-center"
      >
        {getZodiacMessage(sign)} →
      </a>
    </div>
  );
};