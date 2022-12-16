import Tagline from '../../components/Tagline'
import ProductDetails from "../../components/ProductDetails";
import TaglineTablet from '../../components/TaglineTablet'
import ProductDetailsTablet from "../../components/ProductDetailsTablet";
import './LandingPage.scss';

export default function LandingPage() {

    return(
        <>
            <div className='landing__mobile'>
                <Tagline />
                <ProductDetails />
            </div>
            <div className='landing__tablet'>
                <TaglineTablet />
                <ProductDetailsTablet />
            </div>
        </>
    )
}