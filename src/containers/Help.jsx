import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Help.scss';

const Help = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useRef();

  const handleInputChange = (e) => {
    setIsSearching(e.target.value.length > 0);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  

  const handleFormData = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const { fullname, email, message } = formData;

    if (fullname === '') {
      newErrors.fullname = 'Enter your full name';
    }

    if (!emailPattern.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (message === '') {
      newErrors.message = 'Enter your message';
    }

    setErrors(newErrors);

    // xeta olmadiqda email gonderilsin
    if (Object.keys(newErrors).length === 0) {
      sendEmail(e);
      setFormSubmitted(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zt24w21', 'template_95i5fjv', form.current, 'W5EI8dzZ3mWmirHUl')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="container">
      <section className="help-section">
        <div className="helpPartContain">
          <div className="left-part">
            <div className="title">
              <h3>Help</h3>
            </div>
            <div className="searchPart">
              <form className="d-flex search ms-4 border-0 ms-0" role="search">
                <div className="search-container d-flex align-items-center">
                  <input
                    className="form-control me-2 bg-body-tertiary"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleInputChange}
                  />
                  {!isSearching && (
                    <span>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                  )}
                  <span>
                    <i className="fa-solid fa-microphone"></i>
                  </span>
                </div>
              </form>
            </div>
            <div className="questions">
              <h3>Popular Q&A</h3>
              <p><i className="bi bi-journals"></i> How to Upload Your Developed Game</p>
              <p><i className="bi bi-journals"></i> How to Go Live Stream</p>
              <p><i className="bi bi-journals"></i> Get in touch with the Creator Support Team</p>
            </div>
            <div className="buttons">
              <button className="btn">
                <a href="#">Browse All Articles</a>
              </button>
              <button className="btn">
                <a href="#">Ask a Question</a>
              </button>
            </div>
          </div>
          <div className="for-form-validation">
            <div>
              {!formSubmitted ? (
                <form id="myForm" onSubmit={handleFormData} ref={form}>
                  <div className="form-group fullname">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                      type="text"
                      id="fullname"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.fullname}
                      onChange={handleChange}
                    />
                    {errors.fullname && <small>{errors.fullname}</small>}
                  </div>
                  <div className="form-group email">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <small>{errors.email}</small>}
                  </div>
                  <div className="form-group message">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <small>{errors.message}</small>}
                  </div>
                  <div className="form-group submit-btn">
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              ) : (
                <div id="thank-you-content" style={{ display: 'block', color: '#ffffff' }}>
                  <h1>Thank you for your opinion.💙</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
