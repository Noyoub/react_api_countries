import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation/>
            <Logo/>
            <h1>À propos</h1>
            <br/>
            <p>Intégration de l'API REST Countries avec filtrage par continent et/ou par population.</p>

        </div>
    );
};

export default About;