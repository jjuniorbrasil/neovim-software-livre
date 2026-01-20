"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Alert } from "../../components/Alert";
import {
  ChevronRight,
  ChevronLeft,
  Zap,
  Settings,
  Keyboard,
  Check,
  Copy,
} from "lucide-react";

function CodeBlock({
  code,
  label,
  lang = "lua",
}: {
  code: string;
  label?: string;
  lang?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="my-6 rounded-lg border border-white/10 bg-zinc-900/50 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-zinc-900/80">
        <span className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase">
          {label || lang}
        </span>
        <button
          onClick={handleCopy}
          className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1.5 text-xs"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-500" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <div className="p-4 overflow-x-auto font-mono text-sm text-zinc-300 leading-relaxed">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono bg-white/5 px-1.5 py-0.5 rounded text-emerald-400 text-sm border border-white/10">
      {children}
    </code>
  );
}

export default function InitLuaPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16 animate-in fade-in duration-700">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
          <Link href="/guide" className="hover:text-zinc-300 transition">
            Guia
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href="/guide/getting-started"
            className="hover:text-zinc-300 transition"
          >
            Getting Started
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-zinc-300">init.lua File</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 shadow-inner">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Arquivo init.lua
            </h1>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed">
            O <InlineCode>init.lua</InlineCode> é o {'"ponto zero"'} do seu
            Neovim. É a partir dele que o editor ganha vida e carrega toda a sua
            personalização.
          </p>
        </header>

        <section className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4">
              O que ele faz?
            </h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Ao abrir o Neovim, ele busca por este arquivo no caminho{" "}
              <InlineCode>~/.config/nvim/init.lua</InlineCode>. Qualquer código
              Lua inserido aqui será executado imediatamente no startup.
            </p>
            <Alert variant="warning" title="Atenção">
              O Neovim aceita apenas um arquivo raiz:{" "}
              <InlineCode>init.lua</InlineCode> OU{" "}
              <InlineCode>init.vim</InlineCode>. Se você tiver os dois, poderá
              haver conflitos ou o editor ignorará um deles.
            </Alert>
          </div>

          <div className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-8">
              Navegando pela API Lua
            </h2>

            <div className="grid grid-cols-1 gap-10">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2 mb-3">
                  <Settings className="w-5 h-5" /> vim.opt — Preferências
                </h3>
                <p className="text-zinc-400 mb-4">
                  Controla o comportamento visual e funcional do editor.
                </p>
                <CodeBlock
                  code={`vim.opt.number = true          -- Ativa números de linha\nvim.opt.relativenumber = true  -- Números relativos\nvim.opt.tabstop = 2           -- Largura do tab`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-emerald-400 flex items-center gap-2 mb-3">
                  <Keyboard className="w-5 h-5" /> vim.keymap.set — Atalhos
                </h3>
                <p className="text-zinc-400 mb-4">
                  A ferramenta principal para criar seus próprios atalhos.
                </p>
                <CodeBlock
                  code={`-- Sintaxe: vim.keymap.set(modo, teclas, ação, opções)\n\nvim.keymap.set("n", "<C-s>", ":w<CR>", { desc = "Salvar" })\nvim.keymap.set("n", "<leader>q", ":q<CR>", { desc = "Sair" })`}
                />

                <div className="bg-zinc-900/50 p-4 rounded-lg border border-white/5 mt-4">
                  <p className="text-xs font-bold text-zinc-500 uppercase mb-3">
                    Modos Comuns
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-zinc-300 border border-white/10">
                      <InlineCode>{'"n"'}</InlineCode> Normal
                    </span>
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-zinc-300 border border-white/10">
                      <InlineCode>{'"i"'}</InlineCode> Inserção
                    </span>
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-zinc-300 border border-white/10">
                      <InlineCode>{'"v"'}</InlineCode> Visual
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6">
              Exemplo Base Funcional
            </h2>
            <p className="text-zinc-400 mb-4">
              Abaixo, um exemplo de como o seu <InlineCode>init.lua</InlineCode>{" "}
              pode começar antes de migrarmos para a estrutura modular.
            </p>
            <CodeBlock
              label="~/.config/nvim/init.lua"
              code={`-- Tecla líder (Leader Key)\nvim.g.mapleader = " "\n\n-- Opções Globais\nlocal opt = vim.opt\nopt.number = true\nopt.expandtab = true\nopt.shiftwidth = 2\n\n-- Autocomando: Destacar texto ao copiar (Yank)\nvim.api.nvim_create_autocmd("TextYankPost", {\n  callback = function()\n    vim.highlight.on_yank({ timeout = 200 })\n  end,\n})\n\n-- require("user") -- Carregará sua pasta lua/user/ futuramente`}
            />
            <Alert variant="info" title="Modularização">
              Embora você possa colocar tudo em um único arquivo, conforme sua
              config cresce, recomendamos separar em módulos (como vimos na
              seção de estrutura).
            </Alert>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
          <Link
            href="/guide/getting-started/structure"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group text-left"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                Anterior
              </p>
              <p className="text-lg font-medium">Structure</p>
            </div>
          </Link>
          <Link
            href="/guide/getting-started/options"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group text-right"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                Próximo
              </p>
              <p className="text-lg font-medium">Basic Options</p>
            </div>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </footer>
      </main>

      <Footer />
    </div>
  );
}
