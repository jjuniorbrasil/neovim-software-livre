"use client";

import { ReactNode } from "react";

export const guides: { Windows: ReactNode; Linux: ReactNode; macOS: ReactNode } = {
  Windows: (
    <div className="fade-in">
      <h1 className="text-main text-[250%] mb-4">Windows</h1>
      <p>É necessário Windows 8 ou superior. Windows 7 ou mais antigo não é suportado.</p>
      <div>
        <h2 className="text-main-lighter text-[200%] mt-4">
          Instalação pelo &apos;.msi&apos;
        </h2>
        <p>
          Faça o download clicando{" "}
          <a
            className="text-main underline"
            href="https://github.com/neovim/neovim/releases/latest/download/nvim-win64.msi"
            target="_blank"
            rel="noopener noreferrer"
          >
            aqui
          </a>
          .
        </p>
      </div>
      <div>
        <h2 className="text-main-lighter text-[200%] mt-4">WinGet</h2>
        <p>
          Instale pelo{" "}
          <a
            className="text-main-lighter underline"
            href="https://learn.microsoft.com/windows/package-manager/winget/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WinGet
          </a>{" "}
          com o comando:
        </p>
        <code className="block border-gray-50/10 border-1 p-3 my-2 rounded bg-gray-700 text-white">
          winget install Neovim.Neovim
        </code>
      </div>
      <div>
        <h2 className="text-main-lighter text-[200%] mt-4">Configuração Inicial</h2>
        <p>
          Após a instalação, crie o arquivo <code>init.vim</code> no caminho{" "}
          <code className="bg-gray-500/10 p-1">%userprofile%\AppData\Local\nvim\</code>{" "}
          para personalizar sua configuração.
        </p>
      </div>
    </div>
  ),
  Linux: (
    <div className="fade-in">
      <h1 className="text-main text-[250%] mb-4">Linux</h1>
      <p>
        Você pode instalar o Neovim no Linux utilizando o gerenciador de pacotes da sua
        distribuição:
      </p>
      <ul className="list-disc pl-6 my-2">
        <li>
          Debian/Ubuntu:{" "}
          <code className="bg-gray-700 px-1 rounded text-white">
            sudo apt install neovim
          </code>
        </li>
        <li>
          Arch Linux:{" "}
          <code className="bg-gray-700 px-1 rounded text-white">
            sudo pacman -S neovim
          </code>
        </li>
        <li>
          Fedora:{" "}
          <code className="bg-gray-700 px-1 rounded text-white">
            sudo dnf install neovim
          </code>
        </li>
      </ul>
      <p className="mt-2">
        Para versões mais recentes, utilize o{" "}
        <a
          className="text-main underline"
          href="https://github.com/neovim/neovim/wiki/Installing-Neovim"
          target="_blank"
          rel="noopener noreferrer"
        >
          guia oficial
        </a>
        .
      </p>
    </div>
  ),
  macOS: (
    <div className="fade-in">
      <h1 className="text-main text-[250%] mb-4">macOS</h1>
      <p>Recomenda-se o uso do Homebrew para instalação:</p>
      <code className="block border-gray-50/10 border-1 p-3 my-2 rounded bg-gray-700 text-white">
        brew install neovim
      </code>
      <p className="mt-2">
        Caso não tenha o Homebrew instalado, consulte{" "}
        <a
          className="text-main underline"
          href="https://brew.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          este link
        </a>
        .
      </p>
    </div>
  ),
};
