import { ArticleList } from "@/components/templates/ArticleList";
import { getFrontMatters } from "@/lib/grayMatter";

export default async function ArticleListPage() {
  const frontMatters = await getFrontMatters();

  // TODO: i11n対応する
  return <ArticleList articleListItems={frontMatters} />;
}
