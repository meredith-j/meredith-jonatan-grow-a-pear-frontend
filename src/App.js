import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage';
import UserProfilePage from './pages/UserProfilePage';
import FormPage from './pages/FormPage';
import Footer from './components/Footer/Footer';
import './App.scss';

export default function App(){

  return(
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/quiz" element={<FormPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}