import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Header from './components/Header/Header';
import './App.scss';

export default function App(){

  return(
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          < Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}