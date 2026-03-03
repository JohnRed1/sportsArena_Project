import { ChartLineIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trendingArticles } from "../../lib/mockData";

export function Trends() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-4 px-6 py-10 bg-green-50 rounded-t-xl shadow-sm">
        {/* Header */}
        <div className="flex items-center">
          <div className="rounded-full p-3 bg-green-100">
            <ChartLineIcon className="w-6 h-6 text-green-700" />
          </div>
          <h2 className="text-lg font-semibold text-gray-700 ml-3">
            Trending Posts
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-2">
          {trendingArticles.map((article, index) => (
            <div 
              key={article.id} 
              onClick={() => navigate(`/news/${article.id}`)}
              className="flex items-center p-2 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer group"
            >
              {/* Ranking Number */}
              <div className="text-green-700 font-bold text-xl min-w-7 text-center">
                {index + 1}
              </div>

              {/* Title Section */}
              <div className="flex-1 ml-3 overflow-hidden">
                <h3 className="text-gray-800 text-sm font-bold line-clamp-2 group-hover:text-green-700 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mt-1">
                  {article.source}
                </p>
              </div>

              {/* Thumbnail */}
              <div className="w-20 h-14 shrink-0 overflow-hidden rounded-lg border border-gray-50 ml-2">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
          
          <div className="mt-2 text-center">
            {/* <NavLink 
              to="/articles" 
              className="text-xs font-black text-green-700 uppercase tracking-widest hover:underline"
            >
              View More
            </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
}