import React from 'react';
import courses from '../../json/Course.json';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { Helmet } from 'react-helmet';

const Course = () => {
    const data = courses;

    return (
        <>
            <Helmet>
                <title>Courses || Shiv computers</title>
            </Helmet>
            <Breadcrumb title="Courses" />
            <div className="container">
                <div className="row">
                    {data.map((item) => (
                        <div className="col-md-4 py-4" key={item.id}>
                            <div className="card">
                                <div className="info">
                                    <h2 className="text-center my-2">{item.title}</h2>
                                </div>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ height: "400px", objectFit: "cover" }}
                                />
                                <div className="description">
                                    {/* Use dangerouslySetInnerHTML to render HTML */}
                                    <p dangerouslySetInnerHTML={{ __html: item.detail }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Course;
