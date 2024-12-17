import { Kumbh_Sans, Gabarito, Afacad } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kumbh-sans",
});

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-gabarito",
});

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-afacad",
});

export const metadata = {
  title: "Solaris 2.0",
  description:
    "A blockchain-powered decentralized marketplace for trading renewable energy credits (RECs) with AI-driven pricing, IoT verification, and gamified sustainability rewards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.variable} ${gabarito.variable} ${afacad.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
