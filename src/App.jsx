import { useEffect, useRef, useState } from "react";
import AboutMe from "./Components/AboutMe/AboutMe";
import HelloTitle from "./Components/Headline/HelloTitle";
import SocialMediaBar from "./Components/Headline/SocialMediaBar";
import Navbar from "./Components/Navbar/Navbar";
import ProjectsList from "./Components/Projects/ProjectsList";
import { useTheme } from "./store/store";
import Contact from "/src/Components/Contacts/Contact.jsx";

function App() {
  const [theme] = useTheme((state) => [state.isLight]);

  const navigationRefs = useRef([]);

  const scrollToSection = (section) => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  };

  useEffect(() => {
    console.log("theme color:", `${theme ? "light" : "dark"}`);
    document.body.classList.toggle("dark");
  }, [theme]);

  useEffect(() => {
    theme
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
  }, []);

  return (
    <div className="customscrollbar w-full overflow-scroll overflow-x-hidden h-screen dark:bg-night-theme-bg bg-day-theme-bg dark:text-night-theme-text text-day-theme-text font-my-universal flex flex-col">
      <Navbar scrollToSection={scrollToSection} ref={navigationRefs} />
      <HelloTitle ref={navigationRefs} />
      <SocialMediaBar />
      <AboutMe ref={navigationRefs} />
      <ProjectsList ref={navigationRefs} />
      <Contact ref={navigationRefs} />
    </div>
  );
}

export default App;
