import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Cleanex Argentina",
  description: "Servicios de limpieza profesional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}