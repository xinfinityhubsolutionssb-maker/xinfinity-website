"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#05070F] text-white">
      <div className="container text-center">
        <h1 className="text-8xl font-black text-yellow-500 lg:text-9xl">
          404
        </h1>

        <h2 className="mt-8 text-4xl font-bold">
          Page Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 transition hover:border-yellow-500"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}