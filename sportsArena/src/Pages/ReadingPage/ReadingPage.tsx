import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MessageSquare, Heart, Clock, Loader2, ExternalLink } from "lucide-react";
import { articlesData, trendingArticles, fetchArticleContent } from "../../lib/mockData";

export function ReadingPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const allArticles = [...articlesData, ...trendingArticles];
  const article = allArticles.find((a) => a.id === id);

  useEffect(() => {
    async function loadContent() {
      if (article?.url) {
        setIsLoading(true);
        const result = await fetchArticleContent(article.url);
        setContent(result);
        setIsLoading(false);
      }
    }
    loadContent();
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [article]);

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6 text-center">
        <h2 className="text-xl font-black text-gray-900 mb-4">Article Not Found</h2>
        <button 
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-700 font-bold hover:text-green-700 transition-colors">
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 transition-colors"
            title="Open original source"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <header className="mb-10">
          <span className="bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mt-4 mb-8">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 py-6 border-y border-gray-100">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl uppercase">
              {article.author.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900">{article.author}</span>
              <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold">
                <Clock size={12} />
                <span>{article.source}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg">
          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="max-w-2xl mx-auto">
          
          <div className="text-xl text-gray-600 font-bold italic leading-relaxed mb-10 border-l-4 border-green-500 pl-6">
            {article.summary}
          </div>

          <div className="text-gray-800 text-lg leading-relaxed font-medium">
            {isLoading ? (
              <div className="flex flex-col items-center py-10 gap-3">
                <Loader2 className="animate-spin text-green-600" size={32} />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Fetching full story...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Splitting the content by double newlines to render proper paragraphs */}
                {content.split('\n\n').map((para, index) => (
                  <p key={index} className="first-letter:text-2xl first-letter:font-bold">
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer with fixed icon visibility (text-gray-600) */}
        <footer className="mt-20 pt-10 border-t border-gray-100 flex justify-center gap-10">
           <div className="flex flex-col items-center gap-2">
              <button className="p-4 bg-gray-50 text-gray-600 rounded-full hover:bg-red-50 hover:text-red-500 transition-all active:scale-90">
                <Heart size={24} />
              </button>
              <span className="text-xs font-bold text-gray-500">{article.likes}</span>
           </div>
           <div className="flex flex-col items-center gap-2">
              <button className="p-4 bg-gray-50 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-500 transition-all active:scale-90">
                <MessageSquare size={24} />
              </button>
              <span className="text-xs font-bold text-gray-500">{article.comments}</span>
           </div>
        </footer>
      </main>
    </div>
  );
}