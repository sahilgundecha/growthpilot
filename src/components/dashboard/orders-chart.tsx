"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { OrderStatus } from "@/features/analytics/type";

const statusColors: Record<OrderStatus["status"], string> = {
  completed: "#22c55e",
  processing: "#6366f1",
  shipped: "#f59e0b",
  cancelled: "#ef4444",
};

interface OrdersChartProps {
  data: OrderStatus[];
}

export function OrdersChart({ data }: OrdersChartProps) {
  const total = data?.reduce((sum, item) => sum + item.count, 0) || 0;

  return (
    <div className="bg-card rounded-xl border p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Order Status</h3>
        <p className="text-sm text-muted">Distribution of order statuses</p>
      </div>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
              dataKey="count"
              nameKey="status"
            >
              {data?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={statusColors[entry.status]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
              formatter={(value, name) => [
                `${value} (${((Number(value) / total) * 100).toFixed(1)}%)`,
                name,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Legend */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        {data?.map((item) => (
          <div key={item.status} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: statusColors[item.status] }}
            />
            <span className="text-sm text-muted">{item.status}</span>
            <span className="text-sm font-medium text-foreground ml-auto">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
