import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Heart, MessageCircle, Bookmark, Clock, Search } from "lucide-react";
import { articlesData } from "../../lib/mockData";
import { Footer } from "../../Components/Footer";

export function Articles() {
  const navigate = useNavigate();

  // Extract unique categories from articles only

  // const categories = ["All", ...new Set(articlesData.map(a => a.category))];

  const rawCategories = articlesData.map((article) => article.category);
  const categories = ["All", ...new Set(rawCategories)];
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");

  //Filter based on category AND search keyword
  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    const matchesKeyword =
      searchKeyword === "" ||
      article.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      article.author.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      article.category.toLowerCase().includes(searchKeyword.toLowerCase());

    return matchesCategory && matchesKeyword;
  });

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-2 mb-4">
              <NavLink
                to="/"
                className="text-2xl font-extrabold bg-clip-text text-transparent
                 bg-linear-to-r from-green-500 to-green-700 tracking-tight"
              >
                SportsArena
              </NavLink>
            </div>

            {/* Search Bar */}
            <div className="mb-4 relative text-gray-900">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 "
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles by title, author, category..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-sm placeholder-gray-500"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 py-10">
        
          <header className="mb-10">
            <h1 className="text-4xl font-black text-gray-900 mb-2">
              Explore Articles
            </h1>
            <p className="text-gray-500 font-medium italic">
              {activeCategory === "All"
                ? "Discover the latest stories from the world of sports."
                : `Showing ${activeCategory} articles${searchKeyword ? ` matching "${searchKeyword}"` : ""}`}
            </p>
          </header>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
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

                      <span
                        className={`text-[10px] px-2 py-1 rounded-full font-bold transition-colors ${
                          activeCategory === article.category &&
                          activeCategory !== "All"
                            ? "bg-green-600 text-white"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        {article.category}
                      </span>
                    </div>

                    <div className="h-6 flex items-center justify-between text-gray-500">
                      <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                          <MessageCircle size={18} />
                          <span className="text-xs font-bold">
                            {article.comments}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart size={18} />
                          <span className="text-xs font-bold">
                            {article.likes}
                          </span>
                        </div>
                      </div>
                      <Bookmark size={18} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-gray-300" size={32} />
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                No articles found{" "}
                {activeCategory !== "All" && `in ${activeCategory}`}{" "}
                {searchKeyword && `matching "${searchKeyword}"`}
              </p>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
