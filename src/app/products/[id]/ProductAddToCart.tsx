"use client";

type ProductAddToCartProps = {
  productStock: number;
};

export default function ProductAddToCart({
  productStock,
}: ProductAddToCartProps) {
  return (
    <div className="flex flex-col w-full gap-4 border border-gray-300 rounded-lg p-4 sm:flex-row sm:items-center sm:justify-between md:justify-end md:gap-8">
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 justify-between items-center sm:flex-col sm:items-start md:flex-row md:items-center">
        <p className="flex-shrink-0 font-bold text-gray-600">Select Quantity</p>
        <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-2">
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-[120px] p-2 border border-gray-300 rounded-lg text-base"
          />
          <p className="flex-shrink-0 text-sm font-light text-gray-600">
            <span className="font-bold">In Stock:</span> {productStock}
          </p>
        </div>
      </div>
      <div className="flex flex-row w-auto gap-3 sm:w-full md:max-w-[200px]">
        <button className="w-full px-4 py-3 bg-gray-600 font-bold text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
