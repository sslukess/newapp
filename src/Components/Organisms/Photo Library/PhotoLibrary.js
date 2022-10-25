import React from "react";
import LibraryPicturePopped from '../../Molecules/Library Picture/LibraryPicture';
import { useQuery, gql } from '@apollo/client';
import { GET_PHOTOS } from '../../../graphQL/Queries/GET_PHOTOS_request';
import { Container, Row, Col } from 'react-bootstrap'
import LibraryPhotoQueryMap from '../../../graphQL/DataMaps/LibraryPhotoQueryMap.ts';
import styles from './PhotoLibrary.module.css';

export default function PhotoLibrary() {

    const photosPerRow = 3;

    const { loading, error, data } = useQuery(GET_PHOTOS);

    if (loading) { return <p>loading</p> };
    if (error) { return <p>error</p> };

    if (data) {
        const mappedData = LibraryPhotoQueryMap(data);
        const libraryArray = [];


        for (let i = 0; i < (mappedData.length/Math.min(photosPerRow, mappedData.length)); i++) {

            let groupedPhotoArray = [];

            for (let j = 0; j < Math.min(photosPerRow, mappedData.length); j++) {
                let photoColElement = <Col id={styles.col} sm={12} md><LibraryPicturePopped src={mappedData[j].url} text={mappedData[j].photoDescription} /></Col>

                groupedPhotoArray.push(photoColElement);
            }

            console.log(groupedPhotoArray);

            libraryArray.push(<Row id={styles.row}>{groupedPhotoArray}</Row>)
        }

        console.log(libraryArray);
        return libraryArray;
    }

};