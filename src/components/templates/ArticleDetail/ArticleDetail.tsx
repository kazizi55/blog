import { FaCalendar, FaStopwatch, FaTags } from "@/components/atoms/Icons";

export const ArticleDetail: React.FC = () => {
  return (
    <article>
      <header className="mb-2">
        <h1>タイトル</h1>
        <div className="flex flex-row gap-2 flex-wrap my-2">
          <div className="flex items-center gap-1">
            <FaCalendar />
            <span>2024-01-02</span>
          </div>
          <div className="flex items-center gap-1">
            <FaStopwatch />
            <span>5分で読めます</span>
          </div>
          <div className="flex items-center gap-1">
            <FaTags />
            <span>#test</span>
          </div>
        </div>
      </header>
      <p>記事本文</p>
    </article>
  );
};
