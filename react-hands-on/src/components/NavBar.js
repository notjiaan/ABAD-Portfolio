import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "../style/style.css";
import ReactLogo from '../logo.svg'
const NavBar = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand px-5" ><img src={ReactLogo} alt="React Logo" style={{ width: '3rem', height: '3rem' }} />Jiaan Abad</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item active">
                                <Link to="/about-me" className="nav-link active" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/paintings" className="nav-link active" aria-current="page">
                                    Page2
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/more-more" className="nav-link active" aria-current="page">
                                    Page3
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />


        </>
    )
}

export default NavBar