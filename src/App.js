import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Hotels from './components/Hotels';
import EventsDineIn from './components/EventsDineIn';
function App() {
  return (
   <>
   
 <BrowserRouter>
<Routes>
<Route path='/' element={ <Home/>} />
<Route path='hotels' element={< Hotels/>} />
 <Route path='events' element={<EventsDineIn/>}  />
  
</Routes>

</BrowserRouter>
   </>
  

  );
}

export default App;
