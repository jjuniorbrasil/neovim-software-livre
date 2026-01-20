import { Installation } from "./pages/Installation";
import { About } from "./pages/About";
import { Header } from "@/components/Header";
import { HeroSection } from "./pages/HeroSection";
import { Videos } from "./pages/Videos";
import { Footer } from "@/components/Footer";
import { Comments } from "./components/Comments";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Installation />
        <Videos />
        <Comments />
      </main>
      <Footer />
    </>
  );
}
