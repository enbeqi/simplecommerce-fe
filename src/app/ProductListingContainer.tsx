"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { AdjustmentsHorizontalIcon, TagIcon } from "@heroicons/react/16/solid";
import { Dropdown } from "@/components/Dropdown";
import { ProductCard } from "@/components/ProductCard";
import { ProductData } from "@/lib/types/product";

type ProductListingContainerProps = {
  initialProductList: ProductData[] | [];
};

export default function ProductListingContainer({
  initialProductList,
}: ProductListingContainerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "";

  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row flex-wrap justify-end gap-x-4 gap-y-2 mb-4">
        <Dropdown
          id="category"
          labelText="Category"
          options={[
            { value: "", label: "All Categories" },
            { value: "beauty", label: "Beauty" },
            { value: "fragrances", label: "Fragrances" },
            { value: "furniture", label: "Furniture" },
            { value: "groceries", label: "Groceries" },
          ]}
          selectedValue={category}
          labelIcon={<TagIcon className="size-5" />}
          className="sm:max-w-[240px]"
          onChange={updateSearchParams}
        />
        <Dropdown
          id="sort"
          labelText="Sort By"
          options={[
            { value: "", label: "Most Related" },
            { value: "price_asc", label: "Price: Low to High" },
            { value: "price_desc", label: "Price: High to Low" },
          ]}
          selectedValue={sort}
          labelIcon={<AdjustmentsHorizontalIcon className="size-5" />}
          className="sm:max-w-[240px]"
          onChange={updateSearchParams}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {initialProductList.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}
