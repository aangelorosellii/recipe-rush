import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--primary))]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl text-[hsl(var(--foreground))] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base sm:text-lg">{description}</p>
    </div>
  );
}
