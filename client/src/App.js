
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

// Components
import ButtonAppBar from "./components/appbar/AppBar";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cover from "./components/cover/Cover";

function App() {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
         <Route path="dashboard" element={<Cover />} />
        {/*<Route path="update" element={<UpdatePage />} />*/}
        <Route path="contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
