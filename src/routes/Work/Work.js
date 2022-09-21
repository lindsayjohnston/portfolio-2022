import './Work.css';
import Tile from '../../Tile/Tile.js';

let testArray = Array(12).fill(0);

const workTiles = {
    //TO-DO: generate jpg and webp for each image
    music:{
        title: "Music",
        type : "video/mp4",
        src: "../media/work/bear-named-sue-clip.mp4"
    },
    web:{
        title: "Web Development",
        type: "img/png",
        src: "../media/work/micah-device-mockup.png"
    },
    creative: {
        title: "Creative",
        type: "img/jpg",
        src: '../media/work/sugar-mama-logo-768x506.jpg'
    },
    apparel:{
        title: "Apparel",
        type: "img/jpg",
        src: '../media/work/micah-merch-768-506.jpg'

    }
}

const Work = (props) => {
    return (
        <div className="work-page page-content">
            {Object.keys(workTiles).map(key => {
         
                return (
                    <Tile key={key} title = {workTiles[key].title}>
                    {/* picture is a much newer addition to the language. Its main goal is to let us load different sources depending on resolution or support for a given image format. */}
                        {workTiles[key].type.includes("img")
                            ?
                            <picture>
                            {/* <source srcSet='../media/work/sad-mode-album-cover-768x506.webp' type="image/webp"/> */}
                            <source srcSet={workTiles[key].src} type={workTiles[key].type}/>
                            <img src= {workTiles[key].src}></img>
                        </picture>
                            :
                            <video controls muted autoplay={"autoplay"} loop={true} >
                                <source src = {workTiles[key].src} type={workTiles[key].type}></source>
                            </video>
                        }

                    </Tile>
                )
            }

            )}
        </div>
    )

}

export default Work;