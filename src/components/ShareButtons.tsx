import React, { useState } from 'react';
import { Share2, Facebook, Twitter, Linkedin, Mail, Link2, ChevronDown, ChevronUp } from 'lucide-react';

interface ShareButtonsProps {
  title?: string;
  description?: string;
}

export default function ShareButtons({ title = 'Zodiac Passion Match', description = 'Discover your intimate astrological compatibility' }: ShareButtonsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-40">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-lg rounded-full text-white shadow-lg transition-all duration-300"
          aria-label="Share"
        >
          <Share2 className="w-5 h-5" />
        </button>

        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 py-2 w-48 bg-white/20 backdrop-blur-lg rounded-xl shadow-xl animate-fade-in">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/20 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/20 transition-colors"
            >
              <Twitter className="w-5 h-5" />
              Twitter
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href={shareLinks.email}
              className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/20 transition-colors w-full text-left"
            >
              <Link2 className="w-5 h-5" />
              {showCopied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}