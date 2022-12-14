import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import libPicDummy from '../../Images/libPicDummy.jpg'
import PhotoLibrary from '../../Components/Organisms/Photo Library/PhotoLibrary'
import TextAndImage from '../../Components/Organisms/TextAndImage/TextAndImage'


export default function PhotoLibraryPageBody(props) {
    
    return (
        <>
        <TextAndImage heading='A photo is worth a thousand words, i think?' text={props.pText} />
        <PhotoLibrary />
        </>
    )
}