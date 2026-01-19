import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ChevronRight, Terminal, Monitor, Apple } from "lucide-react";
import { Alert } from "../components/Alert";

const platforms = [
  {
    title: "Linux",
    description: "Ubuntu, Debian, Fedora, Arch e outras distribuições",
    href: "/guide/installation/linux",
    icon: <Terminal className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "macOS",
    description: "Instalação via Homebrew ou compilação manual",
    href: "/guide/installation/macos",
    icon: <Apple className="w-8 h-8 text-gray-200" />,
  },
  {
    title: "Windows",
    description: "Instalação nativa, via Scoop, Chocolatey ou WSL",
    href: "/guide/installation/windows",
    icon: <Monitor className="w-8 h-8 text-blue-500" />,
  },
];

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumbs conforme Lovable */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
          <Link href="/guide" className="hover:text-zinc-300 transition">
            Guia
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-zinc-300">Instalação</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">
            Instalação do NeoVim
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            O NeoVim pode ser instalado em praticamente qualquer sistema
            operacional moderno. Escolha sua plataforma abaixo para instruções
            detalhadas.
          </p>
        </header>

        <Alert variant="info" title="Versão Recomendada">
          Recomendamos a versão <strong>0.10.0 ou superior</strong> do NeoVim,
          que inclui suporte nativo a LSP aprimorado e melhor integração com
          Lua. Algumas distribuições podem ter versões desatualizadas nos
          repositórios oficiais.
        </Alert>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-white">
          Escolha sua Plataforma
        </h2>

        <div className="grid gap-4 mb-16">
          {platforms.map((platform) => (
            <Link
              key={platform.href}
              href={platform.href}
              className="group flex items-center gap-5 p-6 rounded-md border border-white/10 bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="p-2 transition-transform duration-300 group-hover:scale-110">
                {platform.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors text-white">
                  {platform.title}
                </h3>
                <p className="text-zinc-500">{platform.description}</p>
              </div>

              <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>

        <section className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mb-4">
            Instalação via AppImage (Qualquer Linux)
          </h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Se você quer uma instalação rápida e universal em qualquer
            distribuição Linux, o AppImage é uma excelente opção. Ele não requer
            privilégios de administrador e funciona em praticamente qualquer
            sistema.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">
            Compilando do Código Fonte
          </h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Para usuários avançados que desejam a versão mais recente ou
            funcionalidades experimentais, é possível compilar o NeoVim
            diretamente do código fonte. Esta opção oferece acesso às últimas
            correções e recursos.
          </p>

          <Alert variant="warning" title="Atenção">
            Se você está começando agora, recomendamos usar os métodos de
            instalação oficiais da sua plataforma antes de considerar compilar
            do código fonte.
          </Alert>
        </section>
      </main>

      <Footer />
    </div>
  );
}
