import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Les Sens des Pains",
  description: "Les Sens des Pains",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <GoogleAnalytics trackingId="G-6BJTYERNMG" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
