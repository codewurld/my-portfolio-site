import './contactme.css'

const ContactMe = () => {
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
                    <form action="">
                        {/* name attribute allows input connection with email.js  */}
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;