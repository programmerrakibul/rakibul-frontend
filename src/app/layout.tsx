import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const sf = localFont({
  src: [
    {
      path: "./fonts/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SFPRODISPLAYBOLD.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sf",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | PPA",
    default: "PPA",
  },
  description:
    "A step-by-step system to eliminate procrastination, train your brain for deep work, and boost productivity effortlessly.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        sf.variable,
      )}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <Navbar />

          <main className="space-y-16 sm:space-y-20">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
