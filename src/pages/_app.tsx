import type { AppProps } from "next/app";
import "../styles/global.scss";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";
import CustomCursor from "@/components/animations/CustomCursor";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative max-w-screen-2xl mx-auto w-full flex flex-col min-h-screen">
      <CustomCursor />

      <SocialLinks className="hidden xl:block" />
      <Navbar />

      <main className="">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}
