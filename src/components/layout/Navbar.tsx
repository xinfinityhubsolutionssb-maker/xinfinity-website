"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { ArrowRight } from "lucide-react";

import logo from "@/assets/logo/logo.png";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-10 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-yellow-500/20 bg-[#05070F]/95 shadow-2xl backdrop-blur-2xl"
          : "border-b border-white/10 bg-[#05070F]/75 backdrop-blur-xl"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}

        <Link
          href="/"
          className="group flex items-center gap-3 transition-all duration-300"
        >
          <Image
            src={logo}
            alt="XINFINITY HUB SOLUTIONS"
            width={52}
            height={52}
            className="h-12 w-auto transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_18px_rgba(234,179,8,0.45)]"
            priority
          />

          <div>
            <h2 className="bg-gradient-to-r from-white via-white to-yellow-300 bg-clip-text text-lg font-bold tracking-wider text-transparent transition-all duration-500 group-hover:from-yellow-300 group-hover:to-white">
              {siteConfig.shortName}
            </h2>

            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              HUB SOLUTIONS
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                className={`relative text-sm font-medium transition duration-300 ${
                  active
                    ? "text-yellow-500"
                    : "text-gray-300 hover:text-yellow-500"
                }`}
              >
                {item.title}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-yellow-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}

        <Link
  href="/contact"
  onClick={() => setOpen(false)}
  className="group relative hidden overflow-hidden rounded-full border border-yellow-500/30 bg-white/5 px-2 py-2 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400 lg:inline-flex"
>
  <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

  <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

  <span className="relative flex items-center gap-3 px-4 py-2">
    <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-600 text-black shadow-[0_0_25px_rgba(234,179,8,0.45)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
  <span className="absolute inset-0 rounded-full animate-ping bg-yellow-400/20"></span>
  ✦
</span>

    <span className="font-semibold tracking-wide text-white transition-colors duration-500 group-hover:text-black">
    Get Quote
</span>

    <ArrowRight
      size={18}
      className="text-white transition-all duration-500 group-hover:translate-x-1 group-hover:text-black"
    />
  </span>
</Link>

        {/* Mobile Button */}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          className="text-3xl text-white transition hover:text-yellow-500 lg:hidden"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#05070F]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="container py-6">
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`block rounded-lg px-3 py-4 transition ${
                  active
                    ? "bg-yellow-500/10 text-yellow-500"
                    : "text-gray-300 hover:bg-white/5 hover:text-yellow-500"
                }`}
              >
                {item.title}
              </Link>
            );
          })}

          <Link
  href="/contact"
  className="group mt-6 flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-yellow-500/30 bg-white/5 px-5 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-500 hover:text-black"
>
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-black transition-transform duration-300 group-hover:rotate-12">
    ✦
  </span>

  <span>Get Quote</span>

  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>
        </div>
      </div>
    </header>
  );
}