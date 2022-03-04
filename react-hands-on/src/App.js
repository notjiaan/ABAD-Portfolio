import './App.css';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import { Page3 } from './pages/Page3';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



function App() {
  return (
    <>
      {/* <NavBar />
      <Home />
      <Page2 />
      <Footer /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="paintings" element={<Page2 />} />
            <Route path="more-more" element={<Page3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
