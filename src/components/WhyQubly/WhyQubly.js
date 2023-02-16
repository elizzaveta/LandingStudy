import React from 'react';
import Content from "./Content";
import Features from "./Features";
import styles from "../../styles/css/WhyQubly/WhyQubly.module.css"

const WhyQubly = () => {
    return (
        <div className={`container ${styles.wrapper}`}>
            <Content/>
            <Features/>
        </div>
    );
};

export default WhyQubly;