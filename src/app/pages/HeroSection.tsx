"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const typingTexts = [
    "Hyperextensible",
    "Lightning Fast",
    "Modernized Vim",
    "Lua Powered",
];

export function HeroSection() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = typingTexts[currentTextIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentWord.length) {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentWord.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentTextIndex]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(142_70%_50%_/_0.08)_0%,_transparent_70%)]" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Terminal-style badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 animate-slide-up">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-mono text-muted-foreground">
                        <span className="text-primary">$</span> vim.fork() → neovim
                    </span>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-mono font-bold mb-6 leading-tight">
                    <span className="text-foreground">Neo</span>
                    <span className="text-gradient">vim</span>
                </h1>

                {/* Typing Effect */}
                <div className="h-12 mb-8 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-mono text-secondary">
                        {displayText}
                        <span className="inline-block w-3 h-6 bg-secondary ml-1 terminal-cursor" />
                    </span>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
                    Documentação em <span className="text-primary font-medium">português</span> para o editor de texto
                    mais extensível da atualidade. Feito por devs, para devs.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
                    <a
                        href="#instalacao"
                        className="group px-8 py-4 bg-primary text-primary-foreground font-mono font-semibold rounded-lg hover:glow-primary transition-all transform hover:scale-105"
                    >
                        <span className="flex items-center gap-2">
                            <span className="text-primary-foreground/70">$</span>
                            Começar Agora
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                    </a>
                    <a
                        href="#sobre"
                        className="px-8 py-4 border border-border text-foreground font-mono rounded-lg hover:border-primary hover:text-primary transition-all"
                    >
                        Saiba Mais
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#sobre"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
                <span className="text-xs font-mono">scroll</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
        </section>
    );
}
