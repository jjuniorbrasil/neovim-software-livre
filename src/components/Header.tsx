"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#instalacao", label: "Instalação" },
  { href: "#videos", label: "Vídeos" },
  { href: "#comments", label: "Fórum" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (href: string) => {
    return pathname === "/" ? href : `/${href}`;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-card py-3" : "py-5 bg-transparent",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="text-2xl font-mono font-bold text-primary group-hover:glow-primary transition-all">
              nvim
            </span>
            <span className="absolute -right-1 top-0 w-2 h-5 bg-primary terminal-cursor" />
          </div>
          <span className="text-muted-foreground text-sm hidden sm:block">
            neovimlivre
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getHref(link.href)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}

          <Link
            href="/guide/installation"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 text-sm font-mono font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all glow-primary"
          >
            Guia
          </Link>

          <a
            href="https://github.com/neovim/neovim"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 text-sm font-mono font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all glow-primary"
          >
            GitHub →
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 p-4 rounded-lg">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/guide"
              className="px-4 py-3 text-sm font-medium text-emerald-500 hover:bg-muted rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Guia Completo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
