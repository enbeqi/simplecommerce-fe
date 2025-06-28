import { ProductListingSearchParams } from "@/app/page";
import { APIResponse, ErrorResponseCode } from "@/lib/types/apiResponse";
import { ProductData } from "@/lib/types/product";

export const getProductById = async (
  id: string
): Promise<APIResponse<ProductData | null>> => {
  try {
    const apiPath = `${process.env.BASE_URL}/api/products/${id}`;
    const response = await fetch(apiPath);
    const result: APIResponse<ProductData> = await response.json();

    return result;
  } catch {
    return {
      code: ErrorResponseCode.ERROR,
      data: null,
      message: "Failed to fetch product data",
    };
  }
};

export const getProductList = async (
  searchParams?: ProductListingSearchParams
) => {
  try {
    const { category = "", sort = "" } = searchParams || {};
    const apiPath = `${process.env.BASE_URL}/api/products?category=${category}&sort=${sort}`;
    const response = await fetch(apiPath);
    const result: APIResponse<ProductData[] | []> = await response.json();

    return result;
  } catch {
    return {
      code: ErrorResponseCode.ERROR,
      data: null,
      message: "Failed to fetch product data",
    };
  }
};
