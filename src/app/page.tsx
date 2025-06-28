import { ErrorView } from "@/components/ErrorView";
import { getProductList } from "@/lib/services/product";
import ProductListingContainer from "./ProductListingContainer";

export type ProductListingSearchParams = {
  category?: string;
  sort?: string;
};

type ProductListingPageProps = {
  searchParams: ProductListingSearchParams;
};

export default async function ProductListingPage({
  searchParams,
}: ProductListingPageProps) {
  const productListResponse = await getProductList(searchParams);

  if (!productListResponse.data) {
    return <ErrorView />;
  }

  return (
    <ProductListingContainer initialProductList={productListResponse.data} />
  );
}
