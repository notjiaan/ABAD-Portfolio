import React from 'react'
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" >Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/component-tutorial" className="nav-link active" aria-current="page">
                                    Tutorial1
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ways-of-styling" className="nav-link active" aria-current="page">
                                    Ways Of Styling
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/content1" className="nav-link active" aria-current="page">
                                   Content1
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/material-ui" className="nav-link active" aria-current="page">
                                   Material UI
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