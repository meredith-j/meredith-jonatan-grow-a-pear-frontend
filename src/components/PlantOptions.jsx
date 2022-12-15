import PlantContext from "../utils/PlantContext";
import { useContext } from "react";

export default function PlantOptions() {


    const {allPlants} = useContext(PlantContext)

    return (
        allPlants.map((plant) => {
            console.log("plant", plant) 
            return(
            <>
            <h1 key={plant.plant_id}>{ plant.name }</h1>
            </>
            )
        })  
    )
}