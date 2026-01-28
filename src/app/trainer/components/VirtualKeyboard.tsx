"use client";

import { cn } from "@/lib/utils";

interface VirtualKeyboardProps {
  highlightedKeys: string[];
  onKeyClick?: (key: string) => void;
}

export function VirtualKeyboard({ highlightedKeys, onKeyClick }: VirtualKeyboardProps) {
  const activeKeys = highlightedKeys.map((k) => k.toUpperCase());

  const isKeyActive = (keyLabel: string) => {
    const labelUpper = keyLabel.toUpperCase();
    
    // Mapeamentos Especiais de Teclas de Controle
    if (labelUpper === "CTRL" && activeKeys.includes("CTRL")) return true;
    if (labelUpper === "SHIFT" && activeKeys.includes("SHIFT")) return true;
    if (labelUpper === "ALT" && activeKeys.includes("ALT")) return true;
    if (labelUpper === "ENTER" && activeKeys.includes("ENTER")) return true;
    if (labelUpper === "BKSP" && activeKeys.includes("BACKSPACE")) return true;
    
    if ((labelUpper === ";" || labelUpper === ":") && (activeKeys.includes(":") || activeKeys.includes(";"))) return true;

    if ((labelUpper === "/" || labelUpper === "?") && (activeKeys.includes("/") || activeKeys.includes("?"))) return true;

    if (labelUpper === "G" && activeKeys.includes("G")) return true;

    return activeKeys.includes(labelUpper);
  };

  const Key = ({ label, subLabel, className = "", width = "w-10 sm:w-12" }: { label: string; subLabel?: string; className?: string; width?: string }) => {
    const active = isKeyActive(label) || (subLabel && isKeyActive(subLabel));
    
    return (
      <button
        onClick={() => onKeyClick?.(label)}
        className={cn(
          "relative flex items-center justify-center rounded-lg border text-xs sm:text-sm font-mono font-bold transition-all duration-100 shadow-sm select-none h-10 sm:h-12 active:scale-95",
          width,
          active
            ? "bg-primary text-primary-foreground border-primary glow-primary z-10 scale-105"
            : "bg-muted/40 border-white/5 text-muted-foreground hover:bg-white/10 hover:text-zinc-200",
          className
        )}
      >
        <span>{label}</span>
        
        {subLabel && (
          <span className="absolute top-1 right-1.5 text-[8px] opacity-60 font-normal">
            {subLabel}
          </span>
        )}
      </button>
    );
  };

  return (
    <div className="w-full p-6 glass-card rounded-2xl overflow-x-auto border border-white/5 bg-black/20">
      <div className="flex flex-col gap-2 min-w-[700px] mx-auto w-fit">
        
        {/* Linha 1: Números */}
        <div className="flex gap-1.5 justify-center">
          <Key label="'" subLabel='"' />
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((k) => (
            <Key key={k} label={k} />
          ))}
          <Key label="-" subLabel="_" />
          <Key label="=" subLabel="+" />
          <Key label="Bksp" width="w-20" className="text-xs" />
        </div>

        {/* Linha 2 */}
        <div className="flex gap-1.5 justify-center">
          <Key label="Tab" width="w-20" className="text-xs" />
          {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((k) => (
            <Key key={k} label={k} />
          ))}
          <Key label="´" subLabel="`" /> 
          <Key label="[" subLabel="{" />
          <Key label="Enter" width="w-16" className="text-emerald-400 text-xs rounded-b-none h-12 mb-[-50px] z-20" />
        </div>

        {/* Linha 3 */}
        <div className="flex gap-1.5 justify-center">
          <Key label="Caps" width="w-24" className="text-xs" />
          {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((k) => (
            <Key key={k} label={k} />
          ))}
          <Key label="Ç" /> 
          <Key label="~" subLabel="^" />
          <Key label="]" subLabel="}" />
           <div className="w-4" /> 
        </div>

        {/* Linha 4 */}
        <div className="flex gap-1.5 justify-center pl-4">
          <Key label="Shift" width="w-16" className="text-xs" />
          <Key label="\" subLabel="|" /> 
          {["Z", "X", "C", "V", "B", "N", "M"].map((k) => (
            <Key key={k} label={k} />
          ))}
          <Key label="," subLabel="<" />
          <Key label="." subLabel=">" />
          <Key label=";" subLabel=":" /> 
          <Key label="/" subLabel="?" />
          <Key label="Shift" width="w-24" className="text-xs" />
        </div>

        {/* Linha 5: Espaço */}
        <div className="flex gap-1.5 justify-center">
          <Key label="Ctrl" width="w-16" className="text-xs" />
          <Key label="Win" width="w-16" className="text-xs" />
          <Key label="Alt" width="w-16" className="text-xs" />
          <Key label="Space" width="w-[300px]" className="text-xs" />
          <Key label="AltGr" width="w-16" className="text-xs" />
          <Key label="Fn" width="w-16" className="text-xs" />
          <Key label="Ctrl" width="w-16" className="text-xs" />
        </div>
      </div>
    </div>
  );
}