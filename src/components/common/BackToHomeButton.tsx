"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function BackToHomeButton() {
  return (
    <div className="container pt-8">
      <Link
        href="/"
        className="group inline-flex items-center gap-3 rounded-full border border-yellow-500/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-500 hover:text-black"
      >
        <ArrowLeft
          size={18}
          className="transition-transform group-hover:-translate-x-1"
        />

        <Home size={18} />

        <span>Back to Home</span>
      </Link>
    </div>
  );
}