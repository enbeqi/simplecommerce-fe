import { create } from "zustand";
import { ProductData } from "@/lib/types/product";

interface CartState {
  products: ProductData[] | [];
  count: number;
  addProduct: (product: ProductData) => void;
}

export const useCartStore = create<CartState>()((set, get) => ({
  products: [],
  count: 0,
  addProduct: (product) => {
    const isProductExist = get().products.find(
      (existingProduct) => existingProduct.id === product.id
    );
    if (isProductExist) return;

    const updatedProducts = [...get().products, product];
    set({ products: updatedProducts, count: updatedProducts.length });
  },
}));
