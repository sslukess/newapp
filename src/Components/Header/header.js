import React, { useContext } from 'react';
import linkArray from './headerLinks';
import { ScreenSize } from '../../Utils/Screen Size Media Queries/ScreenSize';

import './header.css'


const logoSrc = process.env.PUBLIC_URL + "images/logo.jpg";


export default function Header() {

    let localScreenSize = useContext(ScreenSize);
    console.log(localScreenSize);

    const navLinkSectionWidthClass = localScreenSize.isTabletOrMobile ? 'nav-fifty-wide' : 'nav-twentyfive-wide';
    
    const mobileLogo = <div id='logo-section-mobile' className={navLinkSectionWidthClass}><img id='logo-image' src={logoSrc} /></div>;
    const desktopLogo = <div id='logo-section-desktop' className={navLinkSectionWidthClass}><img id='logo-image' src={logoSrc} /></div>

    

    return (
        <nav id='nav-bar'>

            {localScreenSize.isTabletOrMobile && mobileLogo}

            {localScreenSize.isDesktopOrLaptop && desktopLogo}

            <div id='nav-link-section' className={navLinkSectionWidthClass}>
                <ul className='d-flex justify-content-around' id='nav-ul'>
                    {linkArray}
                </ul>
            </div>
        </nav>
    )
}