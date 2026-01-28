"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Alert } from "../../components/Alert";
import {
  ChevronRight,
  ChevronLeft,
  Settings2,
  Layout,
  Type,
  Search,
  Zap,
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

export default function OptionsPage() {
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
          <span className="text-zinc-300">Basic Options</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 shadow-inner">
              <Settings2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Opções Básicas
            </h1>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Configurações essenciais que transformam o NeoVim em um editor
            moderno. Vamos configurar o arquivo{" "}
            <InlineCode>options.lua</InlineCode>.
          </p>
        </header>

        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Layout className="w-6 h-6 text-blue-400" /> O Arquivo de
              Configuração
            </h2>
            <p className="text-zinc-400 mb-6">
              Edite o arquivo <InlineCode>lua/user/options.lua</InlineCode>.
              Note o uso de blocos visuais para organizar cada categoria.
            </p>
            <CodeBlock
              label="~/.config/nvim/lua/user/options.lua"
              code={`local opt = vim.opt\n\n-- Interface\nopt.number = true          -- Número absoluto na linha atual\nopt.relativenumber = true  -- Números relativos nas outras\nopt.termguicolors = true   -- Cores 24-bit\nopt.cursorline = true      -- Destacar linha atual\n\n-- Indentação\nopt.tabstop = 2            -- Largura visual do tab\nopt.shiftwidth = 2         -- Espaços por indentação\nopt.expandtab = true       -- Converter tab em espaços\nopt.smartindent = true     -- Indentação inteligente\n\n-- Comportamento\nopt.clipboard = "unnamedplus" -- Clipboard do sistema\nopt.splitright = true         -- Split vertical à direita\nopt.splitbelow = true         -- Split horizontal abaixo\nopt.undofile = true           -- Undo persistente entre sessões\nopt.updatetime = 250          -- Delay de resposta (ms)`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
            <div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Search className="w-5 h-5 text-emerald-400" /> Busca
                Inteligente
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Utilize <InlineCode>ignorecase</InlineCode> e{" "}
                <InlineCode>smartcase</InlineCode> para que a busca ignore
                maiúsculas a menos que você digite uma explicitamente.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" /> Performance
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Reduzir o <InlineCode>updatetime</InlineCode> para 250ms torna a
                interface mais reativa para plugins que mostram erros ou
                diagnósticos.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Alert title="Clipboard no Linux">
              Para o <InlineCode>unnamedplus</InlineCode> funcionar no Linux,
              você deve ter o <InlineCode>xclip</InlineCode> (X11) ou{" "}
              <InlineCode>wl-clipboard</InlineCode> (Wayland) instalado no seu
              sistema.
            </Alert>

            <Alert variant="info" title="Undo Persistente">
              Ao ativar o <InlineCode>undofile</InlineCode>, o Neovim cria uma
              pasta interna para salvar o histórico. Você poderá dar{" "}
              {' "Undo" '}
              mesmo após fechar e abrir o terminal dias depois.
            </Alert>
          </div>

          <div className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Type className="w-6 h-6 text-purple-400" /> Opções por Arquivo
            </h2>
            <p className="text-zinc-400 mb-4">
              Algumas linguagens pedem regras diferentes. Você pode usar{" "}
              <InlineCode>vim.opt_local</InlineCode> dentro de autocomandos:
            </p>
            <CodeBlock
              code={`-- Python costuma usar 4 espaços\nvim.api.nvim_create_autocmd("FileType", {\n  pattern = "python",\n  callback = function()\n    vim.opt_local.tabstop = 4\n    vim.opt_local.shiftwidth = 4\n  end,\n})`}
            />
          </div>

          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <h3 className="text-emerald-400 font-bold mb-2">Dica de mestre</h3>
            <p className="text-lg text-zinc-400 leading-relaxed">
              O <InlineCode>init.lua</InlineCode> é o {' "ponto zero" '} do seu
              Neovim. É a partir dele que o editor ganha vida e carrega toda a
              sua personalização.
            </p>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
          <Link
            href="/guide/getting-started/init-lua"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group text-left"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                Anterior
              </p>
              <p className="text-lg font-medium">init.lua File</p>
            </div>
          </Link>
          <div className="text-right opacity-50 cursor-not-allowed">
            <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
              Próximo
            </p>
            <p className="text-lg font-medium">Plugins (Em breve)</p>
          </div>
        </footer>
      </main>

      <Footer />
    </div>
  );
}
