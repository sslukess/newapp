import React, {createContext } from "react";


export const RoutedPage = createContext({
    page: "",
    setPage:  () => {}
});

export default function RouterProvider(props) {

    return (
        <RoutedPage.Provider value={props.value}>
            {props.children}
        </RoutedPage.Provider>
    )
}; 