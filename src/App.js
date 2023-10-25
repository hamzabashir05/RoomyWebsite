import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Hotels from './components/Hotels';
import EventsDineIn from './components/EventsDineIn';
import Getaways from './components/Getaways';
function App() {
  return (
   <>
   
 <BrowserRouter>
<Routes>
<Route path='/' element={ <Home/>} />
<Route path='hotels' element={< Hotels/>} />
 <Route path='events' element={<EventsDineIn/>}  />
  <Route path='getaway' element={<Getaways/>}/>
</Routes>

</BrowserRouter>
   </>
  

  );
}

export default App;
