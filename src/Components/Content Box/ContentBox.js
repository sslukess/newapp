import React from "react";
import Container from 'react-bootstrap/Container';

export default function ContentBox(props) {

    return (
    
    <Container>
        <div className={props.divClass}>{props.content}</div>
    </Container>

    );
}
