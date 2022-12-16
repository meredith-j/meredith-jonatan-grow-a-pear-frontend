
export default function PlantList ({plants}) {

    return(
        <div className="list">
        <h2>Your Plant List</h2>
        {plants.map((plant) => {
            return(
                <div key={plant.id} className="list__card">
                    <img className="list__image" src={plant.image} alt={plant.name} />
                    <div className='list__details'>
                        <h5 className='list__item'>{plant.name}</h5>
                        <p>{plant.info}</p>
                    </div>
                </div>
            )
        })}
        <button className='list__submit'>Confirm My List</button>
        </div>
    )
}