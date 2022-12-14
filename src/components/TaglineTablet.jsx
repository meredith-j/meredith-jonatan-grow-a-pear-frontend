import tree from '../assets/images/pink-tree.svg';
import bottomTriangle from '../assets/images/landing-page-bottom-light-blue.svg';

export default function Tagline() {

    return(
            <div className='tagline__tablet-box'>
                    <img className='tagline__tablet-image' src={tree} alt="a cute plant!"/>
                    <h2 className='tagline__tablet-heading'>Grow the right plants for you!</h2>
            </div>
    )
}