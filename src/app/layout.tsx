import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarmad's Portfolio",
  description: "Software Engineer Portfolio",
  verification: {
    google: "2vLJczRVUI8AfBUXYS4kdqPprTXaIjcg0krsNbBRzTQ",
  },
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
