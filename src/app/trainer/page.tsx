"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VirtualKeyboard } from "./components/VirtualKeyboard";
import { shortcuts, Shortcut } from "@/data/shortcuts";
import {
    Search,
    BookOpen,
    ExternalLink,
    Command,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function TrainerPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeShortcut, setActiveShortcut] = useState<Shortcut | null>(null);
    const [showFullList, setShowFullList] = useState(false);
    const [clickedKeyResults, setClickedKeyResults] = useState<{
        key: string;
        results: Shortcut[];
    } | null>(null);

    const filteredShortcuts = searchTerm
        ? shortcuts.filter(
              (s) =>
                  s.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  s.description
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()),
          )
        : [];

    const handleSelect = (shortcut: Shortcut) => {
        setActiveShortcut(shortcut);
        setSearchTerm(shortcut.label);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleKeyClick = (keyLabel: string) => {
        setSearchTerm("");
        setActiveShortcut(null);

        const results = shortcuts.filter((s) =>
            s.keys.map((k) => k.toUpperCase()).includes(keyLabel.toUpperCase()),
        );

        setClickedKeyResults({ key: keyLabel, results });
    };

    return (
        <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col">
            <Header />

            <main className="flex-1 container mx-auto px-6 py-24 animate-in fade-in duration-700">
                {/* Cabeçalho da Seção */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4">
                        O que você quer{" "}
                        <span className="text-gradient">fazer?</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Digite a ação abaixo (ex: "salvar") para descobrir o
                        atalho correspondente.
                    </p>
                </div>

                {/* Legenda de Modos */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-2 px-4">
                    <div
                        className="flex items-center gap-2 group cursor-help"
                        title="Onde você navega e dá ordens (ex: mover cursor, salvar)"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-zinc-200 transition-colors shadow-[0_0_8px_rgba(161,161,170,0.5)]" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
                            Normal: Comandos
                        </span>
                    </div>

                    <div
                        className="flex items-center gap-2 group cursor-help"
                        title="Onde você escreve texto livremente"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:bg-emerald-400 transition-colors shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
                            Insert: Digitar
                        </span>
                    </div>

                    <div
                        className="flex items-center gap-2 group cursor-help"
                        title="Onde você seleciona blocos de texto"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:bg-purple-400 transition-colors shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
                            Visual: Seleção
                        </span>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Barra de Busca */}
                    <div className="relative z-20">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-emerald-400 transition-colors" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-12 pr-4 py-4 bg-zinc-900/80 border border-white/10 rounded-xl text-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all outline-none shadow-xl"
                                placeholder="Busque uma ação... (ex: sair, desfazer)"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    if (e.target.value === "")
                                        setActiveShortcut(null);
                                }}
                            />

                            {/* Dropdown de Resultados da Busca */}
                            {searchTerm && filteredShortcuts.length > 0 && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto z-50">
                                    {filteredShortcuts.map((shortcut) => (
                                        <button
                                            key={shortcut.id}
                                            onClick={() =>
                                                handleSelect(shortcut)
                                            }
                                            onMouseEnter={() =>
                                                setActiveShortcut(shortcut)
                                            }
                                            className={cn(
                                                "w-full text-left px-5 py-3 hover:bg-white/5 transition-colors flex items-center justify-between group/item",
                                                activeShortcut?.id ===
                                                    shortcut.id
                                                    ? "bg-white/5"
                                                    : "",
                                            )}
                                        >
                                            <div>
                                                <p className="font-medium text-zinc-200 group-hover/item:text-emerald-400 transition-colors">
                                                    {shortcut.label}
                                                </p>
                                                <p className="text-xs text-zinc-500">
                                                    {shortcut.description}
                                                </p>
                                            </div>
                                            <div className="flex gap-1">
                                                {shortcut.keys.map((k, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs font-mono bg-black/40 border border-white/10 px-1.5 py-0.5 rounded text-zinc-400"
                                                    >
                                                        {k}
                                                    </span>
                                                ))}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Área de Visualização (Feedback) */}
                    <div className="min-h-[8rem] flex flex-col items-center justify-center py-4 transition-all">
                        {activeShortcut ? (
                            <div className="text-center animate-in slide-in-from-bottom-2 fade-in duration-300">
                                {/* Badge do Modo */}
                                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-zinc-800 text-zinc-400 mb-3 border border-white/5">
                                    Modo {activeShortcut.mode}
                                </span>

                                {/* As Teclas */}
                                <div className="flex items-center gap-3 justify-center">
                                    {activeShortcut.keys.map((k, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center"
                                        >
                                            <span className="text-4xl md:text-6xl font-mono font-bold text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                                                {k}
                                            </span>
                                            {i <
                                                activeShortcut.keys.length -
                                                    1 && (
                                                <span className="text-2xl text-zinc-600 mx-2">
                                                    +
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Descrição */}
                                <p className="text-zinc-500 mt-3 text-sm font-medium">
                                    {activeShortcut.description}
                                </p>
                            </div>
                        ) : clickedKeyResults ? (
                            <div className="text-center animate-in slide-in-from-bottom-2 fade-in duration-300 w-full max-w-2xl">
                                <p className="text-zinc-400 mb-4">
                                    Comandos associados à tecla{" "}
                                    <span className="text-emerald-400 font-bold border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-500/10">
                                        {clickedKeyResults.key}
                                    </span>
                                </p>

                                {clickedKeyResults.results.length > 0 ? (
                                    <div className="grid gap-2">
                                        {clickedKeyResults.results.map(
                                            (cmd) => (
                                                <div
                                                    key={cmd.id}
                                                    className="flex items-center justify-between bg-zinc-900/50 border border-white/5 p-3 rounded-lg text-left"
                                                >
                                                    <div>
                                                        <span className="text-zinc-200 font-medium">
                                                            {cmd.label}
                                                        </span>
                                                        <span className="text-xs text-zinc-500 block">
                                                            {cmd.description}
                                                        </span>
                                                    </div>
                                                    <span className="text-[10px] uppercase bg-white/5 px-2 py-1 rounded text-zinc-400 border border-white/5">
                                                        {cmd.mode}
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                ) : (
                                    <p className="text-zinc-600 italic">
                                        Nenhum comando cadastrado para esta
                                        tecla ainda.
                                    </p>
                                )}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center text-zinc-600 opacity-50">
                                <Command className="w-12 h-12 mb-3 stroke-1" />
                                <p className="text-sm font-mono">
                                    Selecione uma ação para iluminar o teclado
                                </p>
                            </div>
                        )}
                    </div>

                    {/* O Teclado Visual */}
                    <div className="relative mb-12">
                        <VirtualKeyboard
                            highlightedKeys={activeShortcut?.keys || []}
                            onKeyClick={handleKeyClick}
                        />
                    </div>

                    {/* Seção da Lista Completa (Accordion) */}
                    <div className="border-t border-white/5 pt-8">
                        <button
                            onClick={() => setShowFullList(!showFullList)}
                            className="w-full flex items-center justify-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors py-4 group"
                        >
                            <span className="font-mono text-sm uppercase tracking-widest font-bold">
                                {showFullList
                                    ? "Ocultar Lista Completa"
                                    : "Ver Todos os Atalhos mais comuns"}
                            </span>
                            {showFullList ? (
                                <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            ) : (
                                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            )}
                        </button>

                        {showFullList && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 animate-in slide-in-from-top-4 fade-in duration-500">
                                {shortcuts.map((shortcut) => (
                                    <button
                                        key={shortcut.id}
                                        onClick={() => handleSelect(shortcut)}
                                        className={cn(
                                            "flex flex-col items-start p-4 rounded-xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-800/80 hover:border-emerald-500/30 transition-all text-left group",
                                            activeShortcut?.id === shortcut.id
                                                ? "border-emerald-500/50 bg-emerald-500/5"
                                                : "",
                                        )}
                                    >
                                        <div className="flex justify-between w-full mb-2">
                                            <span className="text-zinc-200 font-semibold group-hover:text-emerald-400 transition-colors">
                                                {shortcut.label}
                                            </span>
                                            <span className="text-[10px] text-zinc-500 font-mono uppercase bg-black/20 px-1.5 py-0.5 rounded">
                                                {shortcut.mode}
                                            </span>
                                        </div>
                                        <div className="mt-auto flex gap-1">
                                            {shortcut.keys.map((k, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs font-mono font-bold bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-zinc-400 group-hover:text-zinc-200 group-hover:bg-white/10"
                                                >
                                                    {k}
                                                </span>
                                            ))}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Link para Documentação Oficial */}
                    <div className="mt-12 flex justify-center pb-8">
                        <a
                            href="https://neovim.io/doc/user/index.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-zinc-600 hover:text-emerald-400 transition-colors"
                        >
                            <BookOpen className="w-3 h-3" />
                            <span>Consultar documentação oficial para ver a lista completa</span>
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
