"use client";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  DollarSign,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { cn, formatCurrency, formatNumber } from "@/lib/utils";

// Mock analytics data
const monthlyRevenue = [
  { month: "Jan", revenue: 45000, orders: 520 },
  { month: "Feb", revenue: 52000, orders: 610 },
  { month: "Mar", revenue: 48000, orders: 580 },
  { month: "Apr", revenue: 61000, orders: 720 },
  { month: "May", revenue: 55000, orders: 650 },
  { month: "Jun", revenue: 67000, orders: 790 },
  { month: "Jul", revenue: 72000, orders: 850 },
  { month: "Aug", revenue: 69000, orders: 810 },
  { month: "Sep", revenue: 78000, orders: 920 },
  { month: "Oct", revenue: 82000, orders: 960 },
  { month: "Nov", revenue: 91000, orders: 1070 },
  { month: "Dec", revenue: 98000, orders: 1150 },
];

const trafficSources = [
  { source: "Organic Search", visitors: 45200, percentage: 35 },
  { source: "Direct", visitors: 32100, percentage: 25 },
  { source: "Social Media", visitors: 25800, percentage: 20 },
  { source: "Referral", visitors: 15500, percentage: 12 },
  { source: "Email", visitors: 10300, percentage: 8 },
];

const conversionFunnel = [
  { stage: "Visitors", count: 128900, color: "#6366f1" },
  { stage: "Product Views", count: 89400, color: "#8b5cf6" },
  { stage: "Add to Cart", count: 34200, color: "#a855f7" },
  { stage: "Checkout", count: 18600, color: "#d946ef" },
  { stage: "Purchase", count: 12400, color: "#ec4899" },
];

const categoryPerformance = [
  { category: "Electronics", revenue: 156000, growth: 12.5 },
  { category: "Apparel", revenue: 98000, growth: 8.3 },
  { category: "Fitness", revenue: 67000, growth: 15.7 },
  { category: "Lifestyle", revenue: 45000, growth: 5.2 },
  { category: "Accessories", revenue: 34000, growth: -2.1 },
];

const hourlyTraffic = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i.toString().padStart(2, "0")}:00`,
  visitors: Math.floor(Math.random() * 500) + 100,
}));

const deviceBreakdown = [
  { device: "Mobile", value: 58, color: "#6366f1" },
  { device: "Desktop", value: 32, color: "#22c55e" },
  { device: "Tablet", value: 10, color: "#f59e0b" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Analytics</h2>
        <p className="text-muted mt-1">Deep dive into your store performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Visitors"
          value="128.9K"
          change={12.5}
          icon={Users}
        />
        <MetricCard title="Page Views" value="456.2K" change={8.3} icon={Eye} />
        <MetricCard
          title="Conversion Rate"
          value="9.6%"
          change={-0.5}
          icon={ShoppingCart}
        />
        <MetricCard
          title="Avg. Session"
          value="4m 32s"
          change={5.2}
          icon={TrendingUp}
        />
      </div>

      {/* Revenue & Orders Chart */}
      <div className="bg-card rounded-xl border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Revenue & Orders Trend
            </h3>
            <p className="text-sm text-muted">Monthly performance overview</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="text-muted">Orders</span>
            </div>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyRevenue}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: "#64748b" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                yAxisId="left"
                tick={{ fontSize: 12, fill: "#64748b" }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 12, fill: "#64748b" }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                }}
              />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="orders"
                stroke="#22c55e"
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <div className="bg-card rounded-xl border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Traffic Sources
          </h3>
          <div className="space-y-4">
            {trafficSources.map((source) => (
              <div key={source.source} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">
                    {source.source}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {formatNumber(source.visitors)}
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-card rounded-xl border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Device Breakdown
          </h3>
          <div className="flex items-center gap-8">
            <div className="w-40 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {deviceBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {deviceBreakdown.map((device) => (
                <div key={device.device} className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: device.color }}
                  />
                  <span className="text-sm text-foreground">
                    {device.device}
                  </span>
                  <span className="text-sm font-semibold text-foreground ml-auto">
                    {device.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-card rounded-xl border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Conversion Funnel
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {conversionFunnel.map((stage, index) => (
            <div key={stage.stage} className="flex-1 text-center relative">
              <div
                className="h-24 rounded-lg flex items-center justify-center mb-2"
                style={{ backgroundColor: `${stage.color}20` }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{ color: stage.color }}
                >
                  {formatNumber(stage.count)}
                </span>
              </div>
              <p className="text-sm text-foreground font-medium">
                {stage.stage}
              </p>
              {index < conversionFunnel.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                  <ArrowUpRight className="w-4 h-4 text-muted rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Category Performance */}
      <div className="bg-card rounded-xl border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Category Performance
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryPerformance} layout="vertical">
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e2e8f0"
                horizontal={false}
              />
              <XAxis
                type="number"
                tick={{ fontSize: 12, fill: "#64748b" }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <YAxis
                type="category"
                dataKey="category"
                tick={{ fontSize: 12, fill: "#64748b" }}
                tickLine={false}
                axisLine={false}
                width={100}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                }}
                formatter={(value) => [
                  `$${Number(value).toLocaleString()}`,
                  "Revenue",
                ]}
              />
              <Bar dataKey="revenue" fill="#6366f1" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  change,
  icon: Icon,
}: {
  title: string;
  value: string;
  change: number;
  icon: React.ElementType;
}) {
  const isPositive = change >= 0;

  return (
    <div className="bg-card rounded-xl border p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div
          className={cn(
            "flex items-center gap-1 text-sm font-medium",
            isPositive ? "text-success" : "text-destructive",
          )}
        >
          {isPositive ? (
            <ArrowUpRight className="w-4 h-4" />
          ) : (
            <ArrowDownRight className="w-4 h-4" />
          )}
          {Math.abs(change)}%
        </div>
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted mt-1">{title}</p>
    </div>
  );
}
