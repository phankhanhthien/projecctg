import React from 'react';

import logo from '../logo.svg';
const menubar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" ><img src={logo}alt="Girl in a jacket" width="50" height="50"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" >Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" >ListIte</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" >Pricing</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled"  tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};


menubar.propTypes = {

};


export default menubar;
