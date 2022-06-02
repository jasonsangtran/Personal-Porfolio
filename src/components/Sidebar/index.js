import './index.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
// import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faSkype, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoS} alt="logo"></img>
                {/*<img className="sub-logo" src={LogoSubtitle} alt="jst"></img>*/}
            </Link>
            <nav>
                <NavLink exact="true" activeclassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" href="https://facebook.com/tranmsang91/" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://linkedin.com/in/jasonst/" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://join.skype.com/invite/fpBlTm4OpGst" rel="noreferrer">
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                <a target="_blank" href="https://t.me/Jasonsangtran" rel="noreferrer">
                <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
                </a>
            </li>
            </ul>
        </div>
    )
}

export default Sidebar