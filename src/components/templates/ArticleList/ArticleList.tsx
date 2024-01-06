import { ArticleListItem } from "./ArticleListItem";

export const ArticleList: React.FC = () => {
  return (
    <>
      <h1 className="mb-4">投稿一覧</h1>
      <main>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <ArticleListItem key={i} />
          ))}
      </main>
    </>
  );
};
