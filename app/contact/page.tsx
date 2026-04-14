import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { PaperPanel } from "@/components/shared/paper-panel";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { getPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = getPageMetadata({
  title: "Contact",
  description:
    "Contact RecipeRush for partnerships, investor conversations, distribution interest, or early product inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-5xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[hsl(var(--primary))]">
            Contact
          </p>
          <h1 className="mt-4 font-serif text-5xl text-[hsl(var(--foreground))] sm:text-6xl">
            Let&apos;s start the conversation.
          </h1>
          <p className="mt-5 text-base sm:text-lg">
            For partnerships, distribution interest, investor outreach, or early
            product discussions, RecipeRush is available for direct contact.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <PaperPanel className="p-6 sm:p-8">
            <div className="space-y-6">
              <div className="rounded-[24px] border border-[hsl(var(--border))/0.75] bg-white/55 p-5">
                <Phone className="text-[hsl(var(--primary))]" size={22} />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
                  Phone
                </p>
                <Link
                  href={siteConfig.phoneHref}
                  className="mt-2 block font-serif text-3xl text-[hsl(var(--foreground))]"
                >
                  {siteConfig.phone}
                </Link>
              </div>

              <div className="rounded-[24px] border border-[hsl(var(--border))/0.75] bg-white/55 p-5">
                <Mail className="text-[hsl(var(--primary))]" size={22} />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
                  Email
                </p>
                <Link
                  href={siteConfig.mailtoHref}
                  className="mt-2 block break-words font-serif text-3xl text-[hsl(var(--foreground))]"
                >
                  {siteConfig.email}
                </Link>
              </div>
            </div>
          </PaperPanel>

          <PaperPanel className="flex h-full flex-col justify-between p-6 sm:p-8">
            <div>
              <Image
                src="/images/brand/recipe-rush-mark.svg"
                alt="RecipeRush brand mark"
                width={220}
                height={90}
                className="h-auto w-[180px]"
                priority
              />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(var(--primary))]">
                Based in Switzerland
              </p>
              <h2 className="mt-3 font-serif text-4xl text-[hsl(var(--foreground))]">
                Built at the University of St. Gallen.
              </h2>
              <p className="mt-5 text-sm">
                The project is presented as a premium board game in development,
                with a focus on product quality, clarity, and credible early-stage
                communication.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                <MessageCircle size={16} />
                WhatsApp
              </Link>
              <p className="text-sm">
                We aim to keep communication simple and responsive.
              </p>
            </div>
          </PaperPanel>
        </div>
      </Container>
    </section>
  );
}
