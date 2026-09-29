import {
  BarChart3,
  Boxes,
  ClipboardList,
  CreditCard,
  FileText,
  LayoutDashboard,
  LogOut,
  Package,
  ShoppingCart,
  Truck,
  UserRound,
  Users,
  Wallet,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { logout } from "../../services/authService";

const menu = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    path: "/products",
    icon: Package,
  },
  {
    title: "Categories",
    path: "/categories",
    icon: Boxes,
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: ClipboardList,
  },
  {
    title: "Sales",
    path: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Purchases",
    path: "/purchases",
    icon: Truck,
  },
  {
    title: "Customers",
    path: "/customers",
    icon: Users,
  },
  {
    title: "Suppliers",
    path: "/suppliers",
    icon: UserRound,
  },
  {
    title: "Payments",
    path: "/payments",
    icon: CreditCard,
  },
  {
    title: "Expenses",
    path: "/expenses",
    icon: Wallet,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-950 text-white flex flex-col">
      <div className="px-6 py-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🥚</span>

          <div>
            <h1 className="font-bold text-xl">
              Eggora
            </h1>

            <p className="text-xs text-slate-400">
              ERP System
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={19} />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      <button
        onClick={logout}
        className="m-4 flex items-center gap-3 rounded-lg px-4 py-3 text-slate-300 hover:bg-red-600 hover:text-white"
      >
        <LogOut size={19} />
        Logout
      </button>
    </aside>
  );
}