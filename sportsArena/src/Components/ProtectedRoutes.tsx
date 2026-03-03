import toast from 'react-hot-toast';
import { useSession } from "../lib/auth"; 
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {

  const { data: session, isPending } = useSession();

if (isPending) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">

        {/* Loader */}
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-green-100 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-green-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="mt-4 text-green-800 font-bold tracking-widest animate-pulse">
          ENTRYING ARENA...
        </p>
      </div>
    );
  }

  if (!session) {
    // Let them know why they were redirected via toast
    toast.error("Access Denied. Please sign in first.");
    return <Navigate to="/auth/sign-in" replace />;
  }

  return <Outlet />;
}