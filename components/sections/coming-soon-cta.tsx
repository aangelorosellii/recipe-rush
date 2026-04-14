import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { PaperPanel } from "@/components/shared/paper-panel";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ComingSoonCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <PaperPanel className="overflow-hidden px-6 py-10 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[hsl(var(--primary))]">
                Coming Soon
              </p>
              <h2 className="mt-4 font-serif text-4xl text-[hsl(var(--foreground))] sm:text-5xl">
                RecipeRush is coming soon.
              </h2>
              <p className="mt-5 text-base sm:text-lg">
                We are open to early conversations with partners, distributors, and
                people who would like to follow the project as it develops.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href={siteConfig.phoneHref} className={cn(buttonVariants({ size: "lg" }))}>
                <Phone size={16} />
                Call Now
              </Link>
              <Link
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                <MessageCircle size={16} />
                WhatsApp
              </Link>
              <Link
                href={siteConfig.mailtoHref}
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                <Mail size={16} />
                Email
              </Link>
            </div>
          </div>
        </PaperPanel>
      </Container>
    </section>
  );
}
