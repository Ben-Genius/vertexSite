import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vertex Ridge Limited | Construction & Engineering Excellence",
  description: "Vertex Ridge Limited is a Ghanaian-owned construction and engineering firm delivering world-class infrastructure solutions across Africa. Expert in civil engineering, oil & gas, and project management.",
  keywords: ["Vertex Ridge", "Construction Ghana", "Engineering Accra", "Civil Engineering", "Oil and Gas", "Infrastructure Africa", "Project Management"],
  authors: [{ name: "Vertex Ridge Limited" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vertex Ridge Limited | Construction & Engineering Excellence",
    description: "Ghanaian-owned construction and engineering firm delivering world-class infrastructure solutions across Africa.",
    url: "https://vertexridge.com",
    siteName: "Vertex Ridge Limited",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertex Ridge Limited",
    description: "Construction & Engineering Excellence in Ghana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-sand text-charcoal min-h-screen relative overflow-x-hidden`}
      >
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="w-full">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

