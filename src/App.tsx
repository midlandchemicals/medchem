import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navigation } from "./components/Navigation";
import { ProductsSection } from "./components/ProductsSection";
import { ServicesSection } from "./components/ServicesSection";

function App() {
  return (
    <div className="min-h-screen  bg-background">
      <Navigation></Navigation>
      <main>
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
