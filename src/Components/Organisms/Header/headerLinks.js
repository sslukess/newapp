import React, { useContext } from 'react';
import { pageList } from '../../../Utils/Router/Routed Page';
import { RoutedPage } from '../../../Utils/Router/RouterProvider';


// create link component

function HeaderLink(props) {
    const {page, setPage} = useContext(RoutedPage);
    // console.log('setPage at event handler = ')
    // console.log(setPage);
    const updatePage = (event) => {
        console.log(event.target.innerHTML);
        setPage(event.target.innerHTML);
    }

    return <li key={props.name} className='nav-li'><button onClick={updatePage} className='nav-link' >{props.name}</button></li>
}

const linkArray = []; 

for (const link of Object.entries(pageList)) {

    linkArray.push(<HeaderLink url={link[1].URL} name={link[1].name} />)

}

//console.log(linkArray)

export default linkArray;