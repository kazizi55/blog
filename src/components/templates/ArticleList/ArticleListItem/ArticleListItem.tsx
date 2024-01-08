import { FaCalendar, FaTags } from "@/components/atoms/Icons";
import { ArticleDate } from "@/components/molecules/ArticleDate";
import Link from "next/link";

export type ArticleListItemProps = {
  slug: string;
  title: string;
  published: string;
  updated?: string;
  tags: string[];
  excerpt: string;
  thumbnailPath: string;
  thumbnailAlt: string;
}

export const ArticleListItem: React.FC<ArticleListItemProps> = ({
  slug,
  title,
  published,
  updated,
  tags,
  excerpt,
  thumbnailPath,
  thumbnailAlt
}) => {
  return (
    <article className="space-y-2 mb-4 sm:grid sm:grid-cols-5 sm:gap-4 border border-black dark:border-white p-1 rounded">
      <div className="sm:col-span-2">
        <img
          src={thumbnailPath}
          alt={thumbnailAlt}
          className="w-full sm:w-80 h-52 object-cover rounded"
        />
      </div>
      <div className="space-y-3 sm:col-span-3 py-1">
        <h2>
          <Link href={`/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h2>
        <div className="flex flex-row gap-2 flex-wrap">
          <ArticleDate published={published} updated={updated} />
          <div className="flex items-center gap-1">
            <FaTags />
            {
              tags.map((tag, i) => (
                <Link href={`/tags/${tag}`} key={i}>
                  #{tag}
                </Link>
              ))
            }
          </div>
        </div>
        <p className="py-1">
          {excerpt}
        </p>
      </div>
    </article>
  );
};
