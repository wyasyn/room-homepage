import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='*' element={<NotFound /> } />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
