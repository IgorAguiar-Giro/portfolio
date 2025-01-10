import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Perfil from "./components/Perfil";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Igor Aguiar",
  description: "Portfolio for Igor Aguiar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <div id="main">
          <Navbar />
          <div
            id="main-section"
            className="flex flex-col lg:flex-row"
          >
            <div className="lg:sticky lg:top-0 "><Perfil /></div>
            
            <main className="">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
