import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  trend?: "up" | "down";
}

export function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  trend,
}: MetricCardProps) {
  const isPositive = trend ? trend === "up" : change >= 0;

  return (
    <div className="bg-card rounded-xl border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <div className="flex items-center gap-1">
            <span
              className={cn(
                "text-sm font-medium",
                isPositive ? "text-success" : "text-destructive",
              )}
            >
              {isPositive ? "+" : ""}
              {change?.toFixed(1)}%
            </span>
            <span className="text-sm text-muted">vs last period</span>
          </div>
        </div>
        <div
          className={cn(
            "p-3 rounded-lg",
            isPositive ? "bg-success/10" : "bg-destructive/10",
          )}
        >
          <Icon
            className={cn(
              "w-6 h-6",
              isPositive ? "text-success" : "text-destructive",
            )}
          />
        </div>
      </div>
    </div>
  );
}
