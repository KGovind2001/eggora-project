import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";

import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

function Placeholder({
  title,
}: {
  title: string;
}) {
  return (
    <div className="bg-white rounded-xl border p-8">
      <h1 className="text-2xl font-bold">
        {title}
      </h1>

      <p className="text-slate-500 mt-2">
        This module is ready for implementation.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />

        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/products"
              element={<Products />}
            />

            <Route
              path="/categories"
              element={
                <Placeholder title="Categories" />
              }
            />

            <Route
              path="/inventory"
              element={
                <Placeholder title="Inventory" />
              }
            />

            <Route
              path="/sales"
              element={
                <Placeholder title="Sales" />
              }
            />

            <Route
              path="/purchases"
              element={
                <Placeholder title="Purchases" />
              }
            />

            <Route
              path="/customers"
              element={
                <Placeholder title="Customers" />
              }
            />

            <Route
              path="/suppliers"
              element={
                <Placeholder title="Suppliers" />
              }
            />

            <Route
              path="/payments"
              element={
                <Placeholder title="Payments" />
              }
            />

            <Route
              path="/expenses"
              element={
                <Placeholder title="Expenses" />
              }
            />

            <Route
              path="/reports"
              element={
                <Placeholder title="Reports" />
              }
            />
          </Route>
        </Route>

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}