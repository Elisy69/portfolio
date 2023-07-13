import { useEffect } from "react";
import AboutMe from "./Components/AboutMe";
import HelloTitle from "./Components/HelloTitle";
import Navbar from "./Components/Navbar";
import ProjectsList from "./Components/ProjectsList";
import SocialMediaBar from "./Components/SocialMediaBar";
import { useTheme } from "./store/store";

function App() {
  const [theme] = useTheme((state) => [state.isLight]);

  useEffect(() => {
    console.log(theme);
    document.body.classList.toggle("dark");
  }, [theme]);

  return (
    <div className="customscrollbar w-full overflow-scroll overflow-x-hidden h-screen dark:bg-night-theme-bg bg-day-theme-bg dark:text-night-theme-text text-day-theme-text font-my-universal flex flex-col">
      <Navbar />
      <HelloTitle />
      <SocialMediaBar />
      <AboutMe />
      <ProjectsList />
    </div>
  );
}

export default App;
