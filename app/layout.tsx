import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const condor = localFont({
  src: [
    { path: "../public/fonts/fonnts.com-Condor_ExtraLight.otf", weight: "200", style: "normal" },
    { path: "../public/fonts/fonnts.com-Condor_Light.otf",      weight: "300", style: "normal" },
    { path: "../public/fonts/fonnts.com-Condor_Regular.otf",    weight: "400", style: "normal" },
    { path: "../public/fonts/fonnts.com-Condor_Medium.otf",     weight: "500", style: "normal" },
    { path: "../public/fonts/fonnts.com-Condor_Bold.otf",       weight: "700", style: "normal" },
    { path: "../public/fonts/fonnts.com-Condor_Black.otf",      weight: "900", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

const BASE_URL = "https://grandoro.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Grand'Oro | Lançamento Vila Barth",
    template: "%s | Grand'Oro",
  },
  description: "O valor de viver o que é raro. 127m², 3 suítes, 2 vagas. Torre única de 19 pavimentos na Vila Barth. Elegante, imponente e atemporal.",
  keywords: ["Grand'Oro", "lançamento", "Vila Barth", "apartamento", "127m²", "3 suítes", "imóvel", "torre", "luxo"],
  authors: [{ name: "Grand'Oro" }],
  robots: { index: true, follow: true },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Grand'Oro",
    title: "Grand'Oro | Lançamento Vila Barth",
    description: "O valor de viver o que é raro. 127m², 3 suítes, 2 vagas. Torre única de 19 pavimentos na Vila Barth.",
    images: [{ url: "/images/background.jpg", width: 1200, height: 630, alt: "Grand'Oro Vila Barth" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand'Oro | Lançamento Vila Barth",
    description: "O valor de viver o que é raro. 127m², 3 suítes, 2 vagas. Torre única de 19 pavimentos na Vila Barth.",
    images: ["/images/background.jpg"],
  },
  icons: {
    icon: "/images/logo-header.png",
    apple: "/images/logo-header.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Grand'Oro Vila Barth",
  description: "Torre única de 19 pavimentos com apartamentos de 127m², 3 suítes e 2 vagas na Vila Barth.",
  url: BASE_URL,
  image: `${BASE_URL}/images/background.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vila Barth",
    addressCountry: "BR",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    priceCurrency: "BRL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${condor.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
