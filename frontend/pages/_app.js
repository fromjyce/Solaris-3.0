import "../app/globals.css"
import { Kumbh_Sans, Gabarito, Afacad } from "next/font/google";
import { AuthProvider } from '@/context/useAuth';
import { WalletProvider } from "@/context/walletContext";

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
    title: "Solaris 3.0",
    description:
        "A blockchain-powered decentralized marketplace for trading renewable energy credits (RECs) with AI-driven pricing, IoT verification, and gamified sustainability rewards.",
};

function MyApp({ Component, pageProps }) {
    return (
        <div className={`${kumbhSans.variable} ${gabarito.variable} ${afacad.variable} antialiased`}>
          <WalletProvider>
          <AuthProvider>
          <main>
            <Component {...pageProps} />
          </main>
          </AuthProvider>
          </WalletProvider>
        </div>
      );
}

export default MyApp;