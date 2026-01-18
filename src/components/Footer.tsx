import { Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-8 border-t border-border bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <span className="text-xl font-mono font-bold text-primary">nvim</span>
                        <span className="text-muted-foreground text-sm">neovimlivre</span>
                    </div>

                    {/* Links */}
                    <nav className="flex items-center gap-6">
                        <a href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Sobre
                        </a>
                        <a href="#instalacao" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Instalação
                        </a>
                        <a href="#videos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Vídeos
                        </a>
                        <a href="#comments" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Fórum
                        </a>
                    </nav>

                    {/* Credits */}
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span>Feito com</span>
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        <span>por alunos do IFMA</span>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/50 text-center">
                    <p className="text-xs text-muted-foreground font-mono">
                        © {new Date().getFullYear()} neovimlivre. Projeto de Software Livre.
                    </p>
                </div>
            </div>
        </footer>
    );
}
