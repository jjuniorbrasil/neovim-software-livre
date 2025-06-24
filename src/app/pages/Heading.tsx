"use client";

import Image from "next/image";
import neovim from "../../../public/images/neovim.png";
import terminal from "../../../public/images/executable.png";
import terminal_2 from "../../../public/images/executable2.png";

export function Heading() {
  return (
    <div className="heading bg-cover h-screen bg-center flex flex-row align-center w-full justify-center text-white overflow-hidden min-h-screen snap-center px-8 py-16">
      <div className="bg-linear-(--main-bar-gradient) h-[100%] sm:w-9/10 md:w-5/8 lg:w-2/8 p-3 lg:mr-10 flex flex-col">
        <div className="relative p-8 flex-3 lg:flex-1 m-10">
          <Image
            alt="Neovim Logo"
            src={neovim}
            fill
            className="object-contain grayscale-80 m-auto fade-in"
          />
        </div>
        <div className="text-end flex-2 fade-in">
          <h1 className="text-[180%] font-light cursor-default">
            neo<span className="font-bold">vim</span>livre
          </h1>
          <p className="font-sans font-light my-2 cursor-default">
            O <strong>Neovim</strong> não é uma reescrita, mas uma continuação e extensão
            do <strong>Vim</strong>. Existem muitos clones e derivados, alguns muito
            inteligentes — mas nenhum é o <strong>Vim</strong>. O Neovim foi criado para
            usuários que desejam as partes boas do Vim e muito mais.
          </p>
          <span className="font-extralight text-sm">
            (traduzido de <a href="https://neovim.io/charter/">neovim.io/charter</a>)
          </span>
          <div className="flex flex-col text-start text-xl my-2.5 w-max">
            <a href="#sobre" className="cursor-pointer">
              Sobre
            </a>
            <a href="#instalacao" className="cursor-pointer">
              Guia de Instalação
            </a>
            <a href="#videos" className="cursor-pointer">
              Vídeos
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative h-screen w-1/2 p-20">
        <Image
          alt="Terminal 1"
          src={terminal}
          className="fade-in relative top-1/10 left-1/3 z-2"
        />
        <Image alt="Terminal 2" src={terminal_2} className="fade-in absolute top-3/10 w-6/8" />
      </div>
    </div>
  );
}
