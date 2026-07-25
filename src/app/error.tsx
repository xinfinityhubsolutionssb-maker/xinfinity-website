"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#05070F] px-6">
      <div className="max-w-xl text-center">
        <p className="mb-3 text-yellow-500 font-semibold uppercase tracking-[0.3em]">
          Something went wrong
        </p>

        <h1 className="mb-5 text-5xl font-bold text-white">
          Unexpected Error
        </h1>

        <p className="mb-8 text-slate-400">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            <RefreshCcw size={18} />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-yellow-500 hover:text-yellow-400"
          >
            <Home size={18} />
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}