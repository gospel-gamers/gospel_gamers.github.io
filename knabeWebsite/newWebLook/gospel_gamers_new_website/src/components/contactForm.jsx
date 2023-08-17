import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import InputField from './inputField'
import SubmitButton from './submitButton'

const ContactForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [extraDetails, setExtraDetails] = useState('');
  
    // reCAPTCHA test
    const handleRecaptchaChange = (value) => {
        console.log("reCAPTCHA value:", value);
    };


    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    };
  
    return (

      // form input data
      <form onSubmit={handleSubmit} className={!props.darkMode ? 'contact--form' : 'contact--form--dark'}>

        <div className={!props.darkMode ? 'form--inputs' : 'form--inputs--dark'}>
            <div>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={!props.darkMode ? 'input--line' : 'input--line--dark'}/>
            </div>
            <div>
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className={!props.darkMode ? 'input--line' : 'input--line--dark'}/>
            </div>
            <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={!props.darkMode ? 'input--line' : 'input--line--dark'}/>
            </div>
            <div>
            <label>Extra Details:</label>
            <textarea value={extraDetails} onChange={(e) => setExtraDetails(e.target.value)} className={!props.darkMode ? 'input--text' : 'input--text--dark'}/>
            </div>
        </div>


        {/* reCAPTCHA  */}
        <ReCAPTCHA
            sitekey="6LepirQnAAAAADVl7O-uSytwz-4v39HkCf4505Am"
            onChange={handleRecaptchaChange}
        />

        {/* button */}
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default ContactForm;
