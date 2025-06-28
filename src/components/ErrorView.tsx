"use client";

import { useRouter } from "next/navigation";

export function ErrorView() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p className="text-xl">Something went wrong. Please try again later.</p>
      </div>
      <div className="mt-8">
        <button
          onClick={() => router.refresh()}
          className="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer hover:bg-gray-600"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}
