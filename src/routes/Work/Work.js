import './Work.css';
import Tile from '../../Tile/Tile.js';

let testArray = Array(12).fill(0);

const workTiles = {
    //TO-DO: generate jpg and webp for each image
    creative: {
        title: "Creative",
        type: "img/jpg",
        src: '../media/work/sad-mode-album-cover-768x506.jpg'
    },
    web:{
        title: "Web Development",
        type: "img/png",
        src: "../media/work/micah-device-mockup.png"
    },
    // music:{
    //     title: "Music"
    // },
    // corporate:{
    //     title: "Corporate"
    // },
    // apparel:{
    //     title: "Apparel"
    // },
    
}

const Work = (props) => {
    return (
        <div className="work-page page-content">
            {Object.keys(workTiles).map(key => {
         
                return (
                    <Tile key={key} title = {workTiles[key].title}>
                    {/* picture is a much newer addition to the language. Its main goal is to let us load different sources depending on resolution or support for a given image format. */}
                        <picture>
                            {/* <source srcSet='../media/work/sad-mode-album-cover-768x506.webp' type="image/webp"/> */}
                            <source srcSet={workTiles[key].src} type={workTiles[key].type}/>
                            <img src= {workTiles[key].src}></img>
                        </picture>
                    </Tile>
                )
            }

            )}
        </div>
    )

}

export default Work;