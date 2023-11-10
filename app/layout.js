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
  title: "Md Kayesh | Front-End-Developer",
  description:
    "Hi, I'm Md Kayesh. I'm a front-end-developer. I love to create fully functional beautiful and attractive-looking websites with cool animations and designs with the latest technologies like Reactjs, Nextjs, Tailwind, Framer-motion, GSAP, Bootstrap, Redux, Redux-toolkit, Javascript, CSS3, HTML5, etc. I have been working in this field since 2021. In these years I have developed 50+ websites. I love to work with new people and create websites for them. In work, my major priority is the client's requirements and their satisfaction. So, If you want to design or build a website and work with me, feel free to contact with me.",
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
