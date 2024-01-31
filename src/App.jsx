import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx"
import Gallery from "./pages/Gallery.jsx"
import Rate from "./pages/Rate.jsx";
import Location from "./pages/Location.jsx";
import Inquire from "./pages/Inquire.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index="home" element={<Home />}/>
          <Route path="gallery" element={<Gallery />}/>
          <Route path="rates" element={<Rate />}/>
          <Route path="location" element={<Location />}/>
          <Route path="inquire" element={<Inquire />}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
