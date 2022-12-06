import logo from '../../assets/images/GAP-logo.svg';
import profileIcon from '../../assets/icons/profile-icon.svg'
import './Header.scss'
import { Navigate, NavLink } from 'react-router-dom';

export default function Header() {

    return(
        <div className='header'>
            <h1 className="header__heading">Grow a</h1>
            <h1 className="header__heading">Pear</h1>
            <img className="header__logo" src={logo} alt="a cute green pear winking at you" />
            <NavLink to={"/profile"}><img className="header__profile-icon" src={profileIcon} /></NavLink>
        </div>
    )
}