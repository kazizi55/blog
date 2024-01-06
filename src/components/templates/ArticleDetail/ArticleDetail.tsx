"use client";

import { FaCalendar, FaTags } from "@/components/atoms/Icons";
import { ArticleDate } from "@/components/molecules/ArticleDate";
import { FrontMatter } from "@/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

type ArticleDetailProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
};

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  source,
  frontMatter,
}) => {
  return (
    <>
      <header className="mb-2">
        <h1>{frontMatter.title}</h1>
        <div className="flex flex-row gap-2 flex-wrap my-2">
          <div className="flex items-center gap-1">
            <FaCalendar />
            <ArticleDate
              published={frontMatter.published}
              updated={frontMatter.updated}
            />
          </div>
          <div className="flex items-center gap-1">
            <FaTags />
            {/* TODO: タグごとでページ横断で絞り込みできるように */}
            {frontMatter.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>
      </header>
      <main>
        <MDXRemote {...source} />
      </main>
    </>
  );
};
