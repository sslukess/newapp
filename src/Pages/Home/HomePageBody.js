import React from "react";
import Hero from '../../Components/Organisms/Hero/Hero'
import TextAndImage from '../../Components/Organisms/TextAndImage/TextAndImage'

export default function HomepageBody(props) {

    return (
        <>
            <Hero id='hero' text={props.pText} heading='GRVL//BNE' />
            <TextAndImage heading='A famouse ride in many mountains' text={props.pText.repeat(13)} />
        </>
    )
}

