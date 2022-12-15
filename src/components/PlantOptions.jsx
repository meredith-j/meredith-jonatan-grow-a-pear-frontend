import PlantContext from "../utils/PlantContext";
import { useContext } from "react";
import plantImage from '../assets/images/raspberry-encore.jpeg'

export default function PlantOptions() {


    const {allPlants} = useContext(PlantContext)

    return (
        allPlants.map((plant) => {
            return(
            <div className="plant">
            <div key={plant.plant_id} className="plant__article">
            <h5 className="plant__name">{ plant.name }</h5>
            <img src={plantImage} alt={plant.name} className="plant__image" />
            <div className="plant__buttons">
                <button className="plant__info"><span className="plant__info--details">More Info</span>?</button>
                <button className="plant__select">+ <span className="plant__select--details" >Add to list</span></button>
            </div>
            </div>
            </div>
            )
        })  
    )
}