import React from 'react'
import galleryData from './../../json/Gallery.json'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import { Helmet } from 'react-helmet'
const Gallery = () => {
    const data = galleryData
    return (
        <>
            <Helmet>
                <title>Gallery || Shiv computers</title>
            </Helmet>
            <Breadcrumb title="Gallery" />
            <div className="container ">
                <div className="row ">
                    {/* fetch data */}
                    {data.map((item) => (
                        <div className="col-md-4 py-4" key={item.id}>
                            <img src={item.img} className="img-thumbnail" alt={item.img} />
                        </div>
                    ))}

                </div>


            </div>
        </>
    )
}

export default Gallery