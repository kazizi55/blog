import { ArticleListItem, ArticleListItemProps } from "./ArticleListItem";

type ArticleListProps = {
  articleListItems: ArticleListItemProps[];
};

export const ArticleList: React.FC<ArticleListProps> = (
  { articleListItems }
) => {
  return (
    <>
      <h1 className="mb-4">投稿一覧</h1>
      <main>
        {(articleListItems.map(({
          slug,
          title,
          published,
          updated,
          tags,
          excerpt,
          thumbnailPath,
          thumbnailAlt
        }) => (
            <ArticleListItem
              key={slug}
              slug={slug}
              title={title}
              published={published}
              updated={updated}
              tags={tags}
              excerpt={excerpt}
              thumbnailPath={thumbnailPath}
              thumbnailAlt={thumbnailAlt}
            />
          )))}
      </main>
    </>
  );
};
