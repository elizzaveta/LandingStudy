import React from 'react';
import BlockContentTemplate from "../BlockContentTemplate";
import {Tags} from "../../consts/Tags";
import LogosImage from "../../images/LogosImage2.png"
import styles from "../../styles/css/ForEngineeringTeams/ForEngineeringTeams.module.css"

const ForEngineeringTeams = () => {
    return (
        <div className={`container ${styles.wrapper}`}>
            <BlockContentTemplate
                tag={Tags.engineeringTeams}
                title={"Data-driven pipelines in minutes"}
                text={"Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform."}/>
            <img src={LogosImage} alt="logos group"/>
        </div>
    );
};

export default ForEngineeringTeams;