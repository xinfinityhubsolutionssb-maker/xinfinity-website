import Image from "next/image";
import Link from "next/link";

import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import logo from "@/assets/logo/logo.png";
import { siteConfig } from "@/config/site";

const services = [
  "Software Development",
  "ERP Solutions",
  "Mobile Applications",
  "Website Development",
  "Hardware Supply",
  "Travel Services",
];

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Solutions", href: "/solutions" },
  { title: "Industries", href: "/industries" },
  { title: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="container py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Image
              src={logo}
              alt="XINFINITY HUB SOLUTIONS"
              width={70}
              height={70}
              className="mb-5"
            />

            <h2 className="text-2xl font-bold text-yellow-500">
              XINFINITY
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Professional software development, enterprise business solutions,
              websites, mobile applications, ERP systems, IT hardware and
              digital transformation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-yellow-500"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((item) => (
                <li
                  key={item}
                  className="text-gray-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Contact Us
            </h3>

            <div className="space-y-5">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex gap-3 text-gray-400 transition hover:text-yellow-500"
              >
                <Phone
                  className="mt-1 text-yellow-500"
                  size={18}
                />

                <span>{siteConfig.phone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex gap-3 text-gray-400 transition hover:text-yellow-500"
              >
                <Mail
                  className="mt-1 text-yellow-500"
                  size={18}
                />

                <span className="break-all">
                  {siteConfig.email}
                </span>
              </a>

              <div className="flex gap-3">
                <MapPin
                  className="mt-1 text-yellow-500"
                  size={18}
                />

                <span className="whitespace-pre-line text-gray-400">
                  {siteConfig.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-center text-gray-500 lg:text-left">
            © {new Date().getFullYear()} {siteConfig.companyName}. All Rights
            Reserved.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-gray-500 transition hover:text-yellow-500"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-gray-500 transition hover:text-yellow-500"
            >
              Terms & Conditions
            </Link>
          </div>

          <div className="flex justify-center gap-5">
            <a
              href={siteConfig.socials?.facebook || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-white/10 p-3 transition hover:border-yellow-500 hover:text-yellow-500"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href={siteConfig.socials?.instagram || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-white/10 p-3 transition hover:border-yellow-500 hover:text-yellow-500"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href={siteConfig.socials?.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-3 transition hover:border-yellow-500 hover:text-yellow-500"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}