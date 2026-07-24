"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
          className="flex items-center gap-3"
        >
          <Image
            src={logo}
            alt="XINFINITY HUB SOLUTIONS"
            width={52}
            height={52}
            className="h-12 w-auto transition duration-300 hover:scale-105"
            priority
          />

          <div>
            <h2 className="text-lg font-bold tracking-wider text-white">
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
          className="hidden rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-400 lg:inline-flex"
        >
          Get Quote
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
            className="mt-6 block rounded-xl bg-yellow-500 px-5 py-3 text-center font-semibold text-black transition hover:bg-yellow-400"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}