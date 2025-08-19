import Image from "next/image";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <h3 className="line-clamp-1 font-medium">{product.name}</h3>
        <div className="mt-1 flex items-center justify-between text-sm text-gray-600">
          <span>{product.price.toFixed(2)} €</span>
          <span>★ {product.rating.toFixed(1)}</span>
        </div>
      </div>
    </article>
  );
}
