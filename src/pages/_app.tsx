import type { AppProps } from "next/app";
import "../styles/global.scss";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative max-w-[1440px] mx-auto w-full flex flex-col min-h-screen">
      <SocialLinks className="hidden xl:block" />
      <Navbar />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
