import HelloTitle from "./Components/HelloTitle";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="h-screen bg-night-theme-bg text-night-theme-text flex flex-col">
      <Navbar />
      <HelloTitle />
    </div>
  );
}

export default App;
