import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { bottomFadeIn, fadeIn } from "../constants/animations";
import { FaGithub, FaLinkedin, FaRegCheckCircle } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";

const ContactSection: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const amsterdamTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Europe/Amsterdam",
      });
      setTime(amsterdamTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="relative h-svh w-full bg-light-cream px-6 pt-[12.5%]"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={bottomFadeIn}
          viewport={{ once: true, amount: 0.8 }}
          className="mb-24 flex items-center justify-center text-6xl font-semibold text-primary-dark/75 md:text-7xl"
        >
          <span className="mr-4 text-4xl">⯋</span>CONTACT ME
          <span className="ml-4 text-4xl">⯋</span>
        </motion.h2>

        <div className="flex flex-col gap-y-12 px-20 md:flex-row md:justify-between md:gap-x-16">
          <motion.div
            initial="hidden"
            variants={fadeIn}
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex w-4/6 flex-col gap-8 text-primary-dark"
          >
            <h3 className="text-4xl font-bold">
              Let’s build something amazing together?
            </h3>
            <p className="text-lg text-primary-dark/70">
              I help startups and product teams turn ideas into real,
              user-friendly digital experiences.
            </p>

            <button
              data-cal-link="fredxc/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="w-fit rounded-full bg-primary-dark px-8 py-4 text-lg font-medium text-light-cream transition hover:scale-105 hover:shadow-lg"
            >
              Book a Call
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            variants={fadeIn}
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-1 flex-col justify-center gap-8 text-primary-dark"
          >
            <div>
              <h4 className="mb-1 text-sm font-semibold uppercase tracking-widest">
                Contact Details
              </h4>
              <div
                onClick={() => {
                  navigator.clipboard.writeText("hello@fredx.dev");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1000);
                }}
                className="flex cursor-pointer items-center gap-2 pb-1"
              >
                <p className="text-lg" title="Copy to clipboard">
                  hello@fredx.dev
                </p>
                <FaRegCopy
                  className={`text-sm transition-opacity duration-300 ${copied ? "opacity-0" : "opacity-100"}`}
                />
                <FaRegCheckCircle
                  className={`-ml-5 text-sm transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"}`}
                />
              </div>
              <p className="text-lg underline decoration-primary-dark underline-offset-4">
                +55 379 9916 1737
              </p>
            </div>

            <div>
              <h4 className="mb-1 text-sm font-semibold uppercase tracking-widest">
                My Digital Spaces
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2">
                  <FaLinkedin className="text-lg text-primary-dark" />
                  <a
                    href="https://www.linkedin.com/in/fredericocapanema/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaGithub className="text-lg text-primary-dark" />
                  <a
                    href="https://github.com/fredxc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-1 text-sm font-semibold uppercase tracking-widest">
                Location
              </h4>
              <p>Utrecht, Netherlands</p>
              <p>{time}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(ContactSection);
