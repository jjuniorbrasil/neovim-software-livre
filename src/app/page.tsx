import { Installation } from "./pages/Installation";
import { About } from "./pages/About";
import { Heading } from "./pages/Heading";
import { Videos } from "./pages/Videos";
import { Footer } from "./components/Footer";
import { Comments } from "./components/Comments";

export default function Page() {
  return (
    <>
      <Heading />
      <About />
      <Installation />
      <Videos />
      <Comments />
      <Footer />
    </>
  );
}
