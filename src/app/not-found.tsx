"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#05070F] px-6">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-lg font-semibold uppercase tracking-[0.35em] text-yellow-500">
          Error 404
        </p>

        <h1 className="mb-6 text-6xl font-bold text-white md:text-7xl">
          Page Not Found
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-8 text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist, has been moved, or
          is temporarily unavailable.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105"
          >
            <Home size={18} />
            Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-yellow-500 hover:text-yellow-400"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}