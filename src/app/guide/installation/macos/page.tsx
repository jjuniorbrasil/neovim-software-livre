"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Apple,
  ExternalLink,
  Terminal,
} from "lucide-react";
import { Alert } from "../../components/Alert";

function CodeBlock({ code, label = "BASH" }: { code: string; label?: string }) {
  return (
    <div className="my-6 rounded-lg border border-white/10 bg-zinc-900/50 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-zinc-900/80">
        <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
          {label}
        </span>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm text-zinc-300 leading-relaxed">
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

export default function MacOSInstallationPage() {
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
            href="/guide/installation"
            className="hover:text-zinc-300 transition"
          >
            Instalação
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-zinc-300">macOS</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <Apple className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Instalação no macOS
            </h1>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Instruções para instalar o NeoVim no macOS usando Homebrew ou
            métodos alternativos.
          </p>
        </header>

        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Usando Homebrew (Recomendado)
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              O Homebrew é o método mais simples e recomendado para instalar o
              NeoVim no macOS. Se você ainda não tem o Homebrew instalado, pode
              obtê-lo em{" "}
              <a
                href="https://brew.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline inline-flex items-center gap-1"
              >
                brew.sh <ExternalLink className="w-3 h-3" />
              </a>
              .
            </p>

            <h3 className="text-lg font-semibold text-zinc-200 mt-8 mb-2">
              Instalando o Homebrew
            </h3>
            <p className="text-zinc-400 mb-4">
              Se você ainda não tem o Homebrew, execute:
            </p>
            <CodeBlock
              code={`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}
            />

            <h3 className="text-lg font-semibold text-zinc-200 mt-8 mb-2">
              Instalando o NeoVim
            </h3>
            <CodeBlock
              code={`# Instalar a versão estável
brew install neovim

# Ou instalar a versão de desenvolvimento (mais recente)
brew install --HEAD neovim`}
            />

            <Alert variant="info" title="HEAD vs Stable">
              A versão <InlineCode>HEAD</InlineCode> é compilada diretamente do
              código fonte mais recente. É útil para acessar recursos novos, mas
              pode ser menos estável. Para a maioria dos usuários, a versão
              estável é suficiente.
            </Alert>
          </div>

          <hr className="border-white/5" />

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Atualizando o NeoVim
            </h2>
            <p className="text-zinc-400 mb-4">
              Para atualizar o NeoVim no futuro:
            </p>
            <CodeBlock
              code={`# Atualizar para a versão mais recente
brew upgrade neovim

# Se estiver usando HEAD
brew upgrade --fetch-HEAD neovim`}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Dependências Recomendadas
            </h2>
            <p className="text-zinc-400 mb-6">
              Instale estas ferramentas adicionais para uma experiência
              completa:
            </p>
            <CodeBlock
              code={`# Ferramentas essenciais
brew install git ripgrep fd node

# Fontes com ícones (Nerd Fonts)
brew tap homebrew/cask-fonts
brew install --cask font-jetbrains-mono-nerd-font`}
            />

            <h3 className="text-lg font-semibold text-zinc-200 mb-4">
              O que cada ferramenta faz:
            </h3>
            <ul className="grid gap-3">
              {[
                {
                  name: "git",
                  desc: "Controle de versão e gerenciamento de plugins",
                },
                {
                  name: "ripgrep",
                  desc: "Busca ultra-rápida em arquivos (usado pelo Telescope)",
                },
                { name: "fd", desc: "Alternativa rápida ao find" },
                {
                  name: "node",
                  desc: "Runtime JavaScript (necessário para alguns servidores LSP)",
                },
              ].map((tool) => (
                <li key={tool.name} className="flex gap-3 text-zinc-400">
                  <span className="text-emerald-400 font-mono font-bold">
                    {tool.name}
                  </span>
                  <span className="text-zinc-500">—</span>
                  <span>{tool.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Configurando o Terminal
            </h2>
            <p className="text-zinc-400 mb-4">
              Após instalar a Nerd Font, configure seu terminal para usá-la. No
              Terminal.app nativo:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-zinc-400 ml-2">
              <li>
                Abra as Preferências do Terminal (
                <kbd className="bg-zinc-800 px-1 rounded">⌘</kbd> +{" "}
                <kbd className="bg-zinc-800 px-1 rounded">,</kbd>)
              </li>
              <li>Selecione seu perfil</li>
              <li>
                Clique em{" "}
                <strong className="text-zinc-200 font-medium">
                  {'"Alterar"'}
                </strong>{" "}
                na seção {'"Fonte"'}
              </li>
              <li>
                Selecione{" "}
                <strong className="text-emerald-400 font-medium">
                  {'"JetBrainsMono Nerd Font"'}
                </strong>
              </li>
            </ol>

            <div className="mt-6">
              <Alert variant="info" title="iTerm2">
                Se você usa o iTerm2, vá em{" "}
                <strong>Preferences → Profiles → Text → Font</strong>e selecione
                a fonte instalada.
              </Alert>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Instalação via MacPorts
            </h2>
            <p className="text-zinc-400 mb-4">
              Se você prefere o MacPorts ao Homebrew:
            </p>
            <CodeBlock code={`sudo port install neovim`} />
          </div>

          <div className="pt-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-emerald-500" /> Verificando a
              Instalação
            </h2>
            <CodeBlock
              code={`# Verificar versão
nvim --version

# Executar diagnóstico completo
nvim +checkhealth`}
            />
            <p className="text-zinc-400 leading-relaxed mb-6">
              O comando <InlineCode>checkhealth</InlineCode> irá verificar se
              todas as dependências estão configuradas corretamente e mostrará
              avisos sobre qualquer problema encontrado.
            </p>

            <Alert variant="warning" title="Python e Ruby">
              Se você planeja usar plugins que dependem de Python ou Ruby, pode
              ser necessário instalar os providers correspondentes:
              <br />
              <br />
              <InlineCode>pip3 install pynvim</InlineCode>
              <br />
              <InlineCode>gem install neovim</InlineCode>
            </Alert>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
          <Link
            href="/guide/installation/linux"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group text-left"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                Anterior
              </p>
              <p className="text-lg font-medium">Linux</p>
            </div>
          </Link>
          <Link
            href="/guide/installation/windows"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group text-right"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                Próximo
              </p>
              <p className="text-lg font-medium">Windows</p>
            </div>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </footer>
      </main>

      <Footer />
    </div>
  );
}
