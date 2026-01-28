"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Alert } from "../../components/Alert";
import {
  ChevronRight,
  ChevronLeft,
  FolderTree,
  FileCode,
  Terminal,
  Check,
  Copy,
  FileText,
  Lightbulb,
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

export default function EstruturaPage() {
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
          <span className="text-zinc-300">Structure</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 shadow-inner">
              <FolderTree className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Estrutura de Diretórios
            </h1>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Uma configuração modular facilita a manutenção e evita arquivos
            gigantescos. Abaixo, veja como organizar os arquivos dentro da sua
            pasta <code className="text-zinc-200">~/.config/nvim/</code>.
          </p>
        </header>

        <section className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-zinc-500" /> Hierarquia de
              Pastas
            </h2>

            <div className="bg-zinc-950 rounded-xl p-8 border border-white/5 font-mono text-sm shadow-2xl overflow-x-auto mb-6">
              <div className="flex flex-col gap-1 text-zinc-400">
                <p>
                  <span className="text-emerald-500 font-bold">
                    ~/.config/nvim/
                  </span>
                </p>
                <p>
                  ├── <span className="text-zinc-100">init.lua</span>{" "}
                  <span className="text-zinc-600 ml-4"># Ponto de entrada</span>
                </p>
                <p>
                  ├── <span className="text-blue-400 font-bold">lua/</span>
                </p>
                <p>
                  │ └── <span className="text-blue-400 font-bold">user/</span>
                </p>
                <p>
                  │ ├── <span className="text-zinc-100">init.lua</span>{" "}
                  <span className="text-zinc-600 ml-4">
                    # Carrega os módulos abaixo
                  </span>
                </p>
                <p>
                  │ ├── <span className="text-zinc-100">options.lua</span>{" "}
                  <span className="text-zinc-600 ml-4"># vim.opt</span>
                </p>
                <p>
                  │ ├── <span className="text-zinc-100">keymaps.lua</span>{" "}
                  <span className="text-zinc-600 ml-4"># Atalhos</span>
                </p>
                <p>
                  │ ├── <span className="text-zinc-100">autocmds.lua</span>{" "}
                  <span className="text-zinc-600 ml-4"># Eventos</span>
                </p>
                <p>
                  │ └── <span className="text-zinc-100">lazy.lua</span>{" "}
                  <span className="text-zinc-600 ml-4"># Plugins</span>
                </p>
                <p>
                  └── <span className="text-zinc-500">lazy-lock.json</span>
                </p>
              </div>
            </div>

            <Alert title="Sugestão de Organização">
              Esta estrutura modular é uma das mais adotadas pela comunidade.
              Ela permite que você encontre erros rapidamente separando o
              comportamento do editor (options) da lógica de atalhos (keymaps).
            </Alert>
          </div>

          <div className="pt-8 border-t border-white/5 space-y-10">
            <h2 className="text-2xl font-bold text-white mb-6">
              Detalhamento dos Arquivos
            </h2>

            <div>
              <h3 className="text-xl font-semibold text-emerald-400 flex items-center gap-2 mb-3">
                <FileCode className="w-5 h-5" /> init.lua
              </h3>
              <p className="text-zinc-400 mb-4">
                O arquivo mestre. Ele deve ser o mais simples possível.
              </p>
              <CodeBlock
                label="~/.config/nvim/init.lua"
                code={`require("user")`}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2 mb-3">
                <FileCode className="w-5 h-5" /> lua/user/init.lua
              </h3>
              <p className="text-zinc-400 mb-4">
                Este arquivo orquestra o carregamento. A ordem aqui é vital para
                o funcionamento correto do editor.
              </p>
              <CodeBlock
                label="~/.config/nvim/lua/user/init.lua"
                code={`require("user.options")\nrequire("user.keymaps")\nrequire("user.autocmds")\nrequire("user.lazy")`}
              />

              <Alert title="A Ordem Importa">
                As <strong>options</strong> devem ser carregadas primeiro,
                seguidas pelos <strong>keymaps</strong>. Os{" "}
                <strong>plugins (lazy)</strong> vêm por último, pois podem
                precisar das opções e atalhos já configurados para funcionar
                corretamente.
              </Alert>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-emerald-500" /> Criar Estrutura
              Rapidamente
            </h2>

            <CodeBlock
              lang="bash"
              label="Linux / macOS"
              code={`mkdir -p ~/.config/nvim/lua/user\ntouch ~/.config/nvim/init.lua\ntouch ~/.config/nvim/lua/user/{init,options,keymaps,autocmds,lazy}.lua`}
            />

            <CodeBlock
              lang="powershell"
              label="Windows (PowerShell)"
              code={`mkdir -Force $env:LOCALAPPDATA\\nvim\\lua\\user\n$files = @("init.lua", "lua/user/init.lua", "lua/user/options.lua", "lua/user/keymaps.lua", "lua/user/autocmds.lua", "lua/user/lazy.lua")\nforeach ($file in $files) { New-Item -Path "$env:LOCALAPPDATA\\nvim\\$file" -ItemType File -Force }`}
            />
          </div>

          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-400 mb-1">
                  Dica de Verificação
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Após criar os arquivos, execute o comando abaixo para garantir
                  que não existam erros de sintaxe ou módulos faltando:
                </p>
                <code className="block bg-black/40 p-3 rounded font-mono text-xs text-zinc-300 border border-white/5">
                  {'nvim --headless -c "lua print(\'Estrutura OK\')" -c "q"'}
                </code>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
          <Link
            href="/guide/getting-started"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group text-left"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                Anterior
              </p>
              <p className="text-lg font-medium">Getting Started</p>
            </div>
          </Link>
          <Link
            href="/guide/getting-started/init-lua"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group text-right"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                Próximo
              </p>
              <p className="text-lg font-medium">init.lua File</p>
            </div>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </footer>
      </main>

      <Footer />
    </div>
  );
}
