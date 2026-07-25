import Link from "next/link";
import {
  Mail,
  Phone,
  Clock,
  ArrowUpRight,
} from "lucide-react";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#07111F] text-white">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold">{siteConfig.shortName}</h3>

            <p className="mt-5 leading-7 text-slate-400">
              Transforming Businesses Through Innovative Technology.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-xl border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold">Services</h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>
                <Link href="/services/software-digital-solutions" className="hover:text-cyan-300">
                  Software & Digital Solutions
                </Link>
              </li>

              <li>
                <Link href="/services/hardware-supply" className="hover:text-cyan-300">
                  IT Hardware Supply
                </Link>
              </li>

              <li>
                <Link href="/services/travel-services" className="hover:text-cyan-300">
                  Travel Services
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-cyan-300">
                  Business Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>
                <Link href="/" className="hover:text-cyan-300">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-cyan-300">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-cyan-300">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-cyan-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>

            <div className="mt-5 space-y-5 text-slate-400">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-cyan-400" />
                <span>{siteConfig.phone}</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-cyan-400" />
                <span>{siteConfig.email}</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-cyan-400" />

                <div>
                  <p className="font-medium text-white">Business Hours</p>

                  <p className="mt-2">
                    Monday - Friday
                    <br />
                    9:00 AM - 5:30 PM
                  </p>

                  <p className="mt-3">
                    Saturday
                    <br />
                    9:00 AM - 1:00 PM
                  </p>

                  <p className="mt-3">
                    Sunday
                    <br />
                    Off
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center font-semibold text-cyan-300 hover:text-cyan-200"
              >
                Get Quote
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-slate-400">
            Copyright © {year} XINFINITY HUB SOLUTIONS SDN. BHD. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}