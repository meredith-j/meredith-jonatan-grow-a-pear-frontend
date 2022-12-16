import PlantContext from "../utils/PlantContext";
import { useContext } from "react";

export default function PlantOptions({addPlant}) {


    const {allPlants} = useContext(PlantContext)

    return (
        <div className="plant">
            <h2 className="plant__header">Plants for you!</h2>
                <div className="plant__list">
                    {allPlants.map((plant) => {
                        console.log(plant)
                        return (
                            <div key={plant.plant_id} className="plant__article">
                                <h5 className="plant__name">{ plant.name }</h5>
                                <img src={plant.image} alt={plant.name} className="plant__image" />
                                <div className="plant__buttons">
                                    <button className="plant__info"><span className="plant__info--details">More Info</span>?</button>
                                    <button className="plant__select" onClick={() => addPlant(plant)}>+ <span className="plant__select--details" >Add to list</span></button>
                                </div>
                            </div>
                        )
                    })}  
                </div>
        </div>
    )
}

// 