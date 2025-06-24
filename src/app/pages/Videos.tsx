"use client";

export function Videos() {
  return (
    <section
      id="videos"
      className="@container flex flex-col lg:flex-row min-h-screen align-middle justify-center px-8 py-16 gap-8 md:w-7/8 mx-auto snap-center"
    >
      <div className="content-center flex-1">
        <h1 className="text-main-lighter text-[250%] font-normal dark:font-light dark:font-lighter">
          Tutorial de Instalação
        </h1>
        <div className="aspect-video flex-1 @max-w-1/3 shadow-black/100 shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/Zj2KCDz4p1I?si=FQMJOtHOE6pY3JK1"
            title="Tutorial de Instalação"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
      <div className="content-center flex-1">
        <h1 className="text-main-lighter text-[250%] font-normal dark:font-light dark:font-lighter">
          Tutorial de Utilização
        </h1>
        <div className="aspect-video flex-1 @max-w-1/3 shadow-black/100 shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/VH-XSRFzQW4?si=GJu7XC-yzGis54lR"
            title="Tutorial de Utilização"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
      <div className="content-center flex-1">
        <h1 className="text-main-lighter text-[250%] font-normal dark:font-light dark:font-lighter">
          Plug-in de vídeos
        </h1>
        <div className="aspect-video flex-1 @max-w-1/3 shadow-black/100 shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/5SkfxnXbDtI?si=_-WETx7kE8eaGptK"
            title="Tutorial de Utilização"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
