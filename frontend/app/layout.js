import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "EcoSphere",
  description: "A blockchain-powered decentralized marketplace for trading renewable energy credits (RECs) with AI-driven pricing, IoT verification, and gamified sustainability rewards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
