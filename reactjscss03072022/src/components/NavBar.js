import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "../style/style.css";
import ReactLogo from '../logo.svg'
const NavBar = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark  mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand " ><img src="https://emoji.gg/assets/emoji/9768_Radiant_Valorant.png" alt="React Logo" style={{ width: '3rem', height: '3rem', padding: "10px" }} />Jiaan Abad</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item active">
                                <Link to="/home" className="nav-link active" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/saturday" className="nav-link active" aria-current="page">
                                    Saturday
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Sunday" className="nav-link active" aria-current="page">
                                    Sunday
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