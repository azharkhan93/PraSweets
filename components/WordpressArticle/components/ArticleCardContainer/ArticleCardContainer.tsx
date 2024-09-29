import { ArticleCard } from "@/app/components";
import { Article } from "@/app/components/WordpressArticle/";

const BASE_URL = process.env.BASE_URL || "";

type ArticleCardContainerProps = {
  articleId: string;
};

async function fetchRelatedArticles(articleId: string) {
  const response = await fetch(
    `https://arista.hyperhits.net/wp-json/wp/v2/posts?status=publish&order=desc&orderby=date&exclude=${articleId}&per_page=3`,
    { cache: "no-store" }
  );

  const articles = await response.json();

  if (articles.length > 0) {
    // console.log(articles);
    return articles;
  } else {
    return new Response("Error", { status: 404 });
  }
}

export const ArticleCardContainer: React.FC<
  ArticleCardContainerProps
> = async ({ articleId }) => {
  const relatedArticles = await fetchRelatedArticles(articleId);

  const authorId: {
    [key: string]: {
      name: string;
    };
  } = {
    1: { name: "User" },
    2: { name: "Wajahat Banday" },
  };

  if (!relatedArticles) return null;

  return (
    <div className="w-full flex flex-wrap justify-center gap-5 px-3 py-3 reveal reveal-from-top mb-5 relative">
      {relatedArticles.map((data: Article, index: number) => (
        <ArticleCard
          date={data.date}
          image={""}
          heading={data.title.rendered}
          para={data.excerpt.rendered}
          href={`/blog/${data.slug}`}
          author={authorId[data.author]?.name || "Unknown Author"}
          key={index}
        />
      ))}
    </div>
  );
};
