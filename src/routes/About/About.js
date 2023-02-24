import { Link } from 'react-router-dom';
import './About.css';

const About = () => {

    return (
        <div className="about-page page-content">
            <h2>About Me</h2>
            <div className='section-even'>
                <img src="../media/about/lindsay-glasses.png" />
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
            <a href="https://lkj-website-media-jan2022.s3.us-east-2.amazonaws.com/Lindsay_Johnston_WD_Resume_Aug2022.pdf" target="_blank">Resume</a>
            <Link to="/">My Work</Link>
        </div>
    )
}

export default About