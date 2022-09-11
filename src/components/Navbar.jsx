import React from 'react';
import drink from '../assets/drink.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <img src={drink} alt="..." width="30" height="24" />
                    <span className="navbar-brand mb-0 h1">Cocktails DB</span>
                </span>
                <a className="font-monospace text-muted" href="https://github.com/Giuseppe5000" >GitHub</a>
            </div>
        </nav>
    )
}

export default Navbar;