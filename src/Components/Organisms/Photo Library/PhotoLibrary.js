import React from "react";
import LibraryPicturePopped from '../../Molecules/Library Picture/LibraryPicture';
import { useQuery, gql } from '@apollo/client';
import { GET_PHOTOS } from '../../../graphQL/Queries/GET_PHOTOS_request';
import { Container, Row, Col } from 'react-bootstrap'

export default function PhotoLibrary() {

    const { loading, error, data } = useQuery(GET_PHOTOS);

    if (loading) { return <p>loading</p> };
    if (error) { return <p>error</p> };

    if (data) { console.log(data)
        // return (
        //     data.PhotoLibrary.photosCollection.items.map((photoObject) => {
        //         return <Col sm={12} md><LibraryPicturePopped src={photoObject.photoImage.url} text={photoObject.photoDescription} /></Col>
        //     })
        // )
    }
};


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
// </Container>