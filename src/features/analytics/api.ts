import {
  revenueData,
  topProducts,
  citySales,
  orderStatusData,
  recentOrders,
  dashboardMetrics,
} from "@/features/analytics/dashboard";
import { DashboardAnalytics } from "./type";

export const fetchDashboardAnalytics = async (
  range: number,
): Promise<DashboardAnalytics> => {
  await new Promise((r) => setTimeout(r, 600));

  const filteredRevenue = revenueData.slice(-range);

  return {
    metrics: {
      totalRevenue: dashboardMetrics.totalRevenue,
      revenueGrowth: dashboardMetrics.revenueGrowth,
      totalOrders: dashboardMetrics.totalOrders,
      ordersGrowth: dashboardMetrics.ordersGrowth,
      averageOrderValue: dashboardMetrics.averageOrderValue,
      aovGrowth: dashboardMetrics.aovGrowth,
      conversionRate: dashboardMetrics.conversionRate,
      conversionGrowth: dashboardMetrics.conversionGrowth,
    },

    revenueChart: filteredRevenue.map((r) => ({
      date: r.date,
      revenue: r.revenue,
    })),

    ordersChart: orderStatusData.map((o) => ({
      status: o.status.toLowerCase() as
        | "completed"
        | "processing"
        | "shipped"
        | "cancelled",
      count: o.count,
    })),

    topProducts: topProducts.map((p) => ({
      id: p.id,
      name: p.name,
      revenue: p.revenue,
    })),

    citySales: citySales.map((c) => ({
      city: c.city,
      revenue: c.sales,
    })),

    recentOrders: recentOrders.map((o) => ({
      id: o.id,
      customer: o.customer,
      product: o.product,
      amount: o.amount,
      status: o.status,
    })),
  };
};
