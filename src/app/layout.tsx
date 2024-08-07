import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import { MainHeader } from "@/components/layout/main-header";

const navs = [
  {
    name: "Services",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Future Health Design",
  description: "Designing the resilient future of Health starts today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainHeader navs={navs} />
          <main className="max-w-screen-2xl mx-auto p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
