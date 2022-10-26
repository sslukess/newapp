import React from "react";
import ContentBox from "../../Molecules/Content Box/ContentBox";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ridinginmountains from '../../../Images/riding-in-mountains.jpg';
import * as styles from './TextAndImage.module.css'


export default function TextAndImage(props) {
    
    return (
        <Container id={styles.default.outerContainer}>
            <Row className={styles.default.Row}>
                <Col sm={12} md className={styles.default.Col}>
                    <ContentBox content={props.text} heading={props.heading} />
                </Col>
                <Col sm={12} md className={styles.default.Col}>
                    <div id={styles.default.imgContainer}>
                        <img src={ridinginmountains} className={styles.default.img} />
                    </div>
                </Col>
            </Row>

        </Container>

    )
};
