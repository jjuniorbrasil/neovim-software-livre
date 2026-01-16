import Giscus from "@giscus/react";

export function Comments() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-10 snap-center">
      <h2 className="text-main text-[200%] mb-8 font-light">
        Comentários & Feedback
      </h2>
      <div className="bg-white/5 dark:bg-black/20 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
        <Giscus
          id="comments"
          repo={process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`}
          repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID as string}
          category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
          categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
          mapping="pathname"
          term="Bem-vindo aos comentários!"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="pt"
          loading="lazy"
        />
      </div>
    </div>
  );
}
