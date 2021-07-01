import React from 'react';
import './main.css';
import Promo from "./Promo/Promo.js";
import NavTab from "./NavTab/NavTab.js";
import AboutProject from "./AboutProject/AboutProject.js";
import Techs from "./Techs/Techs.js";
import AboutMe from "./AboutMe/AboutMe.js";
import Portfolio from "./Portfolio/Portfolio.js";

function Main() {
    return (
        <>
            <Promo/>
            <NavTab/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>

        </>
    );
}

export default Main;