"use client";

import { Zap, Code2, Puzzle, Terminal, Sparkles, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Zap,
    title: "Ultra Rápido",
    description: "Inicialização instantânea e performance extrema mesmo com milhares de plugins.",
  },
  {
    icon: Code2,
    title: "Lua Nativo",
    description: "Configure tudo em Lua para uma experiência de desenvolvimento moderna e intuitiva.",
  },
  {
    icon: Puzzle,
    title: "Extensível",
    description: "Ecossistema rico com milhares de plugins mantidos pela comunidade.",
  },
  {
    icon: Terminal,
    title: "Terminal First",
    description: "Funciona perfeitamente no terminal, com suporte completo a interfaces gráficas.",
  },
  {
    icon: Sparkles,
    title: "LSP Integrado",
    description: "Suporte nativo ao Language Server Protocol para autocompletar inteligente.",
  },
  {
    icon: Shield,
    title: "Estável",
    description: "Código moderno, bem testado e com atualizações frequentes e seguras.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-mono text-primary border border-primary/30 rounded-full mb-4">
            sobre o projeto
          </span>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-4">
            Por que <span className="text-gradient">Neovim</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O Neovim é uma extensão do Vim que traz modernidade e extensibilidade
            sem perder a essência que fez do Vim uma lenda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-mono font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Terminal Preview */}
        <div className="mt-16 glass-card rounded-xl overflow-hidden border border-border">
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono text-muted-foreground ml-2">nvim init.lua</span>
          </div>
          <div className="p-6 font-mono text-sm overflow-x-auto">
            <div className="space-y-1">
              <p><span className="text-accent">--</span><span className="text-muted-foreground"> Configuração básica do Neovim</span></p>
              <p><span className="text-secondary">vim.opt</span>.number = <span className="text-primary">true</span></p>
              <p><span className="text-secondary">vim.opt</span>.relativenumber = <span className="text-primary">true</span></p>
              <p><span className="text-secondary">vim.opt</span>.tabstop = <span className="text-terminal-cyan">4</span></p>
              <p><span className="text-secondary">vim.opt</span>.shiftwidth = <span className="text-terminal-cyan">4</span></p>
              <p><span className="text-secondary">vim.opt</span>.expandtab = <span className="text-primary">true</span></p>
              <p className="mt-4"><span className="text-accent">--</span><span className="text-muted-foreground"> Tema e aparência</span></p>
              <p><span className="text-secondary">vim.cmd</span>(<span className="text-terminal-green">colorscheme tokyonight</span>)</p>
              <p className="flex items-center">
                <span className="w-2 h-4 bg-primary terminal-cursor" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
