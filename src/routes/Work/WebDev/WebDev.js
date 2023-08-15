import React from "react";
import './WebDev.css';

const WebDev = () => {
    //TODO:
    //spellcheck
    //make mockups for Chipotle, add section for chat server
    const handleGatedContentButtonClick = (e) => {
        e.preventDefault()
        alert("This app requires credentials to access. Please contact lindsaykjohnston@outlook.com for a demo!")
    }

    return (
        <div className="web-dev-page page-content">
            <div className="content-area">
                <h2>Web Development</h2>
                <section className="section-odd flex-column">
                    <p>When my music career came to an abrupt halt during the COVID pandemic, I used my extra time to teach myself computer programming. I am enamored with the mix of logic and artistry that web development offers. I love making pixel perfect websites that are sleek, responsive, and accessible.</p>
                </section>
                <section className="section-odd flex-column">
                    <img alt="web scraper mockup"
                        src="../media/work/blog-editor-mockup768x508.png"></img>
                    <button onClick={handleGatedContentButtonClick}
                        className="secondary-link-style link-eque-button">Stock Data Web Scraper</button>
                    <a target="_blank" rel="noreferrer" className="secondary-link-style"
                        href="#">GitHub Repo</a>
                    <p>
                        Unable to find the exact stock screens I wanted to
                        build an investment portfolio, I developed a JavaScript web-scraping app to do the job for me. I feed the app a list of stock tickers and it outputs the data I need into a CSV file.
                    </p>
                </section>
                <section className="section-even flex-column">
                    <img alt="Blog editor mockup"
                        src="../media/work/blog-editor-mockup768x508.png"></img>
                    <button onClick={handleGatedContentButtonClick}
                        className="secondary-link-style link-eque-button">MERN Stack Blog Editor</button>
                    <a target="_blank" rel="noreferrer" className="secondary-link-style"
                        href="#">GitHub Repo</a>
                    <p>
                        This full-stack blog-editing app allows me to write, preview, and submit blog posts for this website.
                        It features my own hand-rolled markdown language as well as a REST API built with Express.js and MongoDB.
                    </p>
                </section>

                <section className="section-odd flex-column">
                    <img alt="Restaurant ordering mockup"
                        src="../media/work/chipotle-clone-device-mockup768x508.png"></img>
                    <a target="_blank" rel="noreferrer" className="secondary-link-style"
                        href="https://main.d25r1kk5mc9ae9.amplifyapp.com/">Online Ordering App - Responsiveness Study</a>
                    <p>React components produce dynamic content cards to showcase each item on this restaurant's menu.
                        Users can choose ingredients, add or remove items from their cart, and place an order online.</p>
                </section>
                <section className="section-even flex-column">
                    <img alt="Github user map website mockup"
                        src="../media/work/github-user-map-device-mockup768x508.png"></img>
                    <a target="_blank" rel="noreferrer" className="secondary-link-style"
                        href="https://api-map-upgraded-heroku-22.herokuapp.com/">GitHub User Map - API Study</a>
                    <p>This app synthesizes data from four different APIs - Geonames, Google Maps, Google Places, and Google Geocoding - to
                        create an interactive map that shows the number of GitHub users near a given location.
                    </p>
                </section>
                <section className="section-odd flex-column">
                    <img alt="Micah Clay website mockup"
                        src="../media/work/micah-device-mockup.png"></img>
                    <a target="_blank" rel="noreferrer" className="secondary-link-style"
                        href="https://www.micahclay.us/">
                        Micah Clay - Musician Showcase</a>
                    <p>Creating attractive and affordable websites for musicians is an endeavor that's close to my heart. Why spend $200/year for a cookie-cutter Wix website when a React developer can make you one for a fraction of the cost?</p>
                </section>

            </div>
        </div>
    )
};

export default WebDev;