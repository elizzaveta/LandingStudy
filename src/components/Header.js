import React from 'react';
import Logo from "../images/icons/Logo.png"
import RowLinks from "./RowLinks";
import {navigationLinks} from "../consts/NavigationLinks";
import TransparentButton from "./Buttons/TransparentButton";
import styles from "../styles/css/Header.module.css"
const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Qubly logo"></img>
            <div className={styles.nav}>
                <RowLinks linkItems={navigationLinks.header}/>
                <TransparentButton text="Start free trial"/>
            </div>
        </header>
    );
};

export default Header;