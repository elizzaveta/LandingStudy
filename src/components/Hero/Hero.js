import React from 'react';
import HeroImage from "../../images/HeroImage.png"
import styles from "../../styles/css/Hero/Hero.module.css"
import bgImage from "../../images/BG.png"
import BlockContentTemplate from "../BlockContentTemplate";
import {Tags} from "../../consts/Tags";

const Hero = () => {
    return (
        <div className={styles.bgWrapper}>
            <div className={`container ${styles.wrapper}`}>
                <BlockContentTemplate
                    tag={Tags.version}
                    title={"Your data with real-time analytics"}
                    text={"Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail"}
                    />
                <img className={styles.image} src={HeroImage} alt="quble hero image"/>
            </div>
            <img className={styles.bgImage} src={bgImage}/>
        </div>
    );
};

export default Hero;