 
 

import CommonContact from './components/CommanContect';
import { About, Contect, Home, Projects } from './pages';
import GithubStatus from './pages/github/github';
 
import Navbar from './components/Navbar/Navbar';
import Skills from './pages/Skills/Skills';
 
 
function App() {
  return (
    <div className="App">
 
      <Navbar/>
      <CommonContact   />
        <Home/>
      <About/>
      <Skills/>
      <Projects/>
     <GithubStatus/>
      <Contect/> 
      
    </div>
  );
}

export default App;
