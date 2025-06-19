import Image from "next/image";
import neovim from "../../public/images/neovim.png";
import terminal from "../../public/images/executable.png";
import terminal_2 from "../../public/images/executable2.png";

function Heading() {
  return (
    <div className="heading bg-cover h-screen bg-center flex flex-row align-center w-full justify-center text-white overflow-hidden">
      <div className="bg-linear-(--main-bar-gradient) h-[100%] sm:w-9/10 md:w-5/8 lg:w-2/8 p-3 lg:mr-10 flex flex-col">
        <div className="p-8 bg-red-400 flex-2">
          teste
          <Image
            alt="Neovim Logo"
            src={neovim}
            
            className="grayscale-80 shadow-2xs m-auto"
          />
        </div>
        <div className="text-end flex-1">
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
            <a href="#sobre">Sobre</a>
            <a href="#">Guia de Instalação</a>
            <a href="#">Vídeos</a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative h-screen w-1/2 p-20">
        <Image
          alt="Terminal 1"
          src={terminal}
          className="relative top-1/10 left-1/3 z-2"
        />
        <Image alt="Terminal 1" src={terminal_2} className="relative bottom-1/5" />
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="h-screen">
      <div className="w-2/3 m-auto font-sans font-bold">
        <h1 id="sobre" className="text-green-50 text-10 text-(--main)">
          Sobre
        </h1>
        <p>
          O <strong>Neovim</strong> não é uma reescrita, mas uma continuação e extensão do
          <strong>Vim</strong>. Existem muitos clones e derivados, alguns muito
          inteligentes — mas nenhum é o <strong>Vim</strong>. O Neovim foi criado para
          usuários que desejam as partes boas do Vim e muito mais.
        </p>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Heading />
      <About />
    </>
  );
}
