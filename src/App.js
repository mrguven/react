
import { BrowserRouter ,Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import About from './pages/About';



function App() {
  return (


    
<BrowserRouter>
<Navbar />
<Routes>

<Route path='/' index element={<Home />}  />
<Route path='/login'  element={<Login />} /> 
<Route path='/about' element={<About />} />

</Routes>


</BrowserRouter>

  )
}

export default App;
