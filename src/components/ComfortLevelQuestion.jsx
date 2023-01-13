import { motion } from "framer-motion";

export default function ComfortLevelQuestion({level, setLevel, x, setX}) {
    return(
        <div>
        <h3 className="form__header">How comfortable are you with gardening?</h3>
        <div className="comfort">
            <div className="comfort__input">
                <input className="comfort__option"
                    type="radio"
                    name="level"
                    value="beginner"
                    onChange={(e) =>
                    setLevel(e.target.value)}
                />
                    <div className="comfort__input-details">
                        <label>First time gardener</label>
                        <p className="comfort__input-detail">You’re just getting started</p>
                    </div>
            </div>
            <div className="comfort__input">
                <input className="comfort__option"
                    type="radio"
                    name="level"
                    value="intermediate"
                    onChange={(e) =>
                        setLevel(e.target.value)}
                />
                    <div className="comfort__input-details">
                        <label>Intermediate</label>
                        <p className="comfort__input-detail">You’ve got a few seasons under your belt and are hoping to level up your skills</p>
                    </div>
            </div>
            <div className="comfort__input">
                <input className="comfort__option"
                    type="radio"
                    name="level"
                    value="advanced"
                    onChange={(e) =>
                        setLevel(e.target.value)}
                />
                    <div className="comfort__input-details">
                        <label>Green thumb galore!</label>
                        <p className="comfort__input-detail">You’ve been at this for a while and have honed your skills</p>
                    </div>
            </div>
        </div>
        <button className="sunlight__next"
            type="submit"
        >
            Finish
        </button>
    </div>
    )
}