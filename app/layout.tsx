import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import AOSProvider from "./lib/AOSProvider";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { PageHeaderProvider } from "./lib/PageHeaderContext";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
});
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto-condensed",
});
export const metadata: Metadata = {
  title: "VieCell | Stem Cell Therapy Hospital Surat, Gujarat, India",
  description:
    "VieCell Institute of Regenerative Medicine, Surat, Gujarat offers quality healthcare services at an affordable price and the vision is to provide stem cell based therapy to those suffering from degenerative disorders around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoCondensed.variable}`}>
        <PageHeaderProvider>
          <AOSProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </AOSProvider>
        </PageHeaderProvider>
      </body>
    </html>
  );
}
