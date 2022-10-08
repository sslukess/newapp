import React, { createContext } from 'react';
import { useMediaQuery } from 'react-responsive';


export const ScreenSize = createContext({});


export default function ScreenSizeProvider({ children }) {

    //get ScreenSizes
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800.1px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    let mediaValueObj = { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait, isRetina }

    return (
        <ScreenSize.Provider value={mediaValueObj}>
            {children}
        </ScreenSize.Provider>
    )
}
