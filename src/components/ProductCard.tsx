"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductData } from "@/lib/types/product";

export function ProductCard({ data }: { data: ProductData }) {
  const router = useRouter();
  const { id, name, price, description, imageUrl } = data;

  const handleCardClick = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div
      className="flex flex-col p-4 border border-gray-300 rounded shadow cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={handleCardClick}
    >
      <div className="relative w-full aspect-square mb-4">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <h2 className="truncate">{name}</h2>
      <p className="font-bold text-xl">${price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
    </div>
  );
}
