import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/global.scss";

import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";
import CustomCursor from "@/components/animations/CustomCursor";
import PersonSchema from "@/components/seo/PersonSchema";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Aaron Sunday [ASAPCONET] — Software Engineer & Technical Writer
        </title>

        <meta
          name="description"
          content="Aaron Sunday, is a software engineer and technical writer building production software, backend APIs, and Bitcoin projects with Rust."
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        <link rel="canonical" href="https://asap.dev/" />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="Aaron Sunday" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Aaron Sunday [ASAPCONET] — Software Engineer & Technical Writer"
        />

        <meta
          property="og:description"
          content="Portfolio of Aaron Sunday [ASAPCONET], a software engineer and technical writer building production software, backend APIs, and Bitcoin projects with Rust."
        />

        <meta property="og:url" content="https://asap.dev/" />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Aaron Sunday — ASAPCONET" />

        <meta property="og:image" content="https://asap.dev/og-image.png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          property="og:image:alt"
          content="Aaron Sunday — Software Engineer and Technical Writer"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Aaron Sunday [ASAPCONET] — Software Engineer & Technical Writer"
        />

        <meta
          name="twitter:description"
          content="Portfolio of Aaron Sunday [ASAPCONET], software engineer and technical writer."
        />

        <meta name="twitter:image" content="https://asap.dev/og-image.png" />

        <meta name="twitter:site" content="@asapconet" />

        {/* Theme */}
        <meta name="theme-color" content="#C778DD" />
      </Head>
      <PersonSchema />
      <div className="relative max-w-screen-2xl mx-auto w-full flex flex-col min-h-screen">
        <CustomCursor />
        <SocialLinks className="hidden xl:block" />
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </>
  );
}
