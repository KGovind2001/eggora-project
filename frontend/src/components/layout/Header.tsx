import { Bell } from "lucide-react";
import { getCurrentUser } from "../../services/authService";

export default function Header() {
  const user = getCurrentUser();

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div>
        <p className="text-sm text-slate-500">
          Welcome back
        </p>

        <p className="font-semibold">
          {user?.username || "User"}
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={21} />

          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            3
          </span>
        </button>

        <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          {user?.username?.charAt(0).toUpperCase() ||
            "U"}
        </div>
      </div>
    </header>
  );
}