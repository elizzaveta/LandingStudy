import React from 'react';
import logosImage from "../../images/LogosImage.png"
import styles from "../../styles/css/ForProductTeams/ForProductTeams.module.css"
import BlockContentTemplate from "../BlockContentTemplate";
import {Tags} from "../../consts/Tags";

const ForProductTeams = () => {
    return (
        <div className={` container ${styles.wrapper}`}>
            <img className={styles.image} src={logosImage} alt="logo group"/>
            <BlockContentTemplate
                tag={Tags.productTeams}
                title={"Launch with the best stack"}
                text={"A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind"}
                />
        </div>
    );
};

export default ForProductTeams;