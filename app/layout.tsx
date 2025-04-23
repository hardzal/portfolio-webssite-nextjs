import type { Metadata } from "next";
import "../styles/global.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Website Portfolio as a Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="mx-auto w-2/3">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
