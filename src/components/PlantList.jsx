import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlantList ({plants}) {


    const [name, setName ] = useState();
    const [id, setId] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post(`http://localhost:8080/list`, {name:name, plant_id:id})
        .then(navigate("/profile")
        .catch((err) => {
            // alert("Oops! Looks like something has gone wrong. Please try again later!")
            console.log(err)
        })
        )
    }

    return(
        <div className="list">
        <h2>Your Plant List</h2>
        {/* <form onSubmit={handleSubmit}> */}
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
            <label className="form__label">City</label>
                <input className="list__name"
                    type="text"
                    name="list"
                    placeholder="Your List's Name"
                    onChange={(e) =>
                    setName(e.target.value)}
                 />
            <button className='list__submit'>Confirm My List</button>
        {/* </form> */}
        </div>
    )
}