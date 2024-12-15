import "../app/globals.css"
import { Kumbh_Sans, Gabarito, Afacad } from "next/font/google";

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
    title: "EcoSphere",
    description:
        "A blockchain-powered decentralized marketplace for trading renewable energy credits (RECs) with AI-driven pricing, IoT verification, and gamified sustainability rewards.",
};

function MyApp({ Component, pageProps }) {
    return (
        <div className={`${kumbhSans.variable} ${gabarito.variable} ${afacad.variable} antialiased`}>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      );
}

export default MyApp;