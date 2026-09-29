import { useEffect, useState } from "react";
import {
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  AlertTriangle,
} from "lucide-react";

import api from "../../services/api";

interface DashboardData {
  revenue: number;
  purchases: number;
  expenses: number;
  profit: number;
  products: number;
  customers: number;
  suppliers: number;
  salesCount: number;
  lowStock: number;
}

function StatCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string | number;
  icon: any;
}) {
  return (
    <div className="bg-white rounded-xl border p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <p className="text-2xl font-bold mt-2">
            {value}
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [data, setData] =
    useState<DashboardData | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/dashboard")
      .then((response) => {
        setData(response.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center">
        Loading dashboard...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-lg bg-red-50 p-5 text-red-700">
        Unable to load dashboard.
      </div>
    );
  }

  const money = (value: number) =>
    `₹${value.toLocaleString("en-IN")}`;

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Overview of your business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard
          title="Revenue"
          value={money(data.revenue)}
          icon={DollarSign}
        />

        <StatCard
          title="Purchases"
          value={money(data.purchases)}
          icon={ShoppingCart}
        />

        <StatCard
          title="Expenses"
          value={money(data.expenses)}
          icon={DollarSign}
        />

        <StatCard
          title="Profit"
          value={money(data.profit)}
          icon={DollarSign}
        />

        <StatCard
          title="Products"
          value={data.products}
          icon={Package}
        />

        <StatCard
          title="Customers"
          value={data.customers}
          icon={Users}
        />

        <StatCard
          title="Suppliers"
          value={data.suppliers}
          icon={Users}
        />

        <StatCard
          title="Low Stock"
          value={data.lowStock}
          icon={AlertTriangle}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-semibold text-lg">
            Sales Overview
          </h2>

          <div className="h-64 flex items-center justify-center text-slate-400">
            Sales chart will appear here
          </div>
        </div>

        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-semibold text-lg">
            Recent Activity
          </h2>

          <div className="mt-4 space-y-4 text-sm">
            <div className="border-b pb-3">
              Sales transactions will appear here.
            </div>

            <div className="border-b pb-3">
              Purchase transactions will appear here.
            </div>

            <div>
              Payment transactions will appear here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}