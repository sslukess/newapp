import React, { useState } from "react";
import styles from './LibraryPicture.module.css';


//the picture itself
function LibraryPicture(props) {
    return (
        <div id={styles.imgContainer} className={props.clickedSwitch}>
            <img id={styles.libraryPicture} src={props.src} />
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
    clickedClassSwitch = styles.clicked

    const handleClick = () => {
        console.log('clicked!')

        clicked ? setClicked(false) : setClicked(true);

    }

    return (
        <div onClick={handleClick} id={styles.libraryPictureComponentContainer}>
            <LibraryPicture clickedSwitch={clicked && clickedClassSwitch} {...props} />
            {clicked && <LibraryText clickedSwitch={clicked && clickedClassSwitch} text={props.text} />}
            {clicked && <LibraryOverlay />}
        </div>
    )

}
