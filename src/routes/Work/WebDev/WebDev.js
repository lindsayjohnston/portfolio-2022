import React from "react";
import './WebDev.css';

const WebDev = () => {
    //TODO:
    //spellcheck
    //make mockups for Chipotle, GitHub user map, and Sean McKee

    return (
        <div className="web-dev-page page-content">
            <div className="content-area">
                <section className="section-odd flex-column">
                    <h2>Web Development</h2>
                    <p>When my music career came to an abrupt halt during the COVID pandemic, I used my extra time to teach myself computer programming. I am enamored with the mix of logic and artistry that web development offers. I love making pixel perfect websites that are sleek, responsive, and accessible.</p>
                </section>
                <section className="section-even flex-column">
                    <img alt="Micah Clay website mockup" 
                        src="../media/work/micah-device-mockup.png"></img>
                    <a target="_blank" 
                        href="https://www.micahclay.us/">
                        <h3>Micah Clay - Musician Showcase</h3></a>
                    <p>Creating attractive and affordable websites for musicians is an endeavor that's close to my heart. Why spend $200/year for a cookie-cutter Wix website when a React developer can make you one for a fraction of the cost?</p>
                </section>
                <section className="section-odd flex-column">
                    <img alt="Chipotle Clone website mockup" 
                        src="../media/work/micah-device-mockup.png"></img>
                    <a target="_blank" 
                        href="https://main.d25r1kk5mc9ae9.amplifyapp.com/"><h3>Chipotle Clone - Responsiveness Study</h3></a>
                    <p>Mimicking the style and functionality of the Chipotle website, I used React to create dynamically-populated content cards to showcase each item on the menu. Users can choose ingredients for each item, add or remove items from their cart, and place an order online.</p>
                </section>
                <section className="section-even flex-column">
                    <img alt="GitHub user map website mockup"
                        src="../media/work/micah-device-mockup.png"></img>
                    <a target="_blank" 
                        href="https://github-map-real.herokuapp.com/"><h3>GitHub User Map - API Study</h3></a>
                    <p>By querying four different APIs--from Google, GitHub and Geomaps--I used vanilla JavaScript to display an interactive map of cities with their corresponding numbers of GitHub users. This project features asynchronous functions, Node.js and Heroku’s config variables feature to protect my API keys.</p>
                </section>
            </div>
        </div>
    )
};

export default WebDev;