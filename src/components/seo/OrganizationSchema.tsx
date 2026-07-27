export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "XINFINITY HUB SOLUTIONS SDN. BHD.",
    legalName: "XINFINITY HUB SOLUTIONS SDN. BHD.",

    url: "https://xinfinity-hub-solutions.vercel.app",

    logo: "https://xinfinity-hub-solutions.vercel.app/icon-512.png",

    image: "https://xinfinity-hub-solutions.vercel.app/og-image.jpg",

    email: "mailto:xinfinityhubsolutionssb@gmail.com",

    telephone: "+60-16-3040646",

    address: {
  "@type": "PostalAddress",
  addressRegion: "Selangor",
  addressCountry: "MY",
  },

    sameAs: [
  "https://www.facebook.com/",
  "https://www.linkedin.com/",
],

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+60-16-3040646",
        contactType: "customer service",
        areaServed: "MY",
        availableLanguage: ["English", "Malay"],
      },
    ],

    knowsAbout: [
      "Software Development",
      "ERP Solutions",
      "Website Development",
      "Mobile Application Development",
      "Cloud Solutions",
      "Business Automation",
      "IT Infrastructure",
      "Digital Transformation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}