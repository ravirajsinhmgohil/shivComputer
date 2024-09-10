import React from 'react';
import blogData from '../../json/Blog.json';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { Helmet } from 'react-helmet';

const BlogDetail = () => {
    const { id } = useParams();
    const data = blogData.find((item) => item.id === parseInt(id)); // Ensure id is compared as number

    if (!data) {
        return (
            <div className="container">
                <h2>Blog Post Not Found</h2>
                <p>Sorry, the blog post you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <>     
        <Helmet>
      <title>Blog detail || Shiv computers</title>
    </Helmet>
           <Breadcrumb title="Blog detail"/>
        <div className="container">
            <div className="row py-4">
                <div className="col-md-12">
                    <div className="card">
                        <img
                            src={data.img}
                            className="card-img-top img-fluid"
                            style={{ height: "500px", objectFit: "cover" }}
                            alt={data.title}
                            loading='lazy'
                        />
                    </div>
                </div>
            </div>
            <div className="row py-4">
                <div className="col-md-12">
                    <div className="card-body">
                        <h2>{data.title}</h2>
                        <div className="d-flex justify-content-between">
                            <p><i className="bi bi-clock"></i> <span className="text-muted"> {data.time} </span></p>
                            <p><i className="bi bi-people"></i> <span className="text-muted"> {data.author}</span></p>
                        </div>
                        <p className="text-justify">
                            {data.detail}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BlogDetail;
