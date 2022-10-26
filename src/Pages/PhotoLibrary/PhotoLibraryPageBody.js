import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import libPicDummy from '../../Images/libPicDummy.jpg'
import PhotoLibrary from '../../Components/Organisms/Photo Library/PhotoLibrary'


export default function PhotoLibraryPageBody(props) {
    
    return (
        <PhotoLibrary />
    )
}


// <Container>
//             <Row>
//                 <Col sm={12} md><LibraryPhotoPopped src={Image} text={pictureText} /></Col>
//                 <Col sm={12} md><LibraryPhotoPopped src={Image} text={pictureText} /></Col>
//                 <Col sm={12} md><LibraryPhotoPopped src={Image} text={pictureText} /></Col>

//             </Row>
//             <Row>
//                 <Col sm={12} md><LibraryPhotoPopped src={Image} text={pictureText} /></Col>
//                 <Col sm={12} md><LibraryPhotoPopped src={Image} text={pictureText} /></Col>
//                 <Col sm={12} md><LibraryPhotoPopped src={Image} text={pictureText} /></Col>

//             </Row>
//             <Row>
//                 <Col sm={12} md><LibraryPhotoPopped src={Image} text={pictureText} /></Col>
//                 <Col sm={12} md><LibraryPhotoPopped src={Image} text={pictureText} /></Col>
//                 <Col sm={12} md><LibraryPhotoPopped src={Image} text={pictureText} /></Col>

//             </Row>
//         </Container>