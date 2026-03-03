import { NavLink } from "react-router";
import { SignedIn, SignedOut } from "@neondatabase/neon-js/auth/react/ui";
import taglineImg from "../../assets/Tagline_img.webp";

export function HeroSection() {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-10  
        bg-linear-to-r from-green-700 to-green-950"
      >
        {/* Left Column: Text + Button */}
        <div className="flex flex-col justify-center gap-6 max-w-md">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-green-50 leading-tight">
              SportsArena
            </h1>
            <h3 className="text-xl md:text-2xl text-green-100">
              A place where Sports and stories meet
            </h3>
          </div>

          <div className="mt-2">
            {/* 1. Show this to logged-out visitors */}
            <SignedOut>
              <NavLink to="/auth/sign-up">
                <button
                  className="px-6 py-3 bg-green-600 text-white font-medium rounded-full 
                  shadow-lg hover:bg-green-500 transition text-lg"
                >
                  Get Started
                </button>
              </NavLink>
            </SignedOut>

            {/* 2. Show this to logged-in users instead */}
            <SignedIn>
              <NavLink to="/articles">
                <button
                  className="px-6 py-3 border-2 border-green-400 text-green-50 font-medium 
                  rounded-full hover:bg-green-800 transition text-lg"
                >
                  Read Latest Articles
                </button>
              </NavLink>
            </SignedIn>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="flex justify-center items-center">
          <img
            src={taglineImg}
            alt="SportsArena Hero"
            className="w-full max-w-lg object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </>
  );
}