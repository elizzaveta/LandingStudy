import React from 'react';
import styles from "../styles/css/Tag.module.css"

const Tag = (props) => {
    const {tag} = props;
    return (
        <button className={styles.button}>
            <img src={tag.icon} alt="tag icon"/>
            <p>{tag.text}</p>
            {
                tag.link
                ? <a href={tag.link.to}>{tag.link.text}</a>
                    : null
            }
        </button>
    );
};

export default Tag;