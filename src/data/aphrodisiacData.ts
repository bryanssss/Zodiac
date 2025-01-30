import { ZodiacSign } from '../types';
import { zodiacSigns } from './zodiacData';

export interface Aphrodisiac {
  name: string;
  description: string;
  benefits: string[];
  preparation?: string;
  image: string;
  history?: string;
  bestPairings?: string[];
}

export const zodiacAphrodisiacs: Record<string, Aphrodisiac[]> = {
  Aries: [
    {
      name: "Chili Peppers",
      description: "Spicy foods like chili peppers increase circulation and stimulate endorphins, perfect for Aries' passionate nature. The heat of chilies mirrors the fiery spirit of Aries, promoting energy and vitality.",
      benefits: ["Increases blood flow", "Boosts energy", "Releases endorphins", "Enhances metabolism", "Stimulates passion"],
      preparation: "Add to dishes or create spicy infused oils. For maximum benefit, combine with citrus fruits.",
      image: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&q=80&w=500",
      history: "Chili peppers have been used as aphrodisiacs in various cultures for centuries, particularly in South American and Asian traditions.",
      bestPairings: ["Dark chocolate", "Mango", "Citrus fruits"]
    },
    {
      name: "Dark Chocolate",
      description: "Rich in compounds that boost mood and energy, matching Aries' dynamic personality. Contains phenylethylamine, known as the 'love chemical'.",
      benefits: ["Enhances mood", "Provides sustained energy", "Contains antioxidants", "Increases pleasure chemicals", "Improves blood flow"],
      preparation: "Enjoy pure dark chocolate (70% or higher cacao) or use in desserts. Best consumed in small amounts throughout the day.",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=500",
      history: "The Aztecs believed chocolate was a divine elixir and reserved it for rulers and warriors.",
      bestPairings: ["Chili peppers", "Strawberries", "Sea salt"]
    }
  ],
  Taurus: [
    {
      name: "Figs",
      description: "Sweet, sensual figs appeal to Taurus' appreciation for luxury and pleasure. Their rich texture and sweet flesh have made them a symbol of fertility and sensuality since ancient times.",
      benefits: ["Rich in minerals", "Natural sweetness", "Sensual texture", "High in fiber", "Boosts fertility"],
      preparation: "Serve fresh or drizzled with honey. Can be grilled or baked for added depth of flavor.",
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=500",
      history: "Figs were sacred to Venus, the goddess of love, and were Cleopatra's favorite fruit.",
      bestPairings: ["Honey", "Goat cheese", "Prosciutto"]
    },
    {
      name: "Honey",
      description: "The ultimate symbol of sweetness and pleasure, perfect for indulgent Taurus. Raw honey contains boron, which helps regulate hormones.",
      benefits: ["Natural energy boost", "Antibacterial properties", "Enhances flavor", "Hormone balance", "Skin health"],
      preparation: "Use as a natural sweetener or drizzle over fruits. Best when raw and unprocessed.",
      image: "https://images.unsplash.com/photo-1587049352847-81a56d773cdd?auto=format&fit=crop&q=80&w=500",
      history: "Ancient Romans believed honey was created by bees gathering nectar from flowers kissed by Venus.",
      bestPairings: ["Figs", "Lavender", "Nuts"]
    }
  ],
  Gemini: [
    {
      name: "Mint",
      description: "Refreshing mint stimulates the mind and senses, perfect for Gemini's dual nature. Its cooling and warming sensations create an exciting sensory experience.",
      benefits: ["Mental clarity", "Fresh breath", "Digestive aid", "Awakens senses", "Increases alertness"],
      preparation: "Add to drinks or use in light dishes. Can be infused in water or tea.",
      image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&q=80&w=500",
      history: "In Greek mythology, mint was associated with transformation and duality.",
      bestPairings: ["Chocolate", "Citrus", "Berries"]
    },
    {
      name: "Mixed Berries",
      description: "Variety of flavors appeals to Gemini's love of diversity and quick energy. Each berry brings its own unique benefits and antioxidant properties.",
      benefits: ["High in antioxidants", "Natural sweetness", "Quick energy", "Brain health", "Skin glow"],
      preparation: "Enjoy fresh or in smoothies. Can be combined with yogurt or chocolate.",
      image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&q=80&w=500",
      history: "Berries have been considered symbols of fertility in many cultures.",
      bestPairings: ["Dark chocolate", "Mint", "Cream"]
    }
  ],
  Cancer: [
    {
      name: "Vanilla",
      description: "Comforting and nurturing vanilla aligns with Cancer's emotional nature. Its sweet aroma has been shown to reduce stress and increase feelings of pleasure.",
      benefits: ["Calming properties", "Mood enhancement", "Stress reduction", "Aromatherapy benefits", "Natural sweetness"],
      preparation: "Use in baking or add to warm drinks. Real vanilla beans provide the best benefits.",
      image: "https://images.unsplash.com/photo-1631206753348-db44968fd440?auto=format&fit=crop&q=80&w=500",
      history: "The Totonac people of Mexico were the first to cultivate vanilla and considered it sacred.",
      bestPairings: ["Coconut", "Chocolate", "Cinnamon"]
    },
    {
      name: "Coconut",
      description: "Nurturing and protective, coconut resonates with Cancer's caring nature. Contains medium-chain triglycerides that boost energy and mood.",
      benefits: ["Boosts immunity", "Provides healthy fats", "Hydrating properties", "Enhances metabolism", "Skin health"],
      preparation: "Use coconut milk in cooking or enjoy fresh. Can be used in both sweet and savory dishes.",
      image: "https://images.unsplash.com/photo-1550679560-1f6f7f3ac2ae?auto=format&fit=crop&q=80&w=500",
      history: "Pacific islanders consider coconut a symbol of fertility and abundance.",
      bestPairings: ["Vanilla", "Mango", "Dark chocolate"]
    }
  ],
  Leo: [
    {
      name: "Saffron",
      description: "Luxurious and exotic saffron matches Leo's royal nature. Known as the 'sunshine spice', it brings warmth and vitality.",
      benefits: ["Mood elevation", "Antioxidant properties", "Enhances vitality", "Improves circulation", "Hormone balance"],
      preparation: "Add to rice dishes or steep in warm drinks. A little goes a long way - use sparingly.",
      image: "https://images.unsplash.com/photo-1607553558548-92dd58b83e85?auto=format&fit=crop&q=80&w=500",
      history: "Cleopatra used saffron in her love potions and bathing rituals.",
      bestPairings: ["Honey", "Rose", "Cardamom"]
    },
    {
      name: "Golden Honey",
      description: "Rich and golden, this royal food suits Leo's magnificent energy. Raw honey is packed with enzymes and natural compounds that boost vitality.",
      benefits: ["Energy boost", "Immune support", "Natural sweetness", "Antibacterial", "Skin radiance"],
      preparation: "Mix with warm drinks or drizzle over foods. Best consumed in its raw, unprocessed form.",
      image: "https://images.unsplash.com/photo-1587049352847-81a56d773cdd?auto=format&fit=crop&q=80&w=500",
      history: "Ancient Egyptians considered honey a gift from the sun god Ra.",
      bestPairings: ["Saffron", "Nuts", "Citrus"]
    }
  ],
  Virgo: [
    {
      name: "Lavender",
      description: "Pure and calming lavender aligns with Virgo's refined tastes. Its subtle floral notes promote relaxation while maintaining clarity.",
      benefits: ["Relaxation", "Digestive aid", "Stress relief", "Sleep quality", "Anxiety reduction"],
      preparation: "Use in teas or add to baked goods. Can be used as an essential oil for aromatherapy.",
      image: "https://images.unsplash.com/photo-1595159102181-86c630681e34?auto=format&fit=crop&q=80&w=500",
      history: "Romans used lavender in their baths and as a natural perfume.",
      bestPairings: ["Honey", "Vanilla", "Citrus"]
    },
    {
      name: "Chamomile",
      description: "Gentle and healing chamomile suits Virgo's nurturing nature. Promotes relaxation without drowsiness.",
      benefits: ["Calming effects", "Digestive support", "Sleep aid", "Stress reduction", "Anti-inflammatory"],
      preparation: "Brew as tea or add to bath water. Can be combined with honey for added benefits.",
      image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=500",
      history: "Ancient Egyptians dedicated chamomile to their sun god and used it in healing rituals.",
      bestPairings: ["Honey", "Lavender", "Mint"]
    }
  ],
  Libra: [
    {
      name: "Rose",
      description: "Beautiful and balanced rose essence matches Libra's romantic nature. Opens the heart and enhances emotional connection.",
      benefits: ["Heart opening", "Mood balancing", "Skin health", "Emotional balance", "Stress relief"],
      preparation: "Use in teas or add to desserts. Rose water can be used in both sweet and savory dishes.",
      image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=80&w=500",
      history: "Cleopatra filled her palace with rose petals to seduce Mark Antony.",
      bestPairings: ["Honey", "Vanilla", "Cardamom"]
    },
    {
      name: "Strawberries",
      description: "Sweet and beautiful strawberries appeal to Libra's aesthetic sense. Their heart shape and red color symbolize love and passion.",
      benefits: ["Heart health", "Vitamin C", "Natural aphrodisiac", "Antioxidants", "Skin glow"],
      preparation: "Enjoy fresh or with chocolate. Can be used in smoothies or desserts.",
      image: "https://images.unsplash.com/photo-1543528176-61b239494933?auto=format&fit=crop&q=80&w=500",
      history: "Ancient Romans believed strawberries were sacred to Venus.",
      bestPairings: ["Dark chocolate", "Cream", "Mint"]
    }
  ],
  Scorpio: [
    {
      name: "Dark Chocolate with Chili",
      description: "Intense and complex flavors match Scorpio's passionate nature. The combination of chocolate and chili creates a powerful sensory experience.",
      benefits: ["Increases desire", "Boosts energy", "Enhances mood", "Improves circulation", "Releases endorphins"],
      preparation: "Enjoy as is or melt for dipping. Can be used to make spicy hot chocolate.",
      image: "https://images.unsplash.com/photo-1610450949065-1f2841536c88?auto=format&fit=crop&q=80&w=500",
      history: "Aztec emperor Montezuma drank spiced chocolate before visiting his harem.",
      bestPairings: ["Chili", "Orange", "Sea salt"]
    },
    {
      name: "Pomegranate",
      description: "Mysterious and potent pomegranate aligns with Scorpio's intensity. Ancient symbol of fertility and passion.",
      benefits: ["Antioxidant rich", "Blood flow enhancement", "Vitality boost", "Hormone balance", "Heart health"],
      preparation: "Eat fresh or drink as juice. Seeds can be added to salads or desserts.",
      image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&q=80&w=500",
      history: "In Greek mythology, pomegranate bound Persephone to the underworld.",
      bestPairings: ["Dark chocolate", "Rose", "Mint"]
    }
  ],
  Sagittarius: [
    {
      name: "Nutmeg",
      description: "Exotic and adventurous nutmeg suits Sagittarius' exploratory nature. Its warm, spicy aroma stimulates the senses.",
      benefits: ["Stimulating properties", "Digestive aid", "Mood enhancement", "Sleep quality", "Circulation boost"],
      preparation: "Add to drinks or baked goods. A little goes a long way - use sparingly.",
      image: "https://images.unsplash.com/photo-1606252695104-2d9cfe69b4c0?auto=format&fit=crop&q=80&w=500",
      history: "Medieval European nobility prized nutmeg for its aphrodisiac properties.",
      bestPairings: ["Cinnamon", "Vanilla", "Coffee"]
    },
    {
      name: "Ginger",
      description: "Spicy and energizing ginger matches Sagittarius' fiery spirit. Promotes warmth and circulation throughout the body.",
      benefits: ["Increases circulation", "Digestive support", "Energy boost", "Anti-inflammatory", "Immune support"],
      preparation: "Use in cooking or steep as tea. Can be candied or added to desserts.",
      image: "https://images.unsplash.com/photo-1573414041029-2b704368e937?auto=format&fit=crop&q=80&w=500",
      history: "Ancient Chinese philosophers recommended ginger for its warming properties.",
      bestPairings: ["Honey", "Lemon", "Dark chocolate"]
    }
  ],
  Capricorn: [
    {
      name: "Black Truffle",
      description: "Rare and valuable truffle appeals to Capricorn's appreciation for luxury. Its earthy aroma connects to Capricorn's grounded nature.",
      benefits: ["Rich in minerals", "Unique flavor", "Status symbol", "Umami boost", "Sensory stimulation"],
      preparation: "Shave over dishes or infuse in oils. Best used fresh and in small quantities.",
      image: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?auto=format&fit=crop&q=80&w=500",
      history: "Ancient Romans believed truffles were created by lightning strikes.",
      bestPairings: ["Eggs", "Pasta", "Fine oils"]
    },
    {
      name: "Pine Nuts",
      description: "Earthy and substantial pine nuts match Capricorn's grounded nature. Rich in zinc and other minerals essential for vitality.",
      benefits: ["Protein rich", "Brain health", "Energy sustaining", "Hormone support", "Heart health"],
      preparation: "Toast and add to dishes. Can be made into pesto or used in desserts.",
      image: "https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?auto=format&fit=crop&q=80&w=500",
      history: "Native Americans considered pine nuts a sacred food for strength and endurance.",
      bestPairings: ["Herbs", "Garlic", "Honey"]
    }
  ],
  Aquarius: [
    {
      name: "Blue Spirulina",
      description: "Unique and innovative blue spirulina matches Aquarius' forward-thinking nature. This superfood represents the cutting edge of nutrition.",
      benefits: ["Brain function", "Energy boost", "Nutrient dense", "Antioxidant rich", "Immune support"],
      preparation: "Add to smoothies or drinks. Can be used to create visually stunning dishes.",
      image: "https://images.unsplash.com/photo-1612535500858-06e800115812?auto=format&fit=crop&q=80&w=500",
      history: "Ancient Aztecs harvested spirulina from lakes for its energizing properties.",
      bestPairings: ["Coconut", "Mango", "Citrus"]
    },
    {
      name: "Kombucha",
      description: "Progressive and experimental kombucha suits Aquarius' innovative spirit. A fermented tea that promotes gut health and energy.",
      benefits: ["Gut health", "Probiotic rich", "Energy boost", "Detoxification", "Immune support"],
      preparation: "Drink chilled or use in cocktails. Can be flavored with fruits and herbs.",
      image: "https://images.unsplash.com/photo-1598592050487-4b9b873e3a86?auto=format&fit=crop&q=80&w=500",
      history: "Known as the 'tea of immortality' in ancient China.",
      bestPairings: ["Ginger", "Berries", "Herbs"]
    }
  ],
  Pisces: [
    {
      name: "Sea Vegetables",
      description: "Ocean-derived nutrients connect with Pisces' water element. Rich in minerals and trace elements from the sea.",
      benefits: ["Mineral rich", "Thyroid support", "Detoxifying", "Hormone balance", "Energy boost"],
      preparation: "Add to soups or use in sushi. Can be rehydrated and added to salads.",
      image: "https://images.unsplash.com/photo-1552874869-5c39ec9288dc?auto=format&fit=crop&q=80&w=500",
      history: "Japanese cultures have used sea vegetables for thousands of years for vitality.",
      bestPairings: ["Rice", "Miso", "Citrus"]
    },
    {
      name: "Jasmine",
      description: "Dreamy and ethereal jasmine matches Pisces' mystical nature. Its delicate fragrance promotes relaxation and sensuality.",
      benefits: ["Relaxation", "Mood enhancement", "Spiritual connection", "Sleep aid", "Stress relief"],
      preparation: "Use in teas or add to rice. Can be used as an essential oil for aromatherapy.",
      image: "https://images.unsplash.com/photo-1587825045005-c9ce5b0e7c4e?auto=format&fit=crop&q=80&w=500",
      history: "In ancient India, jasmine was used in tantric practices and sacred rituals.",
      bestPairings: ["Green tea", "Honey", "Rose"]
    }
  ]
};