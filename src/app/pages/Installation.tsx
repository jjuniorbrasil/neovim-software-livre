"use client";

import { useState } from "react";
import { Check, Copy, Monitor, Package, Terminal, Command, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type InstallMethod = {
  id: string;
  name: string;
  icon: any;
  command: string;
  description: string;
  link?: string;
};

const installMethods: Record<string, InstallMethod[]> = {
  Windows: [
    {
      id: "msi",
      name: "Instalador",
      icon: Package,
      command: "Download: nvim-win64.msi",
      link: "https://github.com/neovim/neovim/releases/latest/download/nvim-win64.msi",
      description: "Instalador tradicional .msi",
    },
    {
      id: "winget",
      name: "WinGet",
      icon: Terminal,
      command: "winget install Neovim.Neovim",
      description: "Recomendado para Windows 10/11",
    },
  ],
  Linux: [
    {
      id: "apt",
      name: "Ubuntu/Debian",
      icon: Terminal,
      command: "sudo apt install neovim",
      description: "Via APT package manager",
    },
    {
      id: "arch",
      name: "Arch Linux",
      icon: Terminal,
      command: "sudo pacman -S neovim",
      description: "Via Pacman",
    },
    {
      id: "fedora",
      name: "Fedora",
      icon: Terminal,
      command: "sudo dnf install neovim",
      description: "Via DNF",
    },
  ],
  macOS: [
    {
      id: "brew",
      name: "Homebrew",
      icon: Command,
      command: "brew install neovim",
      description: "Recomendado para macOS",
      link: "https://brew.sh",
    },
  ],
};

const osList = ["Windows", "Linux", "macOS"];

export function Installation() {
  const [activeOS, setActiveOS] = useState("Windows");
  const [activeMethod, setActiveMethod] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Initialize active method when OS changes
  const currentMethods = installMethods[activeOS];
  const currentMethod = activeMethod
    ? currentMethods.find(m => m.id === activeMethod) || currentMethods[0]
    : currentMethods[0];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentMethod.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="instalacao" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(186_80%_50%_/_0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-mono text-secondary border border-secondary/30 rounded-full mb-4">
            // guia de instalação
          </span>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-4">
            Instalação no <span className="text-secondary">{activeOS}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha o método de instalação que preferir.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* OS Tabs */}
          <div className="flex justify-center mb-8 gap-4">
            {osList.map((os) => (
              <button
                key={os}
                onClick={() => { setActiveOS(os); setActiveMethod(null); }}
                className={cn(
                  "px-6 py-2 rounded-full font-mono text-sm transition-all border",
                  activeOS === os
                    ? "bg-secondary/10 border-secondary text-secondary shadow-[0_0_15px_rgba(var(--secondary),0.3)]"
                    : "bg-transparent border-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {os}
              </button>
            ))}
          </div>

          {/* Method Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {currentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setActiveMethod(method.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all",
                  currentMethod.id === method.id
                    ? "bg-secondary text-secondary-foreground glow-secondary"
                    : "glass-card text-muted-foreground hover:text-foreground"
                )}
              >
                <method.icon className="w-4 h-4" />
                {method.name}
              </button>
            ))}
          </div>

          {/* Command Box */}
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-2">
                  Terminal
                </span>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 px-3 py-1 text-xs font-mono text-muted-foreground hover:text-secondary transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Copiar
                  </>
                )}
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <span className="text-secondary font-mono">$</span>
                <code className="text-foreground font-mono break-all">
                  {currentMethod.command}
                </code>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                {currentMethod.description}
              </p>
              {currentMethod.link && (
                <a
                  href={currentMethod.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-secondary hover:underline mt-2"
                >
                  Link Oficial <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Additional Link */}
          <div className="mt-8 text-center">
            <a
              href="https://github.com/neovim/neovim/blob/master/INSTALL.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              Ver guia de instalação oficial completo <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
