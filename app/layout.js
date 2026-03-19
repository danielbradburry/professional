import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Daniel Bradburry — Senior UI Engineer",
  description:
    "Senior JavaScript / UI Engineer specializing in React, Next.js, and micro frontend architecture. 10+ years building large-scale web applications at Capital One, Vanguard, Upstart, Dell, and Disney.",
  keywords: [
    "Daniel Bradburry",
    "Senior UI Engineer",
    "React Developer",
    "Next.js",
    "Micro Frontend",
    "Full Stack Engineer",
  ],
  openGraph: {
    title: "Daniel Bradburry — Senior UI Engineer",
    description:
      "Senior JavaScript / UI Engineer specializing in React, Next.js, and micro frontend architecture.",
    url: "https://danielbradburry.com",
    siteName: "Daniel Bradburry",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
