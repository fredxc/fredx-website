import { memo, Suspense, lazy } from "react";
import { Navbar } from "./components/Navbar";
import useThemeStore from "./hooks/useThemeStore";

// ✅ Lazy-load heavy components inside App
const HeroText = lazy(() => import("./components/HeroText"));
const ScrollIndicator = lazy(() => import("./components/ScrollIndicator"));
const AnimatedBackground = lazy(
  () => import("./components/AnimatedBackground"),
);

const App = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className={`mx-auto min-h-screen max-w-7xl ${
        theme === "dark"
          ? "bg-gray-900 text-white"
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
        <section className="flex min-h-screen min-w-full items-center justify-center overflow-hidden">
          <AnimatedBackground imageUrl="/assets/hero-bg.png" />
          <HeroText text="HEY, I'M FRED" />
          <ScrollIndicator />
        </section>
      </Suspense>
    </div>
  );
};

export default memo(App);
