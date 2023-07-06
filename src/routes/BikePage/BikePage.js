import React from "react";
import './BikePage.css';

export default function BikePage (){

    return(
        <div className="bike-page page-content">
        <h2>I'm Biking From CO to WA</h2>
        <div className='section-even'>
            <img className= "bike-lindsay-img" alt="lindsay on a bike" src="../media/bike/lindsay_bikepacking.jpg" />
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

    </div>
    )
} 