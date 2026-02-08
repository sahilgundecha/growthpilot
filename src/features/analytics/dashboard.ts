// Mock data for GrowthPilot Dashboard
// This simulates real e-commerce analytics data

export interface DailyRevenue {
  date: string;
  revenue: number;
  orders: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  revenue: number;
  unitsSold: number;
  growth: number;
}

export interface CitySales {
  city: string;
  sales: number;
  orders: number;
  percentage: number;
}

export interface OrderStatus {
  status: string;
  count: number;
  color: string;
}

export interface RecentOrder {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: "completed" | "processing" | "shipped" | "cancelled";
  date: string;
}

// Generate last 30 days of revenue data
export const generateRevenueData = (): DailyRevenue[] => {
  const data: DailyRevenue[] = [];
  const today = new Date();

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    // Simulate realistic e-commerce patterns (weekends higher)
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const baseRevenue = isWeekend ? 4500 : 3200;
    const variance = Math.random() * 2000 - 1000;

    data.push({
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      revenue: Math.round(baseRevenue + variance),
      orders: Math.round((baseRevenue + variance) / 85),
    });
  }

  return data;
};

export const revenueData = generateRevenueData();

export const topProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Earbuds Pro",
    category: "Electronics",
    revenue: 24500,
    unitsSold: 245,
    growth: 12.5,
  },
  {
    id: "2",
    name: "Organic Cotton T-Shirt",
    category: "Apparel",
    revenue: 18200,
    unitsSold: 520,
    growth: 8.3,
  },
  {
    id: "3",
    name: "Smart Watch Series X",
    category: "Electronics",
    revenue: 15800,
    unitsSold: 79,
    growth: -2.1,
  },
  {
    id: "4",
    name: "Premium Yoga Mat",
    category: "Fitness",
    revenue: 12400,
    unitsSold: 310,
    growth: 15.7,
  },
  {
    id: "5",
    name: "Stainless Steel Water Bottle",
    category: "Lifestyle",
    revenue: 9800,
    unitsSold: 490,
    growth: 5.2,
  },
];

export const citySales: CitySales[] = [
  { city: "New York", sales: 45200, orders: 532, percentage: 28 },
  { city: "Los Angeles", sales: 32100, orders: 378, percentage: 20 },
  { city: "Chicago", sales: 24500, orders: 288, percentage: 15 },
  { city: "Houston", sales: 18900, orders: 222, percentage: 12 },
  { city: "Phoenix", sales: 15200, orders: 179, percentage: 9 },
  { city: "Other", sales: 25600, orders: 301, percentage: 16 },
];

export const orderStatusData: OrderStatus[] = [
  { status: "Completed", count: 1247, color: "#22c55e" },
  { status: "Processing", count: 342, color: "#6366f1" },
  { status: "Shipped", count: 523, color: "#f59e0b" },
  { status: "Cancelled", count: 89, color: "#ef4444" },
];

export const recentOrders: RecentOrder[] = [
  {
    id: "ORD-7821",
    customer: "Sarah Johnson",
    email: "sarah.j@email.com",
    product: "Wireless Earbuds Pro",
    amount: 129.99,
    status: "completed",
    date: "2 min ago",
  },
  {
    id: "ORD-7820",
    customer: "Mike Chen",
    email: "m.chen@email.com",
    product: "Smart Watch Series X",
    amount: 299.99,
    status: "processing",
    date: "15 min ago",
  },
  {
    id: "ORD-7819",
    customer: "Emily Davis",
    email: "emily.d@email.com",
    product: "Premium Yoga Mat",
    amount: 49.99,
    status: "shipped",
    date: "1 hour ago",
  },
  {
    id: "ORD-7818",
    customer: "James Wilson",
    email: "j.wilson@email.com",
    product: "Organic Cotton T-Shirt",
    amount: 34.99,
    status: "completed",
    date: "2 hours ago",
  },
  {
    id: "ORD-7817",
    customer: "Lisa Brown",
    email: "lisa.b@email.com",
    product: "Stainless Steel Water Bottle",
    amount: 24.99,
    status: "cancelled",
    date: "3 hours ago",
  },
];

// Summary metrics
export const dashboardMetrics = {
  totalRevenue: 161500,
  revenueGrowth: 12.5,
  totalOrders: 2201,
  ordersGrowth: 8.3,
  averageOrderValue: 73.38,
  aovGrowth: 3.9,
  conversionRate: 3.24,
  conversionGrowth: -0.5,
};

// For AI context - this will be passed to the AI copilot
export const getDashboardContext = () => {
  return {
    metrics: dashboardMetrics,
    topProducts: topProducts.slice(0, 3),
    topCities: citySales.slice(0, 3),
    recentTrend: revenueData.slice(-7),
    orderDistribution: orderStatusData,
  };
};
