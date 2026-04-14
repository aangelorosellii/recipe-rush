import type { Metadata } from "next";

import { LegalPage } from "@/components/shared/legal-page";
import { getPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = getPageMetadata({
  title: "Terms of Service",
  description:
    "Terms of service for the RecipeRush website and its informational content.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="Terms of Service"
      intro="These terms describe the basic conditions for accessing and using the RecipeRush website."
    >
      <section>
        <h2 className="font-serif text-3xl text-[hsl(var(--foreground))]">
          Informational Website
        </h2>
        <p className="mt-3 text-sm">
          RecipeRush is presented as a board game project in development. The
          website content is provided for general information, project
          presentation, and contact purposes.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-[hsl(var(--foreground))]">
          Accuracy of Information
        </h2>
        <p className="mt-3 text-sm">
          The information on this website is prepared with care, but some details
          may change as the project evolves. Nothing on the site should be read as
          a binding commercial offer unless expressly confirmed in writing.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-[hsl(var(--foreground))]">
          Intellectual Property
        </h2>
        <p className="mt-3 text-sm">
          The RecipeRush name, website presentation, and related project materials
          are reserved to their respective owner unless otherwise stated. You may
          not reuse or reproduce website materials in a misleading or unauthorized
          way.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-[hsl(var(--foreground))]">
          External Links and Services
        </h2>
        <p className="mt-3 text-sm">
          The website may include links to external services such as email or
          WhatsApp. RecipeRush is not responsible for the availability or policies
          of third-party services.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-[hsl(var(--foreground))]">
          Contact
        </h2>
        <p className="mt-3 text-sm">
          Questions regarding these terms can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-[hsl(var(--foreground))]">
            {siteConfig.email}
          </a>
          .
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">
          Last updated: {siteConfig.legalUpdated}
        </p>
      </section>
    </LegalPage>
  );
}
