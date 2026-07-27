import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import Script from "next/script";
import ScrollProgress from "@/components/common/ScrollProgress";
import PageTransition from "@/components/common/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.xinfinityhub.com";

const siteName = "XINFINITY HUB SOLUTIONS SDN. BHD.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteName,
    template: "%s | XINFINITY HUB SOLUTIONS",
  },

  description:
    "XINFINITY HUB SOLUTIONS SDN. BHD. delivers professional software development, ERP systems, mobile applications, website development, IT infrastructure, cloud solutions, automation, and digital transformation services for businesses in Malaysia.",

  applicationName: siteName,

  keywords: [
    "Software Development Malaysia",
    "ERP System Malaysia",
    "ERP Solutions",
    "Custom Software Development",
    "Website Development",
    "Web Design Malaysia",
    "Mobile App Development",
    "Business Software",
    "POS System",
    "Cloud Solutions",
    "IT Infrastructure",
    "Digital Transformation",
    "Business Automation",
    "Enterprise Solutions",
    "IT Consulting",
    "XINFINITY HUB",
  ],

  authors: [
    {
      name: siteName,
    },
  ],

  creator: siteName,

  publisher: siteName,

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: siteName,

    description:
      "Professional Software Development, ERP Solutions, Mobile Apps, Website Development and Digital Business Solutions.",

    url: siteUrl,

    siteName,

    locale: "en_MY",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteName,

    description:
      "Professional Software Development, ERP Solutions, Mobile Apps, Website Development and Digital Business Solutions.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],

    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",

  verification: {
  google: "Y0Dwr6kcoDTYeXTTaktzg3cIZasRZgzNYyK7AcWUoaQ",
},

  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "default",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1120",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" suppressHydrationWarning>
    <body className={`${inter.variable} ${poppins.variable}`}>
  <ScrollProgress />

  <OrganizationSchema />

  <Navbar />

  <PageTransition>
    <main className="min-h-screen">
      {children}
    </main>
  </PageTransition>

  <Footer />

  <Script
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
      });
    `}
  </Script>

  <Script id="microsoft-clarity" strategy="afterInteractive">
    {`
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);
        t.async=1;
        t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
    `}
  </Script>
</body>
  </html>
);
}