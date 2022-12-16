import { createContext, useState } from "react";

  const PlantContext = createContext();


  export function PlantProvider({children}){
    
    const [ allPlants, setAllPlants ] = useState()

     
    const generatePlants = (data) => {
      setAllPlants(data)
    }

    return <PlantContext.Provider value={{ allPlants, generatePlants }}>{children}</PlantContext.Provider>
  }; 

  export default PlantContext;

