import { useState } from 'react'
import './ContactMe.css'

export const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('Send')
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    
    const { firstName, lastName, inputEmail, message } = e.target.elements;
    let contactForm = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: inputEmail.value,
      message: message.value,
    }

    try {
      const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
        mode: 'cors',
      });

      if (response.ok) {
        setFormStatus('Message sent');
      } else {
        setFormStatus('Sending failed ...');
      }
    } catch (error) {
      console.error('Error sending message', error);
      setFormStatus('Sending failed...')
    }
  };

  return (
    <div className="contact-form-container">
      <h1 className="contact-form-title">Contact <span className="contact-form-colored-title">me</span></h1>
      <form className="contact-form" id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="form-group name-group">
          <label className="name-label" htmlFor="firstName">First name</label>
          <input type="text" className="form-control name-input" id="firstName" />
        </div>
        <div className="form-group name-group">
          <label className="name-label" htmlFor="lastName">Last name</label>
          <input type="text" className="form-control name-input" id="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your message</label>
          <textarea type="text" className="form-control" id="message" rows="5"></textarea>
        </div>
        <button type="submit" className="button-submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};
