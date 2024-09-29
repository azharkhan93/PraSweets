import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";

import { ArticleCardContainer, ShareLink } from "./components";
import { theme } from "@/app/theme";

type WordPressArticleProps = {
  article: Article;
};

export type Article = {
  id: string;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  author: string;
  // & {
  //   [key: string]: string;
  // };
};

export const WordPressArticle: React.FC<WordPressArticleProps> = ({
  article,
}) => {
  if (!article) {
    return <h1>Not found</h1>;
  }

  const unformattedDate = new Date(article.date);
  const formattedDate = unformattedDate.toLocaleString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const authorId: {
    [key: string]: {
      name: string;
    };
  } = {
    1: { name: "User" },
    2: { name: "Wajahat Banday" },
  };

  const twitterHref = `https://twitter.com/intent/tweet?text=${article.title.rendered}&url=arista-villas.com/blog/${article.slug}`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=arista-villas.com/blog/${article.slug}`;
  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=arista-villas.com/blog/${article.slug}`;

  return (
    <article className="w-full flex flex-col items-center gap-10">
      <div className="w-full md:w-[45%] flex flex-col justify-center items-left gap-5 px-5">
        <div>
          <h1 className="text-[2.5em] md:text-[3.5em] reveal reveal-from-left text-left leading-[50px] md:leading-[65px] blogHeadingFont">
            {article.title.rendered}
          </h1>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <p className="text-lg md:text-xl reveal reveal-from-right blogParaFont">
              {formattedDate} {"-"} by{" "}
              {authorId[article.author]?.name || "Unknown Author"}
            </p>
          </div>
          <div className="flex flex-row gap-5 reveal reveal-from-right">
            <ShareLink
              href={facebookHref}
              icon={
                <TiSocialFacebook size={30} color={theme.colors.primaryColor} />
              }
            />
            <ShareLink
              href={twitterHref}
              icon={
                <TiSocialTwitter size={30} color={theme.colors.primaryColor} />
              }
            />
            <ShareLink
              href={linkedInHref}
              icon={
                <TiSocialLinkedin size={30} color={theme.colors.primaryColor} />
              }
            />
          </div>
        </div>
      </div>
      <div
        className="w-full md:w-[45%] reveal reveal-from-right px-5 wp-article"
        dangerouslySetInnerHTML={{
          __html: article.content.rendered.replace(
            / data-(?!react[\w-]+=)[\w-]+="[^"]*"/g,
            ""
          ),
        }}
      />
      <div className="w-[70%] border-b-[2px] border-primaryColor reveal reveal-from-left"></div>
      <div className="w-full md:w-[45%] flex flex-col justify-center items-center gap-5 px-5 reveal reveal-from-right">
        <h1 className="text-[2.5em] md:text-[3.5em] blogHeadingFont">
          Related Articles
        </h1>
      </div>
      <div className="reveal reveal-from-left">
        <ArticleCardContainer articleId={article.id} />
      </div>
    </article>
  );
};
