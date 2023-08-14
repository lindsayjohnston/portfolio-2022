import React from "react";
import './BikePage.css';

export default function BikePage() {

    return (
        <div className="bike-page page-content">
            <h2>I'm Biking From CO to WA</h2>
            <div className='section-even'>
                <img className="bike-lindsay-img" alt="lindsay on a bike" src="../media/bike/lindsay_bikepacking.jpg" />
            </div>

            <div className='section-odd'>
                <p>I quit my job to go on an epic adventure this summer. If all goes to plan, I will be riding my bike from
                    Fort Collins, CO to Spokane, WA during the month of July - carrying all of my food, clothes and gear with me
                    and camping along the way. If I still like biking after that I might keep going :) </p>
            </div>
            <div className='links section-even'>
                <h3>I'm unemployed! Yay! If you'd like to support me financially...</h3>
                <div className="div-row">
                    <a className='secondary-link-style'
                        href="https://venmo.com/u/ljohnston10"
                        target="_blank"
                        rel="noreferrer">Venmo</a>
                    <a className='secondary-link-style'
                        href="https://paypal.me/vannaoh?country.x=US&locale.x=en_US"
                        target="_blank"
                        rel="noreferrer">PayPal</a>
                </div>

                <a className='secondary-link-style'
                    href="https://venmo.com/u/ljohnston10"
                    target="_blank"
                    rel="noreferrer">$5 - Keep me caffeinated</a>
                <a className='secondary-link-style'
                    href="https://venmo.com/u/ljohnston10"
                    target="_blank"
                    rel="noreferrer">$10 - Two bags of chips at an over-priced gas station</a>
                <a className='secondary-link-style'
                    href="https://venmo.com/u/ljohnston10"
                    target="_blank"
                    rel="noreferrer">$25 - Campsite with a shower - you know she gon' stink</a>
                <a className='secondary-link-style'
                    href="https://venmo.com/u/ljohnston10"
                    target="_blank"
                    rel="noreferrer">$50 - 3 day grocery resupply</a>
                <a className='secondary-link-style'
                    href="https://venmo.com/u/ljohnston10"
                    target="_blank"
                    rel="noreferrer">$75 - Keep me rolling with a new tire</a>
                <a className='secondary-link-style'
                    href="https://venmo.com/u/ljohnston10"
                    target="_blank"
                    rel="noreferrer">$100 - Bike tune up</a>
                <a className='secondary-link-style'
                    href="https://venmo.com/u/ljohnston10"
                    target="_blank"
                    rel="noreferrer">$150 - Night in a hotel that probably doesn't have bed bugs</a>

            </div>

            <div className='links section-odd' id="playlists">
                <h3>Here's what I've been listening to while I ride:</h3>
                <div className="flex-column">
                    <a className='secondary-link-style'
                        href="https://open.spotify.com/playlist/3XuSh4VEb0SlQOtUQezZwq"
                        target="_blank"
                        rel="noreferrer">Moody Dude Playlist - Good for introspection, thoughts about ex lovers, and sunsets</a>
                    <a className='secondary-link-style'
                        href="https://open.spotify.com/playlist/5Q1B0qwgLja4KHjh76Rusn"
                        target="_blank"
                        rel="noreferrer">Good Fun Playlist - I usually start my day off on the right pedal stroke with these happy tunes</a>
                    <a className='secondary-link-style'
                        href="https://open.spotify.com/playlist/4VYOU2B0GG5YsQ81mgKbjV"
                        target="_blank"
                        rel="noreferrer">Energy Playlist - The best kick in the butt to get me up a big climb</a>
                </div>
            </div>
            <div className="section-even ig-video" id="july-10">
                <h3>July 10, 2023 - Fort Collins, CO to Rawlins, WY - 296 Miles</h3>
                <video controls autoplay>
                    <source src="https://portfolio-2023.s3.us-east-2.amazonaws.com/bikeTrip/july10.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="section-odd ig-video" id="july-21">
                <h3>July 21, 2023 - Rawlins, WY to Anaconda, MT - 675 Miles</h3>
                <video controls autoplay>
                    <source src="https://portfolio-2023.s3.us-east-2.amazonaws.com/bikeTrip/july-21-2023.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="section-even ig-video" id="july-27">
                <h3>July 27, 2023 - Anaconda, MT to Spokane, WA - 394 Miles</h3>
                <video controls autoplay>
                    <source src="https://portfolio-2023.s3.us-east-2.amazonaws.com/bikeTrip/july-27-2023.mp4" type="video/mp4" />
                </video>
            </div>

        </div>

    )
} 