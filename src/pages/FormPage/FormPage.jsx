import LocationQuestion from "../../components/LocationQuestion"
import SunlightQuestion from "../../components/SunlightQuestion";
import ComfortLevelQuestion from '../../components/ComfortLevelQuestion'
import './FormPage.scss';
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import PlantContext from "../../utils/PlantContext";

export default function FormPage() {

    const [page, setPage] = useState(0);

    const [city, setCity] = useState()
    const [province, setProvince] = useState()
    const [sunlight, setSunlight] = useState()
    const [level, setLevel] = useState()

    const navigate = useNavigate()
    const {generatePlants} = useContext(PlantContext)
    
    const [x, setX] = useState(0);

    const handleSubmit = (e) => {
      e.preventDefault();

        axios
            .post(`http://localhost:8080/plant`, {city:city, province:province, sunlight:sunlight, level:level})
            .then((resp) => {
                generatePlants(resp.data)
                navigate("/plants")
            })
            .catch((err) => {
                alert("Oops! Looks like your city isn't available on Grow A Pear yet.")
            })
    } 


      const componentList = [
        <LocationQuestion 
            page={page}
            setPage={setPage}
            city={city}
            setCity={setCity}
            province={province}
            setProvince={setProvince}
            x={x}
            setX={setX}
        />,
        <SunlightQuestion
            page={page}
            setPage={setPage}
            sunlight={sunlight}
            setSunlight={setSunlight}
            x={x}
            setX={setX}
        />,
        <ComfortLevelQuestion
            page={page}
            setPage={setPage}
            level={level}
            setLevel={setLevel}
            x={x}
            setX={setX}
            handleSubmit={handleSubmit}
        />
      ];

    return (
        <div className="form">
            <form className="form__border"
                onSubmit={handleSubmit}
            >
            <div>    
                {componentList[page]}
            </div >
                </form>
        </div>
    )
}