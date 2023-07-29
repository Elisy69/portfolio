import { useEffect, useRef } from "react";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import HelloTitle from "./Components/HelloTitle";
import Navbar from "./Components/Navbar";
import ProjectsList from "./Components/ProjectsList";
import SocialMediaBar from "./Components/SocialMediaBar";
import { useTheme } from "./store/store";

function App() {
  const [theme] = useTheme((state) => [state.isLight]);

  const navigationRefs = useRef([]);

  const scrollToSection = (section) => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  useEffect(() => {
    console.log("theme color:", `${theme ? "light" : "dark"}`);
    document.body.classList.toggle("dark");
  }, [theme]);

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
