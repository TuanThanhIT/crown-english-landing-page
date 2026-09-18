const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://crown-english-landing-page.vercel.app";

export default function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "EducationalOrganization",

    name: "Crown English",

    url: baseUrl,

    telephone: "0898192633",

    email: "ieltsgiaotiepcrown@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "168/20 Nguyễn Gia Trí, Phường 25, Bình Thạnh",
      addressLocality: "Ho Chi Minh City",
      addressRegion: "Ho Chi Minh City",
      addressCountry: "VN",
    },
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
