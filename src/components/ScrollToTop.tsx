import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrolledToBottom = Math.ceil(scrollTop + windowHeight) >= documentHeight;
    
    setIsVisible(scrolledToBottom || scrollTop > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 p-4 bg-white/20 hover:bg-white/30 backdrop-blur-lg rounded-full text-white shadow-lg transition-all duration-300 animate-fade-in z-50 touch-feedback"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}