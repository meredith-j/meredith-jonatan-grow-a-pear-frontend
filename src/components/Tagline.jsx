import tree from '../assets/images/pink-tree.svg';
import bottomTriangle from '../assets/images/landing-page-bottom-light-blue.svg';

export default function Tagline() {

    return(
        <div>
            <div className='tagline__background'>
                <div className='tagline'>
                    <img className='tagline__image' src={tree} alt="a cute plant!"/>
                    <h2 className='tagline__heading'>Grow the right plants for you!</h2>
                </div>
            </div>
            <img className='tagline__bottom' src={bottomTriangle} alt="this is a triangle"/>
        </div>
    )
}