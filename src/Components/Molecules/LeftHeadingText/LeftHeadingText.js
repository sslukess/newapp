import React, { useContext } from "react";
import { ScreenSize } from '../../../Utils/Screen Size Media Queries/ScreenSize';
import './LeftHeadingText.scss';

export default function LeftHeadingText(props) {

    let localScreenSize = useContext(ScreenSize);

    let localScreenSizeClass = localScreenSize.isTabletOrMobile ? 'mobile' : 'desktop';

    return (
        <div id='outerContainer' className={localScreenSizeClass}>
            <div id='heading-box' className={localScreenSizeClass}>
                <h3>{props.heading}</h3>
            </div>
            <div id='para-box' className={localScreenSizeClass}>
                <p>{props.text}</p>
            </div>
        </div>
    )
};


