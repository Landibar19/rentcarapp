
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Home, Vehicles } from './pages';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/vehicles' element={<Vehicles/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
