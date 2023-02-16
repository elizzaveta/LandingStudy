import React from 'react';
import ProfileImage from "../../images/Profile.png"
import bgImage from "../../images/Path 606.png"
import styles from "../../styles/css/Testimonial/Testimonial.module.css"
import ClientLogos from "./ClientLogos";

const Testimonial = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`container ${styles.contentWrapper}`}>
                <h2>"What I love about Qubly is the easy way we can collaborate even if there is a lot of people
                    involved in the process"</h2>
                <img className={styles.profileImage} src={ProfileImage} alt="BigSpring CTO Profile Image"></img>
                <div>
                    <p>Guillaume Cabane</p>
                    <p>CTO @ BigSpring</p>
                </div>
                <div className={styles.horizontalLine}></div>
                <ClientLogos/>
            </div>
            <img className={styles.bgImage} src={bgImage}/>
        </div>
    );
};

export default Testimonial;