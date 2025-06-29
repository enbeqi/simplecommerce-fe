"use client";

import { useRouter } from "next/navigation";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/lib/store/cart";

export function Navbar() {
  const router = useRouter();
  const cartCount = useCartStore((state) => state.count);

  const handleRedirectToLanding = () => {
    router.push("/");
  };

  return (
    <nav className="flex justify-between items-center shadow-md px-8 py-4 md:px-12 md:px-16 xl:px-32">
      <div
        className="flex items-center gap-1 font-bold text-gray-800 cursor-pointer"
        onClick={handleRedirectToLanding}
      >
        <ShoppingBagIcon className="size-5" />
        <span>SimpleCommerce</span>
      </div>
      <div className="flex relative items-center gap-2 cursor-pointer">
        <span className="font-light text-sm">Shopping Cart</span>
        <ShoppingCartIcon className="size-5 text-gray-800 cursor-pointer" />
        {cartCount > 0 && (
          <span className="flex items-center justify-center absolute right-[-8] top-[-6] size-4 text-[10px] font-bold text-white bg-red-500 rounded-full">
            {cartCount}
          </span>
        )}
      </div>
    </nav>
  );
}
