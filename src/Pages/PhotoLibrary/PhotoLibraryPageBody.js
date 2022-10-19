import React from "react";
import LibraryPhotoPopped from '../../Components/Molecules/Library Picture/LibraryPicture'
import { Container, Row, Col } from 'react-bootstrap'
import libPicDummy from '../../Images/libPicDummy.jpg'


const Image = libPicDummy;



export default function PhotoLibraryPageBody(props) {
    
    let pictureText = 'A really nice picture showing somebody having fun in the wilderness';

    return (
        <Container>
            <Row>
                <Col><LibraryPhotoPopped src={Image} text={pictureText} /></Col>
                <Col><LibraryPhotoPopped src={Image} text={pictureText} /></Col>
                <Col><LibraryPhotoPopped src={Image} text={pictureText} /></Col>

            </Row>
            <Row>
                <Col><LibraryPhotoPopped src={Image} text={pictureText} /></Col>
                <Col><LibraryPhotoPopped src={Image} text={pictureText} /></Col>
                <Col><LibraryPhotoPopped src={Image} text={pictureText} /></Col>

            </Row>
            <Row>
                <Col><LibraryPhotoPopped src={Image} text={pictureText} /></Col>
                <Col><LibraryPhotoPopped src={Image} text={pictureText} /></Col>
                <Col><LibraryPhotoPopped src={Image} text={pictureText} /></Col>

            </Row>
        </Container>
    )
}