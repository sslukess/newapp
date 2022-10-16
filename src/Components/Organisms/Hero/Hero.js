import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import backgroundHeroImage from '../../../Images/hero-banner.jpg'
import LeftHeadingText from "../../Molecules/LeftHeadingText/LeftHeadingText";
import { ScreenSize } from '../../../Utils/Screen Size Media Queries/ScreenSize';
import './Hero.scss';

export default function Hero(props) {


    let localScreenSize = useContext(ScreenSize);
    console.log(localScreenSize);
    let localScreenSizeClass = localScreenSize.isTabletOrMobile ? 'mobile' : 'desktop';

    return (

        <Container fluid id='hero-container' className={localScreenSizeClass} style={{ backgroundImage: `url(${backgroundHeroImage})` }} >
                <LeftHeadingText text={props.text} heading={props.heading}></LeftHeadingText>
        </Container>

    )
};