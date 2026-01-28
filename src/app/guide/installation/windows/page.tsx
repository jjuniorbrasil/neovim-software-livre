"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Monitor,
  Terminal,
  Folder,
  Check,
  Copy,
} from "lucide-react";
import { Alert } from "../../components/Alert";

// Componente de Bloco de Código Consistente
function CodeBlock({
  code,
  label = "POWERSHELL",
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

type TabKey = "scoop" | "chocolatey" | "winget" | "wsl";
const TAB_META: { key: TabKey; label: string }[] = [
  { key: "scoop", label: "Scoop" },
  { key: "chocolatey", label: "Chocolatey" },
  { key: "winget", label: "Winget" },
  { key: "wsl", label: "WSL" },
];

export default function WindowsInstallationPage() {
  const [active, setActive] = useState<TabKey>("scoop");

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
          <span className="text-zinc-300">Windows</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <Monitor className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Instalação no Windows
            </h1>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed">
            O Neovim no Windows pode ser instalado nativamente ou via WSL.
            Escolha o seu método preferido abaixo.
          </p>
        </header>

        <Alert variant="info" title="Qual método escolher?">
          O <strong>WSL (Windows Subsystem for Linux)</strong> oferece a melhor
          experiência e performance para desenvolvimento. Se preferir algo
          nativo, o <strong>Scoop</strong> é o gerenciador mais amigável para
          desenvolvedores no Windows.
        </Alert>

        <div className="mt-10">
          <div className="flex p-1 bg-zinc-900/50 border border-white/5 rounded-xl mb-8">
            {TAB_META.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  active === t.key
                    ? "bg-zinc-800 text-white shadow-lg ring-1 ring-white/10"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
            {active === "scoop" && (
              <section className="animate-in slide-in-from-bottom-2 duration-500">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Scoop (Recomendado Nativo)
                </h2>
                <p className="text-zinc-400 mb-6">
                  O Scoop instala programas na sua pasta de usuário, evitando
                  poluir o PATH do sistema.
                </p>

                <h3 className="text-lg font-semibold text-zinc-200 mb-2">
                  1. Instalando o Scoop
                </h3>
                <CodeBlock
                  code={`Set-ExecutionPolicy RemoteSigned -Scope CurrentUser\nirm get.scoop.sh | iex`}
                />

                <h3 className="text-lg font-semibold text-zinc-200 mt-8 mb-2">
                  2. Instalando o Neovim e Dependências
                </h3>
                <CodeBlock
                  code={`# Adicionar o bucket extras\nscoop bucket add extras\n\n# Instalar tudo de uma vez\nscoop install neovim git ripgrep fd nodejs`}
                />

                <h3 className="text-lg font-semibold text-zinc-200 mt-8 mb-2">
                  3. Instalando Nerd Fonts
                </h3>
                <CodeBlock
                  code={`scoop bucket add nerd-fonts\nscoop install JetBrainsMono-NF`}
                />
              </section>
            )}

            {active === "chocolatey" && (
              <section className="animate-in slide-in-from-bottom-2 duration-500">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Chocolatey
                </h2>
                <p className="text-zinc-400 mb-6">
                  Um dos gerenciadores mais antigos e robustos para Windows.
                </p>
                <CodeBlock
                  code={`choco install neovim -y\nchoco install git ripgrep fd nodejs -y`}
                />
              </section>
            )}

            {active === "winget" && (
              <section className="animate-in slide-in-from-bottom-2 duration-500">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Winget (Nativo do Windows)
                </h2>
                <p className="text-zinc-400 mb-6">
                  Disponível por padrão no Windows 10 e 11.
                </p>
                <CodeBlock
                  code={`winget install Neovim.Neovim\nwinget install Git.Git BurntSushi.ripgrep.MSVC sharkdp.fd OpenJS.NodeJS`}
                />
              </section>
            )}

            {active === "wsl" && (
              <section className="animate-in slide-in-from-bottom-2 duration-500">
                <h2 className="text-2xl font-bold text-white mb-4">
                  WSL (Recomendado para Devs)
                </h2>
                <p className="text-zinc-400 mb-4">
                  Execute o Neovim em um ambiente Linux real dentro do seu
                  Windows.
                </p>
                <CodeBlock code={`wsl --install`} />
                <p className="text-zinc-500 text-sm mt-4">
                  Após instalar e reiniciar, siga o nosso{" "}
                  <Link
                    href="/guide/installation/linux"
                    className="text-emerald-400 hover:underline"
                  >
                    guia de Linux
                  </Link>{" "}
                  para configurar o Neovim dentro do Ubuntu.
                </p>
              </section>
            )}
          </div>
        </div>

        <section className="mt-16 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-emerald-500" /> Configurando o
              Terminal
            </h2>
            <p className="text-zinc-400 mb-6">
              O Windows Terminal é essencial para uma boa experiência. No
              Windows Terminal:
            </p>
            <ol className="space-y-4 text-zinc-400">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold border border-emerald-500/20">
                  1
                </span>
                <span>
                  Abra as Configurações (
                  <kbd className="bg-zinc-800 px-1 rounded text-zinc-200">
                    Ctrl + ,
                  </kbd>
                  )
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold border border-emerald-500/20">
                  2
                </span>
                <span>Selecione seu perfil (ex: PowerShell ou Ubuntu)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold border border-emerald-500/20">
                  3
                </span>
                <span>
                  Vá em{" "}
                  <strong className="text-zinc-200 font-medium">
                    {'"Aparência"'}
                  </strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold border border-emerald-500/20">
                  4
                </span>
                <span>
                  Em{" "}
                  <strong className="text-zinc-200 font-medium">
                    {'"Tipo de fonte"'}
                  </strong>
                  , selecione{" "}
                  <strong className="text-emerald-400 font-medium">
                    {'"JetBrainsMono Nerd Font"'}
                  </strong>
                </span>
              </li>
            </ol>
          </div>

          <div className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Folder className="w-6 h-6 text-blue-400" /> Onde ficam as
              configurações?
            </h2>
            <p className="text-zinc-400 mb-4">
              No Windows nativo, seu <InlineCode>init.lua</InlineCode> deve
              estar em:
            </p>
            <CodeBlock
              label="PATH"
              code={`%LOCALAPPDATA%\\nvim\\init.lua\n# Geralmente: C:\\Users\\Nome\\AppData\\Local\\nvim\\init.lua`}
            />

            <Alert variant="info" title="Comando rápido">
              Para criar a pasta de configuração via PowerShell: <br />
              <InlineCode>{"mkdir $env:LOCALAPPDATA\\nvim"}</InlineCode>
            </Alert>
          </div>

          <div className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-emerald-500" /> Verificando
            </h2>
            <CodeBlock code={`nvim --version\nnvim +checkhealth`} />
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
          <Link
            href="/guide/installation/macos"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group text-left"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                Anterior
              </p>
              <p className="text-lg font-medium">macOS</p>
            </div>
          </Link>
          <Link
            href="/guide/getting-started"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group text-right"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                Próximo
              </p>
              <p className="text-lg font-medium">Primeiros Passos</p>
            </div>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </footer>
      </main>

      <Footer />
    </div>
  );
}
