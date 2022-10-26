import React, { useContext, useEffect, useState } from 'react';
import { RoutedPage } from './RouterProvider';

//pagebody imports

import HomepageBody from '../../Pages/Home/HomePageBody';
import PhotoLibraryPageBody from '../../Pages/PhotoLibrary/PhotoLibraryPageBody';


export const pageList = {
    //place these in order
    
    home: {
        name: "Home",
        URL: "",
        Fn: HomepageBody
    },
    Photos: {
        name: "Photos",
        URL: "",
        Fn: PhotoLibraryPageBody
    }
};


export default function PageRender(props) {
    
    let { page } = useContext(RoutedPage);
 
    let PageToRender = pageList[page]?.Fn ? pageList[page].Fn : HomepageBody;

    return <PageToRender {...props} />;
}