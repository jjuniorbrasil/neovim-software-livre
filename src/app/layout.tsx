// app/layout.tsx

import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Neovim Livre",
  description: "Projeto de Software Livre 2025.2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={firaSans.variable}>
      <body className="antialiased">
        <main className="overflow-y-scroll snap-y snap-mandatory scroll-smooth h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
