"use client";

import { motion } from "framer-motion";
import { BookOpenText, CookingPot, Layers3, Star } from "lucide-react";

import { PaperPanel } from "@/components/shared/paper-panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

const icons = [Layers3, BookOpenText, CookingPot, Star];

export function VisualShowcase() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Visual Showcase"
          title="A product world shaped like a modern recipe book."
          description="The presentation is intentionally clean and tactile: ingredient cards, recipe progression, and reward moments are framed as a collectible tabletop system rather than a digital product."
          align="center"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <PaperPanel className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(var(--primary))]">
                  Ingredient Moodboard
                </p>
                <h3 className="mt-3 font-serif text-3xl text-[hsl(var(--foreground))]">
                  Warm decks, crisp silhouettes, clear hierarchy.
                </h3>
              </div>
              <div className="hidden rounded-full border border-[hsl(var(--border))/0.7] bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] sm:block">
                Curated presentation
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {["Tomato", "Flour", "Salmon", "Cheese", "Rice", "Mango"].map((label, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="rounded-[24px] border border-[rgba(177,137,104,0.65)] bg-[linear-gradient(180deg,rgba(255,249,240,0.98),rgba(244,231,209,0.94))] p-3 shadow-sm"
                >
                  <div className="rounded-[18px] border border-[rgba(177,137,104,0.45)] px-3 py-5 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a5a2e]">
                      Ingredient
                    </p>
                    <div className="mx-auto my-4 h-20 w-20 rounded-[24px] border border-[rgba(177,137,104,0.38)] bg-[radial-gradient(circle_at_top,rgba(255,214,167,0.74),rgba(169,102,64,0.18))]" />
                    <p className="font-serif text-2xl text-[#6a4736]">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </PaperPanel>

          <div className="grid gap-5">
            {siteConfig.showcase.map((item, index) => {
              const Icon = icons[index];

              return (
                <PaperPanel key={item.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[hsl(var(--border))/0.7] bg-white/65 text-[hsl(var(--primary))]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(var(--primary))]">
                        {item.label}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-[hsl(var(--foreground))]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm">{item.description}</p>
                    </div>
                  </div>
                </PaperPanel>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
