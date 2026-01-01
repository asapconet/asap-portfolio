import Navbar from "@/components/NavBar";
import MainPage from "./main";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="bg-background flex flex-col items-center justify-center w-full min-h-screen">
      <div className="relative max-w-[1440px] w-full">
        <SocialLinks className="hidden xl:block" />
        <Navbar />
        <MainPage />
      </div>
    </main>
  );
}
