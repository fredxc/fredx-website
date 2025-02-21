import { Navbar } from "./components/Navbar";
import { HeroText } from "./components/HeroText";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { AnimatedBackground } from "./components/AnimatedBackground";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-light-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="flex min-h-screen min-w-full items-center justify-center overflow-hidden">
        <AnimatedBackground imageUrl="/assets/hero-bg.jpg" />

        <HeroText text="HEY, I'M FRED" />

        <ScrollIndicator />
      </section>
    </div>
  );
}

export default App;
