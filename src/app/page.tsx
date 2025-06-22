import Image from "next/image";
import neovim from "../../public/images/neovim.png";
import terminal from "../../public/images/executable.png";
import terminal_2 from "../../public/images/executable2.png";

function Heading() {
  return (
    <div className="heading bg-cover h-screen bg-center flex flex-row align-center w-full justify-center text-white overflow-hidden">
      <div className="bg-linear-(--main-bar-gradient) h-[100%] sm:w-9/10 md:w-5/8 lg:w-2/8 p-3 lg:mr-10 flex flex-col">
        <div className="relative p-8 flex-3 lg:flex-1 m-10">
          <Image
            alt="Neovim Logo"
            src={neovim}
            fill
            className="object-contain grayscale-80 m-auto"
          />
        </div>
        <div className="text-end flex-2">
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
        <Image alt="Terminal 2" src={terminal_2} className="absolute top-3/10 w-6/8" />
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen items-start md:items-stretch justify-between px-8 py-16 gap-8 max-w-7xl mx-auto">
      <div className="md:w-1/3 w-full font-sans font-light">
        <h1 id="sobre" className="text-green-500 text-[250%] mb-4">
          Sobre
        </h1>
        <p className="text-justify my-5">
          O <strong>Neovim</strong> não é uma reescrita, mas uma continuação e extensão do
          <strong> Vim</strong>. Existem muitos clones e derivados, alguns muito
          inteligentes — mas nenhum é o <strong>Vim</strong>. O Neovim foi criado para
          usuários que desejam as partes boas do Vim e muito mais.
        </p>
        <p className="my-5">
          Neovim é um editor de texto baseado em Vim, projetado para extensibilidade e
          usabilidade e para incentivar novas aplicações e contribuições.
        </p>
        <p>
          Visite{" "}
          <a
            className="text-green-400"
            href="https://app.element.io/#/room/#neovim:matrix.org"
          >
            #neovim:matrix.org
          </a>{" "}
          ou #neovim em irc.libera.chat para conversar com a equipe.
        </p>
      </div>

      <div className="md:w-2/3 w-full font-sans font-light">
        <h1 className="text-green-500 text-[250%] mb-4">Vantagens</h1>
        <ul className="list-disc pl-6 space-y-2">
          <li>Rápido, versátil e quase minimalista.</li>
          <li>Aberto a novos colaboradores e com menos barreiras de entrada.</li>
          <li>Favorece autores de plugins.</li>
          <li>
            Fornece uma interface em 'Lua' de primeira classe (como alternativa ao
            Vimscript).
          </li>
          <li>
            Dá referência à componibilidade (pensamento de longo prazo) em vez de
            conceitos novos e incompatíveis (pensamento de curto prazo).
          </li>
          <li>Desenvolvimento contínuo do Vim.</li>
          <li>"Pronto para uso" especialmente para usuários regulares.</li>
          <li>
            Experiência consistente em várias plataformas, visando todas as plataformas
            suportadas pelo libuv.
          </li>
          <li>
            Em questões de gosto/ambiguidade, privilegia a tradição e compatibilidade...
          </li>
          <li>...mas prefere a usabilidade se houver maiores benefícios.</li>
        </ul>
      </div>
    </section>
  );
}

function Installation() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen items-start md:items-stretch justify-between px-8 py-16 gap-8 max-w-7xl mx-auto">
      <div className="md:w-1/3 w-full font-sans font-light">
        <h1 id="sobre" className="text-green-500 text-[250%] mb-4">
          Guia de Instalação
        </h1>
        <p className="mb-4">
          Selecione o sistema operacional no qual deseja instalar o{" "}
          <strong>Neovim</strong>.
        </p>
        <nav className="w-full flex flex-row mb-4">
          <div className="p-5 border-green-400 border-1 m-1 rounded-[8px] flex-1 text-center cursor-pointer hover:bg-green-600 hover:font-bold hover:border-none">
            Windows
          </div>
          <div className="p-5 border-green-400 border-1 m-1 rounded-[8px] flex-1 text-center cursor-pointer hover:bg-green-600 hover:font-bold hover:border-none">
            Linux
          </div>
          <div className="p-5 border-green-400 border-1 m-1 rounded-[8px] flex-1 text-center cursor-pointer hover:bg-green-600 hover:font-bold hover:border-none">
            macOS
          </div>
        </nav>
        <p>
          Consulte a documentação oficial, se preferir,{" "}
          <a
            className="text-green-400 font-bold"
            href="https://github.com/neovim/neovim/blob/master/INSTALL.md"
          >
            clicando aqui
          </a>
          .
        </p>
      </div>

      <div className="md:w-2/3 w-full font-sans font-light">
        <h1 className="text-green-500 text-[250%] mb-4">Windows</h1>
        <div>
          <h2 className="text-green-400 text-[200%] ">Passo 1</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis ab
            facere, iusto voluptate cumque tenetur quod laboriosam, distinctio officiis
            accusamus voluptas, optio itaque in consectetur facilis quia ipsam explicabo.
            Aspernatur.
          </p>
        </div>
        <div>
          <h2 className="text-green-400 text-[200%] ">Passo 2</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis ab
            facere, iusto voluptate cumque tenetur quod laboriosam, distinctio officiis
            accusamus voluptas, optio itaque in consectetur facilis quia ipsam explicabo.
            Aspernatur.
          </p>
        </div>
        <div>
          <h2 className="text-green-400 text-[200%] ">Passo 3</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis ab
            facere, iusto voluptate cumque tenetur quod laboriosam, distinctio officiis
            accusamus voluptas, optio itaque in consectetur facilis quia ipsam explicabo.
            Aspernatur.
          </p>
        </div>
        <div className="p-5 border-green-400 border-1 my-5 rounded-[8px] lg:w-2/3 justify-self-end hover:border-none text-center cursor-pointer hover:bg-green-600 hover:font-bold">
          Consultar documentação oficial
        </div>
      </div>
    </section>
  );
}

function Videos() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen items-start md:items-stretch justify-between px-8 py-16 gap-8 max-w-7xl mx-auto">
      <iframe src="https://www.youtube.com/watch?v=ll6UKVNxPXo"></iframe>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Heading />
      <About />
      <Installation />
      <Videos />
    </>
  );
}
