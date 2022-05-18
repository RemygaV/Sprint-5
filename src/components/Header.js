import React from 'react';
import { Link } from "react-router-dom";

function Header(){
    return (
        <nav className="navbar navbar-expand-xl navbar-expand-lg navbar-dark bg-primary ">

            <Link className="navbar-brand" to="/TodoLogo">Todo List</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/main">Todo List</Link></li>
                </ul>
            </div>
        </nav>)
}
export default Header;
