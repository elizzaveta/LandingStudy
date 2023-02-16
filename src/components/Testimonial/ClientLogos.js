import React from 'react';
import {clientLogosInfo} from "../../consts/ClientLogosInfo";
import styles from "../../styles/css/Testimonial/ClientLogos.module.css"

const ClientLogos = () => {
    return (
        <div className={styles.wrapper}>
            {clientLogosInfo.map((logo)=>
                <img src={logo.icon}/>
            )}
        </div>
    );
};

export default ClientLogos;