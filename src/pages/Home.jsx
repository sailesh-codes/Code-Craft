import Header from "../components/Header";
// import Cursor from "../ui/Cursor";
import Hero from "../components/Hero";
import BTT from "../ui/BackToTop";
import LoadingScreen from "../ui/Loading";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import SellOut from "../components/Sellout";
import Team from "../components/Team";
import Technologies from "../components/Technologies";
import StandOut from "../components/StandOut";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/style.css";
// import Testimonials from "@/components/Testimonials";

function App() {
  return (
    <>
      <Header />
      {/* <Cursor /> */}
      <LoadingScreen />
      <Hero />
      <BTT />
      <Services />
      <Portfolio />
      <SellOut />
      <Team />
      <Technologies />
      <StandOut />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
