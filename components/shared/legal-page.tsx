import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { PaperPanel } from "@/components/shared/paper-panel";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-4xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[hsl(var(--primary))]">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-5xl text-[hsl(var(--foreground))] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-base sm:text-lg">{intro}</p>
        </div>

        <PaperPanel className="mt-10 space-y-8 p-6 sm:p-8">
          {children}
        </PaperPanel>
      </Container>
    </section>
  );
}
