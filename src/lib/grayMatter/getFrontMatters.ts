import { CONTENTS_PATH } from "@/constants";
import fs from "fs";
import { getFrontMatter } from "./getFrontMatter";

export const getFrontMatters = async () => {
  const allContentSlugs = fs.readdirSync(CONTENTS_PATH);
  const getFrontMatterPromises = allContentSlugs.map(async (slug) => {
    const frontMatter = await getFrontMatter(slug);
    return { slug, ...frontMatter };
  });

  const frontMatters = await Promise.all(getFrontMatterPromises);

  // NOTE: 投稿日が新しい順に並び替える
  return frontMatters.sort((a, b) => (a.published > b.published ? -1 : 1));
  };