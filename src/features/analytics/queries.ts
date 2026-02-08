import { useQuery } from "@tanstack/react-query";
import { fetchDashboardAnalytics } from "./api";
import { DashboardAnalytics } from "./type";

export const useDashboardAnalytics = (range: number) => {
  return useQuery({
    queryKey: ["dashboard-analytics", range],
    queryFn: async (): Promise<DashboardAnalytics> => {
      const res = await fetchDashboardAnalytics(range);

      // Map API response to UI shape
      return {
        metrics: {
          totalRevenue: res.metrics.totalRevenue,
          revenueGrowth: res.metrics.revenueGrowth,
          totalOrders: res.metrics.totalOrders,
          ordersGrowth: res.metrics.ordersGrowth,
          averageOrderValue: res.metrics.averageOrderValue,
          aovGrowth: res.metrics.aovGrowth,
          conversionRate: res.metrics.conversionRate,
          conversionGrowth: res.metrics.conversionGrowth,
        },
        revenueChart: res.revenueChart,
        ordersChart: res.ordersChart,
        topProducts: res.topProducts,
        citySales: res.citySales,
        recentOrders: res.recentOrders,
      };
    },
  });
};
