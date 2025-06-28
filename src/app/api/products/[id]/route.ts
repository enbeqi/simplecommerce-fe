import { NextResponse } from "next/server";
import { products } from "@/lib/mocks/data/product";
import {
  APIResponse,
  ErrorResponseCode,
  SuccessResponseCode,
} from "@/lib/types/apiResponse";
import { ProductData } from "@/lib/types/product";

type RouteContext = {
  params: { id: string };
};

export async function GET(
  request: Request,
  context: RouteContext
): Promise<NextResponse> {
  const { id } = context.params;
  const product = products.find((product) => product.id === id);

  if (!product) {
    const response: APIResponse<null> = {
      code: ErrorResponseCode.DATA_NOT_EXIST,
      data: null,
      message: "Product not exist",
    };

    return NextResponse.json(response, { status: 404 });
  }

  const response: APIResponse<ProductData> = {
    code: SuccessResponseCode.SUCCESS,
    data: product,
    message: "Get product success",
  };

  return NextResponse.json(response);
}
