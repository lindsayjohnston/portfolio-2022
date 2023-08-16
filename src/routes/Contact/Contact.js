import './Contact.css';

const Contact = () => {

    return (
        <div className='contact-page page-content'>
            <h2>Contact</h2>
            <div className='section-even'>
                <a className="secondary-link-style"
                    href="mailto: hello@lindsaykjohnston.com">hello@lindsaykjohnston.com</a>
                <a className="secondary-link-style"
                    href="https://www.linkedin.com/in/lindsay-k-johnston/"
                    target="_blank"
                    rel="noreferrer">LinkedIn</a>
            </div>
        </div>
    )
}

export default Contact;