import { createContext, useState } from "react";

  const PlantContext = createContext();


  export function PlantProvider({children}){
    
    const [ allPlants, setAllPlants ] = useState()
    const [ plants, setPlants ] = useState()

     
    const generatePlants = (data) => {
      setAllPlants(data)
    }

    // const addToList = (plant, image) => {
    //   setPlants((prevState) => [...prevState, { plant, image } ]);      
    // }

    return <PlantContext.Provider value={{ allPlants, generatePlants }}>{children}</PlantContext.Provider>
  }; 

  export default PlantContext;

