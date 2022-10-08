import React from 'react'; 
import linkArray from './headerLinks';
import './header.css'


export default function Header(props) {

    return (
        <nav id='nav-bar'>
            <ul className='d-flex'>
            {linkArray}
            </ul>
        </nav>
    )
}