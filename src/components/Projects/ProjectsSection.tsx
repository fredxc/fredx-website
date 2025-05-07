import Counter from "./Counter";
import { motion } from "framer-motion";
import ReactPlayer from "react-player/lazy";
import { useState, useEffect, useRef } from "react";
import { bottomFadeIn, sideFadeIn } from "../../constants/animations";

const projects = [
  {
    id: 1,
    alt: "Fred Xavier Portrait",
    title: "Digital Product",
    heading: "Design & Technology",
    tags: ["MOBILE", "REACT NATIVE"],
    videoSrc: "https://player.vimeo.com/video/435779266",
  },
  {
    id: 2,
    alt: "Fred Xavier Portrait",
    title: "Digital Product",
    heading: "Design & Technology",
    tags: ["WEB", "REACT"],
    videoSrc: "https://player.vimeo.com/video/435779266",
  },
  {
    id: 3,
    alt: "Fred Xavier Portrait",
    title: "Digital Product",
    heading: "Design & Technology",
    tags: ["DESIGN", "UI/UX"],
    videoSrc: "https://player.vimeo.com/video/435779266",
  },
];

const ProjectsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= 0) {
            setActiveIndex(index + 1);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-4 pt-24 pb-12 md:py-24"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={bottomFadeIn}
        viewport={{ once: true, amount: 0.8 }}
        className="mb-12 flex items-center justify-center text-center text-[2.75rem] font-bold text-light-cream/90 md:mb-24 md:text-6xl md:font-semibold lg:text-7xl"
      >
        <span className="mr-4 text-2xl md:text-4xl">⯋</span>PROJECTS
        <span className="ml-4 text-2xl md:text-4xl">⯋</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
        <div className="hidden md:block sticky top-32 col-span-2 mb-[40%] h-fit rounded-lg">
          <Counter count={activeIndex} />
        </div>

        <div className="col-span-1 md:col-span-3 overflow-hidden">
          {projects.map((project, index) => (
            <motion.div
              custom={1}
              key={project.id}
              initial="hidden"
              variants={sideFadeIn}
              whileInView="visible"
              className="mb-20 md:mb-40 flex flex-col"
              viewport={{ once: true, amount: 0.3 }}
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <ReactPlayer
                  loop
                  muted
                  playing
                  width="100%"
                  height="100%"
                  url={project.videoSrc}
                  className="absolute left-0 top-0"
                />
              </div>
              <h3 className="mt-2 text-lg md:text-xl text-light-cream/80">
                {project.title}
              </h3>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-4 font-semibold">
                <h1 className="font-heading text-3xl md:text-4xl text-light-cream">
                  {project.heading}
                </h1>
                <div className="flex h-fit mt-2 md:mt-0 gap-2 text-xs leading-none">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`flex items-center justify-center rounded-full border border-light-cream px-3 py-1 ${
                        tag === "REACT NATIVE" || tag === "REACT"
                          ? "bg-light-cream text-primary-dark"
                          : ""
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
