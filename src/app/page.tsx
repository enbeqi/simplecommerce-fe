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

  const {
    data: productListData,
    code: responseCode,
    message: responseMessage,
  } = productListResponse;

  if (!productListData) {
    return <ErrorView code={responseCode} message={responseMessage} />;
  }

  return <ProductListingContainer initialProductList={productListData} />;
}
