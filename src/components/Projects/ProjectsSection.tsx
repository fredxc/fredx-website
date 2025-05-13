import Counter from "./Counter";
import { motion } from "framer-motion";
import ReactPlayer from "react-player/lazy";
import { useState, useEffect, useRef } from "react";
import { bottomFadeIn, sideFadeIn } from "../../constants/animations";

const projects = [
  {
    id: 1,
    tags: ["WEB", "REACT"],
    heading: "Chat Widget",
    title: "Component Demo",
    alt: "Component Demo Video",
    backdropImg: "/assets/bg-2.jpg",
    url: "https://github.com/fredxc/chat-widget",
    videoSrc: "https://player.vimeo.com/video/1083542174?h=e376f5c4ba",
  },
  {
    id: 2,
    tags: ["WEB", "REACT"],
    title: "Digital Product",
    heading: "Risk Simulator",
    alt: "Risk Simulator Video",
    backdropImg: "/assets/bg-3.jpg",
    url: "https://simulator.fredx.dev/",
    videoSrc: "https://player.vimeo.com/video/1083551249?h=1ade1f3b2c",
  },
  {
    id: 3,
    title: "Landing Page",
    heading: "This Website!",
    alt: "Landing Page Video",
    tags: ["UI/UX", "WEB", "REACT"],
    backdropImg: "/assets/bg-1.jpg",
    url: "https://github.com/fredxc/fredx-website",
    videoSrc: "https://player.vimeo.com/video/1083717582?h=e65529db6b",
  },
  {
    id: 4,
    title: "Mobile App",
    alt: "Mobile App Video",
    heading: "Product Catalog",
    backdropImg: "/assets/bg-4.jpg",
    tags: ["MOBILE", "REACT NATIVE"],
    videoSrc: "https://player.vimeo.com/video/1083576637?h=7ee2360888",
    url: "apps.apple.com/us/app/crv-lagoa-busca-de-touros/id6446031009?platform=iphone",
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
      className="relative mx-auto max-w-7xl px-4 pb-12 pt-24 md:py-24"
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8">
        <div className="sticky top-32 col-span-2 mb-[40%] hidden h-fit rounded-lg md:block">
          <Counter count={activeIndex} />
        </div>

        <div className="col-span-1 overflow-hidden md:col-span-3">
          {projects.map((project, index) => (
            <motion.div
              custom={1}
              key={project.id}
              initial="hidden"
              variants={sideFadeIn}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              ref={(el) => (projectRefs.current[index] = el)}
              className="mb-20 flex cursor-pointer flex-col md:mb-24"
              onClick={() => window.open(project.url, "_blank", "noreferrer")}
            >
              <div className="relative w-full pt-[100%]">
                <img
                  src={project.backdropImg}
                  alt={project.alt}
                  className="absolute left-0 top-0 h-full w-full rounded-xl object-cover"
                />
                <div className="absolute left-[10%] top-[20%] h-[60%] w-[80%] overflow-hidden rounded-lg">
                  <ReactPlayer
                    loop
                    muted
                    playing
                    width="100%"
                    height="100%"
                    url={project.videoSrc}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
              </div>
              <h3 className="mt-2 text-lg text-light-cream/80 md:text-xl">
                {project.title}
              </h3>
              <div className="flex flex-col gap-2 font-semibold md:flex-row md:items-end md:justify-between md:gap-4">
                <h1 className="font-heading text-3xl text-light-cream md:text-4xl">
                  {project.heading}
                </h1>
                <div className="mt-2 flex h-fit gap-2 text-xs leading-none md:mt-0">
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
