"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  MoreHorizontal,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

// Mock orders data
const ordersData = [
  {
    id: "ORD-7821",
    customer: "Sarah Johnson",
    email: "sarah.j@email.com",
    product: "Wireless Earbuds Pro",
    quantity: 2,
    amount: 259.98,
    status: "completed" as const,
    date: "2026-02-08",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-7820",
    customer: "Mike Chen",
    email: "m.chen@email.com",
    product: "Smart Watch Series X",
    quantity: 1,
    amount: 299.99,
    status: "processing" as const,
    date: "2026-02-08",
    paymentMethod: "PayPal",
  },
  {
    id: "ORD-7819",
    customer: "Emily Davis",
    email: "emily.d@email.com",
    product: "Premium Yoga Mat",
    quantity: 3,
    amount: 149.97,
    status: "shipped" as const,
    date: "2026-02-07",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-7818",
    customer: "James Wilson",
    email: "j.wilson@email.com",
    product: "Organic Cotton T-Shirt",
    quantity: 5,
    amount: 174.95,
    status: "completed" as const,
    date: "2026-02-07",
    paymentMethod: "Debit Card",
  },
  {
    id: "ORD-7817",
    customer: "Lisa Brown",
    email: "lisa.b@email.com",
    product: "Stainless Steel Water Bottle",
    quantity: 2,
    amount: 49.98,
    status: "cancelled" as const,
    date: "2026-02-06",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-7816",
    customer: "David Kim",
    email: "d.kim@email.com",
    product: "Bluetooth Speaker",
    quantity: 1,
    amount: 89.99,
    status: "completed" as const,
    date: "2026-02-06",
    paymentMethod: "Apple Pay",
  },
  {
    id: "ORD-7815",
    customer: "Anna Martinez",
    email: "anna.m@email.com",
    product: "Running Shoes Pro",
    quantity: 1,
    amount: 159.99,
    status: "shipped" as const,
    date: "2026-02-05",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-7814",
    customer: "Tom Anderson",
    email: "tom.a@email.com",
    product: "Laptop Stand",
    quantity: 2,
    amount: 79.98,
    status: "processing" as const,
    date: "2026-02-05",
    paymentMethod: "PayPal",
  },
];

const statusStyles = {
  completed: "bg-success/10 text-success",
  processing: "bg-primary/10 text-primary",
  shipped: "bg-warning/10 text-warning",
  cancelled: "bg-destructive/10 text-destructive",
};

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredOrders = ordersData.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Orders</h2>
          <p className="text-muted mt-1">Manage and track customer orders</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-card rounded-xl border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/50">
              <tr>
                <th className="text-left py-4 px-4 text-sm font-medium text-muted">
                  Order ID
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-muted">
                  Customer
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-muted hidden md:table-cell">
                  Product
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-muted hidden lg:table-cell">
                  Date
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-muted">
                  Status
                </th>
                <th className="text-right py-4 px-4 text-sm font-medium text-muted">
                  Amount
                </th>
                <th className="text-right py-4 px-4 text-sm font-medium text-muted">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t hover:bg-secondary/30 transition-colors"
                >
                  <td className="py-4 px-4">
                    <p className="font-medium text-foreground">{order.id}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-medium text-foreground">
                      {order.customer}
                    </p>
                    <p className="text-sm text-muted">{order.email}</p>
                  </td>
                  <td className="py-4 px-4 hidden md:table-cell">
                    <p className="text-foreground">{order.product}</p>
                    <p className="text-sm text-muted">Qty: {order.quantity}</p>
                  </td>
                  <td className="py-4 px-4 hidden lg:table-cell">
                    <p className="text-foreground">{order.date}</p>
                    <p className="text-sm text-muted">{order.paymentMethod}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={cn(
                        "inline-flex px-2.5 py-1 rounded-full text-xs font-medium capitalize",
                        statusStyles[order.status],
                      )}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <p className="font-semibold text-foreground">
                      {formatCurrency(order.amount)}
                    </p>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-muted" />
                      </button>
                      <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                        <MoreHorizontal className="w-4 h-4 text-muted" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-4 border-t">
          <p className="text-sm text-muted">
            Showing {filteredOrders.length} of {ordersData.length} orders
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 border rounded-lg hover:bg-secondary transition-colors disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 py-1 text-sm">Page 1 of 1</span>
            <button className="p-2 border rounded-lg hover:bg-secondary transition-colors disabled:opacity-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
