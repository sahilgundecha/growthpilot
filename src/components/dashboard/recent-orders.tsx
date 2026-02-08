import { Order } from "@/features/analytics/type";
import { formatCurrency, cn } from "@/lib/utils";

interface RecentOrdersProps {
  orders: Order[];
}

const statusStyles: Record<string, string> = {
  completed: "bg-success/10 text-success",
  processing: "bg-primary/10 text-primary",
  shipped: "bg-warning/10 text-warning",
  cancelled: "bg-destructive/10 text-destructive",
};

export function RecentOrders({ orders }: RecentOrdersProps) {
  return (
    <div className="bg-card rounded-xl border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Recent Orders
          </h3>
          <p className="text-sm text-muted">Latest customer orders</p>
        </div>
        <button className="text-sm text-primary hover:underline font-medium">
          View all
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                Order
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                Customer
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted hidden sm:table-cell">
                Product
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                Status
              </th>
              <th className="text-right py-3 px-2 text-sm font-medium text-muted">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr
                key={order.id}
                className="border-b last:border-0 hover:bg-secondary/30 transition-colors"
              >
                <td className="py-3 px-2">
                  <p className="font-medium text-foreground">{order.id}</p>
                </td>
                <td className="py-3 px-2">
                  <p className="font-medium text-foreground">
                    {order.customer}
                  </p>
                </td>
                <td className="py-3 px-2 hidden sm:table-cell">
                  <p className="text-foreground truncate max-w-[150px]">
                    {order.product}
                  </p>
                </td>
                <td className="py-3 px-2">
                  <span
                    className={cn(
                      "inline-flex px-2.5 py-1 rounded-full text-xs font-medium capitalize",
                      statusStyles[order.status] || "bg-secondary text-muted",
                    )}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-2 text-right">
                  <p className="font-semibold text-foreground">
                    {formatCurrency(order.amount)}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
