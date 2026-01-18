"use client";

import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

const videos = [
  {
    id: "1",
    title: "Instalação do Neovim",
    description: "Guia completo de instalação no Windows, configuração inicial e primeiros passos.",
    embedId: "Zj2KCDz4p1I",
    duration: "13:45", // Approximate
  },
  {
    id: "2",
    title: "Utilizando o Neovim",
    description: "Comandos essenciais, navegação eficiente e produtividade no terminal.",
    embedId: "VH-XSRFzQW4",
    duration: "21:10",
  },
  {
    id: "3",
    title: "Plugin para Assistir Vídeos",
    description: "Aprenda a instalar e configurar plugins para assistir vídeos dentro do Neovim.",
    embedId: "5SkfxnXbDtI",
    duration: "18:20",
  },
];

export function Videos() {
  return (
    <section id="videos" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(280_60%_60%_/_0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-mono text-accent border border-accent/30 rounded-full mb-4">
            // tutoriais em vídeo
          </span>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-4">
            Aprenda <span className="text-accent">Assistindo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vídeos didáticos em português para você dominar o Neovim
            do básico ao avançado.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={cn(
                "group glass-card rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
              )}
            >
              {/* Video Thumbnail / Iframe */}
              <div className="relative aspect-video bg-muted/50 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Video Info */}
              <div className="p-5">
                <span className="text-xs font-mono text-accent mb-2 block">
                  Vídeo {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-mono font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">
            Mais conteúdo em breve. Acompanhe nossas atualizações!
          </p>
          <a
            href="#comments"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent/50 text-accent font-mono rounded-lg hover:bg-accent/10 transition-all"
          >
            Participe da Comunidade →
          </a>
        </div>
      </div>
    </section>
  );
}
