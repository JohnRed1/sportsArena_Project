import { NavLink } from "react-router";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-green-500 to-green-700">
              SportsArena
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Where sports meet stories. Breaking news, match analysis, and deep
              insights from the world of sports.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <NavLink
                to="/privacy-policy"
                className="hover:text-green-400 transition"
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to="/support"
                className="hover:text-green-400 transition"
              >
                Support
              </NavLink>
              <NavLink to="/faq" className="hover:text-green-400 transition">
                FAQ
              </NavLink>
              <NavLink to="/terms" className="hover:text-green-400 transition">
                Terms of Use
              </NavLink>
              <NavLink to="/about" className="hover:text-green-400 transition">
                About
              </NavLink>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Connect
            </h3>

            <div className="flex gap-4">
              <NavLink
                to="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition group"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </NavLink>

              <NavLink
                to="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition group"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </NavLink>

              <NavLink
                to="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition group"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 SportsArena. All rights reserved.</p>
          <p>Built for sports enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
}
