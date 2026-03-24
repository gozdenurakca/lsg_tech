import ProductCard, { type ProductCardData } from "./ProductCard";

type Props = {
  products: ProductCardData[];
  columns?: 2 | 3 | 4;
  className?: string;
};

const colMap = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

export default function ProductGrid({
  products,
  columns = 3,
  className = "",
}: Props) {
  return (
    <section className={`py-24 ${className}`}>
      <div className={`max-w-7xl mx-auto px-6 grid ${colMap[columns]} gap-6`}>
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
