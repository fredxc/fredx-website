import { motion } from "framer-motion";
import { sideFadeIn } from "../../constants/animations";
import { Circle, Diamond, Hexagon, Squircle, Triangle } from "lucide-react";

const experiences = [
  {
    date: "Jan 2023 - Present",
    title: "FRONTEND TECH LEAD",
    company: "Weme",
    description:
      "I lead web and mobile development, ensuring scalable, high-performance applications. I focus on frontend architecture, DevOps, and agile collaboration, delivering seamless UI/UX experiences. My expertise includes cloud-based deployments, performance optimizations, and cross-functional leadership, driving efficiency and innovation in large-scale projects.",
    skills: ["React", "TypeScript", "Node.js", "Firebase"],
  },
  {
    date: "Jun 2022 - Jan 2023",
    title: "TECH LEAD",
    company: "Braint Tech",
    description:
      "I led frontend and full-stack development, adapting technology stacks and optimizing codebases for scalable products. My proactive leadership in engineering teams resulted in high-quality deliveries. I also built cloud infrastructure and streamlined DevOps processes, ensuring system reliability and efficiency.",
    skills: ["React", "Next.js", "Google Cloud", "DevOps"],
  },
  {
    date: "May 2021 - Jun 2022",
    title: "FRONTEND DEV",
    company: "Braint Tech",
    description:
      "I developed mobile and web platforms, integrating React, Firebase, and APIs. A major project was a business management system for Opto Eletrônica, enhancing financial tracking, inventory, and order control. I improved team collaboration, decision-making, and problem-solving, refining my skills in scalable frontend development.",
    skills: ["React", "Firebase", "Tailwind CSS", "Cypress"],
  },
  {
    date: "Aug 2020 - Mar 2021",
    title: "FRONTEND DEV",
    company: "Comp Júnior",
    description:
      "I built an internal management system to track company employees, projects, and history. Working in Scrum teams, I contributed to technical decisions and improved team efficiency. Strong collaboration and problem-solving skills ensured the success of React-based web applications.",
    skills: ["React", "CSS", "API Integration", "Scrum"],
  },
  {
    date: "Apr 2020 - Aug 2020",
    title: "PRODUCT OWNER",
    company: "Comp Júnior",
    description:
      "I managed product vision, backlog prioritization, and team coordination while acting as Scrum Master. A key project involved digitalizing Daniel Marçal & Advogados Associados. My technical expertise in React and Node.js enabled better management, improving communication and problem-solving for a smooth development process.",
    skills: ["Product Management", "Scrum", "React", "Node.js"],
  },
];

const experienceListOffsets = [
  "",
  "mt-[-33.3%]",
  "mt-[-25%]",
  "mt-[-16.6%]",
  "mt-[-8.3%]",
];

const iconStyle =
  "absolute left-1/2 top-12 h-8 w-8 -translate-x-1/2 rounded-full fill-soft-green stroke-soft-green";

const Timeline = () => {
  return (
    <div id="timeline" className="relative mx-auto h-[200svh] max-w-7xl">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`sticky mx-auto flex w-full overflow-hidden bg-primary-dark ${experienceListOffsets[index]} py-4 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
          style={{
            height: `${42 - 6 * index}%`,
            top: `${12 * (index + 1)}%`,
          }}
        >
          <div
            className={`absolute left-1/2 ${index ? "top-0" : "top-16"} z-10 ${index === experiences.length - 1 ? "h-16" : "h-full"} w-1 -translate-x-1/2 bg-soft-green`}
          />

          {index === 0 && <Diamond className={iconStyle} />}
          {index === 1 && <Hexagon className={iconStyle} />}
          {index === 2 && <Circle className={iconStyle} />}
          {index === 3 && <Squircle className={iconStyle} />}
          {index === 4 && <Triangle className={iconStyle} />}

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sideFadeIn}
            viewport={{ once: true, amount: 0.5 }}
            className={`w-1/2 overflow-hidden px-12 ${
              index % 2 === 0 ? "text-right" : "text-left"
            }`}
          >
            <span className="font-sans font-medium text-soft-green">
              {exp.date}
            </span>
            <h3 className="whitespace-nowrap text-4xl font-semibold text-light-cream">
              {exp.title}
            </h3>
            <p className="font-sans text-lg font-bold text-soft-green">
              at {exp.company}
            </p>
            <p className="mt-8 font-sans text-xl text-light-cream">
              {exp.description}
            </p>
          </motion.div>
          {index != 0 && (
            <div className="absolute top-0 h-[1px] w-full bg-soft-green/20" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
