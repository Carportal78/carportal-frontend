'use client'

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('https://api.univolenitsolutions.com/v1/contact/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact_form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">First Name*</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Last Name*</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Email*</label>
            <input
              className="form-control email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              className="form-control"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-sm-12">
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-control"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb0">
            <button 
              type="submit" 
              className="btn btn-thm ofr_btn1 btn-block mt0 mb20"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Get In Touch'}
            </button>
          </div>
          {submitStatus === 'success' && (
            <div className="alert alert-success mt-3">
              Your message has been sent successfully!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="alert alert-danger mt-3">
              There was an error sending your message. Please try again later.
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;