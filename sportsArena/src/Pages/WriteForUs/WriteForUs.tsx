import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Send, FileText, User, Link as LinkIcon, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";

export function WriteForUs() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating API verification request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("Application sent successfully!", {
        style: { borderRadius: '10px', background: '#111827', color: '#fff' },
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 size={80} className="text-green-600 animate-bounce" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 uppercase italic tracking-tighter mb-4">
            Application <span className="text-green-600">Received</span>
          </h1>
          <p className="text-gray-600 font-medium mb-8">
            Our editorial team is verifying your details. You will be notified via email once your account is approved for publishing.
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full py-4 bg-gray-900 text-white font-black uppercase tracking-widest rounded-xl hover:bg-green-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <NavLink to="/"  className="text-2xl font-extrabold bg-clip-text text-transparent
                 bg-linear-to-r from-green-500 to-green-700 tracking-tight">
            
              SportsArena
           
          </NavLink>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 italic uppercase tracking-tighter">
            Write For Us
          </h1>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">
            Join our community of sports journalists. Submit your credentials for verification to start publishing your stories.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <User size={14} /> Full Name
              </label>
              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 font-bold text-gray-900 transition-all shadow-sm"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Send size={14} /> Professional Email
              </label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 font-bold text-gray-900 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Portfolio/Social Link */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
              <LinkIcon size={14} /> Portfolio or Twitter/X Profile
            </label>
            <input
              required
              type="url"
              placeholder="https://twitter.com/yourhandle"
              className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 font-bold text-gray-900 transition-all shadow-sm"
            />
          </div>

          {/* Expertise */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
              <FileText size={14} /> Area of Expertise
            </label>
            <select
              required
              className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 font-bold text-gray-900 transition-all shadow-sm appearance-none"
            >
              <option value="">Select a Category</option>
              <option value="premier-league">Premier League</option>
              <option value="laliga">La Liga</option>
              <option value="transfer-news">Transfer News</option>
              <option value="nba">NBA</option>
              <option value="other">Other Sports</option>
            </select>
          </div>

          {/* Short Bio/Pitch */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">
              Why should we verify you?
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell us about your writing experience or the topics you want to cover..."
              className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 font-bold text-gray-900 transition-all shadow-sm resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 transition-all ${
              isLoading 
                ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                : "bg-gray-900 text-white hover:bg-green-600 shadow-lg shadow-gray-200"
            }`}
          >
            {isLoading ? "Processing Application..." : "Submit for Verification"}
            {!isLoading && <Send size={18} />}
          </button>
        </form>
      </main>
    </div>
  );
}