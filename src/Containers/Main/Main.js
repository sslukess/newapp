import React from "react";
import './Main.css'

export default function Main({ children }) {
    return (
        <main id='main' class='container-fluid'>
            {children}
        </main>
    );
}