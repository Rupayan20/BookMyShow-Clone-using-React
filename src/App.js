import { Route,Routes } from 'react-router-dom';

//import DefaultHOC from "./HOC/Default.HOC";

import Temp from "./components/temp";
import Navbar from './components/Navbar/navbar.component';

function App() {
  return (
    <>
      <Routes>
         <Route path="/" exact element={<Navbar/>} />
     </Routes>
    </>
  );
}
// /, /movie
export default App;
