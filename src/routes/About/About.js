import { Link } from 'react-router-dom';
import './About.css';

const About = () => {

    return (
        <div className="about-page page-content">
            <h2>About Me</h2>
            <div className='section-even'>
                <img alt="lindsay with glasses" src="../media/about/lindsay-glasses345x426px.png" />
            </div>

            <div className='section-odd'>
                <p>My work experiences have varied greatly: from the non-profit sector to the service industry,
                    from education to creative director for a rock-and-roll band.
                    The common threads that weave through all of my professional experiences are creativity and innovation.
                    Whether I am creating a teaching strategy, an app or a t-shirt design,
                    I am always looking to improve upon prior work and present the project in an engaging and professional way.
                    I strive to communicate directly and honestly, work efficiently,
                    and push for female representation in historically male-dominated fields. </p>
            </div>
            <div className='links section-even'>
                <a className='secondary-link-style'
                    href="https://portfolio-2023.s3.us-east-2.amazonaws.com/Lindsay_Johnston_WD_Resume_Nov2023.pdf"
                    target="_blank"
                    rel="noreferrer">Resume</a>
                <Link className='secondary-link-style' to="/">My Work</Link>
                <a className='secondary-link-style'
                    href='https://github.com/lindsayjohnston'
                    target="_blank"
                    rel='noreferrer'>GitHub</a>
            </div>

        </div>
    )
}

export default About