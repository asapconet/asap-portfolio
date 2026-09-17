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

      <main
        className="flex-1 flex flex-col items-center justify-center min-h-[90vh]
        gap-5 mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg w-full"
      >
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}
