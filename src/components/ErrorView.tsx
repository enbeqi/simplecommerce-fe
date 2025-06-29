"use client";

import { useRouter } from "next/navigation";
import { APIResponseCode, ErrorResponseCode } from "@/lib/types/apiResponse";

type ErrorViewProps = {
  code?: APIResponseCode;
  message?: string;
};

export function ErrorView({ code, message }: ErrorViewProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p className="text-xl">
          {message || "Something went wrong. Please try again later."}
        </p>
      </div>
      <div className="mt-8">
        {code === ErrorResponseCode.DATA_NOT_EXIST ? (
          <button
            onClick={() => router.push("/")}
            className="w-full px-4 py-3 bg-gray-600 font-bold text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
          >
            Back to Products
          </button>
        ) : (
          <button
            onClick={() => router.refresh()}
            className="w-full px-4 py-3 bg-gray-600 font-bold text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
          >
            Reload Page
          </button>
        )}
      </div>
    </div>
  );
}
