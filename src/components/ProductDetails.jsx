import tomatoPlant from '../assets/images/tomato-plant.json';
import { useLottie } from 'lottie-react';
import { NavLink } from 'react-router-dom';
import plantDad from '../assets/images/plant-dad.svg';
import bottomTriangle from '../assets/images/landing-page-bottom-dark-blue.svg';

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
        <div className='details__background'>
            <div className='details'>
                <p className='details__info'>Are you a new gardener hoping to nurture a flourishing garden on your first go or a seasoned gardener looking for inspiration? Take our quiz to find out what plants will THRIVE in your backyard.</p>
                {View}
                <NavLink to="/quiz" className="details__quiz-link">Get Started</NavLink>
                <img className='details__image' src={plantDad} alt="bearded man waters plants at his windowsill" />
            </div>
            <img className='details__bottom' src={bottomTriangle} alt="this is a triangle" />
        </div>
    )
}