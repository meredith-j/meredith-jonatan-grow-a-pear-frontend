import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import UserProfilePage from './pages/UserProfilePage';
import FormPage from './pages/FormPage/FormPage';
import PlantOptionsPage from './pages/PlantOptionsPage/PlantOptionsPage'
import Footer from './components/Footer';
import './App.scss';
import CreateContext from './utils/CreateContext'

export default function App(){

  constructor(props); {

    this.state = {
      CreateContext: ""
    }
  }

  return(
    <>
    <PlantList.Provider value={CreateContext}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/quiz" element={<FormPage />} />
          <Route path="/plants" element={<PlantOptionsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PlantList.Provider>
    </>
  )
}