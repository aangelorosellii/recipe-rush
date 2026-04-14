import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type PaperPanelProps = PropsWithChildren<{
  className?: string;
}>;

export function PaperPanel({ children, className }: PaperPanelProps) {
  return (
    <div
      className={cn(
        "texture bg-paper shadow-card rounded-[28px] border border-[hsl(var(--border))/0.8]",
        className,
      )}
    >
      {children}
    </div>
  );
}
