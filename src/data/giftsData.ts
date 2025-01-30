interface Gift {
  name: string;
  description: string;
  image: string;
  priceRange: 'budget' | 'moderate' | 'luxury';
  category: 'sensual' | 'romantic' | 'experience' | 'wellness' | 'fashion';
  astrologicalSignificance: string;
  keywords: string[];
  purchaseUrl?: string;
}

type ZodiacGifts = Record<string, Gift[]>;

export const zodiacGifts: ZodiacGifts = {
  Aries: [
    {
      name: "Red Silk Intimates Set",
      description: "A passionate red silk lingerie set that appeals to Aries' bold nature and love of the color red.",
      image: "https://images.unsplash.com/photo-1616077168712-fc6c788db4af?auto=format&fit=crop&q=80&w=500",
      priceRange: "luxury",
      category: "fashion",
      astrologicalSignificance: "Red resonates with Aries' ruling planet Mars, enhancing confidence and passion.",
      keywords: ["Passionate", "Bold", "Confident", "Silk", "Red"]
    },
    {
      name: "Adventure Experience Package",
      description: "An exciting package including activities like hot air balloon rides or couples' skydiving.",
      image: "https://images.unsplash.com/photo-1495819903255-00fdfa38a8de?auto=format&fit=crop&q=80&w=500",
      priceRange: "luxury",
      category: "experience",
      astrologicalSignificance: "Appeals to Aries' love of adventure and new experiences.",
      keywords: ["Adventure", "Exciting", "Active", "Dynamic", "Memorable"]
    }
  ],
  Taurus: [
    {
      name: "Luxury Massage Oil Set",
      description: "Premium massage oils with natural scents of rose, vanilla, and sandalwood.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6c788e5e84?auto=format&fit=crop&q=80&w=500",
      priceRange: "moderate",
      category: "sensual",
      astrologicalSignificance: "Connects with Taurus' ruling planet Venus through sensual touch and aromatherapy.",
      keywords: ["Sensual", "Luxurious", "Natural", "Aromatic", "Touch"]
    },
    {
      name: "Gourmet Chocolate Experience",
      description: "Artisanal chocolate tasting set with wine pairing guide.",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=500",
      priceRange: "moderate",
      category: "experience",
      astrologicalSignificance: "Appeals to Taurus' love of fine foods and sensual experiences.",
      keywords: ["Gourmet", "Indulgent", "Sensual", "Taste", "Luxury"]
    }
  ],
  Gemini: [
    {
      name: "Couples' Journal Set",
      description: "Interactive journal with prompts for couples to share thoughts and fantasies.",
      image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=500",
      priceRange: "budget",
      category: "romantic",
      astrologicalSignificance: "Engages Gemini's love of communication and mental connection.",
      keywords: ["Communication", "Interactive", "Creative", "Playful", "Mental"]
    }
  ],
  Cancer: [
    {
      name: "Moonstone Jewelry Set",
      description: "Handcrafted moonstone jewelry pieces for emotional connection.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500",
      priceRange: "luxury",
      category: "fashion",
      astrologicalSignificance: "Moonstone connects with Cancer's ruling planet, the Moon, enhancing emotional intimacy.",
      keywords: ["Emotional", "Romantic", "Mystical", "Personal", "Meaningful"]
    }
  ],
  Leo: [
    {
      name: "Golden Spa Experience",
      description: "Luxury couples spa day with gold-infused treatments.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=500",
      priceRange: "luxury",
      category: "experience",
      astrologicalSignificance: "Gold resonates with Leo's ruling planet, the Sun, promoting confidence and radiance.",
      keywords: ["Luxurious", "Pampering", "Royal", "Glamorous", "Indulgent"]
    }
  ],
  Virgo: [
    {
      name: "Organic Intimacy Kit",
      description: "All-natural, organic intimate care products and essential oils.",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=500",
      priceRange: "moderate",
      category: "wellness",
      astrologicalSignificance: "Appeals to Virgo's appreciation for purity and natural wellness.",
      keywords: ["Organic", "Pure", "Natural", "Wellness", "Quality"]
    }
  ],
  Libra: [
    {
      name: "Couples' Photography Session",
      description: "Professional boudoir or romantic photography session.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=500",
      priceRange: "luxury",
      category: "experience",
      astrologicalSignificance: "Captures Libra's love of beauty and artistic expression.",
      keywords: ["Artistic", "Beautiful", "Romantic", "Memorable", "Aesthetic"]
    }
  ],
  Scorpio: [
    {
      name: "Mystery Date Night Box",
      description: "Curated box with intimate surprises and sensual activities.",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=500",
      priceRange: "moderate",
      category: "sensual",
      astrologicalSignificance: "Embraces Scorpio's love of mystery and intense experiences.",
      keywords: ["Mysterious", "Intense", "Intimate", "Surprising", "Deep"]
    }
  ],
  Sagittarius: [
    {
      name: "Travel Intimacy Kit",
      description: "Compact kit with romantic essentials for adventurous couples.",
      image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&q=80&w=500",
      priceRange: "moderate",
      category: "romantic",
      astrologicalSignificance: "Perfect for Sagittarius' wanderlust and spontaneous nature.",
      keywords: ["Adventure", "Travel", "Spontaneous", "Freedom", "Exploration"]
    }
  ],
  Capricorn: [
    {
      name: "Timeless Leather Accessories",
      description: "High-quality leather intimate accessories with classic design.",
      image: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&q=80&w=500",
      priceRange: "luxury",
      category: "fashion",
      astrologicalSignificance: "Appeals to Capricorn's appreciation for quality and tradition.",
      keywords: ["Classic", "Quality", "Timeless", "Sophisticated", "Elegant"]
    }
  ],
  Aquarius: [
    {
      name: "Tech-Enhanced Intimacy Set",
      description: "Modern wellness devices with app connectivity for couples.",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=500",
      priceRange: "luxury",
      category: "wellness",
      astrologicalSignificance: "Combines Aquarius' love of innovation with intimate connection.",
      keywords: ["Innovative", "Modern", "Tech-savvy", "Unique", "Progressive"]
    }
  ],
  Pisces: [
    {
      name: "Romantic Bath Experience",
      description: "Luxury bath set with rose petals, crystals, and aromatherapy oils.",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500",
      priceRange: "moderate",
      category: "experience",
      astrologicalSignificance: "Connects with Pisces' water element and love of dreamy experiences.",
      keywords: ["Dreamy", "Romantic", "Spiritual", "Relaxing", "Sensual"]
    }
  ]
};