import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))/0.65] py-8">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-lg text-[hsl(var(--foreground))]">
            {siteConfig.name}
          </p>
          <p className="text-sm">{siteConfig.location}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
          <Link href="/privacy-policy" className="hover:text-[hsl(var(--foreground))]">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-[hsl(var(--foreground))]">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-[hsl(var(--foreground))]">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
