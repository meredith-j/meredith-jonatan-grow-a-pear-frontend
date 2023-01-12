import logo from '../assets/images/GAP-logo.svg';
import profileIcon from '../assets/icons/profile-icon.svg'
import { Link } from 'react-router-dom';

export default function Header() {

    return(
        <div className='header'>
            <Link className="header__home" to="/">
                <h1 className="header__heading">Grow a</h1>
                <h1 className="header__heading">Pear</h1>
                <img className="header__logo" src={logo} alt="a cute green pear winking at you" />
            </Link>
            
            <Link className='header__profile' to="/profile">
                <img className="header__profile-icon" alt="go to your profile" src={profileIcon}/>
            </Link>
        </div>
    )
}