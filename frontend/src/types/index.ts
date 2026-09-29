export interface User {
  id: number;
  username: string;
  email: string;
  role: "ADMIN" | "MANAGER" | "EMPLOYEE";
  active: boolean;
}

export interface Product {
  id: number;
  sku: string;
  name: string;
  description?: string;
  unit: string;
  purchasePrice: number;
  sellingPrice: number;
  tax: number;
  minStock: number;
  currentStock: number;
  active: boolean;
  category?: Category;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  active: boolean;
}

export interface Customer {
  id: number;
  code: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  gstNumber?: string;
  active: boolean;
}

export interface Supplier {
  id: number;
  code: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  gstNumber?: string;
  active: boolean;
}

export interface Expense {
  id: number;
  category: string;
  description: string;
  amount: number;
  date: string;
  paymentMethod: string;
}

export interface DashboardData {
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