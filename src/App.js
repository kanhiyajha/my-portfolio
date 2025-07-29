import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;