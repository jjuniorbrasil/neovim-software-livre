"use client";
import { useState } from "react";
import { guides } from "./guides";

type System = "Windows" | "Linux" | "macOS";

export function Installation() {
  const [selectedOS, setSelectedOS] = useState<System>("Windows");

  return (
    <section
      id="instalacao"
      className="*:font-normal flex flex-col md:flex-row min-h-screen align-middle md:items-stretch px-8 py-16 gap-8 max-w-7xl mx-auto snap-center"
    >
      <div className="md:w-1/3 w-full font-sans font-light flex flex-col justify-center">
        <h1 id="sobre" className="text-main text-[250%] mb-4">
          Guia de Instalação
        </h1>
        <p className="mb-4">
          Selecione o sistema operacional no qual deseja instalar o{" "}
          <strong>Neovim</strong>.
        </p>
        <nav className="w-full flex flex-row mb-4">
          {Object.keys(guides).map((os) => (
            <button
              key={os}
              onClick={() => setSelectedOS(os as System)}
              className={`p-4 border-main-lighter border-1 m-1 rounded-[8px] flex-1 text-center cursor-pointer transition
                ${
                  selectedOS === os
                    ? "bg-green-600 text-white font-bold border-none"
                    : "hover:bg-green-600 hover:text-white hover:font-bold"
                }`}
            >
              {os}
            </button>
          ))}
        </nav>
        <p>
          Consulte a documentação oficial, se preferir,{" "}
          <a
            className="text-main-lighter font-bold"
            href="https://github.com/neovim/neovim/blob/master/INSTALL.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            clicando aqui
          </a>
          .
        </p>
        <hr className="block sm:hidden mt-10" />
        <h1 id="sobre" className="hidden md:block text-main text-[250%] mb-4">
          ou...
        </h1>
        <a href="#videos"
          className={
            "hidden md:block p-4 border-main-lighter border-1 m-1 rounded-[8px] text-center cursor-pointer transition hover:bg-green-600 hover:text-white hover:font-bold"
          }
        >
          Veja os vídeos tutoriais
        </a>
      </div>

      <div className="hidden md:block m-12 w-[1px] bg-white"></div>

      <div className="md:w-2/3 w-full font-sans font-light flex flex-col justify-center">
        {guides[selectedOS]}

        <a
          href="https://github.com/neovim/neovim/blob/master/INSTALL.md"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 border-main-lighter border-1 my-5 rounded-[8px] lg:w-2/3 text-center cursor-pointer hover:text-white hover:bg-green-600 hover:font-bold mx-auto"
        >
          Consulte documentação oficial
        </a>
      </div>
    </section>
  );
}
