import React from 'react';
import {FeaturesInfo} from "../../consts/Features";
import styles from "../../styles/css/WhyQubly/Features.module.css"

const Features = () => {
    return (
        <div className={styles.wrapper}>
            {FeaturesInfo.map((feature)=>
                <div className={styles.featureContainer}>
                    <img className={styles.icon} src={feature.icon}/>
                    <p>{feature.title}</p>
                    <p className="opacity50">{feature.text}</p>
                </div>
            )}
        </div>
    );
};

export default Features;