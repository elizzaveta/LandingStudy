import React from 'react';
import Hero from "./Hero/Hero";
import WhyQubly from "./WhyQubly/WhyQubly";
import ForProductTeams from "./ForProductTeams/ForProductTeams";
import ForEngineeringTeams from "./ForEngineeringTeams/ForEngineeringTeams";
import Testimonial from "./Testimonial/Testimonial";

const Landing = () => {
    return (
        <div>
            <Hero/>
            <WhyQubly/>
            <ForProductTeams/>
            <ForEngineeringTeams/>
            <Testimonial/>
        </div>
    );
};

export default Landing;