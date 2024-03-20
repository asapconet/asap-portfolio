import Navbar from "@/components/NavBar";
import MainPage from "./main";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="fle flex-col items-center justify-center bg-background relative">
      <SocialLinks />
      <Navbar/>
      <MainPage />
    </main>
  );
}
