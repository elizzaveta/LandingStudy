import React from 'react';
import styles from "../styles/css/ColumnLinks.module.css"

const ColumnLinks = (props) => {
    const {links} = props;
    return (
        <div className={styles.wrapper}>
            {links.map((link)=>
                <a href={link.to}>{link.text}</a>
            )}
        </div>
    );
};

export default ColumnLinks;