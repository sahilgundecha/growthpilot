import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sahil Gundecha | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Available for remote opportunities.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Remote Developer",
    "Web Developer",
    "Sahil Gundecha",
  ],
  authors: [{ name: "Sahil Gundecha" }],
  openGraph: {
    title: "Sahil Gundecha | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Gundecha | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
