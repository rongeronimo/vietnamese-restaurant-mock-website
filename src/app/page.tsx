import About from "./sections/About";
import Booking from "./sections/Booking";
import Chefs from "./sections/Chefs";
import Contact from "./sections/Contact";
import Events from "./sections/Events";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Reviews from "./sections/Reviews";
import Specials from "./sections/Specials";
import WhyUs from "./sections/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <WhyUs />
        <Menu />
        <Specials />
        <Events />
        <Booking />
        <Reviews />
        <Gallery />
        <Chefs />
        <Contact />
      </main>
    </>
  );
}
