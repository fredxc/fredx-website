import { memo, Suspense, lazy, useRef } from "react";

import useThemeStore from "./hooks/useThemeStore";
const Navbar = lazy(() => import("./components/Navbar"));
const HeroText = lazy(() => import("./components/Hero/HeroText"));
const DarkSection = lazy(() => import("./components/DarkSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const BlankSection = lazy(() => import("./components/BlankSection"));
const VisionSection = lazy(() => import("./components/VisionSection"));
const ScrollIndicator = lazy(() => import("./components/Hero/ScrollIndicator"));
const AnimatedBackground = lazy(
  () => import("./components/Hero/AnimatedBackground"),
);

const App = () => {
  const { theme } = useThemeStore();
  const darkSectionRef = useRef(null);

  const darkTheme = theme === "dark";

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${
        darkTheme
          ? "bg-primary-dark text-white"
          : "bg-light-cream text-primary-dark"
      }`}
    >
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-md border-4 border-t-4 border-primary-dark" />
          </div>
        }
      >
        <Navbar />
        <div className="mx-auto max-w-7xl">
          <section className="flex min-h-screen min-w-full items-center justify-center overflow-hidden">
            <AnimatedBackground imageUrl="/assets/hero-bg.png" />
            <HeroText text="HEY, I'M FRED" />
            <ScrollIndicator />
          </section>
          <VisionSection />
          <AboutSection nextSectionRef={darkSectionRef} />
        </div>
        <DarkSection sectionRef={darkSectionRef} />
        <BlankSection />
      </Suspense>
    </main>
  );
};

export default memo(App);
