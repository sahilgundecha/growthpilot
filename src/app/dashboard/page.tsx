"use client";

import {
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Percent,
  Loader2,
} from "lucide-react";
import { MetricCard } from "@/components/dashboard/metric-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { OrdersChart } from "@/components/dashboard/orders-chart";
import { TopProducts } from "@/components/dashboard/top-products";
import { CitySalesChart } from "@/components/dashboard/city-sales-chart";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { useDashboardStore } from "@/store/dashboard";
import { useDashboardAnalytics } from "@/features/analytics/queries";

const Dashboard = () => {
  const range = useDashboardStore((s) => s.range);
  const { data, isLoading, isError } = useDashboardAnalytics(range);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-muted">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-destructive font-medium">
            Failed to load dashboard data
          </p>
          <p className="text-muted text-sm mt-1">
            Please try refreshing the page
          </p>
        </div>
      </div>
    );
  }

  const {
    metrics,
    revenueChart,
    ordersChart,
    topProducts,
    citySales,
    recentOrders,
  } = data;

  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Welcome back! 👋</h2>
        <p className="text-muted mt-1">
          Here&apos;s what&apos;s happening with your store today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Revenue"
          value={formatCurrency(metrics.totalRevenue ?? 0)}
          change={metrics.revenueGrowth ?? 0}
          icon={DollarSign}
        />
        <MetricCard
          title="Total Orders"
          value={formatNumber(metrics.totalOrders ?? 0)}
          change={metrics.ordersGrowth ?? 0}
          icon={ShoppingCart}
        />
        <MetricCard
          title="Avg. Order Value"
          value={`$${(metrics.averageOrderValue ?? 0).toFixed(2)}`}
          change={metrics.aovGrowth ?? 0}
          icon={TrendingUp}
        />
        <MetricCard
          title="Conversion Rate"
          value={`${metrics.conversionRate ?? 0}%`}
          change={metrics.conversionGrowth ?? 0}
          icon={Percent}
          trend={(metrics.conversionGrowth ?? 0) >= 0 ? "up" : "down"}
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart data={revenueChart ?? []} />
        </div>
        <div>
          <OrdersChart data={ordersChart ?? []} />
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopProducts products={topProducts ?? []} />
        <CitySalesChart data={citySales ?? []} />
      </div>

      {/* Recent Orders */}
      <RecentOrders orders={recentOrders ?? []} />
    </div>
  );
};

export default Dashboard;
