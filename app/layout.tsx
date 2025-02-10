import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
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
            className="flex flex-col items-center justify-center lg:flex-row lg:items-stretch"
          >
            <div className="lg:sticky lg:top-0 ">
              <Profile />
            </div>

            <main className="">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
