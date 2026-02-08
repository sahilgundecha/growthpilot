export type RevenuePoint = {
  date: string;
  revenue: number;
};

export type OrderStatus = {
  status: "completed" | "processing" | "shipped" | "cancelled";
  count: number;
};

export type TopProduct = {
  id: string;
  name: string;
  revenue: number;
};

export type CitySale = {
  city: string;
  revenue: number;
};

export type Order = {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: string;
};

export interface DashboardAnalytics {
  metrics: {
    totalRevenue: number | undefined;
    revenueGrowth: number | undefined;
    totalOrders: number | undefined;
    ordersGrowth: number | undefined;
    averageOrderValue: number | undefined;
    aovGrowth: number | undefined;
    conversionRate: number | undefined;
    conversionGrowth: number | undefined;
  };
  revenueChart: RevenuePoint[] | undefined;
  ordersChart: OrderStatus[] | undefined;
  topProducts: TopProduct[] | undefined;
  citySales: CitySale[] | undefined;
  recentOrders: Order[] | undefined;
}
