
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error'

function App() {
  return (
   <>
   {/* <BrowserRouter>
   <Routes>
   <Route exact path='/' element={<Home />} />
   <Route exact path='/error' element={<Error />} />
   </Routes>
   </BrowserRouter> */}
   <Home />
   </>
  );
}

export default App;
