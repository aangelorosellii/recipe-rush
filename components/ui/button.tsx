import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-soft hover:-translate-y-0.5 hover:bg-[hsl(var(--primary))/0.92]",
        secondary:
          "border-[hsl(var(--border))] bg-[rgba(255,252,247,0.78)] text-[hsl(var(--foreground))] hover:-translate-y-0.5 hover:border-[hsl(var(--primary))/0.35] hover:bg-white",
        ghost:
          "border-transparent bg-transparent text-[hsl(var(--foreground))] hover:bg-[rgba(255,255,255,0.4)]",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6 text-[0.95rem]",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
