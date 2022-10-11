import React from "react";
import Container from "react-bootstrap/Container";
import './LeftHeadingText.css';

export default function LeftHeadingText(props) {
    return (
        <div id='outerContainer'>
            <div id='heading-box'>
                <h3>{props.heading}</h3>
            </div>
            <div id='para-box'>
                <p>{props.text}</p>
            </div>
        </div>
    )
};


