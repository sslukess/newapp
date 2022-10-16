import React, { useState } from "react";
import styles from './LibraryPicture.module.css';


//the picture itself
function LibraryPicture(props) {
    return <img id={styles.libraryPicture} src={props.src} /> 
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
   return <p>{props.text}</p>
}

export default function LibraryPicturePopped(props) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        console.log('clicked!')
        clicked ? setClicked(false) : setClicked(true);
    }

    return (
        <div onClick={handleClick} >
            <h2>Handle</h2>
            <LibraryPicture className={styles.clicked} {...props} />
            {clicked && <LibraryText text={props.text} />}  
            {clicked && <LibraryOverlay /> }
        </div>
    )

}
