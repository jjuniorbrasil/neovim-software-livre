"use client";

export function About() {
  return (
    <section
      id="sobre"
      className="*:font-normal flex flex-col md:flex-row min-h-screen items-start md:items-stretch justify-between px-8 py-16 gap-8 max-w-7xl mx-auto snap-center"
    >
      <div className="md:w-1/3 w-full font-sans font-light flex flex-col justify-center">
        <h1 className="text-main text-[250%] font-light dark:font-lighter">Sobre</h1>
        <p className="text-justify mb-5">
          O <strong>Neovim</strong> não é uma reescrita, mas uma continuação e extensão do
          <strong> Vim</strong>. Existem muitos clones e derivados, alguns muito
          inteligentes — mas nenhum é o <strong>Vim</strong>. O Neovim foi criado para
          usuários que desejam as partes boas do Vim e muito mais.
        </p>
        <p className="text-justify mb-5 bg-main-lighter p-2">
          Este projeto tem como objetivo reunir informações úteis e em português sobre o
          Neovim.
        </p>
        <p className="mb-5">
          Neovim é um editor de texto baseado em Vim, projetado para extensibilidade e
          usabilidade e para incentivar novas aplicações e contribuições.
        </p>
        <p className="text-justify">
          Visite{" "}
          <a
            className="text-main"
            href="https://app.element.io/#/room/#neovim:matrix.org"
          >
            #neovim:matrix.org
          </a>{" "}
          ou #neovim em irc.libera.chat para conversar com a equipe.
        </p>
      </div>

      <div className="md:w-2/3 w-full font-sans flex flex-col justify-center">
        <h1 className="text-main text-[250%] mb-4 font-light dark:font-lighter">
          Vantagens
        </h1>
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
