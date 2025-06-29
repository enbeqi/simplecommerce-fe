"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { ProductData } from "@/lib/types/product";
import ProductSummary from "./ProductSummary";
import ProductAddToCart from "./ProductAddToCart";

type ProductDetailContainerProps = {
  initialProductData: ProductData;
};

export default function ProductDetailContainer({
  initialProductData,
}: ProductDetailContainerProps) {
  const router = useRouter();
  const { name, imageUrl, stock } = initialProductData;

  return (
    <div className="flex flex-col gap-6">
      <div
        onClick={() => router.back()}
        className="flex items-center cursor-pointer gap-2"
      >
        <ArrowLeftCircleIcon className="size-6 text-gray-600" />
        <span className="font-bold text-gray-600">Back</span>
      </div>
      <div className="flex flex-col items-center md:flex-row md:items-start gap-4 md:gap-8">
        <div className="relative w-full aspect-square max-w-[500px] md:max-w-[30%] border border-gray-300 rounded-lg shadow">
          <Image
            src={imageUrl}
            alt={name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-col w-full max-w-[500px] gap-4 md:max-w-[66%]">
          <ProductSummary data={initialProductData} />
          <ProductAddToCart product={initialProductData} />
        </div>
      </div>
    </div>
  );
}
