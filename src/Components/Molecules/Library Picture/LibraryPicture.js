import React, { useState, useContext } from "react";
import styles from './LibraryPicture.module.scss';
import { ScreenSize } from '../../../Utils/Screen Size Media Queries/ScreenSize';


//the picture itself
function LibraryPicture(props) {

    let localScreenSize = useContext(ScreenSize);

    let localScreenSizeClass = localScreenSize.isTabletOrMobile ? styles.mobile : styles.desktop;


    return (
        <div id={styles.imgContainer} className={`${props.clickedSwitch} ${localScreenSizeClass}`}>
            <img id={styles.libraryPicture} className={localScreenSizeClass} alt={props.imageAlt} src={props.src} />
        </div>
    )
}

//the overlay for when the pic gets clicked/popped
function LibraryOverlay(props) {
    return (
        <div id={styles.overlay}>
        </div>
    )
}

//the text for when the pic gets clicked/popped
function LibraryText(props) {
    return (
        <div className={props.clickedSwitch} id={styles.textContainer}>
            <p  id={styles.text}>{props.text}</p>
        </div>
    )
}

export default function LibraryPicturePopped(props) {

    const [clicked, setClicked] = useState(false);
    let clickedClassSwitch;
    clickedClassSwitch = styles.clicked;

    const handleClick = () => {
        clicked ? setClicked(false) : setClicked(true);
    }

    return (
        <div onClick={handleClick} id={styles.libraryPictureComponentContainer}>  
            <LibraryPicture imageAlt={props.imageAlt} clickedSwitch={(clicked && clickedClassSwitch) || ""} {...props} />
            {clicked && <LibraryText clickedSwitch={clicked && clickedClassSwitch} text={props.text} />}
            {clicked && <LibraryOverlay />}
        </div>
    )

}
