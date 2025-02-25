import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link className="navbar-brand " to="/">
                        <img className="logo" src="img/logo.png" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link  active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/course">Course</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar