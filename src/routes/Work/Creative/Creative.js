import React from "react";
import './Creative.css';

const Creative = () => {
    //TODO:
    //spellcheck
    //make correctly-sized images 

    return (
        <div className="creative-page page-content">
            <div className="content-area">
                <section className="section-odd flex-column">
                    <h2>Creative</h2>
                    <p>I've had the privelege of serving as creative director and graphic designer in a number of different ways: behind the scenes of music videos and photo shoots, as a corporate social media content creator, and as a brand developer in the DIY music scene.</p>
                </section>
                <section className="section-even flex-column">
                    <img alt="Sugar Mama Logo" 
                        src="../media/work/sugar-mama-logo-768x506.jpg"></img>
                        <h3>Sugar Mama - Band Logo</h3>
                </section>
                <section className="section-odd flex-column">
                    <img alt="Vanna Oh! sweatshirt" 
                        src="../media/work/micah-merch-768-506.jpg"></img>
                        <h3>Up-cycled Band Apparel</h3>
                </section>

                <section className="section-even flex-column">
                    <img alt="Phony Famous Art" 
                        src="../media/work/phony-famous-768x506.jpg"></img>
                        <h3>Pop Punk Single Art</h3>
                </section>
                <section className="section-odd flex-column">
                    <img alt="Donna Donna poster" 
                        src="../media/work/south-texas-covid.png"></img>
                        <h3>Corporate Social Media Content</h3>
                </section>  
                <section className="section-even flex-column">
                    <img alt="Donna Donna poster" 
                        src="../media/work/donna-donna-poster.png"></img>
                        <h3>Rock and Roll Event Poster</h3>
                </section>  
            </div>
        </div>
    )
};

export default Creative;