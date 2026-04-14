import type { Metadata } from "next";

import { LegalPage } from "@/components/shared/legal-page";
import { getPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = getPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for the RecipeRush website, including contact handling and basic website usage information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="This page explains, in a clear and limited way, how RecipeRush may handle information shared through this website."
    >
      <section>
        <h2 className="font-serif text-3xl text-[hsl(var(--foreground))]">
          Overview
        </h2>
        <p className="mt-3 text-sm">
          RecipeRush is a presentation website for a board game project in
          development. The website is intended to provide project information and
          enable direct contact.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-[hsl(var(--foreground))]">
          Information You Share
        </h2>
        <p className="mt-3 text-sm">
          If you contact RecipeRush by phone, email, or WhatsApp, your contact
          details and the content of your message may be used to respond to your
          inquiry and continue the conversation where relevant.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-[hsl(var(--foreground))]">
          Website Usage
        </h2>
        <p className="mt-3 text-sm">
          Like most websites, basic technical information may be processed by
          hosting or analytics-related infrastructure in order to load pages,
          protect the service, and understand general website performance.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-[hsl(var(--foreground))]">
          External Services
        </h2>
        <p className="mt-3 text-sm">
          If you choose to contact RecipeRush through WhatsApp or email, your use
          of those services is also subject to the policies and terms of the
          respective providers.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-[hsl(var(--foreground))]">
          Contact
        </h2>
        <p className="mt-3 text-sm">
          For privacy-related questions, you can contact RecipeRush at{" "}
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
