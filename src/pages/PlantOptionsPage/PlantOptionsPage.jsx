import PlantOptions from "../../components/PlantOptions";
import PlantList from "../../components/PlantList";
import './PlantOptionsPage.scss';
import { useState } from "react";

export default function PlantOptionsPage() {

    const [ plants, setPlants ] = useState([])

    const addPlant = (plant) => {
        setPlants([...plants, plant]);    
        console.log([...plants, plant])  
      }

    return(
        <div className="page">
            <div className="page__width">
                <PlantOptions
                    addPlant={addPlant}
                    setPlants={setPlants}
                />
                <PlantList
                    plants={plants}
                />
            </div>
        </div>
    )

}