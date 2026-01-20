"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Alert } from "../components/Alert";
import {
  ChevronRight,
  ChevronLeft,
  Zap,
  FolderTree,
  FileCode,
  Settings,
  Check,
  Copy,
  Terminal,
} from "lucide-react";

function CodeBlock({
  code,
  label = "TERMINAL",
}: {
  code: string;
  label?: string;
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
        <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
          {label}
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
    <code className="font-mono bg-zinc-800 text-emerald-400 px-1.5 py-0.5 rounded text-sm">
      {children}
    </code>
  );
}

const chapters = [
  {
    title: "Estrutura de Diretórios",
    description:
      "Como organizar seus arquivos de configuração de forma modular.",
    href: "/guide/getting-started/structure",
    icon: <FolderTree className="w-5 h-5 text-blue-400" />,
  },
  {
    title: "Arquivo init.lua",
    description: "O ponto de entrada principal onde tudo começa.",
    href: "/guide/primeiros-passos/init-lua",
    icon: <FileCode className="w-5 h-5 text-emerald-400" />,
  },
  {
    title: "Opções Básicas",
    description: "Configurações essenciais como números de linha e indentação.",
    href: "/guide/primeiros-passos/opcoes",
    icon: <Settings className="w-5 h-5 text-purple-400" />,
  },
];

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16 animate-in fade-in duration-700">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
          <Link href="/guide" className="hover:text-zinc-300 transition">
            Guia
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-zinc-300">Primeiros Passos</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <Zap className="w-8 h-8 text-yellow-500 fill-yellow-500/20" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Primeiros Passos
            </h1>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Agora que o Neovim está instalado, vamos entender como transformá-lo
            em uma IDE poderosa. Esta seção cobre a base de tudo: **Lua** e a
            **estrutura de arquivos**.
          </p>
        </header>

        <section className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4">
              Lua vs VimScript
            </h2>
            <p className="text-zinc-400 mb-6">
              O Neovim suporta duas linguagens de configuração:{" "}
              <strong>VimScript</strong> e <strong>Lua</strong>. Neste guia,
              utilizaremos <strong>apenas Lua</strong> por ser mais rápida,
              moderna e o padrão atual da comunidade.
            </p>

            <Alert variant="info" title="Não se preocupe">
              Você não precisa ser um programador Lua. A sintaxe que usaremos é
              muito parecida com um arquivo de configuração comum.
            </Alert>
          </div>

          <div className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-emerald-500" /> Onde configurar?
            </h2>
            <p className="text-zinc-400 mb-4">
              O Neovim busca suas configurações nestes locais padrão:
            </p>
            <CodeBlock
              label="DIRETÓRIOS"
              code={`# Linux e macOS\n~/.config/nvim/\n\n# Windows\n%LOCALAPPDATA%\\nvim\\`}
            />
            <p className="text-zinc-400">
              O arquivo principal deve se chamar obrigatoriamente{" "}
              <InlineCode>init.lua</InlineCode>.
            </p>
          </div>

          <div className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6">
              Seções deste Capítulo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.href}
                  href={chapter.href}
                  className="group p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-300"
                >
                  <div className="mb-4 p-2 w-fit rounded-lg bg-white/5 group-hover:bg-emerald-500/10 transition-colors">
                    {chapter.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors mb-2">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {chapter.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6">
              Criando a estrutura inicial
            </h2>
            <p className="text-zinc-400 mb-6">
              Abra seu terminal e execute os comandos abaixo para preparar o
              terreno:
            </p>

            <CodeBlock
              label="BASH (LINUX/MACOS)"
              code={`mkdir -p ~/.config/nvim/lua/user\ntouch ~/.config/nvim/init.lua`}
            />

            <CodeBlock
              label="POWERSHELL (WINDOWS)"
              code={`mkdir -Force $env:LOCALAPPDATA\\nvim\\lua\\user\nNew-Item -Path $env:LOCALAPPDATA\\nvim\\init.lua -ItemType File`}
            />

            <div className="mt-8 p-6 rounded-xl bg-zinc-900/30 border border-white/5">
              <p className="text-sm font-medium text-zinc-300 mb-4 flex items-center gap-2">
                <FolderTree className="w-4 h-4 text-emerald-500" /> Estrutura
                Resultante:
              </p>
              <pre className="text-xs text-zinc-500 font-mono leading-relaxed">
                {`~/.config/nvim/
├── init.lua          # Ponto de entrada
└── lua/
    └── user/         # Seus arquivos .lua aqui`}
              </pre>
            </div>

            <div className="mt-6">
              <Alert variant="info" title="Módulos Lua">
                O Neovim entende que tudo dentro da pasta{" "}
                <InlineCode>lua/</InlineCode> pode ser chamado via{" "}
                <InlineCode>{'require("nome-do-arquivo")'}</InlineCode>. Isso
                permite manter a configuração organizada em vários arquivos.
              </Alert>
            </div>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
          <Link
            href="/guide/installation/windows"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group text-left"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                Anterior
              </p>
              <p className="text-lg font-medium">Instalação Windows</p>
            </div>
          </Link>
          <Link
            href="/guide/getting-started/structure"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group text-right"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                Próximo
              </p>
              <p className="text-lg font-medium">Estrutura de Diretórios</p>
            </div>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </footer>
      </main>

      <Footer />
    </div>
  );
}
