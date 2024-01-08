import { ArticleDetail } from "@/components/templates/ArticleDetail";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { CONTENTS_PATH } from "@/constants";
import { FrontMatter } from "@/types";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

type Props = {
  slug: string;
};

export function generateStaticParams(): Props[] {
  const paths = fs.readdirSync(CONTENTS_PATH).map((slug) => ({ slug }));

  return paths;
}

export default async function ArticleDetailPage({ params }: { params: Props }) {
  const contentFilePath = path.join(CONTENTS_PATH, params.slug, "index.mdx");
  const source = fs.readFileSync(contentFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [remarkGfm, [remarkToc, { heading: "目次", maxDepth: 3 }]],
      rehypePlugins: [rehypeSlug],
    },
  });

  const frontMatter: FrontMatter = {
    title: data.title,
    published: data.published,
    updated: data.updated,
    tags: data.tags,
  };

  // TODO: i11n対応する
  return <ArticleDetail mdxSource={mdxSource} frontMatter={frontMatter} />;
}
