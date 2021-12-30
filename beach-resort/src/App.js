import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/rooms/:slug' element={<SingleRoom />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
