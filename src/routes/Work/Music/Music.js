import React from "react";
import './Music.css';

const Music = () => {

    return (
        <div className="music-page page-content">
            <div className="content-area">
                <section className="section-odd flex-column">
                    <h2>Music</h2>
                    <h3>Samples</h3>
                    <p>This will be explanation</p>
                    <iframe src="https://www.youtube.com/embed/ltsViffSqVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <a  target="_blank"
                        href="https://vannaoh.bandcamp.com/album/samples-2">
                        <img src="../media/work/samples-album-art.jpg"></img>
                    </a>
                    <a href="https://open.spotify.com/album/2R7DUK2sMjv9686ranhsmM">Listen on Spotify</a>
                </section>

            </div>
        </div>
    )
};

export default Music;