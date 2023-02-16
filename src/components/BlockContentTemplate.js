import React from 'react';
import styles from "../styles/css/Hero/Content.module.css";
import Tag from "./Tag";
import ButtonGroup from "./Buttons/ButtonGroup";

const BlockContentTemplate = (props) => {
    const {tag, title, text, buttons} = props;
    return (
        <div className={styles.wrapper}>
            <Tag tag={tag}/>
            <h1>{title}</h1>
            <p className='opacity50'>{text}</p>
            {buttons
                ? <ButtonGroup children={buttons}/>
                : null
            }
        </div>
    );
};

export default BlockContentTemplate;