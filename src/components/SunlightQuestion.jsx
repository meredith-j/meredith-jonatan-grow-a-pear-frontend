import { motion } from "framer-motion";

export default function SunlightQuestion ({page, setPage, sunlight, setSunlight, x, setX}) {
    return(
        <div>
            <h3 className="form__header">How much direct sunlight do you get in your garden?</h3>
            <p className="form__info">Direct sunlight refers to how often the sun is directly hitting your plants.</p>
            <div className="sunlight__input">
                <input className="sunlight__option"
                    type="radio" 
                    name="sunlight"
                    value="no_direct_sun"
                    onChange={(e) =>
                        setSunlight(e.target.value)}
                />
                    <div className="sunlight__input-details">
                        <label>My garden is shady</label>
                        <p className="sunlight__input-detail">Your garden gets no direct sunlight and is covered in shade.</p>
                    </div>
            </div>
            <div className="sunlight__input">
                <input className="sunlight__option"
                    type="radio" 
                    name="sunlight"
                    value="under_two_hours"
                    onChange={(e) =>
                        setSunlight(e.target.value)}
                />
                    <div className="sunlight__input-details">
                        <label>My garden is pretty shady</label>
                        <p className="sunlight__input-detail">Your garden doesn’t get any direct sun but isn’t too cool or shady</p>
                    </div>
            </div>
            <div className="sunlight__input">
                <input className="sunlight__option"
                    type="radio" 
                    name="sunlight"
                    value="two_to_four_hours"
                    onChange={(e) =>
                    setSunlight(e.target.value)}
                />
                    <div className="sunlight__input-details">
                        <label>Some direct sunlight</label>
                        <p className="sunlight__input-detail">Your garden gets 2-4 hours of direct sunlight per day</p>
                    </div>
            </div>
            <div className="sunlight__input">
                <input className="sunlight__option"
                    type="radio" 
                    name="sunlight"
                    value="four_to_eight_hours"
                    onChange={(e) =>
                        setSunlight(e.target.value)}
                />
                    <div className="sunlight__input-details">
                        <label>Lots of direct sunlight</label>
                        <p className="sunlight__input-detail">Your garden gets 4-8 hours of direct sun a day</p>
                    </div>
            </div>
            <div className="sunlight__input">
                <input className="sunlight__option"
                    type="radio" 
                    name="sunlight"
                    value="eight_plus_hours"
                    onChange={(e) =>
                        setSunlight(e.target.value)}
                />
                    <div className="sunlight__input-details">
                        <label>My garden has no shade</label>
                        <p className="sunlight__input-detail">Your garden gets 8 hours or more of direct sun a day</p>
                    </div>
            </div>
            <button className="sunlight__next"
                    onClick={(e) => {
                    e.preventDefault();


                    setPage(page + 1);
                    setX(0);
            }}>
            Next</button>
        </div>
    )
}