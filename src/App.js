 
 

import { About, Home } from './pages';
import Navbar from './pages/Navbar/Navbar';
import AllRouters from './Routes/Router';
 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      {/* <AllRouters/> */}
    </div>
  );
}

export default App;
