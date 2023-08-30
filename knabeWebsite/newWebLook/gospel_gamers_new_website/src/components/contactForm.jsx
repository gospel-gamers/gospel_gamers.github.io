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

            <div className={!props.darkMode ? 'input--combined' : 'input--combined--dark'}>
            {/* <label htmlFor="firstName">First Name:</label> */}
            <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={!props.darkMode ? 'input--line' : 'input--line--dark'} placeholder='first name...'/>
            </div>

            <div className={!props.darkMode ? 'input--combined' : 'input--combined--dark'}>
            {/* <label htmlFor="lastName">Last Name:</label> */}
            <input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className={!props.darkMode ? 'input--line' : 'input--line--dark'} placeholder='last name...'/>
            </div>

            <div className={!props.darkMode ? 'input--combined' : 'input--combined--dark'}>
            {/* <label htmlFor="email">Email:</label> */}
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={!props.darkMode ? 'input--line' : 'input--line--dark'} placeholder='email...'/>
            </div>

            <div className={!props.darkMode ? 'input--combined' : 'input--combined--dark'}>
            {/* <label htmlFor="textBox">Describe your reason for contact:</label> */}
            <textarea id="textBox" value={extraDetails} onChange={(e) => setExtraDetails(e.target.value)} className={!props.darkMode ? 'input--text' : 'input--text--dark'} placeholder='type your reason for contact here...'/>
            </div>
        </div>


        {/* reCAPTCHA  */}
        <ReCAPTCHA
            className={!props.darkMode ? 'captcha--test' : 'captcha--test--dark'}
            sitekey="6LepirQnAAAAADVl7O-uSytwz-4v39HkCf4505Am"
            onChange={handleRecaptchaChange}
        />

        {/* button */}
        <div className={!props.darkMode ? 'submit--button--class' : 'submit--button--class--dark'}>
          <button className={!props.darkMode ? 'submit--button' : 'submit--button--dark'} type="submit">
            Submit Form
          </button>
        </div>

      </form>
    );
  };
  
  export default ContactForm;
