import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Hotels from './components/Hotels';
import EventsDineIn from './components/EventsDineIn';
import Getaways from './components/Getaways';
import SignInModal from './components/SignInModal';
import CallusModal from './components/CallusModal';


function App() {
  return (
   <>
   
 <BrowserRouter>
<Routes>
<Route path='/' element={ <Home/>} />
<Route path='hotels' element={< Hotels/>} />
 <Route path='events' element={<EventsDineIn/>}  />
  <Route path='getaway' element={<Getaways/>}/>
  <Route path='signin' element={<SignInModal/>}/>
  <Route path='callus' element={<CallusModal/>}/>
</Routes>

</BrowserRouter>
   </>
  

  );
}

export default App;
