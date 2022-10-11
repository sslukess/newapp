import React from "react";
import Container from 'react-bootstrap/Container';

export default function ContentBox(props) {

    const Heading = () => {
        return props.heading ? <h1>{props.heading}</h1> : null;
    }

    return (

        <Container>
            <Heading />
            <div className={props.innerDivClass}>
                {props.content}
                {props.children}
            </div>
        </Container>

    )
};