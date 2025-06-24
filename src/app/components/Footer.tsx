"use client";

import { PropsWithChildren } from "react";

function MarkedText({ children }: PropsWithChildren) {
  return <span className="bg-main">{children}</span>;
}

export function Footer() {
  return (
    <>
      <div className="w-full h-1/12 snap-end p-20 text-end">
        <p>
          Realizado para a disciplina de Software Livre, prof. Salete Farias - Instituto
          Federal do Maranhão - Monte Castelo
        </p>
        <p>Alunos: Felipe Silve, Guilherme José, José Carlos e Pedro Julius</p>
        <a href="https://github.com/jjuniorbrasil/neovim-software-livre">
          <MarkedText>Repositório do Projeto</MarkedText>
        </a>
      </div>
    </>
  );
}
