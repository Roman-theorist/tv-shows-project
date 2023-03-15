import './App.css';

import Header from './components/Header';
import Favorites from './Pages/Favorites';
import Home from './Pages/Home';
import Upcoming from './Pages/Upcoming'
import NotFound from './Pages/NotFound'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />}/> 
          <Route path="/home" element={<Home />}/> 
          <Route path="/favorites" element={<Favorites />}/> 
          <Route path="/upcoming" element={<Upcoming />}/> 
          <Route path="*" element={<NotFound/>}/> 

        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
