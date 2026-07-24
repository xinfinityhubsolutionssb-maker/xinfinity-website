"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#05070F] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_35%)]" />

      <div className="container relative py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-yellow-500">
            ERROR 404
          </span>

          <h1 className="mt-8 text-8xl font-black leading-none text-yellow-500 lg:text-[10rem]">
            404
          </h1>

          <h2 className="mt-8 text-4xl font-black lg:text-6xl">
            Page
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
              {" "}
              Not Found
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-300">
            The page you are looking for may have been moved, deleted or the URL
            may be incorrect. Return to the homepage or go back to the previous
            page.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
            >
              <Home size={20} />
              Back to Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-400"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}