import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import useThemeStore from "./hooks/useThemeStore";
import { memo, Suspense, lazy, useRef } from "react";

const HeroText = lazy(() => import("./components/Hero/HeroText"));
const ScrollIndicator = lazy(() => import("./components/Hero/ScrollIndicator"));
const AnimatedBackground = lazy(
  () => import("./components/Hero/AnimatedBackground"),
);
const VisionSection = lazy(() => import("./components/VisionSection"));
const BlankSection = lazy(() => import("./components/BlankSection"));

const App = () => {
  const { theme } = useThemeStore();
  const darkTheme = theme === "dark";
  const experienceSectionRef = useRef(null);

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${
        darkTheme
          ? "bg-primary-dark text-white"
          : "bg-light-cream text-primary-dark"
      }`}
    >
      <Navbar />

      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-md border-4 border-t-4 border-primary-dark" />
          </div>
        }
      >
        <div className="mx-auto max-w-7xl">
          <section className="flex min-h-screen min-w-full items-center justify-center overflow-hidden">
            <AnimatedBackground imageUrl="/assets/hero-bg.png" />
            <HeroText text="HEY, I'M FRED" />
            <ScrollIndicator />
          </section>
          <VisionSection />
          <AboutSection nextSectionRef={experienceSectionRef} />
        </div>
        <div className="relative z-10">
          <ExperienceSection sectionRef={experienceSectionRef} />
          <BlankSection />
        </div>
      </Suspense>
    </main>
  );
};

export default memo(App);
