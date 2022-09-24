import React from "react";
import './Music.css';

const Music = () => {
    //TODO: spell check all of this
    return (
        <div className="music-page page-content">
            <div className="content-area">
            <section className="section-odd flex-column">
            <h2>Music</h2>
                    <p>From 2018-2020, I adopted the rock-and-roll persona Vanna Oh! I played music full-time, single-handedly booked two West Coast tours, produced and recorded two EPs, and developed an exciting brand around my alter-ego.</p>
            </section>
                <section className="section-even flex-column">
                    <iframe src="https://www.youtube.com/embed/ltsViffSqVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h3>Samples</h3>
                    <p>Samples, Vanna Oh!'s debut EP, is rife with dynamism reminiscent of a White Stripes album. The 5-song tracklist spans from riff-heavy blues-rock bangers like "Bear Named Sue" to more laid-back numbers like the lilting "In A Van."</p>
                    <a  target="_blank"
                        href="https://vannaoh.bandcamp.com/album/samples-2">
                        <img src="../media/work/samples-album-art.jpg"></img>
                    </a>
                    <a href="https://open.spotify.com/album/2R7DUK2sMjv9686ranhsmM">Listen on Spotify</a>
                </section>
                <section className="section-odd flex-column">
                    <iframe src="https://www.youtube.com/embed/Hphz0jDpxGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h3>Chaperone</h3>
                    <p>The Grease-esque single Chaperone was Vanna Oh!'s first release on the Corporat Records label. It's everything you want from a rock-and-roll tune: the drums pop, the vocals soar and the guitar riffs make you want to do the twist.</p>
                    <a  target="_blank"
                        href="https://vannaoh.bandcamp.com/album/samples-2">
                        <img src="../media/work/chaperone-album-art.jpg"></img>
                    </a>
                    <a href="https://open.spotify.com/album/5osR7zeT0g7Nqc8SK0R8i2?si=OCQmAb34RAWviB0Qo4O3XA">Listen on Spotify</a>
                </section>
                <section>
                    In the media link to /work/music/media  
                        - commercial
                        - articles
                        - Eva's show
                        - podcasts?
                </section>
            </div>
        </div>
    )
};

export default Music;