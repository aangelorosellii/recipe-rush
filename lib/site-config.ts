import type { Metadata } from "next";
import {
  ChefHat,
  PhoneCall,
  Salad,
  Sparkles,
  Star,
  TimerReset,
} from "lucide-react";

export const siteConfig = {
  name: "RecipeRush",
  domain: "www.reciperush.ch",
  url: "https://www.reciperush.ch",
  description:
    "RecipeRush is a premium cooking board game coming soon from Switzerland, blending ingredients, recipes, strategy, and stars into a warm tabletop experience.",
  email: "angelo.roselli@student.unisg.ch",
  phone: "078 808 03 78",
  phoneHref: "tel:+41788080378",
  whatsappHref: "https://wa.me/41788080378",
  mailtoHref: "mailto:angelo.roselli@student.unisg.ch",
  location: "Built at the University of St. Gallen, Switzerland",
  badges: [
    "Board Game • Coming Soon",
    "Built at the University of St. Gallen",
    "Designed in Switzerland",
  ],
  navigation: [
    { label: "Home", href: "/#home" },
    { label: "The Game", href: "/#the-game" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    eyebrow: "Board Game • Coming Soon",
    title: "A kitchen strategy game made to be collected, shared, and remembered.",
    description:
      "RecipeRush turns ingredients, recipes, and stars into a tactile board game experience with instant clarity, playful tension, and premium tabletop presence.",
    ctaPrimary: "Contact Us",
    ctaSecondary: "WhatsApp",
    ctaTertiary: "Discover the Game",
  },
  gameIntro:
    "RecipeRush combines familiar food ingredients with quick decisions, layered play, and a polished visual world inspired by recipe books and collectible tabletop games.",
  features: [
    {
      title: "Collect Ingredients",
      description:
        "Build your hand carefully and assemble the right mix of kitchen essentials before your opponents do.",
      icon: Salad,
    },
    {
      title: "Complete Recipes",
      description:
        "Turn ingredients into recognizable dishes through a ruleset that feels immediate, clear, and satisfying.",
      icon: ChefHat,
    },
    {
      title: "Earn Stars",
      description:
        "Progress is tangible. Reward cards create momentum and make every completed recipe feel meaningful.",
      icon: Star,
    },
    {
      title: "Outsmart Other Players",
      description:
        "Timing, memory, and decision making matter, creating a game that stays accessible while rewarding sharp play.",
      icon: TimerReset,
    },
  ],
  showcase: [
    {
      label: "Ingredient Cards",
      title: "Premium cards with warm, tactile character.",
      description:
        "A collectible deck inspired by pantry staples, fresh produce, and elegant tabletop presentation.",
    },
    {
      label: "Recipe Book",
      title: "A curated recipe board that guides the pace of play.",
      description:
        "Clear recipe progression, visual hierarchy, and a layout designed to feel inviting at first glance.",
    },
    {
      label: "Recipe Cards",
      title: "Recognizable dishes that anchor the whole game concept.",
      description:
        "From simple combinations to more ambitious builds, each recipe makes the gameplay readable and memorable.",
    },
    {
      label: "Reward System",
      title: "Stars add tension, motivation, and replay value.",
      description:
        "A simple scoring language gives the experience structure without losing its warmth or charm.",
    },
  ],
  contactBlurb:
    "RecipeRush is currently in development. For early conversations, partnerships, distribution interest, or product inquiries, we welcome direct contact.",
  legalUpdated: "April 15, 2026",
} as const;

export const socialImage = `${siteConfig.url}/og/recipe-rush-og.svg`;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "RecipeRush | Premium Cooking Board Game Coming Soon",
    template: "%s | RecipeRush",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  category: "board game",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "RecipeRush | Premium Cooking Board Game Coming Soon",
    description: siteConfig.description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "RecipeRush board game coming soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RecipeRush | Premium Cooking Board Game Coming Soon",
    description: siteConfig.description,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icons/favicon.svg",
    apple: "/icons/icon.svg",
  },
};
