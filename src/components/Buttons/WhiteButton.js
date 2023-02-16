import React from 'react';
import styles from "../../styles/css/Buttons/WhiteButton.module.css";

const WhiteButton = (props) => {
    const {text, link} = props;
    return (
        <button className={styles.button}>
            <a href={link}>{text}</a>
        </button>
    );
};

export default WhiteButton;