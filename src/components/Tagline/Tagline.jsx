import tree from '../../assets/images/pink-tree.svg';
import bottomTriangle from '../../assets/images/landing-page-bottom-light-blue.svg'
import './Tagline.scss';

export default function Tagline() {

    return(
        <div>
            <div className='tagline__background'>
                <div className='tagline'>
                    <img className='tagline__image' src={tree} alt="a cute plant!"/>
                    <h2 className='tagline__heading'>There will be a tagline here.</h2>
                </div>
            </div>
            <img className='tagline__bottom' src={bottomTriangle} alt="this is a triangle"/>
        </div>
    )
}