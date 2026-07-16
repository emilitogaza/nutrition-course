import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const SITE_NAME = "Fuel Lab";
const SITE_TITLE = "Fuel Lab — nutritional science for athletes";
const SITE_DESCRIPTION =
  "An evidence-based course on nutritional science — protein and amino acids, vitamins and supplements, fuelling performance, and losing fat while keeping muscle. Built for athletes, from the fundamentals to the current research.";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: {
      template: `%s | ${SITE_NAME}`,
      default: SITE_TITLE,
    },
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: `%s | ${SITE_NAME}`,
      default: SITE_TITLE,
    },
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Lets Next.js disable the CSS smooth scroll while it resets the scroll
      // position on navigation, so route transitions don't animate a scroll.
      data-scroll-behavior="smooth"
      className={`${monaSans.variable} h-full antialiased selection:text-ink-flip selection:bg-brand`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
