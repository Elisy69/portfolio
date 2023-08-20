import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { forwardRef, memo, useEffect, useState } from "react";
import { text } from "../../language/languages";
import { useLanguage } from "../../store/store";
import Project from "./Project";

const mocktext =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus magni alias assumenda illo unde iusto, cumque necessitatibus sequi deleniti reprehenderit officiis excepturi. Consequuntur tenetur obcaecati officiis iure rerum, harum adipisci.";
const title = "Budget app";

const projects = [
  {
    title: title,
    mocktext: mocktext,
    imgsrc: "public/images/BudgetAppPresentation.jpg",
  },
  { title: title, mocktext: mocktext, imgsrc: "public/images/mock.jpeg" },
  { title: title, mocktext: mocktext, imgsrc: "public/images/mock.jpeg" },
  { title: title, mocktext: mocktext, imgsrc: "public/images/mock.jpeg" },
  { title: title, mocktext: mocktext, imgsrc: "public/images/mock.jpeg" },
];

const ProjectsList = memo(
  forwardRef(function Projects(props, ref) {
    const lang = useLanguage((state) => state.lang);
    const [font, setFont] = useState(false);

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
          className={`my-[2rem] text-7xl lg:text-8xl xl:text-9xl self-start lg:self-center lg:mb-[12rem] ${
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
            key={nanoid()}
          />
        ))}
      </section>
    );
  })
);

export default ProjectsList;
