 
 

import { About, Contect, Home } from './pages';
import Navbar from './pages/Navbar/Navbar';
import Skills from './pages/Skills/Skills';
// import AllRouters from './Routes/Router';
 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Contect/>
      {/* <AllRouters/> */}
    </div>
  );
}

export default App;
