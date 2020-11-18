import React from 'react';
import logo from '../../company.png'
import css from './Header.module.css'
import '../../App.css'

const Header = () => {
    return (
        <header className={`${css.header} wrapper`}>
            <img src={logo} alt='company logo'></img>
        </header>
    );
}

export default Header;