import { useState, useEffect } from 'react'
import './ContactMe.css'

export const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('Send')
  const [isFilled, setIsFilled] = useState(false);
  
  const checkFormFilled = () => {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const inputEmail = document.getElementById('inputEmail');
    const message = document.getElementById('message');

    const isFormFilled = firstName.value && lastName.value && inputEmail.value && message.value;
    setIsFilled(isFormFilled);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    //check if inputs are filled :
    const { firstName, lastName, inputEmail, message } = e.target.elements;
    
    if (isFilled) {
      setIsFilled(true);
      setFormStatus('Sending...');
    
      let contactForm = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: inputEmail.value,
        message: message.value,
      }

      try {
        const backendBaseUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
        const route = '/massmr/contact';
        const backendUrl = `${backendBaseUrl}${route}`;

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

    } else {
      setIsFilled(false);
      return;
    }
  };

  return (
    <div className="contact-form-container">
      <h1 className="contact-form-title">Contact <span className="contact-form-colored-title">me</span></h1>
      <form className="contact-form" id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="form-group name-group">
          <label 
            className="name-label" 
            htmlFor="firstName">
            First name
          </label>
          <input 
            type="text" 
            className="form-control name-input" 
            id="firstName"
            onChange={checkFormFilled} />
        </div>
        <div className="form-group name-group">
          <label 
            className="name-label" 
            htmlFor="lastName">
            Last name
          </label>
          <input 
            type="text" 
            className="form-control name-input" 
            id="lastName"
            onChange={checkFormFilled} />
        </div>
        <div className="form-group">
          <label 
            htmlFor="inputEmail">
            Email
          </label>
          <input 
            type="email" 
            className="form-control" 
            id="inputEmail" 
            aria-describedby="emailHelp"
            onChange={checkFormFilled} />
        </div>
        <div className="form-group">
          <label 
            htmlFor="message">
            Your message
          </label>
          <textarea
            type="text"
            className="form-control"
            id="message" rows="5"
            onChange={checkFormFilled} >
          </textarea>
        </div>
        <button 
          type="submit" 
          className={`button-contact-form ${isFilled ? 'button-submit' : '' }`}>
          {formStatus}
        </button>
      </form>
    </div>
  );
};
