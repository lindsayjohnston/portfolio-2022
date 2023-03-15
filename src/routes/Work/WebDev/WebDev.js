import React from "react";
import './WebDev.css';

const WebDev = () => {
    //TODO:
    //spellcheck
    //make mockups for Chipotle, add section for chat server

    return (
        <div className="web-dev-page page-content">
            <div className="content-area">
                <h2>Web Development</h2>
                <section className="section-odd flex-column">
                    <p>When my music career came to an abrupt halt during the COVID pandemic, I used my extra time to teach myself computer programming. I am enamored with the mix of logic and artistry that web development offers. I love making pixel perfect websites that are sleek, responsive, and accessible.</p>
                </section>
                <section className="section-even flex-column">
                    <img alt="Chipotle Clone website mockup"
                        src="../media/work/chipotle-clone-device-mockup768x508.png"></img>
                    <a target="_blank" className = "secondary-link-style"
                        href="https://main.d25r1kk5mc9ae9.amplifyapp.com/">Chipotle Clone - Responsiveness Study</a>
                    <p>Mimicking the style and functionality of the Chipotle website, I used React to create dynamically-populated content cards to showcase each item on the menu. Users can choose ingredients for each item, add or remove items from their cart, and place an order online.</p>
                </section>
                <section className="section-odd flex-column">
                    <img alt="Github user map website mockup"
                        src="../media/work/github-user-map-device-mockup768x508.png"></img>
                    <a target="_blank" className = "secondary-link-style"
                        href="https://api-map-upgraded-heroku-22.herokuapp.com/">GitHub User Map - API Study</a>
                    <p>This app synthesizes data from four different APIs - Geonames, Google Maps, Google Places, and Google Geocoding - to 
                        create an interactive map that shows the number of GitHub users near a given location.
                    </p>
                </section>
                <section className="section-even flex-column">
                    <img alt="Micah Clay website mockup"
                        src="../media/work/micah-device-mockup.png"></img>
                    <a target="_blank" className = "secondary-link-style"
                        href="https://www.micahclay.us/">
                        Micah Clay - Musician Showcase</a>
                    <p>Creating attractive and affordable websites for musicians is an endeavor that's close to my heart. Why spend $200/year for a cookie-cutter Wix website when a React developer can make you one for a fraction of the cost?</p>
                </section>

            </div>
        </div>
    )
};

export default WebDev;