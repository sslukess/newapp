import React from "react";
import LibraryPicturePopped from '../../Molecules/Library Picture/LibraryPicture';
import { useQuery, gql } from '@apollo/client';
import { GET_PHOTOS } from '../../../graphQL/Queries/GET_PHOTOS_request';
import { Container, Row, Col } from 'react-bootstrap'
import LibraryPhotoQueryMap from '../../../graphQL/DataMaps/LibraryPhotoQueryMap.ts';
import styles from './PhotoLibrary.module.css';

export default function PhotoLibrary() {

    const { loading, error, data } = useQuery(GET_PHOTOS);

    if (loading) { return <p>loading</p> };
    if (error) { return <p>error</p> };

    if (data) {

        const mappedData = LibraryPhotoQueryMap(data);
        
        const libraryArray = [];
        mappedData.forEach(photoElement => {
            libraryArray.push(<Col id={styles.col} xs="auto" ><LibraryPicturePopped src={photoElement.url} imageAlt={photoElement.photoDescription} text={photoElement.photoDescription} /></Col>)
        });

        return <Container fluid><Row id={styles.row}>{libraryArray}</Row></Container>;
    }

};

// RIP Shuffle fn
 // let iRowFactor = ((mappedData.length + 1)/Math.min(photosPerRow, mappedData.length)) + 1;
        // // i is the row
        // for (let i = 1; i <= iRowFactor; i++) {

        //     let groupedPhotoArray = [];

        //     // j is the col in the row
        //     let jRowFactor = Math.min(photosPerRow, mappedData.length);
        //     for (let j = 0; j < jRowFactor; j++) {
        //         let rowIndexStart = (i-1) * Math.min(photosPerRow, mappedData.length) // where in the array to start
               
        //         let k = rowIndexStart + j // k is the index of the given photo in mappedData (which is an array of all photos)
        //         let photoColElement;

        //         if (mappedData[k]) {
        //             photoColElement = <Col id={styles.col} sm={12} md={4}><LibraryPicturePopped src={mappedData[k].url} imageAlt={mappedData[k].photoDescription} text={mappedData[j].photoDescription} /></Col>
        //         } else {
        //             photoColElement = "";
        //         }

        //         groupedPhotoArray.push(photoColElement);
        //     }

            // console.log(groupedPhotoArray);

            // libraryArray.push(<Row id={styles.row}>{groupedPhotoArray}</Row>)