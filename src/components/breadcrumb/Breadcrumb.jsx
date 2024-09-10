import React from 'react'

const Breadcrumb = (props) => {
    return (
        <>
            <div className="breadcrumbImg  text-white py-4" style={{ backgroundImage: `url(https://smartclass.dexignzone.com/xhtml/images/banner/bnr1.jpg)`, backgroundSize: "cover", opacity: "0.8" }}>

                <h1 className="text-center">{props.title}</h1>
                <div className="d-flex justify-content-center">
                    <br />

                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item text-white active" aria-current="page">Home</li>
                            <li class="breadcrumb-item">{props.title}</li>

                        </ol>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Breadcrumb