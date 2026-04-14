import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PaperPanel } from "@/components/shared/paper-panel";

export function GameSection() {
  return (
    <section id="the-game" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="The Game"
          title="Easy to understand, rich enough to stay interesting."
          description={siteConfig.gameIntro}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {siteConfig.features.map((feature) => {
            const Icon = feature.icon;

            return (
              <PaperPanel
                key={feature.title}
                className="group h-full p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[hsl(var(--border))/0.7] bg-white/60 text-[hsl(var(--primary))]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-[hsl(var(--foreground))]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm">
                  {feature.description}
                </p>
              </PaperPanel>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
