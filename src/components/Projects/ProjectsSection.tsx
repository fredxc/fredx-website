import Counter from "./Counter";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { bottomFadeIn, sideFadeIn } from "../../constants/animations";

const projects = [
  {
    id: 1,
    imgSrc: "/assets/bg-1.jpg",
    alt: "Fred Xavier Portrait",
    title: "Digital Product",
    heading: "Design & Technology",
    tags: ["MOBILE", "REACT NATIVE"],
  },
  {
    id: 2,
    imgSrc: "/assets/bg-2.jpg",
    alt: "Fred Xavier Portrait",
    title: "Digital Product",
    heading: "Design & Technology",
    tags: ["WEB", "REACT"],
  },
  {
    id: 3,
    imgSrc: "/assets/bg-3.jpg",
    alt: "Fred Xavier Portrait",
    title: "Digital Product",
    heading: "Design & Technology",
    tags: ["DESIGN", "UI/UX"],
  },
  {
    id: 4,
    imgSrc: "/assets/bg-4.jpg",
    alt: "Fred Xavier Portrait",
    title: "Digital Product",
    heading: "Design & Technology",
    tags: ["BACKEND", "NODEJS"],
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
          if (rect.top <= window.innerHeight * 0.2 && rect.bottom >= 0) {
            setActiveIndex(index + 1);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-24">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={bottomFadeIn}
        viewport={{ once: true, amount: 0.8 }}
        className="mb-24 flex items-center justify-center text-6xl font-semibold text-light-cream/90 md:text-7xl"
      >
        <span className="mr-4 text-4xl">⯋</span>PROJECTS
        <span className="ml-4 text-4xl">⯋</span>
      </motion.h2>

      <div className="grid grid-cols-5 gap-8">
        <div className="sticky top-28 col-span-2 mb-[40%] h-fit rounded-lg">
          <Counter count={activeIndex} />
        </div>

        <div className="col-span-3">
          {projects.map((project, index) => (
            <motion.div
              custom={1}
              key={project.id}
              initial="hidden"
              variants={sideFadeIn}
              whileInView="visible"
              className="mb-20 flex flex-col"
              viewport={{ once: true, amount: 0.3 }}
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <img
                alt={project.alt}
                src={project.imgSrc}
                className="h-auto w-full rounded-lg opacity-80"
              />
              <h3 className="mt-2 text-xl text-light-cream/80">
                {project.title}
              </h3>
              <div className="flex items-end justify-between font-semibold">
                <h1 className="font-heading text-4xl text-light-cream">
                  {project.heading}
                </h1>
                <div className="flex h-fit gap-2 text-xs leading-none">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`rounded-full border border-light-cream px-3 py-1 ${
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
