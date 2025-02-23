import Navbar from "./components/Navbar";
import { memo, Suspense, lazy } from "react";
import useThemeStore from "./hooks/useThemeStore";

const HeroText = lazy(() => import("./components/HeroText"));
const ScrollIndicator = lazy(() => import("./components/ScrollIndicator"));
const AnimatedBackground = lazy(
  () => import("./components/AnimatedBackground"),
);
const VisionSection = lazy(() => import("./components/VisionSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const BlankSection = lazy(() => import("./components/BlankSection"));

const App = () => {
  const { theme } = useThemeStore();
  const darkTheme = theme === "dark";

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${
        darkTheme
          ? "bg-primary-dark text-white"
          : "bg-light-cream text-primary-dark"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <Navbar />

        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-md border-4 border-t-4 border-primary-dark" />
            </div>
          }
        >
          <section className="flex min-h-screen min-w-full items-center justify-center overflow-hidden">
            <AnimatedBackground imageUrl="/assets/hero-bg.png" />
            <HeroText text="HEY, I'M FRED" />
            <ScrollIndicator />
          </section>
          <VisionSection />
          <AboutSection />
          <BlankSection />
        </Suspense>
      </div>
    </main>
  );
};

export default memo(App);
