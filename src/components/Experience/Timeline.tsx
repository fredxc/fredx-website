import { motion } from "framer-motion";
import { sideFadeIn } from "../../constants/animations";
import { Circle, Diamond, Hexagon, Squircle, Triangle } from "lucide-react";

const experiences = [
  {
    date: "Jan 2023 - Present",
    title: "TECH LEAD",
    company: "Weme",
    description:
      "I lead web and mobile development, focusing on scalable applications, frontend architecture, DevOps, and agile collaboration. I deliver seamless UI/UX, optimize performance, and drive innovation in large-scale projects.",
    skills: ["React", "TypeScript", "Node.js", "Firebase"],
  },
  {
    date: "Jun 2022 - Jan 2023",
    title: "TECH LEAD",
    company: "Braint Tech",
    description:
      "I led frontend and full-stack development, optimizing codebases and adapting stacks for scalability. I built cloud infrastructure, streamlined DevOps, and ensured high-quality deliveries.",
    skills: ["React", "Next.js", "Google Cloud", "DevOps"],
  },
  {
    date: "May 2021 - Jun 2022",
    title: "FRONTEND DEV",
    company: "Braint Tech",
    description:
      "I developed mobile and web platforms using React, Firebase, and APIs. A key project was a business management system for Opto Eletrônica, enhancing financial tracking and inventory control.",
    skills: ["React", "Firebase", "Tailwind CSS", "Cypress"],
  },
  {
    date: "Aug 2020 - Mar 2021",
    title: "FRONTEND DEV",
    company: "Comp Júnior",
    description:
      "I built an internal management system for tracking employees and projects. Working in Scrum teams, I contributed to technical decisions and improved team efficiency.",
    skills: ["React", "CSS", "API Integration", "Scrum"],
  },
  {
    date: "Apr 2020 - Aug 2020",
    title: "PRODUCT OWNER",
    company: "Comp Júnior",
    description:
      "I managed product vision, backlog prioritization, and team coordination. A key project involved digitalizing Daniel Marçal & Advogados Associados, improving communication and development processes.",
    skills: ["Product Management", "Scrum", "React", "Node.js"],
  },
];

const iconStyle =
  "absolute mt-7 md:mt-0 left-10 md:left-1/2 md:top-12 h-8 w-8 -translate-x-1/2 rounded-full fill-soft-green stroke-soft-green";

const experienceListOffsets = [
  "",
  "md:mt-[-41.5%] lg:mt-[-37.5%]",
  "md:mt-[-33.2%] lg:mt-[-29.2%]",
  "md:mt-[-24.9%] lg:mt-[-20.9%]",
  "md:mt-[-16.6%] lg:mt-[-12.5%]",
];

const Timeline = () => {
  return (
    <div id="timeline" className="relative mx-auto max-w-7xl md:h-[200svh]">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`mx-auto flex w-full overflow-hidden bg-primary-dark md:sticky ${experienceListOffsets[index]} py-4 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
          style={{
            height: `${42 - 6 * index}%`,
            top: `${12 * (index + 1)}%`,
          }}
        >
          <div
            className={`absolute left-10 md:left-1/2 ${index ? "top-16 md:top-0" : "top-16"} z-10 ${index === experiences.length - 1 ? "h-16" : "h-[79%] md:h-full"} w-1 -translate-x-1/2 bg-soft-green`}
          />

          {index === 0 && <Diamond className={iconStyle} />}
          {index === 1 && <Hexagon className={iconStyle} />}
          {index === 2 && <Circle className={iconStyle} />}
          {index === 3 && <Squircle className={iconStyle} />}
          {index === 4 && <Triangle className={iconStyle} />}

          <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={sideFadeIn}
            viewport={{ once: true, amount: 0.5 }}
            className={`overflow-hidden pl-20 pr-6 text-left md:w-1/2 md:px-12 ${
              index % 2 === 0 ? "md:text-right" : "md:text-left"
            }`}
          >
            <span className="font-sans font-medium text-soft-green">
              {exp.date}
            </span>
            <h3 className="whitespace-nowrap text-2xl font-semibold text-light-cream lg:text-4xl">
              {exp.title}
            </h3>
            <p className="font-sans text-lg font-bold text-soft-green">
              at {exp.company}
            </p>
            <p className="mt-4 font-sans text-lg text-light-cream md:text-xl lg:mt-8 xl:text-xl">
              {exp.description}
            </p>
          </motion.div>
          {index != 0 && (
            <div className="absolute top-0 hidden h-[1px] w-full bg-soft-green/20 md:block" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
