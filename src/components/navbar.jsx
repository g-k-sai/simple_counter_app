import React from 'react';

const NavBar = ( {numItems} ) => {
    console.log("NavBar - Rendered");

    return ( 
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="\">
            Cart <span className="badge badge-pill badge-secondary">{numItems}</span>
        </a>
    </nav>
    );
}

export default NavBar;