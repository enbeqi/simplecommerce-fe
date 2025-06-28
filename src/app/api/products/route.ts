import { NextResponse } from "next/server";
import { products } from "@/lib/mocks/data/product";
import { APIResponse, SuccessResponseCode } from "@/lib/types/apiResponse";
import { ProductData } from "@/lib/types/product";

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");

  let availableProducts = [...products];

  if (category) {
    availableProducts = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (sort) {
    if (sort === "price_asc") {
      availableProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price_desc") {
      availableProducts.sort((a, b) => b.price - a.price);
    }
  }

  const response: APIResponse<ProductData[] | []> = {
    code: SuccessResponseCode.SUCCESS,
    data: availableProducts,
    message: "Get product list success",
  };

  return NextResponse.json(response);
}
