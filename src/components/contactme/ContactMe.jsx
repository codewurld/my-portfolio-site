import './contactme.css'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

const ContactMe = () => {
    // provide access to all data in contact form
    const formRef = useRef()

    const [sentEmail, setSentEmail] = useState(false);

    // when form is submitted
    const handleSubmit = (e) => {
        // prevent automatic browser refresh
        e.preventDefault();

        // emailjs function sends contact message to emal inbox
        emailjs.sendForm('service_cym0vjc', 'template_snp48c5', formRef.current, "user_jJk6VTvEWa2hlB5DQMwOY"
        )
            .then((result) => {
                console.log(result.text);
                // change state to true to push acknowledgment notification to user
                setSentEmail(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contact-me">
            <div className="contact-me-bg">
            </div>
            <div className="contact-me-container">
                <div className="contact-me-left">
                    <h1 className="contact-me-title">Get in touch</h1>
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
                        {/* name attribute allows input connection with email.js  */}
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {/* if message is sent, push acknowledgment notification to user */}
                        {sentEmail && "Thank you for getting in touch... I'll get back to you within 24 hours."}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;