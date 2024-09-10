import React from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import { Helmet } from 'react-helmet'

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact || Shiv computers</title>
            </Helmet>
            <Breadcrumb title="Contact" />
            <div className="container">
                <div className="row py-4">
                    <div className="col-md-4">
                        <p> <span className='fs-2'> <i className='bi bi-telephone'></i>
                            <span className="text-uppercase mx-2"> Phone</span>
                        </span>
                            <br />
                            <span className='mx-5'>
                                +91 94 269 75 796<br /></span>
                            <span className='mx-5'>
                                +91 94 282 92 283<br />
                            </span>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p> <span className='fs-2'> <i class="bi bi-geo-alt"></i>
                            <span className="text-uppercase mx-2"> Adderss</span>
                        </span>
                            <br />
                            <p className='mx-5'>
                            Shiv computers <br />
                                    2<sup>nd</sup> floor , Ajay arcade ,<br /> Jawahar chock ,<br /> Opp Upkar sareer
                                    show room ,<br />Surendranagar 363001<br />
                                    Gujarat
                            </p>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p> <span className='fs-2'> <i className='bi bi-envelope'></i>
                            <span className="text-uppercase mx-2"> Email</span>
                        </span>
                            <br />
                            <span className='mx-5'>
                            shivcomputer.snr@gmail.com<br /></span>
                        
                        </p>
                    </div>
                </div>
                <div className="row py-4" >
                    <p>
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29438.49270894508!2d71.6214358198795!3d22.73524335006456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395941a4ddc51fff%3A0xd6a1b80d526b969d!2sShiv%20Computers!5e0!3m2!1sen!2sin!4v1723790860507!5m2!1sen!2sin"  width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </p>
                </div>
                <div className="row py-4">
                    <div className="col-md-12">
                        <h2 className='text-center'>Contact Me</h2>
                        <p className='text-center'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic <br /> fingerstache fanny pack nostrud. Photo booth anim 8</p>
                    </div>
                </div>
                <div className="row">
                    <form class="row py-3">
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Enter name" name="email" />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Enter email" name="email" />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Enter phone" name="pswd" />
                            </div>
                        </div>
                        <div className="row py-3">
                            <div class="col">
                                <textarea class="form-control textarea" rows={10} placeholder="Enter messsage" name="email" >

                                </textarea>
                            </div>
                        </div>
                        <div className="row py-3">
                            <div class="col-md-7 offset-md-5">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact