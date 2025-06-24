import { Installation } from "./pages/Installation";
import { About } from "./pages/About";
import { Heading } from "./pages/Heading";
import { Videos } from "./pages/Videos";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <>
      <Heading />
      <About />
      <Installation />
      <Videos />
      <Footer />
    </>
  );
}
