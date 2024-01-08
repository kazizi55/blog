import { remark } from "remark";
import stripMarkdown from "strip-markdown";

const MAX_LENGTH = 120;

export const extractExcerpt = async (content: string) => {
  const stripProcessor = remark().use(stripMarkdown);
  const stripTagsMarkdown = await stripProcessor.process(content);

  return stripTagsMarkdown
    .toString()
    .replace(/\r?\n/g, " ")
    .slice(0, MAX_LENGTH);
};
