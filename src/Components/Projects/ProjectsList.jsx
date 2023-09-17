import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { forwardRef, memo, useEffect, useState } from "react";
import Project from "/src/Components/Projects/Project.jsx";
import { text } from "/src/language/languages.js";
import { useLanguage } from "/src/store/store.js";

const ProjectsList = memo(
  forwardRef(function Projects(props, ref) {
    const lang = useLanguage((state) => state.lang);
    const [font, setFont] = useState(false);

    const projects = [
      {
        title: "Budget App",
        mocktext: text["budgetApp"][lang],
        imgsrc: "/images/budgetAppPresentation.png",
        githubLink: "https://github.com/Elisy69/Budget-planner-app",
        appLink: "https://custom-budget-app.netlify.app/",
      },
      {
        title: "Shift Calendar",
        mocktext: text["calendarApp"][lang],
        imgsrc: "/images/workShiftAppPresentation.png",
        githubLink: "https://github.com/Elisy69/Work-Calendar",
        appLink: "https://custom-work-calendar.netlify.app/",
      },
      {
        title: "Book Search",
        mocktext: text["bookSearchApp"][lang],
        imgsrc: "/images/bookSearchAppPresentation.png",
        githubLink: "https://github.com/Elisy69/googleBooksSearchApp",
        appLink: "https://google-bookss-search-app.netlify.app/",
      },
      {
        title: "Vizza App",
        mocktext: text["pizzaApp"][lang],
        imgsrc: "/images/pizzaMockImg.png",
        githubLink: "",
        appLink: "",
      },
    ];

    useEffect(() => {
      setFont(!font);
    }, [lang]);

    useEffect(() => {
      if (lang === "en") {
        setFont(true);
      } else {
        setFont(false);
      }
    }, []);

    return (
      <section
        ref={(el) => (ref.current[2] = el)}
        className="flex flex-col justify-center items-center px-2 gap-6 lg:gap-32 mt-10"
      >
        <motion.h1
          initial={{
            y: 80,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.3 },
          }}
          viewport={{ once: true }}
          className={`my-[2rem] text-7xl lg:text-8xl xl:text-9xl self-center lg:mb-[12rem] ${
            font ? `font-my-for-title gap-3` : `font-my-for-titleRus gap-1.5`
          }`}
        >
          {text["projectsTitle"][lang]}
        </motion.h1>
        {projects.map((project) => (
          <Project
            imgsrc={project.imgsrc}
            text={project.mocktext}
            title={project.title}
            githubLink={project.githubLink}
            appLink={project.appLink}
            key={nanoid()}
          />
        ))}
      </section>
    );
  })
);

export default ProjectsList;
