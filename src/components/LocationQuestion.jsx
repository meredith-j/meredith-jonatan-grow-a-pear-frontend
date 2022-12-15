import { motion } from "framer-motion";

export default function LocationQuestion ({page, setPage, city, setCity, province, setProvince, formData, setFormData, x, setX}) {

    return(
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="form__header">Please enter your location details below.</h3>
            <div className="location__inputs">
                <label className="form__label">City</label>
                    <input className="location__input"
                        type="text"
                        name="city"
                        placeholder="City"
                        onChange={(e) =>
                        setCity(e.target.value)}
                     />
                <label className="form__label">Province</label>
                    <input className="location__input"
                        type="text"
                        name="province"
                        placeholder="Province"
                         onChange={(e) =>
                         setProvince(e.target.value)}
                    />
            </div>
            <button className="location__next"
                    onClick={(e) => {
                    e.preventDefault();                    
                    setPage(page + 1);
                    setX(550);
                    }}>
                Next
            </button>
        </motion.div>
    )
}