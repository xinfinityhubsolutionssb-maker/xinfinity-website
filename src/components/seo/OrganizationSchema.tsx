export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "XINFINITY HUB SOLUTIONS SDN. BHD.",
    legalName: "XINFINITY HUB SOLUTIONS SDN. BHD.",

    url: "https://www.xinfinityhub.com",

    logo: "https://www.xinfinityhub.com/icon-512.png",

    image: "https://www.xinfinityhub.com/og-image.jpg",

    email: "mailto:xinfinityhubsolutionssb@gmail.com",

    telephone: "+60-16-3040646",

    address: {
      "@type": "PostalAddress",
      streetAddress: "No.6 Jalan Bukit Mewah 9/12, Taman Bukit Mewah Fasa 9",
      addressLocality: "Kajang",
      addressRegion: "Selangor",
      postalCode: "43000",
      addressCountry: "MY",
    },

    sameAs: [],

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