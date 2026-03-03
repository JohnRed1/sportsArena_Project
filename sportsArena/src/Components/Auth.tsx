import { AuthView } from "@neondatabase/neon-js/auth/react/ui";
import { useParams, NavLink } from "react-router-dom";

export function Auth() {
  const { pathname } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
    {/* Auth Header */}
      <div className="mb-8 text-center">
        <NavLink
          to="/"
          className="text-3xl font-black text-green-700 tracking-tighter"
        >
          SportsArena
        </NavLink>

        <h2 className="mt-4 text-xl font-semibold text-gray-900">
          {pathname === "sign-up" ? "Create your account" : "Welcome back"}
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          {pathname === "sign-up"
            ? "Start your journey with our sports community."
            : "Enter your details to access your dashboard."}
        </p>
      </div>

      {/* Auth Card */}

      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <AuthView
          pathname={pathname}
          className="auth-container"
        />

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <NavLink
            to="/"
            className="text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
          >
            ← Back to homepage
          </NavLink>
        </div>
      </div>

      {/* Auth Footer */}

      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
          By continuing, you agree to our{" "}
          <a href="/terms" className="underline hover:text-gray-700">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline hover:text-gray-700">
            Privacy Policy
          </a>
          .
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-green-700/60">
          <span className="text-xs font-semibold uppercase tracking-widest">
            Secure Authentication
          </span>
        </div>
      </div>
    </div>
  );
}
