import { ErrorView } from "@/components/ErrorView";
import { getProductById } from "@/lib/services/product";
import ProductDetailContainer from "./ProductDetailContainer";

type ProductDetailPageProps = {
  params: { id: string };
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const productDetailResponse = await getProductById(params.id);
  const {
    data: productDetailData,
    code: responseCode,
    message: responseMessage,
  } = productDetailResponse;

  if (!productDetailData) {
    return <ErrorView code={responseCode} message={responseMessage} />;
  }

  return <ProductDetailContainer initialProductData={productDetailData} />;
}
