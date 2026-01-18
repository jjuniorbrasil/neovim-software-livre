"use client";

import Giscus from "@giscus/react";
import { cn } from "@/lib/utils";

export function Comments() {
  return (
    <section id="comments" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-mono text-primary border border-primary/30 rounded-full mb-4">
            // comentários & feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-4">
            Fórum da <span className="text-gradient">Comunidade</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas, compartilhe conhecimento e conecte-se com outros
            entusiastas do Neovim.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex flex-col gap-8">
              {/* Giscus Comments */}
              <div className="flex-1 min-h-[400px]">
                <div className="glass-card rounded-xl p-5 border border-border h-full">
                  <h4 className="font-mono font-medium mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Discussão
                  </h4>
                  <div className="w-full">
                    <Giscus
                      id="comments"
                      repo={process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`}
                      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID as string}
                      category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
                      categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
                      mapping="pathname"
                      term="Bem-vindo aos comentários!"
                      strict="0"
                      reactionsEnabled="1"
                      emitMetadata="0"
                      inputPosition="top"
                      theme="preferred_color_scheme"
                      lang="pt"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
