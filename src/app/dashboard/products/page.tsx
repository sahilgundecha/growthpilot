"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  TrendingUp,
  TrendingDown,
  Package,
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

// Mock products data
const productsData = [
  {
    id: "PROD-001",
    name: "Wireless Earbuds Pro",
    category: "Electronics",
    price: 129.99,
    stock: 245,
    revenue: 24500,
    growth: 12.5,
    status: "active" as const,
    image: "🎧",
  },
  {
    id: "PROD-002",
    name: "Organic Cotton T-Shirt",
    category: "Apparel",
    price: 34.99,
    stock: 520,
    revenue: 18200,
    growth: 8.3,
    status: "active" as const,
    image: "👕",
  },
  {
    id: "PROD-003",
    name: "Smart Watch Series X",
    category: "Electronics",
    price: 299.99,
    stock: 79,
    revenue: 15800,
    growth: -2.1,
    status: "active" as const,
    image: "⌚",
  },
  {
    id: "PROD-004",
    name: "Premium Yoga Mat",
    category: "Fitness",
    price: 49.99,
    stock: 310,
    revenue: 12400,
    growth: 15.7,
    status: "active" as const,
    image: "🧘",
  },
  {
    id: "PROD-005",
    name: "Stainless Steel Water Bottle",
    category: "Lifestyle",
    price: 24.99,
    stock: 490,
    revenue: 9800,
    growth: 5.2,
    status: "active" as const,
    image: "🍶",
  },
  {
    id: "PROD-006",
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 89.99,
    stock: 156,
    revenue: 8900,
    growth: 3.1,
    status: "active" as const,
    image: "🔊",
  },
  {
    id: "PROD-007",
    name: "Running Shoes Pro",
    category: "Footwear",
    price: 159.99,
    stock: 0,
    revenue: 7200,
    growth: -5.2,
    status: "out_of_stock" as const,
    image: "👟",
  },
  {
    id: "PROD-008",
    name: "Laptop Stand",
    category: "Accessories",
    price: 39.99,
    stock: 88,
    revenue: 5600,
    growth: 18.9,
    status: "active" as const,
    image: "💻",
  },
];

const categories = [
  "All",
  "Electronics",
  "Apparel",
  "Fitness",
  "Lifestyle",
  "Footwear",
  "Accessories",
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const totalRevenue = filteredProducts.reduce((sum, p) => sum + p.revenue, 0);
  const totalStock = filteredProducts.reduce((sum, p) => sum + p.stock, 0);
  const outOfStock = filteredProducts.filter(
    (p) => p.status === "out_of_stock",
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Products</h2>
          <p className="text-muted mt-1">Manage your product inventory</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted">Total Products</p>
              <p className="text-xl font-bold text-foreground">
                {filteredProducts.length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted">Total Revenue</p>
              <p className="text-xl font-bold text-foreground">
                {formatCurrency(totalRevenue)}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/10 rounded-lg">
              <Package className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted">Out of Stock</p>
              <p className="text-xl font-bold text-foreground">{outOfStock}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                  categoryFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-card rounded-xl border p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-2xl">
                {product.image}
              </div>
              <button className="p-1 hover:bg-secondary rounded-lg transition-colors">
                <MoreHorizontal className="w-4 h-4 text-muted" />
              </button>
            </div>

            <h3 className="font-semibold text-foreground mb-1 truncate">
              {product.name}
            </h3>
            <p className="text-sm text-muted mb-3">{product.category}</p>

            <div className="flex items-center justify-between mb-3">
              <p className="font-bold text-foreground">
                {formatCurrency(product.price)}
              </p>
              <span
                className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium",
                  product.stock > 0
                    ? "bg-success/10 text-success"
                    : "bg-destructive/10 text-destructive",
                )}
              >
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t">
              <div>
                <p className="text-sm text-muted">Revenue</p>
                <p className="font-semibold text-foreground">
                  {formatCurrency(product.revenue)}
                </p>
              </div>
              <div className="flex items-center gap-1">
                {product.growth >= 0 ? (
                  <TrendingUp className="w-4 h-4 text-success" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-destructive" />
                )}
                <span
                  className={cn(
                    "text-sm font-medium",
                    product.growth >= 0 ? "text-success" : "text-destructive",
                  )}
                >
                  {product.growth >= 0 ? "+" : ""}
                  {product.growth}%
                </span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 border rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                <Edit className="w-4 h-4" />
                Edit
              </button>
              <button className="p-2 border rounded-lg text-destructive hover:bg-destructive/10 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
