"use client";

import { ProductData } from "@/lib/types/product";

type ProductSummaryProps = {
  data: ProductData;
};

export default function ProductSummary({ data }: ProductSummaryProps) {
  const { name, price, category, productSku, description } = data;

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-lg sm:text-2xl">{name}</h1>
        <p className="font-bold text-xl text-gray-600 sm:text-3xl">
          ${price.toFixed(2)}
        </p>
      </div>
      <div className="flex flex-col gap-4 border border-gray-300 rounded-lg p-4">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-gray-600">Product Details</h3>
          <div className="flex flex-row items-center gap-2">
            <div>
              <p className="text-gray-500">Category</p>
              <p className="font-light text-gray-500">Product SKU</p>
            </div>
            <div>
              <p>: {category}</p>
              <p>: {productSku}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-gray-600">Product Description</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
