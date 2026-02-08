import { TopProduct } from "@/features/analytics/type";
import { formatCurrency } from "@/lib/utils";

interface TopProductsProps {
  products: TopProduct[];
}

export function TopProducts({ products }: TopProductsProps) {
  return (
    <div className="bg-card rounded-xl border p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Top Products</h3>
        <p className="text-sm text-muted">
          Best performing products by revenue
        </p>
      </div>
      <div className="space-y-4">
        {products?.map((product, index) => (
          <div
            key={product.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-semibold text-sm">
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">
                {product.name}
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-foreground">
                {formatCurrency(product.revenue)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
