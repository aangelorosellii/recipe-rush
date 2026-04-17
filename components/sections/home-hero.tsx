"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, MessageCircle, PhoneCall } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PaperPanel } from "@/components/shared/paper-panel";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const floatingCards = [
  {
    title: "Ingredient Deck",
    subtitle: "Fresh pantry staples",
    className: "left-0 top-8 -rotate-6 md:left-6",
    accent: "text-[#9f3a25]",
  },
  {
    title: "Recipe Cards",
    subtitle: "Memorable dishes",
    className: "right-0 top-0 rotate-6 md:right-4",
    accent: "text-[#805929]",
  },
  {
    title: "Star Rewards",
    subtitle: "Tension and progress",
    className: "bottom-6 left-6 rotate-[-10deg] md:left-20",
    accent: "text-[#b36b13]",
  },
];

export function HomeHero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-[-12rem] h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,175,74,0.34),transparent_62%)]" />
      <div className="bg-hero-glow animate-pulse-amber pointer-events-none absolute right-[-8rem] top-20 h-[24rem] w-[24rem] rounded-full opacity-70" />
      <div className="pointer-events-none absolute left-[-6rem] top-32 h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(255,190,83,0.22),transparent_68%)] blur-2xl" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-[hsl(var(--border))/0.85] bg-[rgba(255,251,244,0.88)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(var(--primary))] shadow-sm">
              {siteConfig.hero.eyebrow}
            </div>

            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.96] text-[hsl(var(--foreground))] sm:text-6xl lg:text-7xl">
              {siteConfig.hero.title}
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg">
              {siteConfig.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                {siteConfig.hero.ctaPrimary}
              </Link>
              <Link
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" }),
                )}
              >
                <MessageCircle size={16} />
                {siteConfig.hero.ctaSecondary}
              </Link>
              <Link
                href="#the-game"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "justify-start px-0 text-[hsl(var(--primary))] hover:bg-transparent",
                )}
              >
                {siteConfig.hero.ctaTertiary}
                <ArrowDownRight size={16} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {siteConfig.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[hsl(var(--border))/0.85] bg-[rgba(255,252,247,0.82)] px-4 py-2 text-sm text-[hsl(var(--foreground))]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[hsl(var(--border))/0.7] pt-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
                  Contact
                </p>
                <Link
                  href={siteConfig.phoneHref}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--foreground))]"
                >
                  <PhoneCall size={16} />
                  {siteConfig.phone}
                </Link>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
                  Email
                </p>
                <Link
                  href={siteConfig.mailtoHref}
                  className="mt-2 inline-flex text-sm font-semibold text-[hsl(var(--foreground))]"
                >
                  {siteConfig.email}
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <PaperPanel className="relative overflow-hidden px-5 py-5 sm:px-6 sm:py-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,126,67,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(109,135,69,0.12),transparent_28%)]" />
              <div className="bg-hero-rays animate-spin-slower pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
              <div className="bg-hero-glow animate-pulse-amber pointer-events-none absolute left-1/2 top-[48%] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
              <div className="bg-hero-orb animate-float-slow pointer-events-none absolute right-10 top-10 h-28 w-28 rounded-full opacity-90" />
              <div className="bg-hero-orb animate-float-slow pointer-events-none absolute bottom-14 left-10 h-20 w-20 rounded-full opacity-60 [animation-delay:2s]" />

              <div className="relative z-10">
                <div className="rounded-[34px] border border-[#c78d54]/60 bg-[linear-gradient(180deg,rgba(155,58,23,0.94),rgba(110,34,20,0.82))] p-3 shadow-card">
                  <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-[#5c2117]">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/images/cover-assets/recipe-rush-cover.png"
                        alt="RecipeRush illustrated cover with chef, trophy, coins, and dishes."
                        fill
                        priority
                        className="object-cover"
                        sizes="(min-width: 1024px) 42vw, 90vw"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {floatingCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.12 + 0.18 }}
                  className={cn(
                    "shadow-soft absolute hidden w-48 rounded-[24px] border border-[rgba(176,130,99,0.7)] bg-[linear-gradient(180deg,rgba(255,248,238,0.97),rgba(245,233,214,0.95))] p-4 xl:block",
                    card.className,
                  )}
                >
                  <div className="rounded-[18px] border border-[rgba(173,129,95,0.5)] bg-white/35 px-3 py-5 text-center">
                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-[0.22em]",
                        card.accent,
                      )}
                    >
                      {card.title}
                    </span>
                    <div className="mx-auto my-4 h-16 w-16 rounded-[20px] border border-[rgba(173,129,95,0.45)] bg-[radial-gradient(circle_at_top,rgba(255,215,159,0.65),rgba(193,123,72,0.18))]" />
                    <p className="text-sm text-[#6e5849]">{card.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </PaperPanel>
          </div>
        </div>
      </Container>
    </section>
  );
}
