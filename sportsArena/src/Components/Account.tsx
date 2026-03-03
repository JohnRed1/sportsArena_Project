import { AccountView } from "@neondatabase/neon-js/auth/react/ui";
import { useParams, NavLink } from "react-router-dom";
import { User, ChevronLeft } from "lucide-react";

export function Account() {
  const { pathname } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/*  Account Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <NavLink
            to="/"
            className="flex items-center text-sm text-green-700 hover:text-green-800 mb-4 transition font-medium"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Arena
          </NavLink>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Account Settings
              </h1>
              <p className="text-gray-500 mt-1">
                Manage your profile, security, and preferences.
              </p>
            </div>
            <div className="hidden md:flex p-3 bg-green-50 rounded-full">
              <User className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/*  Main Content Area */}
      <main className="grow py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block space-y-1">
            <div className="flex items-center gap-3 px-4 py-3 bg-green-100 text-green-800 rounded-lg font-semibold">
              <User className="w-5 h-5" />
              General
            </div>
          </aside>

          {/* Account View Card */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
              <div className="p-4 sm:p-6 md:p-10">
                <AccountView pathname={pathname} />
              </div>
            </div>

            <div className="mt-8 text-center lg:text-left">
              <p className="text-sm text-gray-500">
                Official SportsArena Member Account
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
