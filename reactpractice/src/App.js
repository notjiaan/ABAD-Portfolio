import './App.css';
import WaysOfStyling from './components/WaysOfStyling';
import ComponentTutorial from './components/ComponentTutorial';
import Content1 from './pages/Content1';
import NavBar from './components/NavBar';
import MaterialUI from './components/MaterialUI';
//router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //javascript code

  return (
    <>
      {
        //jsx
      }
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="component-tutorial" element={<ComponentTutorial />} />
            <Route path="ways-of-styling" element={<WaysOfStyling />} />
            <Route path="content1" element={<Content1 />} />
            <Route path="material-ui" element={<MaterialUI />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
