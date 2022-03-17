import About from "./components/About";
import Herosection from "./components/Herosection";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="mt-[150px]">
      <About />
      <Herosection title={"BACKGROUND"} />
      <Skills title={"SKILLS"} />
    </div>
  );
}

export default App;
