import './App.css';
import Home from './pages/Home';
import Saturday from './pages/Saturday';
import Sunday from './pages/Sunday';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="Saturday" element={<Saturday />} />
            <Route path="Sunday" element={<Sunday />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
