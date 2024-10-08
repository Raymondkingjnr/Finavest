import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import Toast from "@/components/Toast/Toast";
// import Transition from "../transition";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Financier",
  description:
    "Financier,Join our trusted investment platform to trade stocks, cryptocurrencies, ETFs, and more. Maximize your returns with real-time tracking and expert insights. Start investing smarter today ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script type="text/javascript" crossOrigin="anonymous" async>
        {`
          atOptions = {
            'key' : 'a97778949d854e5b2d6fb970b480ac06',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
          };
        `}
      </script>
      <script
        type="text/javascript"
        src="//www.topcpmcreativeformat.com/a97778949d854e5b2d6fb970b480ac06/invoke.js"
        crossOrigin="anonymous"
        async
      ></script>
      <body className={urbanist.className}>
        <NextAuthProvider>
          <Toast />
          <main className=" relative">
            <Header />
            {children}
            <Footer />
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
