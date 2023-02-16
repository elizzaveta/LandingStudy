import React from 'react';
import styles from "../../styles/css/Buttons/ButtonGroup.module.css"

const ButtonGroup = (props) => {
    const {children} = props;
    return (
        <div className={styles.wrapper}>
            {children.map((button)=>
                button
            )}
        </div>
    );
};

export default ButtonGroup;