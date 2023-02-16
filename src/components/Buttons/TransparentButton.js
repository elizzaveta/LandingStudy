import React from 'react';
import styles from "../../styles/css/Buttons/TransparentButton.module.css"

const TransparentButton = (props) => {
    const {text} = props;
    return (
        <button className={styles.button}>
            {text}
        </button>
    );
};

export default TransparentButton;