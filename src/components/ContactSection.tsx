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
      className="relative flex h-svh w-full items-center bg-light-cream px-6 md:items-start md:pt-[12.5%]"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={bottomFadeIn}
          viewport={{ once: true, amount: 0.8 }}
          className="mb-8 flex items-center justify-center text-center text-[2.75rem] font-bold leading-none text-primary-dark/75 md:mb-24 md:text-6xl md:font-semibold lg:text-7xl"
        >
          <span className="mr-2 text-2xl md:mr-4 md:text-4xl">⯋</span>CONTACT ME
          <span className="ml-2 text-2xl md:ml-4 md:text-4xl">⯋</span>
        </motion.h2>

        <div className="flex flex-col gap-y-4 px-4 md:flex-row md:justify-between md:gap-x-16 md:px-20">
          <motion.div
            initial="hidden"
            variants={fadeIn}
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex w-full flex-col gap-6 text-primary-dark md:w-4/6 md:gap-8"
          >
            <h3 className="text-2xl font-bold md:text-4xl">
              Let's build something amazing together?
            </h3>
            <p className="text-base text-primary-dark/70 md:text-lg">
              I help startups and product teams turn ideas into real,
              user-friendly digital experiences.
            </p>

            <button
              data-cal-link="fredxc/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="w-full rounded-full bg-primary-dark px-6 py-3 text-base font-medium text-light-cream transition hover:scale-105 hover:shadow-lg md:w-fit md:px-8 md:py-4 md:text-lg"
            >
              Book a Call
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            variants={fadeIn}
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex w-full flex-col justify-center gap-6 text-primary-dark md:flex-1 md:gap-8"
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
                <p className="text-base md:text-lg" title="Copy to clipboard">
                  hello@fredx.dev
                </p>
                <FaRegCopy
                  className={`text-sm transition-opacity duration-300 ${copied ? "opacity-0" : "opacity-100"}`}
                />
                <FaRegCheckCircle
                  className={`-ml-5 text-sm transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"}`}
                />
              </div>
              <p className="text-base underline decoration-primary-dark underline-offset-4 md:text-lg">
                +55 379 9916 1737
              </p>
            </div>

            <div>
              <h4 className="mb-1 text-sm font-semibold uppercase tracking-widest">
                My Digital Spaces
              </h4>
              <ul className="flex flex-col gap-2 md:gap-3">
                <li className="flex items-center gap-2">
                  <FaLinkedin className="text-base text-primary-dark md:text-lg" />
                  <a
                    href="https://www.linkedin.com/in/fredericocapanema/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:underline md:text-lg"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaGithub className="text-base text-primary-dark md:text-lg" />
                  <a
                    href="https://github.com/fredxc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:underline md:text-lg"
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
              <p className="text-base md:text-lg">Utrecht, Netherlands</p>
              <p className="text-base md:text-lg">{time}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(ContactSection);
