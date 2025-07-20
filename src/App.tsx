import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navigation } from "./components/Navigation";
import Products from "./components/Products";
import { ProductsSection } from "./components/ProductsSection";
import { ServicesSection } from "./components/ServicesSection";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
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
        }
      />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
