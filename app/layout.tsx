import type { Metadata } from "next";
import "../styles/global.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/utils/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Website Portfolio as a Fullstack Developer",
  // viewport: "width=device-width, initial-scale=1", // responsive
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-pt-28 ${poppins.className}`}
    >
      <body className={`transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
