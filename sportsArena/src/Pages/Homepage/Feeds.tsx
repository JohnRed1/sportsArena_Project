import { useState } from "react";
import toast from 'react-hot-toast';
import { Heart, MessageCircle, Bookmark } from "lucide-react";
import { useSession } from "../../lib/auth"; 
import { useNavigate } from "react-router-dom";
import { articlesData, type Article } from "../../lib/mockData";

interface ArticleCardProps {
  article: Article;
  onLike: (id: string, isLiked: boolean) => void;
}

function ArticleCard({ article, onLike }: ArticleCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const { data: session } = useSession();
  const navigate = useNavigate();


// Handle like toggle with protected action
  const handleLikeToggle = (e: React.MouseEvent) => {
    protectedAction(e, () => {
      const newLikedState = !isLiked;
      setIsLiked(newLikedState);
      onLike(article.id, newLikedState);
      
      if (newLikedState) {
        toast.success("Added to liked posts", { duration: 1000 });
      }
    });
  };

  const protectedAction = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    if (!session) {
      toast.error("Sign in, to like, comment, or bookmark!", {
        style: { borderRadius: '10px', background: '#111827', color: '#fff' },
        icon: '🔒',
      });
      setTimeout(() => navigate("/auth/sign-up"), 1500);
      return;
    }
    action();
  };

  return (
    <div 
      onClick={() => navigate(`/news/${article.id}`)}
      className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
    >
      <div className="h-48 w-full overflow-hidden bg-gray-200 shrink-0">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <div className="h-14 mb-2 overflow-hidden">
          <h2 className="text-md font-bold text-gray-900 line-clamp-2 group-hover:text-green-700 transition-colors leading-tight">
            {article.title}
          </h2>
        </div>

        <div className="h-10 mb-4 overflow-hidden">
          <p className="text-xs text-gray-700 line-clamp-2">
            {article.summary}
          </p>
        </div>

        <div className="h-16 mb-4 flex justify-between items-center pb-4 border-b border-gray-100 mt-auto">
          <div className="flex flex-col justify-center h-full overflow-hidden">
            <p className="text-[11px] font-bold text-gray-900 truncate w-32">
              {article.author}
            </p>
            <p className="text-[10px] text-gray-400 uppercase truncate w-32 font-bold">
              {article.source}
            </p>
          </div>
          
          <div className="flex items-center h-full">
            <span className="text-[10px] bg-green-50 text-green-700 px-2 py-1 rounded-full font-bold whitespace-nowrap">
              {article.category}
            </span>
          </div>
        </div>

        <div className="h-6 flex items-center justify-between text-gray-500">
          <div className="flex gap-6">
            <button 
              onClick={(e) => protectedAction(e, () => {})}
              className="flex items-center gap-2 hover:text-green-600 transition-colors group/btn"
            >
              <MessageCircle size={18} className="group-hover/btn:scale-110 transition-transform" />
              <span className="text-xs font-bold">{article.comments}</span>
            </button>

            <button
              onClick={handleLikeToggle}
              className={`flex items-center gap-2 transition-colors ${isLiked ? "text-red-600" : "hover:text-red-600"} group/btn`}
            >
              <Heart 
                size={18} 
                className={`transition-transform ${isLiked ? "fill-current scale-110" : "group-hover/btn:scale-110"}`} 
              />
              <span className="text-xs font-bold">{article.likes}</span>
            </button>
          </div>

          <button onClick={(e) => protectedAction(e, () => setIsBookmarked(!isBookmarked))}>
            <Bookmark 
              size={18} 
              className={`transition-transform ${isBookmarked ? "fill-current text-yellow-600" : "hover:text-yellow-600"}`} 
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Feeds() {
  // Lift the state up to the Feeds component
  const [feedsData, setFeedsData] = useState<Article[]>(articlesData);

  const handleLikeUpdate = (id: string, isLiked: boolean) => {
    setFeedsData(prevData => 
      prevData.map(article => {
        if (article.id === id) {
          return {
            ...article,
            likes: isLiked ? article.likes + 1 : article.likes - 1
          };
        }
        return article;
      })
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-green-50 py-8 px-5">
      {feedsData.map((article) => (
        <ArticleCard 
          key={article.id} 
          article={article} 
          onLike={handleLikeUpdate}
        />
      ))}
    </div>
  );
}