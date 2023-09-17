import { useEffect, useRef } from "react";
import AboutMe from "/src/Components/AboutMe/AboutMe";
import Contact from "/src/Components/Contacts/Contact.jsx";
import HelloTitle from "/src/Components/Headline/HelloTitle";
import SocialMediaBar from "/src/Components/Headline/SocialMediaBar";
import Navbar from "/src/Components/Navbar/Navbar";
import ProjectsList from "/src/Components/Projects/ProjectsList";
import { useTheme } from "/src/store/store.js";

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
