"use client";
import { useState } from "react";
import { shortcuts } from "../../../data/shortcuts";
import { VirtualKeyboard } from "./VirtualKeyboard";

export function KeyboardTrainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  // Filtra as ações conforme o usuário digita
  const filteredShortcuts = shortcuts.filter(s => 
    s.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectShortcut = (keys: string[]) => {
    setActiveKeys(keys); // Isso vai "acender" o teclado
  };

  return (
    <div className="flex flex-col gap-8">
      {/* 1. Barra de Busca Inversa */}
      <div className="w-full max-w-md mx-auto">
        <input 
          type="text" 
          placeholder="O que você quer fazer? (ex: salvar)"
          className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-xl text-white"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        {/* Lista de sugestões (só aparece se tiver busca) */}
        {searchTerm && (
          <div className="mt-2 bg-zinc-800 rounded-lg p-2 max-h-40 overflow-y-auto">
            {filteredShortcuts.map(shortcut => (
              <button 
                key={shortcut.id}
                onClick={() => handleSelectShortcut(shortcut.keys)}
                className="block w-full text-left p-2 hover:bg-zinc-700 rounded text-sm text-zinc-300"
              >
                {shortcut.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 2. O Teclado Visual */}
      <VirtualKeyboard highlightedKeys={activeKeys} />
    </div>
  );
}