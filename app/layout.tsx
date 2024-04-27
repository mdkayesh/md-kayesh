import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { metaData } from "@/public/data/data";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import SocialSide from "@/components/SocialLinks";
import EmailSide from "@/components/EmailSide";
import Wrapper from "@/components/Wrapper";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = {
  ...metaData,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Wrapper>
          <Header />
          <SocialSide />
          <div className="content flex-1 overflow-x-hidden">
            {children}
            <Footer />
          </div>
          <EmailSide />
        </Wrapper>
      </body>
    </html>
  );
}
