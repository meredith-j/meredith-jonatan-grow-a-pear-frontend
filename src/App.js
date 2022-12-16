import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import FormPage from './pages/FormPage/FormPage';
import PlantOptionsPage from './pages/PlantOptionsPage/PlantOptionsPage'
import Footer from './components/Footer';
import './App.scss';
import { PlantProvider } from "./utils/PlantContext";

export default function App(){

  return(
    <>
    <PlantProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<FormPage />} />
          <Route path="/plants" element={<PlantOptionsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PlantProvider>
    </>
  )
}