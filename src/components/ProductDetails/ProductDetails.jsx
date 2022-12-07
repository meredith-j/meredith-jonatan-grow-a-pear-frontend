import tomatoPlant from '../../assets/images/tomato-plant.json';
import { useLottie } from 'lottie-react';
import { NavLink } from 'react-router-dom';
import plantDad from '../../assets/images/plant-dad.svg';
import bottomTriangle from '../../assets/images/landing-page-bottom-dark-blue.svg';
import './ProductDetails.scss';

export default function ProductDetails() {

    const options = {
        animationData: tomatoPlant,
        loop: true
      };

      const style = {
        height: 200,
        width: 316
      };
    
      const { View } = useLottie(options, style);

    return(
        <div>
            <div className='details'>
                <p className='details__info'>Descripton about the app will go here and it will be very sassy! Think gay plant parent! We love to see it!</p>
                {View}
                <NavLink to="/quiz" className="details__quiz-link">Get Started</NavLink>
                <img src={plantDad} alt="bearded man waters plants at his windowsill" />
            </div>
            <img className='details__bottom' src={bottomTriangle} alt="this is a triangle" />
        </div>
    )
}