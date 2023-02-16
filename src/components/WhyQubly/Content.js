import React from 'react';
import Tag from "../Tag";
import {Tags} from "../../consts/Tags";
import styles from "../../styles/css/WhyQubly/Content.module.css"

const Content = () => {
    return (
        <div className={styles.wrapper}>
            <Tag tag={Tags.whyQubly}/>
            <h1>Get actionable insights from Big Data in 3 steps</h1>
            <p className={`opacity50 ${styles.p}`}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>
    );
};

export default Content;