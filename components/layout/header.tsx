"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const close = () => setIsOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [isOpen]);

  const navClassName =
    "text-sm font-medium text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--foreground))]";
  const homeHref = pathname === "/" ? "#home" : "/#home";
  const gameHref = pathname === "/" ? "#the-game" : "/#the-game";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled && "py-3",
      )}
    >
      <Container>
        <div
          className={cn(
            "mt-4 flex items-center justify-between rounded-full border border-transparent px-4 py-3 transition-all duration-300 sm:px-6",
            isScrolled
              ? "border-[hsl(var(--border))/0.7] bg-[rgba(255,250,243,0.78)] shadow-soft backdrop-blur"
              : "bg-transparent",
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[rgba(255,252,247,0.82)] text-sm font-bold text-[hsl(var(--primary))] shadow-sm">
              RR
            </span>
            <div>
              <span className="block font-serif text-xl text-[hsl(var(--foreground))]">
                RecipeRush
              </span>
              <span className="block text-[0.68rem] uppercase tracking-[0.24em] text-[hsl(var(--muted-foreground))]">
                Coming Soon
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href={homeHref} className={navClassName}>
              Home
            </Link>
            <Link href={gameHref} className={navClassName}>
              The Game
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[hsl(var(--border))] bg-[rgba(255,252,247,0.82)] px-4 py-2 text-sm font-semibold text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))/0.35] hover:bg-white"
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[rgba(255,252,247,0.82)] text-[hsl(var(--foreground))] md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-3 rounded-[28px] border border-[hsl(var(--border))/0.8] bg-[rgba(255,250,243,0.95)] p-4 shadow-soft backdrop-blur md:hidden">
            <nav className="flex flex-col gap-2">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[hsl(var(--foreground))] hover:bg-white/70"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
