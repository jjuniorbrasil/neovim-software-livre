"use client";
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";
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

type TabKey = "ubuntu" | "fedora" | "arch" | "appimage";

export default function LinuxInstallationPage() {
  const [active, setActive] = useState<TabKey>("ubuntu");

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16">
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
          <span className="text-zinc-300">Linux</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">
            Instalação no Linux
          </h1>
          <p className="text-lg text-zinc-400">
            Instruções detalhadas para instalar o NeoVim nas principais
            distribuições Linux.
          </p>
        </header>

        <div className="mb-12">
          <div className="flex p-1 bg-zinc-900/50 border border-white/5 rounded-lg mb-8">
            {(["ubuntu", "fedora", "arch", "appimage"] as TabKey[]).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                    active === tab
                      ? "bg-zinc-800 text-white shadow-sm"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {tab === "ubuntu" && "Ubuntu/Debian"}
                  {tab === "fedora" && "Fedora"}
                  {tab === "arch" && "Arch Linux"}
                  {tab === "appimage" && "AppImage"}
                </button>
              ),
            )}
          </div>

          <div className="space-y-6">
            {active === "ubuntu" && (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-2xl font-bold text-white">
                  Ubuntu / Debian
                </h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  O NeoVim está disponível nos repositórios oficiais, mas
                  geralmente com uma versão desatualizada. Recomendamos usar o
                  PPA oficial para obter a versão mais recente.
                </p>

                <h4 className="mt-8 text-lg font-semibold text-zinc-200">
                  Usando o PPA Oficial (Recomendado)
                </h4>
                <CodeBlock
                  code={`# Adicionar o repositório do NeoVim
sudo add-apt-repository ppa:neovim-ppa/unstable

# Atualizar a lista de pacotes
sudo apt update

# Instalar o NeoVim
sudo apt install neovim`}
                />

                <Alert variant="info" title="Stable vs Unstable">
                  O PPA <InlineCode>unstable</InlineCode> contém as versões mais
                  recentes (recomendado). Se preferir uma versão mais estável,
                  use <InlineCode>ppa:neovim-ppa/stable</InlineCode>.
                </Alert>

                <h4 className="mt-10 text-lg font-semibold text-zinc-200">
                  Via Repositório Oficial
                </h4>
                <CodeBlock
                  code={`sudo apt update
sudo apt install neovim`}
                />
                <p className="text-sm text-zinc-500 italic">
                  Nota: Esta opção pode instalar uma versão mais antiga do
                  NeoVim.
                </p>
              </div>
            )}

            {active === "fedora" && (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-2xl font-bold text-white">Fedora</h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  O Fedora mantém versões relativamente atualizadas do NeoVim
                  nos repositórios oficiais.
                </p>
                <h4 className="mt-8 text-lg font-semibold text-zinc-200">
                  Instalação Padrão
                </h4>
                <CodeBlock code={`sudo dnf install neovim`} />

                <h4 className="mt-10 text-lg font-semibold text-zinc-200">
                  Dependências Opcionais
                </h4>
                <p className="text-zinc-400 mb-2">
                  Para suporte completo a Python e Node.js:
                </p>
                <CodeBlock
                  code={`# Suporte a Python
sudo dnf install python3-neovim

# Suporte a Node.js (necessário para alguns plugins)
sudo dnf install nodejs`}
                />
              </div>
            )}

            {active === "arch" && (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-2xl font-bold text-white">Arch Linux</h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  O Arch Linux sempre mantém a versão mais recente do NeoVim nos
                  repositórios oficiais.
                </p>
                <h4 className="mt-8 text-lg font-semibold text-zinc-200">
                  Instalação via Pacman
                </h4>
                <CodeBlock code={`sudo pacman -S neovim`} />

                <h4 className="mt-10 text-lg font-semibold text-zinc-200">
                  Versão de Desenvolvimento (Git)
                </h4>
                <p className="text-zinc-400 mb-2">
                  Para a versão mais recente de desenvolvimento, você pode usar
                  o AUR:
                </p>
                <CodeBlock
                  code={`# Usando yay
yay -S neovim-git

# Ou usando paru
paru -S neovim-git`}
                />
              </div>
            )}

            {active === "appimage" && (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-2xl font-bold text-white">
                  AppImage (Universal)
                </h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  O AppImage funciona em qualquer distribuição Linux sem
                  necessidade de instalação tradicional.
                </p>
                <h4 className="mt-8 text-lg font-semibold text-zinc-200">
                  Download e Instalação
                </h4>
                <CodeBlock
                  code={`# Baixar o AppImage
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage

# Tornar executável
chmod u+x nvim.appimage

# Executar
./nvim.appimage`}
                />

                <h4 className="mt-10 text-lg font-semibold text-zinc-200">
                  Instalação Global (Opcional)
                </h4>
                <CodeBlock
                  code={`# Mover para um diretório no PATH
sudo mv nvim.appimage /usr/local/bin/nvim

# Agora você pode executar de qualquer lugar
nvim`}
                />

                <Alert variant="warning" title="FUSE Necessário">
                  O AppImage requer FUSE para funcionar. Se você receber um
                  erro, instale-o com:
                  <br />
                  <br />
                  <InlineCode>sudo apt install libfuse2</InlineCode>{" "}
                  (Ubuntu/Debian) ou equivalente na sua distribuição.
                </Alert>
              </div>
            )}
          </div>
        </div>

        <hr className="border-white/5 my-16" />

        {/* Seções Adicionais Restauradas */}
        <section className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Dependências Recomendadas
            </h2>
            <p className="text-zinc-400 mb-6">
              Após instalar o NeoVim, recomendamos instalar estas dependências
              para aproveitar todos os recursos do editor:
            </p>
            <CodeBlock
              code={`# Ubuntu/Debian
sudo apt install git ripgrep fd-find curl nodejs npm

# Fedora
sudo dnf install git ripgrep fd-find curl nodejs npm

# Arch Linux
sudo pacman -S git ripgrep fd curl nodejs npm`}
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Instalando uma Nerd Font
            </h2>
            <p className="text-zinc-400 mb-6">
              Para exibir ícones corretamente, você precisa de uma Nerd Font.
              Recomendamos a JetBrains Mono:
            </p>
            <CodeBlock
              code={`# Criar diretório de fontes (se não existir)
mkdir -p ~/.local/share/fonts

# Baixar e instalar JetBrains Mono Nerd Font
cd ~/.local/share/fonts
curl -fLo "JetBrains Mono Regular Nerd Font Complete.ttf" \\
  https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/JetBrainsMono.zip

# Atualizar cache de fontes
fc-cache -fv`}
            />
            <Alert variant="info" title="Configuração do Terminal">
              Após instalar a fonte, configure seu terminal para usá-la. O
              processo varia de acordo com o terminal que você usa.
            </Alert>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              Verificando a Instalação{" "}
              <CheckCircle2 className="text-emerald-500 w-8 h-8" />
            </h2>
            <p className="text-zinc-400 mb-6">
              Para confirmar que o NeoVim foi instalado corretamente:
            </p>
            <CodeBlock
              code={`# Verificar versão
nvim --version

# Verificar saúde do sistema
nvim +checkhealth`}
            />
            <p className="text-zinc-400 leading-relaxed">
              O comando <InlineCode>checkhealth</InlineCode> mostra um relatório
              completo do status do NeoVim, incluindo quais dependências estão
              instaladas e quais estão faltando.
            </p>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
          <Link
            href="/guide/installation"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                Anterior
              </p>
              <p className="text-lg font-medium">Instalação</p>
            </div>
          </Link>
          <Link
            href="/guide/installation/macos"
            className="flex items-center gap-2 text-right text-zinc-500 hover:text-emerald-400 transition-colors group"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                Próximo
              </p>
              <p className="text-lg font-medium">macOS</p>
            </div>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </footer>
      </main>

      <Footer />
    </div>
  );
}
