import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ContactForm } from '../../Molecules/Contact Form/ContactForm'
import ridinginmountains from '../../../Images/riding-in-mountains.jpg';
import styles from './FormAndImage.module.scss';



interface Props{
    heading: string;
}

export default function TextAndImage(props: Props): JSX.Element {

    return (
        <Container id={styles.outerContainer}>
            <Row className={styles.Row}>
                <Col sm={12} md className={styles.Col}>
                <h1>{props.heading}</h1>
                <ContactForm />
                </Col>
                <Col sm={12} md className={styles.Col}>
                    <div id={styles.imgContainer}>
                        <img src={ridinginmountains} className={styles.img} />
                    </div>
                </Col>
            </Row>

        </Container>

    )
};