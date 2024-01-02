import { ArticleListItem } from "./ArticleListItem";

export const ArticleList: React.FC = () => {
  return (
    <article>
      <h1>記事一覧</h1>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <ArticleListItem key={i} />
        ))}
    </article>
  );
};
