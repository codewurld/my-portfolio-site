import './contactme.css'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const ContactMe = () => {
    // provide access to all data in contact form
    const formRef = useRef()

    const [sentEmail, setSentEmail] = useState(false);

    // when form is submitted
    const handleSubmit = (e) => {
        // prevent automatic browser refresh
        e.preventDefault();

        // emailjs function sends contact message to emal inbox
        emailjs.sendForm('service_cym0vjc', 'template_snp48c5', formRef.current, process.env.REACT_APP_EMAILJS_KEY
        )
            .then((result) => {
                console.log(result.text);
                // change state to true to push acknowledgment notification to user
                setSentEmail(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    // call ThemeContext
    const theme = useContext(ThemeContext)
    // call darkmode state in useContext from context.js file
    const darkMode = theme.state.darkMode
    return (



        <div className="contact-me">
            <div className="contact-me-bg">
            </div>
            <div className="contact-me-container">
                <div className="contact-me-left">
                    <h1 className="contact-me-title" style={{ color: darkMode && "#fff" }} >Get in touch</h1>
                    <div className="contact-me-info">
                        <div className="contact-me-info-item">
                            <i class="uil uil-envelope-alt contact-icon"></i>
                            <p className="contact-email">sholaqdev@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-me-right">
                    <p className="contact-me-description">
                        <b>Hi there.</b> Get in touch. I am open to a conversation if the right opportunity comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        {/* name attribute allows input style={{backgroundColor: darkMode && "#333"}} connection with email.js  */}
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
                        <button className="submit-btn">Submit</button>
                        {/* if message is sent, push acknowledgment notification to user */}
                        {sentEmail && "Thank you for getting in touch... I'll get back to you within 24 hours."}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;