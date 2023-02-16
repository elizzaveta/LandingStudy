import React from 'react';
import styles from "../../styles/css/Buttons/PurpleButton.module.css"
const PurpleButton = (props) => {
    const {text, link} = props;
    return (
        <button className={styles.button}>
            <a href={link}>{text}</a>
        </button>
    );
};

export default PurpleButton;