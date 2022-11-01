import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ContactForm } from '../../Molecules/Contact Form/ContactForm'
import ridinginmountains from '../../../Images/riding-in-mountains.jpg';
import styles from './FormAndImage.module.scss';



export default function TextAndImage(): React.ReactNode {
    
    return (
        <Container id={styles.default.outerContainer}>
            <Row className={styles.default.Row}>
                <Col sm={12} md className={styles.default.Col}>
                <ContactForm />
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
