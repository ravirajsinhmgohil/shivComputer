import React, { useState } from 'react';
import courses from '../../json/Course.json';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import axios from 'axios';

const Home = () => {
  const data = courses;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (formData.name.trim() === '') {
      toast.error('Please enter your name');
      return;
    }
    if (formData.email.trim() === '') {
      toast.error('Please enter your email');
      return;
    }
    if (formData.message.trim() === '') {
      toast.error('Please enter your message');
      return;
    }

    const data = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    try {
      const url = 'https://dev.shivcomputers.in/api/v1/inquiry';
      const res = await axios.post(url, data);

      if (res.status === 200) {
        toast.success(res.data.message || 'Form submitted successfully!');
        // Reset form fields on successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        toast.error(res.data.message || 'Failed to submit form');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <>
      <Helmet>
        <title>Home || Shiv Computers</title>
      </Helmet>

      {/* Slider */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/slider1.png"
              className="d-block w-100"
              alt="slider image"
              loading="lazy"
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/slider2.png"
              className="d-block w-100"
              alt="slider image"
              loading="lazy"
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/slider3.png"
              className="d-block w-100"
              alt="slider image"
              loading="lazy"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Courses */}
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div className="col-md-4 py-4" key={item.id}>
              <div className="card">
                <div className="info">
                  <h2 className="text-center">{item.title}</h2>
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="card-img-top"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="row pt-5">
          <div className="col-md-12">

            <h3>
              Speech by Founder Speak
            </h3>
            <p className='text-justify'>

              <b>

                Late Mr.Hemal Shukla (Founder)<br />
                [1976 to 2011]
              </b>
            </p>
            <p className='text-justify'>

              By the Grace of My Parents and Support of my Life Partner (Priti Shukla) I have come a long way in computer education field. Our journey began way back in the year 1998, as only one computer system we had, from then and till now, As a Director I didn’t want to invest our precious time in advertising, I always try to improve our teaching techniques to educate every student efficiently. I am very proud to say that here we never give false hope to students, we only give the right way of education so that every student can make their future in digital era. I am very much grateful to the fellow teachers, faculties and support of Mr Jigar Parmar on this way of journey.
            </p>
            <p className='text-justify'>
              Being a leading institute for computer classes at Surendranagar, we offer the best training environment and flexible training schedule to the students at an affordable course fee. Our course fee is so pocket-friendly that anyone can afford it. The courses, we provide have different time duration, so that the students can choose the course according to their convenience. We can proudly say that we provide the best computer courses and training techniques at Surendranagar in Gujarat at the most affordable prices and make the future of students bright.
            </p>
            <p className='text-justify'>
              Under the IT domain, we provide a wide variety of career-oriented certificate courses designed by the industry expert. All courses are taught by the certified faculties.
              Mr. Jigar Parmar, who constantly updated their technical skills to keep their expertise maintained. Shiv Computers will help you build your career by providing the best quality education. We want to make you capable enough to overcome a different type of difficulties they may face during their corporate career. The method of teaching we use is very modern.
              At the end on the behalf of Shiv Computers I welcome everyone here to join us to learn a new way of Computer Education.
              As we called it “Takshashila of Computer Education.”
              Thank You.

            </p>
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      <div
        className="container-fluid"
        style={{
          backgroundImage:
            'url(https://smartclass.dexignzone.com/xhtml/images/background/bg2.jpg)',
        }}
      >

        <div className="row">

          <div className="col-md-6"></div>
          <div className="col-md-6 py-5">
            <div className="enquiry-bx">
              <div className="head">
                <h2 className="title">Quick Enquiry</h2>
                <p>Please fill the below form.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12 py-3">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 py-3">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 py-3">
                    <div className="form-group">
                      <textarea
                        rows="4"
                        className="form-control textarea"
                        value={formData.message}
                        onChange={handleChange}
                        name="message"
                        placeholder="Your Message..."
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 py-3">
                    <button type="submit" className="btn btn-primary">
                      <span>Submit</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
