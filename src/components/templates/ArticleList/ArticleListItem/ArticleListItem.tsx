import { FaCalendar, FaStopwatch, FaTags } from "@/components/atoms/Icons";

export const ArticleListItem: React.FC = () => {
  return (
    <article className="space-y-2 mb-4 sm:grid sm:grid-cols-5 sm:gap-4 border border-black dark:border-white p-1 rounded">
      <div className="sm:col-span-2">
        <img
          src="/images/kazizi.jpeg"
          alt="kazizi profile image"
          className="w-full sm:w-80 h-52 object-cover rounded"
        />
      </div>
      <div className="space-y-3 sm:col-span-3 py-1">
        <h2>タイトル</h2>
        <div className="flex flex-row gap-2 flex-wrap">
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
        <p className="py-1">
          ここに本文が入るよ。ここに本文が入るよ。ここに本文が入るよ。ここに本文が入るよ。ここに本文が入るよ。ここに本文が入るよ。ここに本文が入るよ。ここに本文が入るよ。ここに本文が入るよ。ここに本文が入るよ。ここに本文が入るよ。...
        </p>
      </div>
    </article>
  );
};
