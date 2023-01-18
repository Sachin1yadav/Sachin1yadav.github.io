import CommonContact from "./components/CommanContect";
 
import GithubStatus from "./pages/github/github";
import Projects from"./pages/project/Projects"
import Navbar from "./components/Navbar/Navbar";
import Skills from "./pages/Skills/Skills";
import Home from "./pages/home/Home";
import About from "./pages/about/about";
import Contect from "./pages/contect/Contect";
 

function App() {
  return (
    <div className="App">
      <Navbar />
      <CommonContact />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GithubStatus />
      <Contect />
      
    </div>
  );
}

export default App;
