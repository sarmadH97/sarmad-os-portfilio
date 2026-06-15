import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarmad OS Portfolio",
  description: "Futuristic developer operating system portfolio",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
