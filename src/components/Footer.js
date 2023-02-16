import React from 'react';
import {navigationLinks} from "../consts/NavigationLinks";
import ColumnLinks from "./ColumnLinks";
import styles from "../styles/css/Footer.module.css"
import logo from "../images/icons/Logo.png"
import {contactIconLinks} from "../consts/ContactIconLinks";
const Footer = () => {
    return (
        <footer>
            <div>
                <img className={styles.logoIcon} src={logo}></img>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim</p>
                <div className={styles.iconsGroup}>
                    {contactIconLinks.map((iconLink)=>
                        <a href={iconLink.link}>
                            <img src={iconLink.icon}/>
                        </a>
                    )}
                </div>
            </div>
            {
                navigationLinks.footer.map((links)=>
                    <div className={styles.linksBlock}>
                        <p>{links.title}</p>
                        <ColumnLinks links={links.links}/>
                    </div>
                )
            }
        </footer>
    );
};

export default Footer;