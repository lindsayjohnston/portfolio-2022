import React from "react";
import './Music.css';

const Music = () => {
    //TODO: 
    //  spell check all of this
    //  In the media link to /work/music/media  
    // - commercial
    // - articles
    // - Eva's show`
    // - podcasts?
    return (
        <div className="music-page page-content">
            <div className="content-area">
                <h2>Music</h2>
                <section className="section-odd flex-column">
                    <p>From 2018-2020, I adopted the rock-and-roll persona Vanna Oh! I played music full-time, single-handedly booked two West Coast tours, produced and recorded two EPs, and developed an exciting brand around my alter-ego.</p>
                </section>
                <section className="section-even flex-column">
                    <iframe src="https://www.youtube.com/embed/ltsViffSqVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <h3>Samples</h3>
                    <p>Samples, Vanna Oh!'s debut EP, is rife with dynamism reminiscent of a White Stripes album. The 5-song tracklist spans from riff-heavy blues-rock bangers like "Bear Named Sue" to more laid-back numbers like the lilting "In A Van."</p>
                    <a target="_blank" rel="noreferrer"
                        href="https://vannaoh.bandcamp.com/album/samples-2">
                        <img alt="Samples album art"
                            src="../media/work/samples-album-art.jpg"></img>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://open.spotify.com/album/2R7DUK2sMjv9686ranhsmM" className="secondary-link-style">Listen on Spotify</a>
                </section>
                <section className="section-odd flex-column">
                    <iframe src="https://www.youtube.com/embed/Hphz0jDpxGU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <h3>Chaperone</h3>
                    <p>The Grease-esque single Chaperone was Vanna Oh!'s first release on the Corporat Records label. It's everything you want from a rock-and-roll tune: the drums pop, the vocals soar and the guitar riffs make you want to do the twist.</p>
                    <a target="_blank" rel="noreferrer"
                        href="https://vannaoh.bandcamp.com/track/chaperone">
                        <img alt="Chaperone single art" src="../media/work/chaperone-album-art.jpg"></img>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://open.spotify.com/album/5osR7zeT0g7Nqc8SK0R8i2?si=OCQmAb34RAWviB0Qo4O3XA" className="secondary-link-style">Listen on Spotify</a>
                </section>
                <section className="section-even flex-column">
                    <iframe src="https://www.youtube.com/embed/t65M9xsrAdc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <h3>Sad Mode</h3>
                    <p>Sad Mode takes a sharp turn away from Vanna Oh!'s previous work. COVID wreaked havoc on the indie music industry and the disappoinment is palpable in this DIY collection. <a href="https://www.inlander.com/spokane/buzz-bin/Content?oid=23208928">The Inlander</a> puts it succintly: "The four-song collection finds her voice settling into a smokier place...Her feelings of loneliness and empathetic heartbreak shine through on tunes like 'Missing You' and 'Better For Worse'."</p>
                    <a target="_blank" rel="noreferrer"
                        href="https://vannaoh.bandcamp.com/album/sad-mode">
                        <img alt="Sad Mode album art" src="../media/work/sad-mode-album-art.jpg"></img>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://open.spotify.com/album/4TpBORzcX6IAgEnn1yJzUJ" className="secondary-link-style">Listen on Spotify</a>
                </section>
            </div>
        </div>
    )
};

export default Music;