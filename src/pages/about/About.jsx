import React from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import { Helmet } from 'react-helmet'

const About = () => {
    return (
        <>
            <Helmet>
                <title>About || Shiv computers</title>
            </Helmet>
            <Breadcrumb title="About" />
            <div className="container ">
                <div className="row pt-5">
                    <div className="col-md-8">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero molestias, provident eius ipsum, dolore dolorem accusantium qui aliquam, sapiente suscipit praesentium fuga sint? Minima ducimus nisi molestiae animi eum dignissimos!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero molestias, provident eius ipsum, dolore dolorem accusantium qui aliquam, sapiente suscipit praesentium fuga sint? Minima ducimus nisi molestiae animi eum dignissimos!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero molestias, provident eius ipsum, dolore dolorem accusantium qui aliquam, sapiente suscipit praesentium fuga sint? Minima ducimus nisi molestiae animi eum dignissimos!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero molestias, provident eius ipsum, dolore dolorem accusantium qui aliquam, sapiente suscipit praesentium fuga sint? Minima ducimus nisi molestiae animi eum dignissimos!</p>
                    </div>
                    <div className="col-md-4">
                        <img className='w-100' alt='About' loading='lazy' src='https://www.shutterstock.com/image-illustration/bba-graduation-bachelor-business-administration-600nw-312491207.jpg' />
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-12">
                    
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ipsam temporibus commodi perferendis, odio cupiditate distinctio expedita ex debitis doloribus qui eaque possimus nihil sed dignissimos labore quos aliquam laborum.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ipsam temporibus commodi perferendis, odio cupiditate distinctio expedita ex debitis doloribus qui eaque possimus nihil sed dignissimos labore quos aliquam laborum.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ipsam temporibus commodi perferendis, odio cupiditate distinctio expedita ex debitis doloribus qui eaque possimus nihil sed dignissimos labore quos aliquam laborum.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ipsam temporibus commodi perferendis, odio cupiditate distinctio expedita ex debitis doloribus qui eaque possimus nihil sed dignissimos labore quos aliquam laborum.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ipsam temporibus commodi perferendis, odio cupiditate distinctio expedita ex debitis doloribus qui eaque possimus nihil sed dignissimos labore quos aliquam laborum.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ipsam temporibus commodi perferendis, odio cupiditate distinctio expedita ex debitis doloribus qui eaque possimus nihil sed dignissimos labore quos aliquam laborum.

                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About