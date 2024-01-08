import { CONTENTS_PATH } from "@/constants";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { FrontMatter } from "@/types";
import { extractExcerpt } from "@/utils";

export const getFrontMatter = async (slug: string) => {
  const contentFilePath = path.join(CONTENTS_PATH, slug, "index.mdx");
  const source = fs.readFileSync(contentFilePath);
  const { data, content } = matter(source);
  const excerpt = await extractExcerpt(content);

  return { ...data, excerpt } as FrontMatter;
};
