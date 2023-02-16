import React from 'react';
import styles from "../styles/css/RowLinks.module.css"
const RowLinks = (props) => {
    const {linkItems} = props;
    return (
        <div className={styles.wrapper}>
            {linkItems.map((linkItem)=>
                <a href={linkItem.to}>{linkItem.text}</a>
            )}
        </div>
    );
};

export default RowLinks;