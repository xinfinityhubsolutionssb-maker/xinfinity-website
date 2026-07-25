"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  ArrowRight,
  ChevronDown,
  MonitorSmartphone,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "@/assets/logo/logo.png";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  const close = (e: MouseEvent) => {
    if (
      serviceRef.current &&
      !serviceRef.current.contains(e.target as Node)
    ) {
      setServiceOpen(false);
    }
  };

  document.addEventListener("mousedown", close);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    document.removeEventListener("mousedown", close);
  };
}, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled
        ? "border-b border-yellow-500/20 bg-[#05070F]/90 shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-3xl"
        : "border-b border-white/10 bg-[#05070F]/60 backdrop-blur-2xl"
      }`}
    >
      <div className="container flex h-[88px] items-center justify-between">
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
            className="h-12 w-auto transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_28px_rgba(234,179,8,.65)]"
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
    if (item.href === "/services") {
      return (
        <div
          key={item.title}
          ref={serviceRef}
          className="relative"
          onMouseEnter={() => setServiceOpen(true)}
          onMouseLeave={() => setServiceOpen(false)}
        >
          <button className="flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-yellow-500">
            Services
            <ChevronDown
              size={16}
              className={`transition ${
                serviceOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {serviceOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: .2 }}
                className="absolute left-1/2 top-10 w-[430px] -translate-x-1/2 rounded-3xl border border-white/10 bg-[#070B16]/95 p-6 shadow-2xl backdrop-blur-3xl"
              >
                <div className="grid gap-3">
                  {[
                    {
                      title: "Software & Digital Solutions",
                      href: "/services/software-digital-solutions",
                    },
                    {
                      title: "Hardware & IT Infrastructure",
                      href: "/services/hardware-it-infrastructure",
                    },
                    {
                      title:
                        "Accounts, Administration & Manpower Support",
                      href: "/services/accounts-administration-manpower-support",
                    },
                    {
                      title: "Travel & Tour Services",
                      href: "/services/travel-tour-services",
                    },
                    {
                      title:
                        "Project & Tender Support Services",
                      href: "/services/project-tender-support-services",
                    },
                  ].map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:border-yellow-500/40 hover:bg-yellow-500/10"
                    >
                      <div className="flex items-center gap-3">
                        <MonitorSmartphone
                          size={18}
                          className="text-yellow-500"
                        />

                        <span className="text-sm font-medium text-white">
                          {service.title}
                        </span>
                      </div>

                      <ArrowRight
                        size={16}
                        className="text-yellow-500 transition group-hover:translate-x-1"
                      />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    const active =
      pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(item.href));

    return (
      <Link
        key={item.title}
        href={item.href}
        className={`relative text-sm font-medium transition ${
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
  className="group relative hidden overflow-hidden rounded-full border border-yellow-500/30 bg-white/5 px-2 py-2 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(234,179,8,.35)] hover:border-yellow-400 lg:inline-flex"
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

        <motion.button
  type="button"
  onClick={() => setOpen((prev) => !prev)}
  aria-label="Toggle navigation"
  whileTap={{ scale: 0.9 }}
  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-yellow-500/40 hover:bg-yellow-500/10 lg:hidden"
>
  <AnimatePresence mode="wait">
    {open ? (
      <motion.div
        key="close"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <HiX className="text-2xl text-white" />
      </motion.div>
    ) : (
      <motion.div
        key="menu"
        initial={{ rotate: 90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: -90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <HiMenuAlt3 className="text-2xl text-white" />
      </motion.div>
    )}
  </AnimatePresence>
</motion.button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden border-t border-white/10 bg-[#05070F]/95 backdrop-blur-3xl lg:hidden"
    >
      <div className="container space-y-2 py-6">
        {navigation.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-2xl px-4 py-4 transition ${
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
          onClick={() => setOpen(false)}
          className="group mt-6 flex items-center justify-center gap-3 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500 to-amber-500 px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
        >
          <span>Get Quote</span>

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
}