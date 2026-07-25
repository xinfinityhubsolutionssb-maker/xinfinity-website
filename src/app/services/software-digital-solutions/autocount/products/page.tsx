import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  Cloud,
  Receipt,
  Warehouse,
  ShoppingCart,
  Users,
  CreditCard,
  FileBarChart2,
  Boxes,
  Smartphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AutoCount Products | XINFINITY HUB SOLUTIONS",
  description:
    "Explore AutoCount software products including Accounting, Cloud Accounting, POS, Payroll, OneSales and related business solutions.",
};

const products = [
  {
    icon: Calculator,
    title: "AutoCount Accounting",
    description:
      "Comprehensive accounting software for SMEs with GL, AR, AP, Cash Book, Fixed Assets, SST, inventory and reporting.",
    features: [
      "Financial Accounting",
      "Inventory",
      "Purchasing",
      "Sales",
      "SST Ready",
    ],
  },
  {
    icon: Cloud,
    title: "AutoCount Cloud Accounting",
    description:
      "Cloud-based accounting platform that allows businesses to access financial information securely from anywhere.",
    features: [
      "Cloud Access",
      "Real-time Data",
      "Automatic Backup",
      "Multi-device",
      "Remote Working",
    ],
  },
  {
    icon: ShoppingCart,
    title: "AutoCount POS",
    description:
      "Retail and F&B point-of-sale solution integrated with AutoCount Accounting for seamless operations.",
    features: [
      "Retail POS",
      "Customer Loyalty",
      "Inventory Sync",
      "Multi Outlet",
      "Sales Dashboard",
    ],
  },
  {
    icon: Receipt,
    title: "AutoCount e-Invoice",
    description:
      "Supports Malaysia e-Invoice requirements with seamless integration into AutoCount business workflows.",
    features: [
      "LHDN Ready",
      "Invoice Submission",
      "Validation",
      "Reporting",
      "Compliance",
    ],
  },
  {
    icon: Users,
    title: "AutoCount Payroll",
    description:
      "Complete payroll management with statutory compliance and employee management features.",
    features: [
      "Payroll",
      "PCB",
      "EPF",
      "SOCSO",
      "HR Reports",
    ],
  },
  {
    icon: Warehouse,
    title: "Inventory Management",
    description:
      "Powerful inventory control supporting multiple warehouses, stock movement and costing.",
    features: [
      "Warehouse",
      "Batch Control",
      "Serial Number",
      "Stock Transfer",
      "Reorder Level",
    ],
  },
  {
    icon: CreditCard,
    title: "Sales & Purchasing",
    description:
      "Manage quotations, sales orders, invoices, purchases and supplier transactions in one platform.",
    features: [
      "Quotation",
      "Sales Order",
      "Purchase Order",
      "Delivery Order",
      "Invoice",
    ],
  },
  {
    icon: Boxes,
    title: "Production Module",
    description:
      "Support manufacturing operations with Bill of Materials (BOM), production planning and costing.",
    features: [
      "BOM",
      "Production",
      "Costing",
      "Raw Materials",
      "Finished Goods",
    ],
  },
  {
    icon: Smartphone,
    title: "AutoCount OneSales",
    description:
      "Mobile sales application for field sales teams with customer visits, orders and collections.",
    features: [
      "Mobile Ordering",
      "Customer Visit",
      "GPS",
      "Collections",
      "Real-time Sync",
    ],
  },
];

const highlights = [
  "Official AutoCount Solution",
  "Cloud & Desktop Options",
  "Scalable for SMEs",
  "Malaysia Compliance",
  "Implementation Services",
  "Training & Support",
  "Data Migration",
  "Business Consultation",
];

export default function ProductsPage() {
  return (
    <main className="bg-[#07111F] text-white">
      <section className="border-b border-cyan-500/10">
        <div className="container py-24">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            AutoCount Products
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            Complete AutoCount Product Ecosystem
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Discover AutoCount&apos;s integrated business software designed to help
Malaysian businesses manage accounting, inventory, payroll, sales,
manufacturing and business operations efficiently.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <div
                key={product.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-500/15 p-4">
                  <Icon className="h-7 w-7 text-cyan-300" />
                </div>

                <h2 className="text-2xl font-bold">
                  {product.title}
                </h2>

                <p className="mt-4 text-slate-400 leading-7">
                  {product.description}
                </p>

                <div className="mt-6 space-y-3">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container py-20">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <FileBarChart2 className="mx-auto mb-4 h-8 w-8 text-cyan-400" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-amber-500/10 p-10 md:p-14">
          <h2 className="text-4xl font-bold">
            Choose the Right AutoCount Edition
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            AutoCount offers different editions to suit startups, SMEs and
            growing enterprises. Compare the available editions before choosing
            the best solution for your business.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services/software-digital-solutions/autocount/editions"
              className="inline-flex items-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
            >
              Next: Editions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}