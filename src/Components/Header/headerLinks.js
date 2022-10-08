import React from 'react';

const headerLinks = {
    home: {
        name: "Home",
        URL: "google.com"
    },
    about: {
        name: "About",
        URL: ""
    },
    github: {
        name: "Github",
        URL: ""
    }
}

// create link component

function HeaderLink(props) {
    return <li key={props.name}><a href={props.url} >{props.name}</a></li>
}

const linkArray = []; 

console.log(Object.entries(headerLinks))

for (const link of Object.entries(headerLinks)) {
    console.log(link[1].name);
    linkArray.push(<HeaderLink url={link[1].URL} name={link[1].name} />)
}

//console.log(linkArray)

export default linkArray;