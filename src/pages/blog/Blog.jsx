import React from 'react';
import blogData from '../../json/Blog.json';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { Helmet } from 'react-helmet';

// Function to truncate text after a specified number of words
const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
};

const Blog = () => {
    // Create a reversed copy of blogData
    const data = [...blogData].reverse();

    return (
        <>
            <Helmet>

                <title>Blog || Shiv computers</title>
            </Helmet>
            <Breadcrumb title="Blog" />
            <div className="container">
                <div className="row">
                    {data.map((item) => (
                        <div className="col-md-4 py-4" key={item.id}>
                            <div className="card" style={{ height: '100%' }}>
                                <img

                                    src={item.img}
                                    className="card-img-top img-fluid"
                                    alt={item.title}
                                    loading='lazy'
                                />
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <div className="d-flex justify-content-between">
                                        <p><i className="bi bi-clock"></i> <span className="text-muted"> {item.time}</span></p>
                                        <p><i className="bi bi-people"></i> <span className="text-muted"> {item.author}</span></p>
                                    </div>
                                    <p className="card-text">{truncateText(item.detail, 25)}</p>
                                    <Link to={`/blogDetail/${item.id}`} className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
