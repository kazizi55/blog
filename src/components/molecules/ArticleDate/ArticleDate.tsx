import { FrontMatter } from "@/types";

type ArticleDateProps = Pick<FrontMatter, "updated" | "published">;

const format = (d: Date) => {
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
};

export const ArticleDate: React.FC<ArticleDateProps> = ({
  updated,
  published,
}) => {
  const pubd = format(new Date(published));
  const upd = updated ? format(new Date(updated)) : undefined;

  // TODO: i11n対応する
  return (
    <>
      {pubd} 公開{upd ? ` / ${upd} 更新` : null}
    </>
  );
};
