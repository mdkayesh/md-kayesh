import Header from "@/components/Header";
import "./globals.css";
import { Lato } from "next/font/google";
import Footer from "@/components/Footer";
import Pagewrapper from "@/components/Pagewrapper";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Md Kayesh",
  description: "Design and Built with Md Kayesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="theme-1">
      <body
        className={`${lato.className} bg-bgColor text-textColor`}
        suppressHydrationWarning={true}
      >
        <Pagewrapper>
          <Header />
          {children}
          <Footer />
        </Pagewrapper>
      </body>
    </html>
  );
}
