import LocationQuestion from "../../components/LocationQuestion"
import SunlightQuestion from "../../components/SunlightQuestion";
import ComfortLevelQuestion from '../../components/ComfortLevelQuestion'
import './FormPage.scss';
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PlantOptions from "../../components/PlantOptions";

export default function FormPage() {

    const [page, setPage] = useState(0);

    const [city, setCity] = useState()
    const [province, setProvince] = useState()
    const [sunlight, setSunlight] = useState()
    const [level, setLevel] = useState()
    const [plants, setPlants] = useState()

    const navigate = useNavigate()
    
    const [x, setX] = useState(0);

    const handleSubmit = (e) => {
      e.preventDefault();

        axios
            .post(`http://localhost:8080/plant`, {city:city, province:province, sunlight:sunlight, level:level})
            .then((resp) => {
                setPlants(resp.data)
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
        />,
        <PlantOptions 
            plants={plants}
            setPlants={setPlants}
        />
      ];

    return (
        <div className="form">
            <form className="form__border"
                onSubmit={handleSubmit}
            >
            <motion.div 
                initial={{ x: x }}
                transition={{ duration: 1 }}
                animate={{ x: 0 }}
            >    
                {componentList[page]}
            </motion.div >
                </form>
        </div>
    )
}