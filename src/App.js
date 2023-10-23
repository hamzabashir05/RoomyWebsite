import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Hotels from './components/Hotels';
function App() {
  return (
   <>
   
 <BrowserRouter>
<Routes>
<Route path='/' element={ <Home/>} />
  <Route path='hotels' element={< Hotels/>} />
    
  
</Routes>

</BrowserRouter>
   </>
  

  );
}

export default App;
