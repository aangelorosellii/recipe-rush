import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PaperPanel } from "@/components/shared/paper-panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Direct, simple, and open for early conversations."
          description={siteConfig.contactBlurb}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <PaperPanel className="p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[hsl(var(--border))/0.75] bg-white/55 p-5">
                <Phone className="text-[hsl(var(--primary))]" size={22} />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
                  Phone
                </p>
                <Link
                  href={siteConfig.phoneHref}
                  className="mt-2 block font-serif text-2xl text-[hsl(var(--foreground))]"
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
                  className="mt-2 block font-serif text-2xl break-words text-[hsl(var(--foreground))]"
                >
                  {siteConfig.email}
                </Link>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                <MessageCircle size={16} />
                WhatsApp
              </Link>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                Full Contact Page
              </Link>
            </div>
          </PaperPanel>

          <PaperPanel className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[hsl(var(--border))/0.75] bg-white/60 text-[hsl(var(--primary))]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--primary))]">
                  Credibility
                </p>
                <h3 className="mt-2 font-serif text-3xl text-[hsl(var(--foreground))]">
                  Built at the University of St. Gallen.
                </h3>
                <p className="mt-4 text-sm">
                  Developed in Switzerland with a focus on product quality, clear
                  presentation, and credible early-stage communication.
                </p>
              </div>
            </div>
          </PaperPanel>
        </div>
      </Container>
    </section>
  );
}
