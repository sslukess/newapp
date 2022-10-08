import React, { useContext } from 'react';
import linkArray from './headerLinks';
import { ScreenSize } from '../../Utils/Screen Size Media Queries/ScreenSize';
import './header.css'

const logoSrc = process.env.PUBLIC_URL + "images/logo.jpg";


export default function Header() {

    let localScreenSize = useContext(ScreenSize);
    console.log(localScreenSize);


    return (
        <nav id='nav-bar'>

            {localScreenSize.isTabletOrMobile && <div id='logo-section-mobile'>
                <img id='logo-image' src={logoSrc} />
            </div>}

            {localScreenSize.isDesktopOrLaptop && <div id='logo-section-desktop'>
                <img id='logo-image' src={logoSrc} />HELLO
            </div>}


            <div id='nav-link-section'>
                <ul className='d-flex justify-content-around' id='nav-ul'>
                    {linkArray}
                </ul>
            </div>
        </nav>
    )
}