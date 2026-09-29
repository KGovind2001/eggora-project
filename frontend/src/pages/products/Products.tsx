import { useEffect, useState } from "react";
import { Plus, Search, Trash2 } from "lucide-react";
import api from "../../api";

interface Product {
  id: number;
  sku: string;
  name: string;
  purchasePrice: number;
  sellingPrice: number;
  currentStock: number;
  minStock: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    try {
      setLoading(true);

      const response = await api.get("/products");

      setProducts(response.data.data || []);
    } catch (error) {
      console.error("Failed to load products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function deleteProduct(id: number) {
    if (!confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      await api.delete(`/products/${id}`);
      await loadProducts();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  }

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.sku}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Products
          </h1>

          <p className="text-slate-500 mt-1">
            Manage products and inventory pricing
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl border shadow-sm">
        <div className="p-4 border-b">
          <div className="relative max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-3 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {loading ? (
          <div className="p-10 text-center text-slate-500">
            Loading products...
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4">SKU</th>
                  <th className="text-left p-4">Product</th>
                  <th className="text-left p-4">
                    Purchase Price
                  </th>
                  <th className="text-left p-4">
                    Selling Price
                  </th>
                  <th className="text-left p-4">
                    Stock
                  </th>
                  <th className="text-left p-4">
                    Status
                  </th>
                  <th className="text-left p-4">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t hover:bg-slate-50"
                  >
                    <td className="p-4 font-medium">
                      {product.sku}
                    </td>

                    <td className="p-4">
                      {product.name}
                    </td>

                    <td className="p-4">
                      ₹
                      {product.purchasePrice.toLocaleString(
                        "en-IN",
                      )}
                    </td>

                    <td className="p-4">
                      ₹
                      {product.sellingPrice.toLocaleString(
                        "en-IN",
                      )}
                    </td>

                    <td className="p-4">
                      <span
                        className={
                          product.currentStock <=
                          product.minStock
                            ? "text-red-600 font-semibold"
                            : "text-green-600"
                        }
                      >
                        {product.currentStock}
                      </span>
                    </td>

                    <td className="p-4">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                        Active
                      </span>
                    </td>

                    <td className="p-4">
                      <button
                        type="button"
                        onClick={() =>
                          deleteProduct(product.id)
                        }
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredProducts.length === 0 && (
              <div className="p-10 text-center text-slate-500">
                No products found.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}