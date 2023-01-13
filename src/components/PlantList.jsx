import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlantList ({plants}) {


    const [name, setName ] = useState();
    const navigate = useNavigate()

  

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post('http://localhost:8080/list', { list_name:name, plants})
        .then(navigate("/")
        .catch((err) => {
             alert("Oops! Looks like something has gone wrong. Please try again later!")
             console.log(err)
        })
        )
    }

    return(
        <div className="list">
        <form onSubmit={handleSubmit}>
            <h2>Your Plant List</h2>
                {plants.map((plant) => {
                    return(
                        <div key={plant.id} className="list__card" id={plant.id} name="plant" value={plant.id}>
                            <img className="list__image" src={plant.image} alt={plant.name} />
                            <div className='list__details'>
                                <h5 className='list__item'>{plant.name}</h5>
                                <p>{plant.info}</p>
                            </div>
                        </div>
                    )
                })}
            <label className="form__label">Name your list:</label>
                <input className="list__name"
                    type="text"
                    name="list"
                    placeholder="My List"
                    onChange={(e) =>
                    setName(e.target.value)}
                 />               
        <button className='list__submit'>Confirm My List</button>
        </form>
        </div>
    )
}