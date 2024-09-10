import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section className="footer py-5">
                <footer className="text-white">
                    <div className="container p-4">
                        <div className="row py-5">
                            <div className="col-md-4">
                                <h5 className="text-uppercase">Contact Us</h5>
                                <div className="hr mb-4"></div>
                                <p className="text-white">
                                    Shiv computers <br />
                                    2<sup>nd</sup> floor , Ajay arcade ,<br /> Jawahar chock ,<br /> Opp Upkar sareer
                                    show room ,<br />Surendranagar 363001<br />
                                    Gujarat
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="text-uppercase">Useful links</h5>
                                <div className="hr mb-4"></div>
                                <ul className="list-style-bullet mb-0 nav-item">
                                    <li className="pb-2">
                                        <Link to="/" className="text-white   text-decoration-none  ">Home</Link>
                                    </li>
                                    <div className="border"></div>
                                    <li className="pb-2">
                                        <Link tp="about" className="text-white text-decoration-none">About us</Link>
                                    </li>
                                    <div className="border"></div>
                                    <li className="pb-2">
                                        <Link to="/blog" className="text-white text-decoration-none">Blog</Link>
                                    </li>
                                    <div className="border"></div>
                                    <li className="pb-2">
                                        <Link to="/gallery" className="text-white text-decoration-none">Gallery</Link>
                                    </li>
                                    <div className="border"></div>
                                    <li className="pb-2">
                                        <a href="#!" className="text-white text-decoration-none">Contact us</a>
                                    </li>
                                    <div className="border"></div>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <h5 className="text-uppercase mb-0">Find Us</h5>
                                <div className="hr mb-4"></div>
                                <ul className="list-unstyled mb-0 nav-item">
                                    <li className="pb-2">
                                        <a href="#!" className="text-white   text-decoration-none  "><i className="bi bi-facebook"></i>  &nbsp; shivcomputers</a>
                                    </li>
                                    <li className="pb-2">
                                        <a href="#" className="text-white   text-decoration-none  "> <i className="bi bi-whatsapp"></i>  &nbsp;  9426975796

                                        </a>
                                    </li>
                                    <li className="pb-2">
                                        <a href="#!" className="text-white   text-decoration-none  "><i className="bi bi-envelope"></i>  &nbsp;  shivcomputers@gmail.com</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                        <div className="d-flex justify-content-between">
                            <div>
                            © 2024 Copyright:

                                <a className=" text-white text-decoration-none" href="#">Shiv Computers </a>
                            </div>
                            <div>

                                Developed by <a className="text-white text-decoration-none" href="https://flipcodesolutions.com" target='_blank'> Flipcode solutions </a>

                            </div>
                        </div>
                    </div>

                </footer>

            </section>
        </>
    )
}

export default Footer