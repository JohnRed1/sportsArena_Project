import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@neondatabase/neon-js/auth/react/ui";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex flex-wrap justify-between items-center bg-gray-50 px-4 py-3 shadow-md">
        {/* Logo */}
        <div className="select-none">
          <NavLink
            to="/"
            className="text-2xl font-extrabold bg-clip-text text-transparent
                 bg-linear-to-r from-green-500 to-green-700 tracking-tight"
          >
            SportsArena
          </NavLink>
        </div>

        {/* Search Bar - Hidden on mobile, visible on tablet and up */}
        <div className="hidden md:flex grow max-w-md mx-4">
          <input
            type="text"
            placeholder="Search Here"
            className="grow rounded-l-full border border-green-300 border-r-0
                 px-4 py-2 text-sm text-gray-700 placeholder-green-600 shadow-sm
                 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 text-center transition"
          />
          <button className="rounded-r-full bg-green-700 px-4 py-2 hover:bg-green-800 transition">
            <Search className="w-6 h-6 text-white text-sm" />
          </button>
        </div>

        {/* Navigation Links & CTA - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Links */}
          <div className="flex gap-4">
            <NavLink
              to="/articles"
              className="px-3 py-2 text-sm font-medium text-green-700
                   hover:text-green-900 hover:underline transition-all"
            >
              Articles
            </NavLink>

            <NavLink
              to="/write-for-us"
              className="px-3 py-2 text-sm font-medium text-green-700
                   hover:text-green-900 hover:underline transition-all"
            >
              Write For Us
            </NavLink>
          </div>

          {/* If signed in, show UserButton. If not, show Get Started */}

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <NavLink
              to="/auth/sign-in"
              className="px-4 py-2 bg-green-700 text-white text-sm font-medium 
               rounded-full shadow hover:bg-green-800 transition"
            >
              Get Started
            </NavLink>
          </SignedOut>
        </div>

        {/* Mobile Menu Button & CTA */}
        <div className="flex lg:hidden items-center gap-3">
          {/* If signed in, show UserButton. If not, show Get Started */}

          <SignedIn>
            {/* Use 'icon' size to show only the avatar without text */}
            <UserButton size="icon" />
          </SignedIn>

          <SignedOut>
            <NavLink
              to="/auth/sign-in"
              className="px-4 py-2 bg-green-700 text-white text-sm font-medium 
               rounded-full shadow hover:bg-green-800 transition"
            >
              Get Started
            </NavLink>
          </SignedOut>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-200 transition"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-green-700" />
            ) : (
              <Menu className="w-6 h-6 text-green-700" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Dropdown */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white shadow-md border-t border-gray-200">
          <div className="flex flex-col px-4 py-3 gap-2">
            <div className="md:hidden flex mb-2">
              <input
                type="text"
                placeholder="Search Here"
                className="grow rounded-l-full border border-green-300 border-r-0
                     px-4 py-2 text-sm text-gray-700 placeholder-green-600 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 text-center transition"
              />
              <button className="rounded-r-full bg-green-700 px-4 py-2 hover:bg-green-800 transition">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Links */}

            <NavLink
              to="/articles"
              className="px-3 py-2 text-sm font-medium text-green-700
                   hover:text-green-900 hover:bg-green-50 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Articles
            </NavLink>

            <NavLink
              to="/write-for-us"
              className="px-3 py-2 text-sm font-medium text-green-700
                   hover:text-green-900 hover:bg-green-50 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Write For Us
            </NavLink>
          </div>
        </nav>
      )}
    </>
  );
}
